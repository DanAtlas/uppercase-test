import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/header/Header';
import SearchResults from 'components/search-results/SearchResults';
import Pagination from 'components/pagination/Pagination';
import type { NextPage } from 'next';

const API_URL = "https://www.omdbapi.com/?apikey=8523cbb8";

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({
    Response: '',
    Search: [],
    totalResults: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}${search ? `&s=${search}` : ''}&page=${currentPage}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setResults(data);
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching:', error.message);
      }
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paginate = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  };
  
  useEffect(() => {
    fetchData();
  }, [currentPage, cardsPerPage]);

  return (
    <div className="container">
      <Head>
        <title>Uppersetup</title>
        <meta name="description" content="Uppersetup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        onSubmit={handleSubmit}
        onSearch={handleSearch} 
      />
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <SearchResults 
              searchTitle={search}
              Response={results.Response} 
              Search={results.Search} 
              totalResults={results.totalResults} 
            />
            <Pagination
              onPageChange={paginate}
              pageCount={Math.ceil(Number(results.totalResults) / cardsPerPage)}
            />
          </div>
        )}
      </main>
    </div>
  )
}

export default Home;
