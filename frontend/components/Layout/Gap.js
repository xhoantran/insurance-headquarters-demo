import styled from "styled-components";
import PropTypes from "prop-types";

const Gap = styled.div.attrs({
  "aria-hidden": true,
})`
  height: ${(props) => props.height};
`;

Gap.propTypes = {
  height: PropTypes.string,
};

export default Gap;
