import React from 'react';
import { X, Star, Calendar } from 'lucide-react';
import './MediaDetails.css'; // Centralizando toda a estilização aqui

export default function MediaDetails({ media, onClose }) {
  if (!media) return null;

  return (
    <div className="details-container">
      
      {/* Botão de Fechar */}
      <button onClick={onClose} className="details-close-btn" title="Voltar para a listagem">
        <X size={20} className="close-icon" />
      </button>

      {/* Poster do Filme */}
      <div className="details-poster-wrapper">
        <img 
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} 
          alt={media.title || media.name} 
          className="details-poster-img"
        />
      </div>

      {/* Conteúdo de Texto */}
      <div className="details-content">
        <h1 className="details-title">
          {media.title || media.name}
        </h1>

        {/* Badges / Metadados */}
        <div className="details-metadata">
          <span className="badge-rating">
            <Star size={14} fill="currentColor" /> {media.vote_average?.toFixed(1)}
          </span>
          
          <span className="badge-date">
            <Calendar size={14} /> 
            {media.release_date || media.first_air_date 
              ? new Date(media.release_date || media.first_air_date).getFullYear() 
              : 'N/A'}
          </span>
        </div>

        {/* Seção da Sinopse Justificada */}
        <div className="details-synopsis-container">
          <h2 className="details-synopsis-label">
            Sinopse
          </h2>
          <p className="details-synopsis-text">
            {media.overview || 'Nenhuma sinopse disponível em português para este título.'}
          </p>
        </div>
      </div>

    </div>
  );
}