import styled from "styled-components";

const Root = styled.div`
  position: relative;
  width: 1728px;
  height: 2112px;
  background: #FFFFFF;
  margin: 0 auto;
`;

const Container = styled.body`
  max-width: 1488px;
  margin: 0 auto;
  height: 419px;


  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 30px;
      cursor: pointer;

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
      }
    }

    div:nth-child(2) {
      p {
        color: #5E7286;
      }
    }

    div:nth-child(3) {
      p {
        color: #0DC46E;
      }

      p:nth-child(2) {
        border: 1px solid #0DC46E;
        padding: 4.5px 6px;
        border-radius: 100%;
        background-color: #0DC46E;
        color: #fff;
      }
    }
  }

  main {
    div:nth-child(1) {
      position: absolute;
      width: 106px;
      height: 18px;
      left: 120px;
      top: 185px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #5E7286;
    }

    div:nth-child(2) {
      position: absolute;
      width: 260px;
      height: 48px;
      left: 734px;
      top: 227px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 48px;
      display: flex;
      align-items: center;
      color: #1F2833;
    }
  }

  section {
    div:nth-child(1) {
      position: absolute;
      width: 480px;
      height: 1693px;
      left: 120px;
      top: 355px;
      border: 1px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 30px;

      input:nth-child(1) {
        position: absolute;
        width: 416px;
        height: 56px;
        left: 32px;
        top: 64px;
        border: 0.5px solid #7A88A3;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 10px;
      }

      input:nth-child(2) {
        position: absolute;
        width: 416px;
        height: 56px;
        left: 32px;
        top: 144px;
        border: 0.5px solid #7A88A3;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 10px;
      }
    }

    div:nth-child(2) {
      position: absolute;
      width: 984px;
      height: 1693px;
      left: 624px;
      top: 355px;
      border: 1px solid #D9DADB;
      box-sizing: border-box;
      border-radius: 30px;
    }

    div:nth-child(3) {
      position: absolute;
      width: 476px;
      height: 0px;
      left: -0.5px;
      top: 248px;
      border: 1px solid #BEC4D1;
    }

    div:nth-child(4) {
      p:nth-child(1) {
        position: absolute;
        width: 110px;
        height: 24px;
        left: 32px;
        top: 266px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #0D0D0D;
      }

      p:nth-child(2) {
        position: absolute;
        width: 75px;
        height: 18px;
        left: 65px;
        top: 328px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        color: #0D0D0D;
      }

      p:nth-child(3) {
        position: absolute;
        width: 82px;
        height: 18px;
        left: 65px;
        top: 370px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: center;
        color: #0D0D0D;
      }

      p:nth-child(4) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 328px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(5) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 370px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(6) {
        position: absolute;
        width: 476px;
        height: 0px;
        left: -0.5px;
        top: 502px;
        border: 1px solid #BEC4D1;
      }
    }

    div:nth-child(5) {
      p:nth-child(1) {
        position: absolute;
        width: 180px;
        height: 24px;
        left: 32px;
        top: 520px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #0D0D0D;
      }

      p:nth-child(2) {
        position: absolute;
        width: 100px;
        height: 18px;
        left: 65px;
        top: 576px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(3) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 618px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(4) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 660px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(5) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 702px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(6) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 744px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(7) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 576px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(8) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 618px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(9) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 660px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(10) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 702px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(11) {
        position: absolute;
        width: 476px;
        height: 0px;
        left: -0.5px;
        top: 799px;
        border: 1px solid #BEC4D1;
      }
    }

    div:nth-child(6) {
      p:nth-child(1) {
        position: absolute;
        width: 180px;
        height: 24px;
        left: 32px;
        top: 817px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #0D0D0D;
      }

      p:nth-child(2) {
        position: absolute;
        width: 100px;
        height: 18px;
        left: 65px;
        top: 873px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(3) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 915px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(4) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 957px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(5) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 999px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(6) {
        position: absolute;
        width: 110px;
        height: 18px;
        left: 65px;
        top: 1043px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(7) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 873px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(8) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 915px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(9) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 957px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(10) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 999px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(11) {
        position: absolute;
        width: 476px;
        height: 0px;
        left: -0.5px;
        top: 1085px;
        border: 1px solid #BEC4D1;
      }
    }

    div:nth-child(7) {
      p:nth-child(1) {
        position: absolute;
        width: 110px;
        height: 24px;
        left: 32px;
        top: 1114px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #0D0D0D;
      }

      p:nth-child(2) {
        position: absolute;
        width: 75px;
        height: 18px;
        left: 65px;
        top: 1170px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(3) {
        position: absolute;
        width: 82px;
        height: 18px;
        left: 65px;
        top: 1212px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #0D0D0D;
      }

      p:nth-child(4) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 1170px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }

      p:nth-child(5) {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 32px;
        top: 1212px;
        background: rgba(13, 196, 110, 0.1);
        border: 0.5px solid #0DC46E;
        box-sizing: border-box;
        border-radius: 9px;
        cursor: pointer;

        :hover > p {
          position: absolute;
          width: 11px;
          height: 11px;
          left: 2px;
          top: -22px;
          border-radius: 9px;
          background-color: #0DC46E;
        }
      }
    }
  }
`;


export const Styled = {Root, Container};