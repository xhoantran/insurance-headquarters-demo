import {
  S3HouseholdURL,
  S3DependentsURL,
  S3HosueholdMemberURL,
  S3TotalMemberURL,
} from "./Url";

const pathName = {
  totalMember: "totalMember",
  dependent: "dependent",
  spouse: "spouse",
  you: "you",
};

export const GetPathBackward = (cur_nth, informations) => {
  if (cur_nth === pathName.totalMember) {
    if (informations?.dependents?.is_set === "1") {
      return (
        S3HosueholdMemberURL +
        pathName.dependent +
        informations?.dependents?.value
      );
    }
    return GetPathBackward("dependent1", informations);
  }

  if (cur_nth.includes(pathName.dependent)) {
    var cur_dependent = parseInt(cur_nth.replace(pathName.dependent, ""));
    if (informations?.dependents?.is_set === "1" && cur_dependent > 1) {
      return S3HosueholdMemberURL + pathName.dependent + (cur_dependent - 1);
    }
    return informations?.married === "1"
      ? S3HosueholdMemberURL + pathName.spouse
      : S3HosueholdMemberURL + pathName.you;
  }

  if (cur_nth === pathName.spouse) {
    return S3HosueholdMemberURL + pathName.you;
  }

  if (cur_nth === pathName.you) {
    return informations?.householdSize !== "1"
      ? S3HouseholdURL
      : S3DependentsURL;
  }
};

export const GetPathForward = (cur_nth, informations) => {
  if (cur_nth === pathName.you) {
    return informations?.householdSize === "1"
      ? informations?.married === "1"
        ? S3HosueholdMemberURL + pathName.spouse
        : GetPathForward(pathName.spouse, informations)
      : S3TotalMemberURL;
  }

  if (cur_nth === pathName.spouse) {
    return informations?.dependents?.is_set === "1"
      ? S3HosueholdMemberURL + "dependent1"
      : GetPathForward("dependent1", informations);
  }

  if (cur_nth.includes(pathName.dependent)) {
    var cur_dependent = parseInt(cur_nth.replace(pathName.dependent, ""));
    if (
      informations?.dependents?.is_set === "1" &&
      cur_dependent + 1 <= informations?.dependents?.value
    ) {
      return S3HosueholdMemberURL + pathName.dependent + (cur_dependent + 1);
    }
    return S3TotalMemberURL;
  }
};
