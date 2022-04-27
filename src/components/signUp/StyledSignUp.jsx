import styled from "styled-components";
import PhoneInput from "./SignUp"


const Root = styled.div`
  display: flex;

`;
const Left = styled.div`
  position: absolute;
  width: 651px;
  height: 1195px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
`;
const Right = styled.div`
  position: absolute;
  width: 1079px;
  height: 1195px;
  left: 652px;
  top: 0px;
  background: #FFFFFF;

  & h1 {
    position: absolute;
    width: 511px;
    height: 64px;
    left: 936px;
    top: 256px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 64px;
    color: #0DC46E;
  }

  & p {
    position: absolute;
    width: 55px;
    height: 18px;
    left: 1164px;
    top: 448px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #747D8F;
  }

  & form {
    input:nth-of-type(1) {
      position: absolute;
      width: 354px;
      height: 48px;
      left: 826px;
      top: 522px;
      border: 0.5px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 10px;
    }

    input:nth-of-type(2) {
      position: absolute;
      width: 354px;
      height: 48px;
      left: 826px;
      top: 602px;

      background: #FFFFFF;
      border: 0.5px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 10px;
    }

    input:nth-of-type(3) {
      position: absolute;
      width: 354px;
      height: 48px;
      left: 826px;
      top: 682px;
      border: 0.5px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 10px;
    }

    //PhoneInput {
    //  position: absolute;
    //  width: 354px;
    //  height: 48px;
    //  left: 826px;
    //  top: 762px;
    //  border: 0.5px solid #D9DADB;
    //  box-sizing: border-box;
    //  border-radius: 10px;
    //}

    input:nth-of-type(4) {
      position: absolute;
      width: 354px;
      height: 48px;
      left: 1204px;
      top: 602px;
      border: 0.5px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 10px;
    }

    input:nth-of-type(5) {
      position: absolute;
      width: 354px;
      height: 48px;
      left: 1204px;
      top: 682px;
      border: 0.5px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 10px;
    }

    & div {
      div:nth-child(1) {
        input:nth-child(1) {
          position: absolute;
          width: 17px;
          height: 17px;
          left: 1204px;
          top: 538px;
          border: 0.5px solid #0DC46E;
          box-sizing: border-box;
          border-radius: 4px;
        }

        label {
          position: absolute;
          width: 40px;
          height: 18px;
          left: 1229px;
          top: 537px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 18px;
          display: flex;
          align-items: center;

          color: #707280;
        }
      }

      div:nth-child(2) {
        input:nth-child(1) {
          position: absolute;
          width: 17px;
          height: 17px;
          left: 1301px;
          top: 538px;
          border: 0.5px solid #0DC46E;
          box-sizing: border-box;
          border-radius: 4px;
        }

        label {
          position: absolute;
          width: 144px;
          height: 18px;
          left: 1326px;
          top: 537px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 18px;
          display: flex;
          align-items: center;

          color: #707280;
        }
      }

    }

    button {
      position: absolute;
      width: 228px;
      height: 48px;
      left: 1078px;
      top: 890px;
      background: #0DC46E;
      border-radius: 10px;
    }

    & span:nth-of-type(2) {
      color: #A3A3A3;
      position: absolute;
      top: 615px;
      right: -470px;
      cursor: pointer;
    }

    span:nth-of-type(3) {
      color: #A3A3A3;
      position: absolute;
      top: 700px;
      right: -470px;
      cursor: pointer;
    }
    & PhoneInput{
      
    }
  }
`;
const Sheip1 = styled.div`
  position: absolute;
  width: 554.87px;
  height: 554.87px;
  left: 232px;
  top: -21.65px;

  background: rgba(13, 196, 110, 0.7);
  border-radius: 160px;
  transform: rotate(-45deg);
`;
const Sheip2 = styled.div`
  position: absolute;
  width: 554.87px;
  height: 554.87px;
  left: -368.55px;
  top: 1216.65px;

  background: rgba(13, 196, 110, 0.7);
  border-radius: 160px;
  transform: rotate(-45deg);
`;
const Text = styled.div`
  position: absolute;
  width: 337px;
  height: 282px;
  left: 156px;
  top: 457px;

  & h1 {
    position: absolute;
    width: 337px;
    height: 48px;
    left: 156px;
    top: 457px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.05em;
    color: #0DC46E;
  }

  & p {
    position: absolute;
    width: 314px;
    height: 50px;
    left: 169px;
    top: 537px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140.4%;
    text-align: center;
    color: #777D88;
  }

  & button {
    position: absolute;
    width: 228px;
    height: 48px;
    left: 211px;
    top: 691px;
    border: 1px solid #0DC46E;
    box-sizing: border-box;
    border-radius: 10px;
  }
`;
const Social = styled.div`
  display: flex;

  & div {
    display: flex;
    align-items: center;
  }

  & div:first-child {
    position: absolute;
    width: 252px;
    height: 48px;
    left: 924px;
    top: 352px;
    border: 0.5px solid #D9DADB;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    color: #A3A3A3;
    padding: 5px;

  }

  & div:last-child {
    position: absolute;
    width: 252px;
    height: 48px;
    left: 1208px;
    top: 352px;
    border: 0.5px solid #D9DADB;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    color: #A3A3A3;
    padding: 5px;
  }
`;


export const Styled = {Root, Right, Left, Sheip1, Text, Sheip2, Social};