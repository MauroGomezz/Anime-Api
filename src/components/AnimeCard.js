import React, {useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleArrowRight, faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"

function AnimeCard({ airingAnime, titulo }) {
  const slider = useRef(null);

  let tamaño = 0;

  const siguiente = () => {
    if (slider.current.children.length > 0) {
      if (tamaño >= 3760) {
        slider.current.style.transition = `500ms ease-out all`;
        tamaño = 0;
        slider.current.style.transform = `translateX(-${tamaño}px)`;
      } else if (tamaño >= 0) {
        tamaño += 1880;
        slider.current.style.transition = `300ms linear all`;
        slider.current.style.transform = `translateX(-${tamaño}px)`;
      }
    }
  }

  const anterior = () => {
    if (tamaño > 0) {
      slider.current.style.transition = `300ms linear all`;
      tamaño -= 1880;
      slider.current.style.transform = `translateX(-${tamaño}px)`;
    }
  }

  return (
    <div>
      <div className='buttons-container'>
        <h2>{titulo}</h2>
        <div className='buttons'>
          <button onClick={anterior}><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
          <button onClick={siguiente}><FontAwesomeIcon icon={faCircleArrowRight}/></button>
        </div>
      </div>
      <div className='anime-card-container' ref={slider}>
          {airingAnime.map(anime => (
          <div key={anime.mal_id} className='anime-card'>
              <a  href={anime.url}
                  target="_blank" 
                  rel="noreferrer">
                  <figure>
                    <div className='motion-img'>
                        <img 
                            src={anime.image_url} 
                            alt="Anime" />
                    </div>
                  </figure>
                  <h3>{ anime.title }</h3>
              </a>
          </div>
          ))}
      </div>
    </div>
  )
}

export default AnimeCard