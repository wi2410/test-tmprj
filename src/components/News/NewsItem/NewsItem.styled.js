import styled from 'styled-components';

// import BandMobile from '../../../img/Band.svg';
// import BandTablet from '../../../img/Band.svg';
// import Band from '../../../img/Band.svg';
// import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const CardNews = styled.div`
  width: 390px;
  
`;

// export const BoxBand = styled.div`
//   background: url(${BandMobile}) no-repeat;
//   ${BandTablet} {
//     background: url(${BandTablet}) no-repeat;
//   }
//   ${Band} {
//     background: url(${Band}) no-repeat;
//   }
// `;

export const TitleCardNews = styled.h3`
  padding-top: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButtonNews = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const DescriptionCardNews = styled.p`
  margin-top: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DateCardNews = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: gray;
`;

export const UrlCardNews = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: orange;
  text-decoration-line: underline;
  :hover,
  :focus {
    color: black;
  }
`;