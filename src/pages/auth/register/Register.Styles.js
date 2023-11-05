import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: pink; */
  display: flex;

  // MOBILE
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Overlay = styled.div`
  /* background-color: pink; */
  background-color: rgba(72, 72, 72, 0.56);
  height: 100%;
  width: 100%;
  /* overflow-y: hidden; */
`;

export const LogoIsh = styled.div`
  /* background-color: pink; */
  /* height: 100px; */
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  color: white;

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 40px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 30px;
  }
`;

export const Left = styled.div`
  /* background-color: orange; */
  width: 40%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    background-size: cover;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    display: none;
  }
`;

export const Right = styled.div`
  /* background-color: green; */
  width: 60%;
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Content = styled.div`
  width: 90%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 20px;
  margin: 2rem;
`;

export const Login = styled.div`
  width: 685px;
  /* background-color: orange; */
  display: flex;
  justify-content: end;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #474646;
  margin-top: 1rem;

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-right: 4rem;
    width: 400px;
  }

  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      color: red;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
