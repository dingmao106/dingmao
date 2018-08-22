import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.div`
  margin: 10px 0;
  padding: 70px 70px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
`;

const Image = styled.img`
  display: inline-block;
  float: left;
  margin: 0 30px 15px 0;
`;
const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px;
  font-size: 13px;
  line-height: 1.5;
  color: #777;
`;

const AboutTopContent = () => (
  <ContentWrap>
    <Image src={`${process.env.BACKEND_URL}/static/photo.jpg`} />
    <DescWrap>
      <p>黃 懸（HUANG XUAN）</p>

      <p>
        畢業於銘傳大學商品設計學系，從事設計相關工作已有5年以上的時間，於2016年成立個人設計工作室，主要服務項目為平面設計（企業識別CIS、LOGO、名片、網路圖示、Banner、EDM、DM、GIF動態圖片等）；插畫（電腦繪圖、手繪插畫）;商業拍攝（品牌形象、商品攝影、人像拍攝、動態攝影、活動紀錄）；網站設計。
      </p>

      <p>另一個身份則是職業模特兒，遊走於伸展台和攝影棚之間，承接過許多知名品牌服裝秀、記者會、髮型秀等，也拍攝過平面雜誌封面、企業形象、電視廣告。</p>

      <p>平時喜好造型服裝搭配、樂於分享，同時經營著自己的個人部落格。</p>
    </DescWrap>
  </ContentWrap>
);

export default AboutTopContent;
