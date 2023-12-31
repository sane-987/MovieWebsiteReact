import React, { useState, useEffect } from 'react';
import "./index.css"



// const MoviesJson = {"imdbId":{"0":114709,"1":113497,"2":113228,"3":114885,"4":113041,"5":113277,"6":114319,"7":112302,"8":114576,"9":113189,"10":112346,"11":112896,"12":112453,"13":113987,"14":112760,"15":112641,"16":114388,"17":113101,"18":112281,"19":113845,"20":113161,"21":112722,"22":112401,"23":114168,"24":113627,"25":114057,"26":114011,"27":114117,"28":112682,"29":115012},"Imdb Link":{"0":"http://www.imdb.com/title/tt114709","1":"http://www.imdb.com/title/tt113497","2":"http://www.imdb.com/title/tt113228","3":"http://www.imdb.com/title/tt114885","4":"http://www.imdb.com/title/tt113041","5":"http://www.imdb.com/title/tt113277","6":"http://www.imdb.com/title/tt114319","7":"http://www.imdb.com/title/tt112302","8":"http://www.imdb.com/title/tt114576","9":"http://www.imdb.com/title/tt113189","10":"http://www.imdb.com/title/tt112346","11":"http://www.imdb.com/title/tt112896","12":"http://www.imdb.com/title/tt112453","13":"http://www.imdb.com/title/tt113987","14":"http://www.imdb.com/title/tt112760","15":"http://www.imdb.com/title/tt112641","16":"http://www.imdb.com/title/tt114388","17":"http://www.imdb.com/title/tt113101","18":"http://www.imdb.com/title/tt112281","19":"http://www.imdb.com/title/tt113845","20":"http://www.imdb.com/title/tt113161","21":"http://www.imdb.com/title/tt112722","22":"http://www.imdb.com/title/tt112401","23":"http://www.imdb.com/title/tt114168","24":"http://www.imdb.com/title/tt113627","25":"http://www.imdb.com/title/tt114057","26":"http://www.imdb.com/title/tt114011","27":"http://www.imdb.com/title/tt114117","28":"http://www.imdb.com/title/tt112682","29":"http://www.imdb.com/title/tt115012"},"Title":{"0":"Toy Story (1995)","1":"Jumanji (1995)","2":"Grumpier Old Men (1995)","3":"Waiting to Exhale (1995)","4":"Father of the Bride Part II (1995)","5":"Heat (1995)","6":"Sabrina (1995)","7":"Tom and Huck (1995)","8":"Sudden Death (1995)","9":"GoldenEye (1995)","10":"The American President (1995)","11":"Dracula: Dead and Loving It (1995)","12":"Balto (1995)","13":"Nixon (1995)","14":"Cutthroat Island (1995)","15":"Casino (1995)","16":"Sense and Sensibility (1995)","17":"Four Rooms (1995)","18":"Ace Ventura: When Nature Calls (1995)","19":"Money Train (1995)","20":"Get Shorty (1995)","21":"Copycat (1995)","22":"Assassins (1995)","23":"Powder (1995)","24":"Leaving Las Vegas (1995)","25":"Othello (1995)","26":"Now and Then (1995)","27":"Persuasion","28":"The City of Lost Children (1995)","29":"Yao a yao, yao dao wai po qiao (1995)"},"IMDB Score":{"0":"8.3","1":"6.9","2":"6.6","3":"5.7","4":"5.9","5":"8.2","6":"6.3","7":"5.6","8":"5.7","9":"7.2","10":"6.8","11":"5.8","12":"7.1","13":"7.1","14":"5.6","15":"8.2","16":"7.7","17":"6.7","18":"6.3","19":"5.6","20":"6.9","21":"6.6","22":"6.3","23":"6.5","24":"7.6","25":"6.9","26":"6.8","27":"7.7","28":"7.7","29":"7.2"},"Genre":{"0":"Animation|Adventure|Comedy","1":"Action|Adventure|Family","2":"Comedy|Romance","3":"Comedy|Drama|Romance","4":"Comedy|Family|Romance","5":"Action|Crime|Drama","6":"Comedy|Drama","7":"Adventure|Comedy|Drama","8":"Action|Crime|Thriller","9":"Action|Adventure|Thriller","10":"Comedy|Drama|Romance","11":"Comedy|Fantasy|Horror","12":"Animation|Adventure|Drama","13":"Biography|Drama|History","14":"Action|Adventure|Comedy","15":"Crime|Drama","16":"Drama|Romance","17":"Comedy","18":"Adventure|Comedy|Crime","19":"Action|Comedy|Crime","20":"Comedy|Crime|Thriller","21":"Crime|Drama|Mystery","22":"Action|Crime|Thriller","23":"Drama|Fantasy|Mystery","24":"Drama|Romance","25":"Drama|Romance","26":"Comedy|Drama|Romance","27":"Drama","28":"Fantasy|Sci-Fi","29":"Crime|Drama|Romance"},"Poster":{"0":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","1":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR10,0,182,268_AL_.jpg","2":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxM2YyNjMtZjUxYy00OGYyLTg0MmQtNGE2YzNjYmUyZTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","3":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTMyMTgyM15BMl5BanBnXkFtZTcwOTc4OTQyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg","4":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTEyNzg5NjYtNDU4OS00MWYxLWJhMTItYWU4NTkyNDBmM2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","5":"https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg","6":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3OTQ2NTk2ODNeQTJeQWpwZ15BbWU4MDQ3NTM4MDMx._V1_UX182_CR0,0,182,268_AL_.jpg","7":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNDYzMDY1OV5BMl5BanBnXkFtZTcwNDA2MzYxMQ@@._V1_UY268_CR2,0,182,268_AL_.jpg","8":"https://images-na.ssl-images-amazon.com/images/M/MV5BN2NjYWE5NjMtODlmZC00MjJhLWFkZTktYTJlZTI4YjVkMGNmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_UY268_CR0,0,182,268_AL_.jpg","9":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg","10":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NDU2NDYzOF5BMl5BanBnXkFtZTYwNDk5MDI5._V1_UY268_CR4,0,182,268_AL_.jpg","11":"https://images-na.ssl-images-amazon.com/images/M/MV5BZWQ0ZDFmYzMtZGMyMi00NmYxLWE0MGYtYzM2ZGNhMTE1NTczL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_UX182_CR0,0,182,268_AL_.jpg","12":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjBhNmFlZjMtMzhlYy00NDBlLWFiMjctMmE0ZjgwOGM2MTNmXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_UX182_CR0,0,182,268_AL_.jpg","13":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzBlOWY0ZmEtZjdkYS00ZGU0LWEwN2YtYzBkNDM5ZDBjMmI1XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg","14":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDg2YTI0YmQtYzgwMi00Zjk4LWJkZjgtYjg0ZDE2ODUzY2RlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg","15":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg","16":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzk1MjU3MDQyMl5BMl5BanBnXkFtZTcwNjc1OTM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","17":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","18":"https://images-na.ssl-images-amazon.com/images/M/MV5BNGFiYTgxZDctNGI4OS00MWU1LWIwOGUtZmMyNGQxYjVkZjQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","19":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDEwNzcyNjkzNl5BMl5BanBnXkFtZTcwNzQyMzYxMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg","20":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwODYzNDY4Ml5BMl5BanBnXkFtZTcwODkwNTgzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg","21":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWUwNDk2ZDYtNmFkMi00NjE5LWE1M2ItYTRkNTFjZDU3ZDU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","22":"https://images-na.ssl-images-amazon.com/images/M/MV5BMGY2OWI5ZjQtYjY0Zi00Y2M4LWEwMmMtOTJhODYxYTExNWZlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg","23":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2NDczNjYwMV5BMl5BanBnXkFtZTYwNTI3Mjc4._V1_UX182_CR0,0,182,268_AL_.jpg","24":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDg3MDM5NTI0MF5BMl5BanBnXkFtZTcwNDY0NDk0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg","25":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxMzA2ODk2NV5BMl5BanBnXkFtZTcwMzQ4ODIyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg","26":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MDQ1YjUtMGM0NC00NmFlLTljMDktZjJiNWRhMWYxOWYyXkEyXkFqcGdeQXVyNjgzMjI4ODE@._V1_UX182_CR0,0,182,268_AL_.jpg","27":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NzAwNDAyN15BMl5BanBnXkFtZTYwMjYzMDc5._V1_UY268_CR1,0,182,268_AL_.jpg","28":"https://images-na.ssl-images-amazon.com/images/M/MV5BZGQxZDMwYzYtYmFjNi00NWYyLThjZjAtMDJhODZhYTkyZDNhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg","29":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzAwOTQyNF5BMl5BanBnXkFtZTcwNDU1MjgxMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg"}}
// const MovieImg = MoviesJson["Poster"]
// const MovieTitle = MoviesJson["Title"]
// const MovieGenre = MoviesJson["Genre"]



function MovieList() {
  let [movieId, setMovieId] = useState([])
  let [movieTitle, setmovieTitle] = useState([])
  let [movieImg, setmovieImg] = useState([])
  let [movieGenre, setmovieGenre] = useState([])
  //let [movie, setMovie] = useState(null)
  

async function getData() {
    const response = await fetch("http://127.0.0.1:5000/getMoviesDetails")
    const jsonresponse = await response.json()
    return await jsonresponse
}

useEffect(() => {
  getData()
  .then(result => {
    setMovieId(Object.values(result["imdbId"]))
    setmovieTitle(Object.values(result["Title"]))
    setmovieImg(Object.values(result["Poster"]))
    setmovieGenre(Object.values(result["Genre"]))
  })
},[movieId])

  return (
    <>
    <section className = "movielist">
      {
        Object.keys(movieTitle).map(function(_) {
          //console.log(movie)
          return <Movie key = {movieId[_]} img = {movieImg[_]} title = {movieTitle[_]} genre = {movieGenre[_]}/>
          //return <Movie img = {MovieImg[_]} title = {MovieTitle[_]} genre = {MovieGenre[_]}/>
        }) 
      }
      
    </section>
    </>
  )
}

const Movie = (props) => {
  const {img, title, genre} = props;
  return (
    <article className = "movie">
      <a href={"/"+title}><img src={img} alt="" /></a>
      <h1><a href={"/"+title}>{title}</a></h1>
      <h4>{genre}</h4>
    </article>
  )
}

export default MovieList;