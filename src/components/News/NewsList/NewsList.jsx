import { useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import news from 'components/news';
import { ReactComponent as SearchBtn } from './../../../icons/SearchBtn.svg';
import { ReactComponent as CancelBtn } from './../../../icons/CancelBtn.svg';


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
    const [value, setValue] = useState('');
    
    const handleChange = evt => {
        evt.preventDefault();
        setValue(evt.target.value);
    };
    const handleSearch = evt => {
        evt.preventDefault();
        if (value === '') {
            return;
        }
        setValue(evt.target.value);
    }
    const handleClearInput = evt => {
        evt.preventDefault();
        
        setValue('');
    };

    const filterNews = news.filter(news => {
    return news.title.toLowerCase().includes(value.toLowerCase());
  });
    return (
        <ConteinerNews>
            <SearchNewsForm>
                <SearchNewsInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={value}
                    placeholder="Search"
                    onChange={handleChange}
                />
                {value === '' ? (
                    <SearchNewsButton type="submit" onClick={handleSearch}>
                        <SearchBtn/>
                </SearchNewsButton>
                ) : (
                    <SearchNewsButton type="submit" onClick={handleClearInput}>
                        <CancelBtn/>
                </SearchNewsButton>)}
                
            </SearchNewsForm>
            <ListNews>
                {filterNews.map(({ _id, title, description, date, url }) => (
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