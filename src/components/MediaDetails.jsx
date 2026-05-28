import React from 'react';
import { X, Star, Calendar } from 'lucide-react';

export default function MediaDetails({ media, onClose }) {
  if (!media) return null;

  return (
    <div className="w-full min-h-[80vh] rounded-3xl overflow-hidden bg-[#0d091f]/40 backdrop-blur-xl border border-white/10 relative p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start animate-fadeIn">
      
      {/* Botão de Fechar */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full border border-white/10 transition-all duration-300 group z-50 cursor-pointer"
      >
        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Poster do Filme */}
      <div className="w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex-shrink-0">
        <img 
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} 
          alt={media.title || media.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Informações detalhadas */}
      <div className="flex-1 text-left">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          {media.title || media.name}
        </h1>

        {/* Badges/Tags */}
        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <span className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full text-yellow-400 font-bold text-sm">
            <Star size={14} fill="currentColor" /> {media.vote_average?.toFixed(1)}
          </span>
          
          <span className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 text-sm font-medium">
            <Calendar size={14} /> 
            {media.release_date || media.first_air_date 
              ? new Date(media.release_date || media.first_air_date).getFullYear() 
              : 'N/A'}
          </span>
        </div>

        {/* Sinopse */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-cyan-400 tracking-wide uppercase text-sm">Sinopse</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {media.overview || 'Nenhuma sinopse disponível para este título.'}
          </p>
        </div>
      </div>
    </div>
  );
}