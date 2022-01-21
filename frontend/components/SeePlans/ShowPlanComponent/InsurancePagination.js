import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

function ArrowLeft() {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.715263C6.00039 0.882092 5.93071 1.04377 5.80307 1.17223L1.96717 4.9993L5.66607 8.83351C5.73719 8.90654 5.79031 8.99058 5.82236 9.08079C5.85441 9.17099 5.86476 9.26559 5.85283 9.35915C5.84089 9.4527 5.8069 9.54337 5.75281 9.62593C5.69872 9.7085 5.62559 9.78134 5.53764 9.84026C5.45005 9.89957 5.34928 9.94386 5.2411 9.97058C5.13293 9.99731 5.01949 10.0059 4.9073 9.99599C4.79511 9.98604 4.68638 9.9577 4.58737 9.91259C4.48836 9.86748 4.40101 9.8065 4.33036 9.73316L0.194781 5.44912C0.0688459 5.32136 -5.77032e-08 5.16111 -5.96753e-08 4.99573C-6.16475e-08 4.83035 0.0688459 4.67009 0.194781 4.54233L4.47591 0.2583C4.54779 0.186001 4.63607 0.126237 4.73569 0.0824308C4.83531 0.0386251 4.94431 0.0116377 5.05646 0.00301544C5.16861 -0.0056068 5.28169 0.00430572 5.38924 0.0321837C5.49678 0.0600617 5.59667 0.105358 5.68319 0.165478C5.78141 0.231919 5.86077 0.31568 5.91554 0.410741C5.97032 0.505801 5.99916 0.6098 6 0.715263Z"
        fill="black"
      />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.54123e-06 9.28474C-0.00038899 9.11791 0.069286 8.95623 0.196933 8.82777L4.03283 5.0007L0.333931 1.16649C0.262807 1.09346 0.209694 1.00942 0.177644 0.919214C0.145594 0.829007 0.135239 0.734407 0.147174 0.640852C0.159109 0.547297 0.193098 0.456631 0.24719 0.374066C0.301281 0.291501 0.374407 0.218664 0.462364 0.159742C0.549945 0.100432 0.65072 0.0561418 0.758895 0.0294153C0.86707 0.00268885 0.980513 -0.00594622 1.0927 0.00400645C1.20489 0.0139591 1.31362 0.0423032 1.41263 0.0874097C1.51164 0.132516 1.59899 0.193496 1.66964 0.266843L5.80522 4.55088C5.93115 4.67864 6 4.83889 6 5.00427C6 5.16965 5.93115 5.32991 5.80522 5.45767L1.52409 9.7417C1.45221 9.814 1.36393 9.87376 1.26431 9.91757C1.16469 9.96138 1.05569 9.98836 0.943539 9.99698C0.831393 10.0056 0.71831 9.99569 0.610764 9.96782C0.503219 9.93994 0.403326 9.89464 0.316805 9.83452C0.218585 9.76808 0.139235 9.68432 0.084458 9.58926C0.0296808 9.4942 0.000837915 9.3902 1.54123e-06 9.28474Z"
        fill="black"
      />
    </svg>
  );
}
const PreviousPageLink = styled.a`
  left: 0;
  position: absolute;
  top: 40px;
  width: auto;
  border: 0;
  background: none !important;
  height: 2.125rem;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  color: #000;
`;
const ArrowLeftWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
`;
const PreviousButton = ({ href }) => {
  return (
    <Link href={href}>
      <PreviousPageLink>
        <ArrowLeftWrapper>
          <ArrowLeft />
        </ArrowLeftWrapper>
        Previous
      </PreviousPageLink>
    </Link>
  );
};
const ArrowRightWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
`;
const NextPageLink = styled.a`
  right: 0;
  position: absolute;
  top: 40px;
  width: auto;
  border: 0;
  background: none !important;
  height: 2.125rem;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  color: #000;
`;
const NextButton = ({ href }) => {
  return (
    <Link href={href}>
      <NextPageLink>
        Next
        <ArrowRightWrapper>
          <ArrowRight />
        </ArrowRightWrapper>
      </NextPageLink>
    </Link>
  );
};
const PaginationWrapper = styled.nav`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  line-height: 1;
  padding: 40px 0 60px;
`;
const PageNumber = styled.a`
  display: inline-flex;
  align-items: center;
  color: #1976d2;
  border: 2px solid #1976d2;
  border-radius: 50%;
  width: 2.125rem;
  height: 2.125rem;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
`;
const CurrentPage = styled.span`
  display: inline-flex;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  width: 2.125rem;
  height: 2.125rem;
  text-align: center;
  justify-content: center;
  margin: 0 3px;
  background: linear-gradient(#1976d2, #2196f3);
`;

function pagination(current, total) {
  if (total === 1) return [1];
  const center = [current - 1, current, current + 1],
    filteredCenter = center.filter((p) => p > 1 && p < total),
    includeThreeLeft = current === 4,
    includeThreeRight = current === total - 3,
    includeLeftDots = current > 4,
    includeRightDots = current < total - 3;

  if (includeThreeLeft) filteredCenter.unshift(2);
  if (includeThreeRight) filteredCenter.push(total - 1);

  if (includeLeftDots) filteredCenter.unshift("...");
  if (includeRightDots) filteredCenter.push("...");

  return [1, ...filteredCenter, total];
}

const ShopPagination = ({ totalItems, currentPage, itemPerPage = 10 }) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pageArr = pagination(currentPage, totalPages);
  const router = useRouter();
  return (
    <>
      <PaginationWrapper>
        {/* {currentPage > 1 && (
          <PreviousButton
            href={{
              pathname: "/seePlans/showPlans",
              query: { ...router.query, page: currentPage - 1 },
            }}
            passHref
          />
        )} */}
        {pageArr.map((page, index) =>
          page === "..." ? (
            <span key={index}>...</span>
          ) : page === currentPage ? (
            <CurrentPage key={index}>{page}</CurrentPage>
          ) : (
            <Link
              href={{
                pathname: "/seePlans/showPlans",
                query: { ...router.query, page: page },
              }}
              key={index}
              passHref
            >
              <PageNumber key={index}>{page}</PageNumber>
            </Link>
          )
        )}
        {/* {currentPage < totalPages && (
          <NextButton
            href={{
              pathname: "/seePlans/showPlans",
              query: { ...router.query, page: currentPage + 1 },
            }}
            passHref
          />
        )} */}
      </PaginationWrapper>
    </>
  );
};

export default ShopPagination;
