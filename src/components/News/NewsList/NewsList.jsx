import { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import format from 'date-fns/format';
// import news from 'components/news';
import { ReactComponent as SearchBtn } from './../../../icons/SearchBtn.svg';
import { ReactComponent as CancelBtn } from './../../../icons/CancelBtn.svg';
import { Pagination } from '@mui/material';

import Loading from '../../Loader/Loader';
import NotFound from '../../Loader/NotFound';
import ScrollToTop from '../../ScrollToTop/ScrollToTopButton';

import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
  Title,
  ErrorTitle,
} from './NewsList.styled';

const NewsList = () => {
  const [newsItem, setNewsItem] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleChangePagination = (event, page) => {
    setPage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchNews();
    }, 2000);
  }, []);

  const fetchNews = async () => {
    const responce = await fetch(`https://pet-support.onrender.com/api/news`);
    const result = await responce.json();
    console.log(result);
    setIsLoading(false);
    setNewsItem(result);
    return result;
  };

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
  };
  const handleClearInput = evt => {
    evt.preventDefault();

    setValue('');
  };

  console.log(
    'formatDate',
    format(new Date('2023-02-16T17:45:32.195Z'), 'yyyy/MM/dd')
  );

  const filterNews = newsItem.filter(news => {
    return news.title.toLowerCase().includes(value.toLowerCase());
  });
  const count = Math.ceil(filterNews.length / 6);
  return (
    <ConteinerNews>
      <Title>News</Title>
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
            <SearchBtn />
          </SearchNewsButton>
        ) : (
          <SearchNewsButton type="submit" onClick={handleClearInput}>
            <CancelBtn />
          </SearchNewsButton>
        )}
      </SearchNewsForm>
      <ListNews>
        {isLoading ? (
          <Loading />
        ) : (
          filterNews
            .sort(function (a, b) {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            })
            .map(({ _id, title, description, date, url }) => (
              <ItemNews key={_id}>
                <NewsItem
                  title={title}
                  description={description}
                  date={date}
                  url={url}
                />
              </ItemNews>
            ))
        )}
        {filterNews.length !== 0 && !isLoading && (
          <Pagination
            color="primary"
            count={count}
            size="large"
            page={page}
            variant="outlined"
            onChange={handleChangePagination}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
        {filterNews.length === 0 && !isLoading && (
          <div>
            <ErrorTitle>
              Nothing found for your search, please try again!
            </ErrorTitle>
            <NotFound />
          </div>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus ut eum blanditiis obcaecati laborum at officia facilis
          dolor. Perspiciatis saepe, laboriosam eaque cum ex itaque facilis nam
          alias dignissimos?
        </p>
      </ListNews>
      <ScrollToTop />
    </ConteinerNews>
  );
};

export default NewsList;
