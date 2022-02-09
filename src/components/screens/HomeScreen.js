import Banner from '../Banner';
import Row from '../Row';
import './HomeScreen.css';
import requests from '../../Requests';

const HomeScreen = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='home-screen'>     

      <Banner />

      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isLargeRow />
      <Row 
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Row 
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Row 
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Row 
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Row 
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Row 
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isLargeRow />
      <Row 
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
       />
    </div>
  )
}

export default HomeScreen;