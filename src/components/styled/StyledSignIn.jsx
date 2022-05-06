// /*
// import styled from "styled-components";
//
// const Root = styled.div`
//   display: flex;
// `;
// const Left = styled.div`
//   position: absolute;
//   width: 651px;
//   height: 1195px;
//   left: 0px;
//   top: 0px;
//   background: #FFFFFF;
//   border-right: 1px solid #56D69A;
//   //border-bottom: 1px solid red;
//   //border-left: 1px solid red;
//   overflow: hidden;
// `;
// const Right = styled.div`
//   position: absolute;
//   width: 1079px;
//   height: 1195px;
//   left: 652px;
//   top: 0px;
//   background: #FFFFFF;
//  //border: 1px solid red;
//
//   & h1 {
//     position: absolute;
//     width: 600px;
//     height: 64px;
//     left: 260px;
//     top: 210px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 64px;
//     line-height: 64px;
//     color: #0DC46E;
//   }
//
//   & p {
//     position: absolute;
//     width: 55px;
//     height: 18px;
//     left: 518px;
//     top: 448px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 18px;
//     color: #747D8F;
//   }
//
//   & form {
//     input:nth-of-type(1) {
//       position: absolute;
//       width: 354px;
//       height: 48px;
//       left: 362px;
//       top: 522px;
//       border: 0.5px solid #D9DADB;
//       box-sizing: border-box;
//       border-radius: 10px;
//     }
//
//     input:nth-of-type(2) {
//       position: absolute;
//       width: 354px;
//       height: 48px;
//       left: 362px;
//       top: 602px;
//       background: #FFFFFF;
//       border: 0.5px solid #D9DADB;
//       box-sizing: border-box;
//       border-radius: 10px;
//     }
//
//     button {
//       position: absolute;
//       width: 228px;
//       height: 48px;
//       left: 425px;
//       top: 760px;
//       background: #0DC46E;
//       border-radius: 10px;
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 500;
//       font-size: 18px;
//       line-height: 18px;
//       align-items: center;
//       border: 1px solid #0DC46E;
//       color: #FFFFFF;
//       cursor: pointer;
//     }
//
//     & span:nth-of-type(1) {
//       color: #A3A3A3;
//       position: absolute;
//       top: 618px;
//       right: 375px;
//       cursor: pointer;
//     }
//   }
// `;
// const Shape1 = styled.div`
//   position: absolute;
//   width: 554.87px;
//   height: 554.87px;
//   left: 330px;
//   top: -280px;
//   background: rgba(13, 196, 110, 0.7);
//   border-radius: 160px;
//   transform: rotate(-45deg);
// `;
// const Shape2 = styled.div`
//   position: relative;
//   width: 554.87px;
//   height: 554.87px;
//   left: -290px;
//   top: 890px;
//   background: rgba(13, 196, 110, 0.7);
//   border-radius: 160px;
//   transform: rotate(-45deg);
// `;
// const Text = styled.div`
//   position: absolute;
//   width: 337px;
//   height: 282px;
//   left: 156px;
//   top: 457px;
//
//   & h1 {
//     position: absolute;
//     width: 420px;
//     height: 48px;
//     left: -50px;
//     top: -30px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 48px;
//     line-height: 48px;
//     letter-spacing: 0.05em;
//     color: #0DC46E;
//   }
//
//   & p {
//     position: absolute;
//     width: 314px;
//     height: 50px;
//     left: 0px;
//     top: 70px;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 140.4%;
//     text-align: center;
//     color: #777D88;
//   }
//
//   & button {
//     position: absolute;
//     width: 228px;
//     height: 48px;
//     left: 40px;
//     top: 220px;
//     border: 1px solid #0DC46E;
//     box-sizing: border-box;
//     border-radius: 10px;
//     background-color: #fff;
//     font-family: 'Poppins';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 18px;
//     align-items: center;
//
//     color: #0DC46E;
//     cursor: pointer;
//   }
// `;
// const Social = styled.div`
//   display: flex;
//
//   & div {
//     display: flex;
//     align-items: center;
//   }
//
//   & div:first-child {
//     position: absolute;
//     width: 252px;
//     height: 48px;
//     left: 272px;
//     top: 352px;
//     border: 0.5px solid #D9DADB;
//     box-sizing: border-box;
//     border-radius: 10px;
//     cursor: pointer;
//     color: #A3A3A3;
//     padding: 5px;
//     & img{
//       width: 24px;
//     }
//         & p{
//       position: absolute;
//       width: 159px;
//       height: 16px;
//       left: 40px;
//       top: 0px;
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 16px;
//       /!* identical to box height, or 100% *!/
//       color: #747D8F;
//     }
//   }
//
//   & div:last-child {
//     position: absolute;
//     width: 252px;
//     height: 48px;
//     right: 272px;
//     top: 352px;
//     border: 0.5px solid #D9DADB;
//     box-sizing: border-box;
//     border-radius: 10px;
//     cursor: pointer;
//     color: #A3A3A3;
//     padding: 5px;
//     & img{
//       width: 24px;
//     }
//     & p{
//       position: absolute;
//       width: 180px;
//       height: 16px;
//       left: 40px;
//       top: 0px;
//       font-family: 'Poppins';
//       font-style: normal;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 16px;
//       /!* identical to box height, or 100% *!/
//       color: #747D8F;
//     }
//   }
// `;
// const Forgot =styled.div`
//   position: absolute;
//   top: 680px;
//   right: 365px;
//
//   & a{
//     text-decoration: none;
//     color: #A3A3A3;
//   }
// `;
//
//
// export const Styled = {Root, Right, Left, Shape1, Text, Shape2, Social,Forgot};*/
