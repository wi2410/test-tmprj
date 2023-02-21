import React from 'react';
import format from 'date-fns/format'
import {
  CardNews,
  DescriptionCardNews,
  TitleCardNews,
  DateCardNews,
  UrlCardNews,
  CardButtonNews,
  TopLineCard
//   BoxBand,
} from './NewsItem.styled';

const NewsItem = ({ title, description, date, url }) => {
//   const dateSlash = date.replaceAll('-', '/');

//   const dateRevers = dateSlash.split('/').reverse().join('/');
  const now = format(new Date(date), 'yyyy/MM/dd');
  

  return (
    <CardNews >
      <TopLineCard></TopLineCard>
      {/* <BoxBand> */}
        <TitleCardNews>{title}</TitleCardNews>
      {/* </BoxBand> */}

      <DescriptionCardNews>{description}</DescriptionCardNews>
      <CardButtonNews>
        <DateCardNews>{now}</DateCardNews>
        <UrlCardNews href={url} target="_blank">
          Read more
        </UrlCardNews>
      </CardButtonNews>
    </CardNews>
  );
};

export default NewsItem;