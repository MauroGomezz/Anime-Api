import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import AnimePrincipal from "./components/AnimePrincipal";
import AnimeCard from "./components/AnimeCard";
import TopSeries from "./components/TopSeries";

function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [airingAnime, SetAiringAnime] = useState([]);
  const [recomendations, SetRecomendations] = useState([]);

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/season/2022/spring`)
      .then(res => res.json());

      SetTopAnime(temp.anime.slice(0, 1));
  }

  const GetAiringAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`)
    .then(res => res.json());

    SetAiringAnime(temp.top.slice(0,25));
  }

  const GetRecomendations = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/anime/1/recommendations`)
    .then(res => res.json());

    SetRecomendations(temp.recommendations.slice(0,25));
  }

  useEffect(() => {
    GetTopAnime()
    GetAiringAnime()
    GetRecomendations();
  }, [])


  return (
    <div className="App">
      <Navbar></Navbar>
      <AnimePrincipal topAnime={topAnime}/>
      <AnimeCard airingAnime={airingAnime} titulo="Animes en emision"></AnimeCard>
      <TopSeries></TopSeries>
      <AnimeCard airingAnime={recomendations} titulo="Recomendaciones"></AnimeCard>
    </div>
  );
}

export default App;
