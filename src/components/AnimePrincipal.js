import React from 'react'

function AnimePrincipal({ topAnime }) {
  return (
    <div className='main'>
        <div className='top-anime-container'>
            {topAnime.map(anime => (
                <div key={anime.mal_id} className="top-anime">
                    <div className='anime-info'>
                        <a 
                            href={anime.url} 
                            target="_blank" 
                            rel="noreferrer">        
                            <img src={anime.image_url} alt="anime" />
                        </a>
                        <p>
                            <strong>{ anime.title }</strong>
                            <span>Generos: { anime.genres[0].name } | { anime.genres[1].name }</span>
                            {anime.synopsis}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimePrincipal
