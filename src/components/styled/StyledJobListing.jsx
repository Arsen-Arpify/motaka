// import styled from "styled-components";
//
// const Root = styled.div`
//   position: relative;
//   width: 1728px;
//   height: 2112px;
//   margin: 0 auto;
//
//   & body {
//     max-width: 1488px;
//     min-height: 2064px;
//     margin: 0 auto;
//
//     & nav {
//       position: absolute;
//       width: 1488px;
//       height: 49px;
//       left: 120px;
//       top: 64px;
//       display: flex;
//       justify-content: space-between;
//       vertical-align: center;
//       align-items: center;
//       cursor: pointer;
//
//       div:nth-child(1) {
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 500;
//         font-size: 32px;
//         line-height: 32px;
//         display: flex;
//         align-items: center;
//         color: #0DC46E;
//       }
//
//       div:nth-child(2) {
//         display: flex;
//         justify-content: space-between;
//         gap: 20px;
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 500;
//         font-size: 18px;
//         line-height: 18px;
//         color: #5E7286;
//       }
//
//       div:nth-child(3) {
//         display: flex;
//         justify-content: space-between;
//         gap: 15px;
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 500;
//         font-size: 18px;
//         line-height: 18px;
//         color: #0DC46E;
//         align-items: center;
//
//
//         & p:nth-child(2) {
//           width: 20px;
//           height: 20px;
//           border: 1px solid #0DC46E;
//           border-radius: 100%;
//           color: #fff;
//           background-color: #0DC46E;
//           padding: 5px;
//           text-align: center;
//         }
//       }
//     }
//
//     & main {
//       div:nth-child(1) {
//         position: absolute;
//         width: 106px;
//         height: 18px;
//         left: 120px;
//         top: 185px;
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 18px;
//         line-height: 18px;
//         display: flex;
//         align-items: center;
//         color: #5E7286;
//         cursor: pointer;
//       }
//
//       div:nth-child(2) {
//         position: absolute;
//         width: 260px;
//         height: 48px;
//         left: 734px;
//         top: 227px;
//         font-family: 'Poppins';
//         font-style: normal;
//         font-weight: 600;
//         font-size: 48px;
//         line-height: 48px;
//         display: flex;
//         align-items: center;
//         color: #1F2833;
//       }
//     }
//
//     & section {
//       & aside1 {
//         position: absolute;
//         width: 480px;
//         height: 1693px;
//         left: 120px;
//         top: 355px;
//         border: 1px solid #D9DADB;
//         box-sizing: border-box;
//         border-radius: 30px;
//
//         & input:nth-child(1) {
//           position: absolute;
//           width: 416px;
//           height: 56px;
//           left: 32px;
//           top: 64px;
//           border: 0.5px solid #7A88A3;
//           box-sizing: border-box;
//           border-radius: 20px;
//         }
//
//         & input:nth-child(2) {
//           position: absolute;
//           width: 416px;
//           height: 56px;
//           left: 32px;
//           top: 144px;
//           border: 0.5px solid #7A88A3;
//           box-sizing: border-box;
//           border-radius: 20px;
//         }
//
//         & div:nth-child(3) {
//           position: absolute;
//           width: 480px;
//           height: 0px;
//           left: -2px;
//           top: 248px;
//           border: 1px solid #BEC4D1;
//         }
//
//         & div:nth-child(4) { /* Job Type*/
//
//           & p:nth-child(1) {
//             position: absolute;
//             width: 110px;
//             height: 24px;
//             left: 32px;
//             top: 250px;
//             font-family: 'Poppins';
//             font-style: normal;
//             font-weight: 500;
//             font-size: 24px;
//             line-height: 24px;
//             display: flex;
//             align-items: center;
//             color: #0D0D0D;
//           }
//
//           & span:nth-child(2) { /*Full time*/
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 331px;
//               background: #0DC46E;
//               border-radius: 9px;
//
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 75px;
//               height: 18px;
//               left: 65px;
//               top: 328px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 328px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//             & p:nth-child(3){
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 331px;
//               background: transparent;
//               border-radius: 9px;
//             }
//           }
//
//           & span:nth-child(3) { /*Part time*/
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 82px;
//               height: 18px;
//               left: 65px;
//               top: 370px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 370px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//             & p:nth-child(3){
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: transparent;
//               border-radius: 9px;
//             }
//           }
//
//           & p:nth-child(4) {
//             position: absolute;
//             width: 480px;
//             height: 0px;
//             left: -2px;
//             top: 502px;
//             border: 1px solid #BEC4D1;
//           }
//
//
//         }
//
//         & div:nth-child(5) { /* Last Activity*/
//
//           & p:nth-child(1) {
//             position: absolute;
//             width: 145px;
//             height: 24px;
//             left: 32px;
//             top: 534px;
//             font-family: 'Poppins';
//             font-style: normal;
//             font-weight: 500;
//             font-size: 24px;
//             line-height: 24px;
//             display: flex;
//             align-items: center;
//             color: #0D0D0D;
//           }
//
//           & span:nth-child(2) {
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 596px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 82px;
//               height: 18px;
//               left: 65px;
//               top: 593px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 593px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//           }
//
//           & span:nth-child(3) {
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 638px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 635px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 635px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//           }
//
//           & span:nth-child(4) {
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 680px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 677px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 677px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//           }
//
//           & span:nth-child(5) {
//             cursor: pointer;
//
//             :hover p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 722px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 719px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 719px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//           }
//
//           & span:nth-child(6) {
//             cursor: pointer;
//             :hover p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 764px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 761px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 761px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//           & p:nth-child(7) {
//             position: absolute;
//             width: 480px;
//             height: 0px;
//             left: -2px;
//             top: 799px;
//             border: 1px solid #BEC4D1;
//           }
//         }
//
//         & div:nth-child(6) { /* Salary Range*/
//
//           & p:nth-child(1) {
//             position: absolute;
//             width: 160px;
//             height: 24px;
//             left: 32px;
//             top: 831px;
//             font-family: 'Poppins';
//             font-style: normal;
//             font-weight: 500;
//             font-size: 24px;
//             line-height: 24px;
//             display: flex;
//             align-items: center;
//             color: #0D0D0D;
//           }
//
//           & span:nth-child(2) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 82px;
//               height: 18px;
//               left: 65px;
//               top: 879px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 879px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 882px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//           }
//
//           & span:nth-child(3) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 921px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 921px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//           & span:nth-child(4) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 963px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 963px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//           & span:nth-child(5) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 1005px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 1005px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//           & span:nth-child(6) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 109px;
//               height: 18px;
//               left: 65px;
//               top: 1047px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 1047px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//           & p:nth-child(7) {
//             position: absolute;
//             width: 480px;
//             height: 0px;
//             left: -2px;
//             top: 1096px;
//             border: 1px solid #BEC4D1;
//           }
//         }
//
//         & div:nth-child(7) { /* Gender*/
//
//           & p:nth-child(1) {
//             position: absolute;
//             width: 110px;
//             height: 24px;
//             left: 32px;
//             top: 1128px;
//             font-family: 'Poppins';
//             font-style: normal;
//             font-weight: 500;
//             font-size: 24px;
//             line-height: 24px;
//             display: flex;
//             align-items: center;
//             color: #0D0D0D;
//           }
//
//           & span:nth-child(2) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 75px;
//               height: 18px;
//               left: 65px;
//               top: 1176px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 1176px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 1221px;
//               background: #0DC46E;
//               border-radius: 9px;
//             }
//           }
//
//           & span:nth-child(3) {
//             & p:nth-child(1) {
//               position: absolute;
//               width: 82px;
//               height: 18px;
//               left: 65px;
//               top: 1218px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 18px;
//               text-align: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 17px;
//               height: 17px;
//               left: 32px;
//               top: 1218px;
//               background: rgba(13, 196, 110, 0.1);
//               border: 0.5px solid #0DC46E;
//               box-sizing: border-box;
//               border-radius: 9px;
//             }
//
//             & p:nth-child(3) {
//               /*
//               part time-i miji klor
//
//               position: absolute;
//               width: 11px;
//               height: 11px;
//               left: 35px;
//               top: 373px;
//               background: #0DC46E;
//               border-radius: 9px;
//               */
//             }
//           }
//
//         }
//
//       }
//
//
//       & aside2 {
//         position: absolute;
//         width: 984px;
//         height: 1693px;
//         left: 624px;
//         top: 355px;
//         border: 1px solid #D9DADB;
//         box-sizing: border-box;
//         border-radius: 30px;
//
//         & div1 { /*right bar-i gorci nkaragrutyun 1 */
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           width: 826px;
//           height: 220px;
//           left: 32px;
//           top: 163px;
//           box-sizing: border-box;
//           border-radius: 30px;
//           cursor: pointer;
//           border: 2px solid #fff;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           transition: .6s;
//
//           :hover {
//             border: 2px solid #0DC46E;
//             box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
//           }
//
//           & img {
//             height: 80%;
//             padding: 10px;
//           }
//
//           & div:nth-child(2) {
//             display: flex;
//             flex-direction: column;
//             left: 40px;
//             top: -25px;
//             position: absolute;
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 85px;
//               height: 24px;
//               left: 156px;
//               top: 44px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 366px;
//               height: 44px;
//               left: 156px;
//               top: 84px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 22px;
//               display: flex;
//               align-items: center;
//               color: #7A88A3;
//             }
//
//             & span {
//               display: flex;
//               justify-content: left;
//               gap: 35px;
//
//               & p:nth-child(1) {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 110px;
//                 height: 18px;
//                 left: 156px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//
//               & p:nth-child(2) {
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 6px;
//                 width: 74px;
//                 height: 18px;
//                 left: 326px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//             }
//           }
//
//           & div:nth-child(3) {
//             & span {
//               position: absolute;
//               right: 27px;
//               top: 34px;
//               color: #505B70;
//               font-size: 24px;
//             }
//
//             & p { /*Apply Now*/
//               position: absolute;
//               width: 129px;
//               height: 24px;
//               left: 665px;
//               top: 75px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0DC46E;
//             }
//           }
//         }
//
//         & div2 { /*right bar-i gorci nkaragrutyun 1 */
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           width: 826px;
//           height: 220px;
//           left: 32px;
//           top: 415px;
//           border: 2px solid #0DC46E;
//           box-sizing: border-box;
//           border-radius: 30px;
//           border: 2px solid #fff;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           transition: .6s;
//
//
//           :hover {
//             border: 2px solid #0DC46E;
//             box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
//           }
//
//           & img {
//             height: 80%;
//             padding: 10px;
//           }
//
//           & div:nth-child(2) {
//             display: flex;
//             flex-direction: column;
//             left: 40px;
//             top: -25px;
//             position: absolute;
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 85px;
//               height: 24px;
//               left: 156px;
//               top: 44px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 366px;
//               height: 44px;
//               left: 156px;
//               top: 84px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 22px;
//               display: flex;
//               align-items: center;
//               color: #7A88A3;
//             }
//
//             & span {
//               display: flex;
//               justify-content: left;
//               gap: 35px;
//
//               & p:nth-child(1) {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 110px;
//                 height: 18px;
//                 left: 156px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//
//               & p:nth-child(2) {
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 6px;
//                 width: 74px;
//                 height: 18px;
//                 left: 326px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//             }
//           }
//
//           & div:nth-child(3) {
//             & span {
//               position: absolute;
//               right: 27px;
//               top: 34px;
//               color: #505B70;
//               font-size: 24px;
//             }
//
//             & p { /*Apply Now*/
//               position: absolute;
//               width: 129px;
//               height: 24px;
//               left: 665px;
//               top: 75px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0DC46E;
//             }
//           }
//         }
//
//         & div3 { /*right bar-i gorci nkaragrutyun 1 */
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           width: 826px;
//           height: 220px;
//           left: 32px;
//           top: 667px;
//           border: 2px solid #0DC46E;
//           box-sizing: border-box;
//           border-radius: 30px;
//           border: 2px solid #fff;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           transition: .6s;
//
//
//           :hover {
//             border: 2px solid #0DC46E;
//             box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
//           }
//
//           & img {
//             height: 80%;
//             padding: 10px;
//           }
//
//           & div:nth-child(2) {
//             display: flex;
//             flex-direction: column;
//             left: 40px;
//             top: -25px;
//             position: absolute;
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 85px;
//               height: 24px;
//               left: 156px;
//               top: 44px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 366px;
//               height: 44px;
//               left: 156px;
//               top: 84px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 22px;
//               display: flex;
//               align-items: center;
//               color: #7A88A3;
//             }
//
//             & span {
//               display: flex;
//               justify-content: left;
//               gap: 35px;
//
//               & p:nth-child(1) {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 110px;
//                 height: 18px;
//                 left: 156px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//
//               & p:nth-child(2) {
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 6px;
//                 width: 74px;
//                 height: 18px;
//                 left: 326px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//             }
//           }
//
//           & div:nth-child(3) {
//             & span {
//               position: absolute;
//               right: 27px;
//               top: 34px;
//               color: #505B70;
//               font-size: 24px;
//             }
//
//             & p { /*Apply Now*/
//               position: absolute;
//               width: 129px;
//               height: 24px;
//               left: 665px;
//               top: 75px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0DC46E;
//             }
//           }
//         }
//
//         & div4 { /*right bar-i gorci nkaragrutyun 1 */
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           width: 826px;
//           height: 220px;
//           left: 32px;
//           top: 919px;
//           border: 2px solid #0DC46E;
//           box-sizing: border-box;
//           border-radius: 30px;
//           border: 2px solid #fff;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           transition: .6s;
//
//
//           :hover {
//             border: 2px solid #0DC46E;
//             box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
//           }
//
//           & img {
//             height: 80%;
//             padding: 10px;
//           }
//
//           & div:nth-child(2) {
//             display: flex;
//             flex-direction: column;
//             left: 40px;
//             top: -25px;
//             position: absolute;
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 85px;
//               height: 24px;
//               left: 156px;
//               top: 44px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 366px;
//               height: 44px;
//               left: 156px;
//               top: 84px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 22px;
//               display: flex;
//               align-items: center;
//               color: #7A88A3;
//             }
//
//             & span {
//               display: flex;
//               justify-content: left;
//               gap: 35px;
//
//               & p:nth-child(1) {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 110px;
//                 height: 18px;
//                 left: 156px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//
//               & p:nth-child(2) {
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 6px;
//                 width: 74px;
//                 height: 18px;
//                 left: 326px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//             }
//           }
//
//           & div:nth-child(3) {
//             & span {
//               position: absolute;
//               right: 27px;
//               top: 34px;
//               color: #505B70;
//               font-size: 24px;
//             }
//
//             & p { /*Apply Now*/
//               position: absolute;
//               width: 129px;
//               height: 24px;
//               left: 665px;
//               top: 75px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0DC46E;
//             }
//           }
//         }
//
//         & div5 { /*right bar-i gorci nkaragrutyun 1 */
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           width: 826px;
//           height: 220px;
//           left: 32px;
//           top: 1171px;
//           border: 2px solid #0DC46E;
//           box-sizing: border-box;
//           border-radius: 30px;
//           border: 2px solid #fff;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           transition: .6s;
//
//
//           :hover {
//             border: 2px solid #0DC46E;
//             box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
//           }
//
//           & img {
//             height: 80%;
//             padding: 10px;
//           }
//
//           & div:nth-child(2) {
//             display: flex;
//             flex-direction: column;
//             left: 40px;
//             top: -25px;
//             position: absolute;
//
//             & p:nth-child(1) {
//               position: absolute;
//               width: 85px;
//               height: 24px;
//               left: 156px;
//               top: 44px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0D0D0D;
//             }
//
//             & p:nth-child(2) {
//               position: absolute;
//               width: 366px;
//               height: 44px;
//               left: 156px;
//               top: 84px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 400;
//               font-size: 18px;
//               line-height: 22px;
//               display: flex;
//               align-items: center;
//               color: #7A88A3;
//             }
//
//             & span {
//               display: flex;
//               justify-content: left;
//               gap: 35px;
//
//               & p:nth-child(1) {
//                 display: flex;
//                 justify-content: space-between;
//                 width: 110px;
//                 height: 18px;
//                 left: 156px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//
//               & p:nth-child(2) {
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 6px;
//                 width: 74px;
//                 height: 18px;
//                 left: 326px;
//                 top: 155px;
//                 font-family: 'Poppins';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 18px;
//                 line-height: 18px;
//                 display: flex;
//                 align-items: center;
//                 text-align: center;
//                 color: #0D0D0D;
//               }
//             }
//           }
//
//           & div:nth-child(3) {
//             & span {
//               position: absolute;
//               right: 27px;
//               top: 34px;
//               color: #505B70;
//               font-size: 24px;
//             }
//
//             & p { /*Apply Now*/
//               position: absolute;
//               width: 129px;
//               height: 24px;
//               left: 665px;
//               top: 75px;
//               font-family: 'Poppins';
//               font-style: normal;
//               font-weight: 500;
//               font-size: 24px;
//               line-height: 24px;
//               display: flex;
//               align-items: center;
//               color: #0DC46E;
//             }
//           }
//         }
//       }
//
//
//     }
//   }
// `;
//
//
// export const Styled = {Root};