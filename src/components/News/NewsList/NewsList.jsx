// import { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import news from 'components/news';


import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
//   ErrorTitle,
} from './NewsList.styled';

const NewsList = () => {
    
    
    return (
        <ConteinerNews>
            <SearchNewsForm>
                <SearchNewsInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    // value={value}
                    placeholder="Search"
                    // onChange={handleChange}
                />
                <SearchNewsButton>

                </SearchNewsButton>
            </SearchNewsForm>
            <ListNews>
                {news.map(({ _id, title, description, date, url }) => (
                    <ItemNews key={_id}>
                        <NewsItem
                            title={title}
                            description={description}
                            date={date}
                            url={url}
                        />
                    </ItemNews>
                ))
                }
            </ListNews>

        </ConteinerNews>

    )


}




export default NewsList;