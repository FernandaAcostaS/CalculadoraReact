import styled from 'styled-components';

import ImagemHome from '../../../../assets/ImagemHome.jpg';

import { colors } from "../../../../Constants/colors";


export const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr repeat(10, 94px) 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 24px;

  @media (max-width: 869px) {
    grid-template-columns: 5px repeat(5, 1fr) 5px !important;
    grid-template-rows: repeat(5, 1fr) !important;
    grid-gap: 16px !important;
    background-size: auto 100% !important;
    background-position: 50%;

    height: 800px !important;

   background-image: url(${ImagemHome}) !important;

    grid-column: 2 / 7 !important;
    width: auto !important;

    h1 {

      grid-column: 2/4 !important; ;
      grid-row: 1/2 ;
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 28px !important;
      line-height: 38px !important;

      display: flex;
      align-items: flex-end;
      letter-spacing: -0.02em;

      color: #FFFFFF;

      position: relative;


      &::before {
              grid-column: 2/3 ;
              grid-row: 2/3 ;
              background-color:  #FFFFFF !important;
              width: 48px !important;
              height: 5px !important;

              display: block;
              content: "";
              
              position: absolute;
              top: 20px !important;
      }
    }

    .displaycal{
      grid-column: 2/8 !important;
      grid-row: 2/3;
    
      input {

        grid-column: 2/6;
        grid-row: 2/3;
        min-height: 75px;
        font-size: 55px;
        text-align: right;
        word-wrap: break-word;
        background-color: black;
        color: white;

        width: 100%;

        font-family: 'digital';


      }
    }

    .calculadora{
        display: grid !important;
        grid-column: 1/8 !important;
        grid-row: 2/5;
        background-color:	#DB7093;
        grid-template-columns: 5px repeat(4, 1fr) 5px !important;
        grid-template-rows: 30px repeat(6, 1fr) 30px ;
        grid-gap: 5px 2px !important;

        .first{
          display: grid;
          grid-column: 2/3 !important;
          grid-row: 3/8;

          #clear{
          
          }


        }
      
      .second{
          display: grid;
          grid-column: 3/4 !important;
          grid-row: 4/8;
      
      }

      .third{
          display: grid;
          grid-column: 4/5 !important;
          grid-row: 4/8;
      
      }

      .fourth{
          display: grid;
          grid-column: 5/6 !important;
          grid-row: 3/8;
        
      }
        


      }
  }

  height: 1000px;
  background-size: 100% auto;

  @media (max-width: 1440px) {
    background-size: auto 100%;
  }

  background-image: url(${ImagemHome});
  width: 100%;

  h1 {

        grid-column: 4/9 ;
        grid-row: 1/2 ;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;

        display: flex;
        align-items: flex-end;
        letter-spacing: -0.02em;

        color: #FFFFFF;

       position: relative;

      
      &::before {
                grid-column: 2/3 ;
                grid-row: 2/3 ;
                background-color:  #FFFFFF !important;
                width: 48px !important;
                height: 5px !important;

                display: block;
                content: "";
                
                position: absolute;
                top: 40px;
        }
  }



  .calculadora{
    display: grid;
    grid-column: 4/9;
    grid-row: 2/5;
    background-color:	#DB7093;

    grid-template-columns: 45px repeat(4, 94px) 45px;
    grid-template-rows: 30px repeat(6, 1fr) 30px ;
    grid-gap: 20px 20px;

    .display{
      grid-column: 2/6;
      grid-row: 2/3;
      input {

        grid-column: 2/6;
        grid-row: 2/3;
        min-height: 75px;
        font-size: 55px;
        text-align: right;
        word-wrap: break-word;
        background-color: black;
        color: purple;

        width: 100%;

        font-family: 'digital';

        @media (max-width: 768px) {
          max-width: 280px;
        }
      }
    }

    .first{
      display: grid;
      grid-column: 2/3;
      grid-row: 3/8;
      
      button{
        width: ${(props) => (props.width ? props.width : "85px")};
        height: ${(props) => (props.height ? props.height : "60px")};
        padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
        padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
        padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};
        padding-bottom: ${(props) =>
          props.paddingBottom ? props.paddingBottom : "0"};
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
        margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
        margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
        border-radius: 15px;
        cursor: pointer;

        position: relative;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: left;
        letter-spacing: -0.02em;

        font-size: 100%;

        color: purple;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${(props) => (props.color ? props.color : colors.white)};

        transition: 300ms;

        &:hover {
          color: ${colors.black};
          border-radius: 15px;
          background-color: ${(props) => props.hover  ? props.hover  : colors.blue};
        }
      }

    }
  
   .second{
      display: grid;
      grid-column: 3/4;
      grid-row: 4/8;
   
      button{
        width: ${(props) => (props.width ? props.width : "85px")};
        height: ${(props) => (props.height ? props.height : "60px")};
        padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
        padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
        padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};
        padding-bottom: ${(props) =>
          props.paddingBottom ? props.paddingBottom : "0"};
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
        margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
        margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
        border-radius: 15px;
        cursor: pointer;

        position: relative;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: left;
        letter-spacing: -0.02em;

        font-size: 100%;

        color: purple;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${(props) => (props.color ? props.color : colors.white)};

        transition: 300ms;

        &:hover {
          color: ${colors.black};
          border-radius: 15px;
          background-color: ${(props) => props.hover  ? props.hover  : colors.blue};
        }
      }

    }
   }

   .third{
      display: grid;
      grid-column: 4/5;
      grid-row: 4/8;
      button{
        width: ${(props) => (props.width ? props.width : "85px")};
        height: ${(props) => (props.height ? props.height : "60px")};
        padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
        padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
        padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};
        padding-bottom: ${(props) =>
          props.paddingBottom ? props.paddingBottom : "0"};
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
        margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
        margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
        border-radius: 15px;
        cursor: pointer;

        position: relative;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: left;
        letter-spacing: -0.02em;

        font-size: 100%;

        color: purple;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${(props) => (props.color ? props.color : colors.white)};

        transition: 300ms;

        &:hover {
          color: ${colors.black};
          border-radius: 15px;
          background-color: ${(props) => props.hover  ? props.hover  : colors.blue};
        }
      }

    }
   }

   .fourth{
      display: grid;
      grid-column: 5/6;
      grid-row: 3/8;
      button{
        width: ${(props) => (props.width ? props.width : "85px")};
        height: ${(props) => (props.height ? props.height : "60px")};
        padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};
        padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "0")};
        padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};
        padding-bottom: ${(props) =>
          props.paddingBottom ? props.paddingBottom : "0"};
        margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
        margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
        margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
        border-radius: 15px;
        cursor: pointer;

        position: relative;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: left;
        letter-spacing: -0.02em;

        font-size: 100%;

        color: purple;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${(props) => (props.color ? props.color : colors.white)};

        transition: 300ms;

        &:hover {
          color: ${colors.black};
          border-radius: 15px;
          background-color: ${(props) => props.hover  ? props.hover  : colors.blue};
        }
      }

    }
   }
    


  }
  




   



  }
 

  
`;