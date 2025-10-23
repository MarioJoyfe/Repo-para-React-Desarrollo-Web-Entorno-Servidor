export default function Noticia({ imagen, categoria, texto, descripcion, autor, fecha }) {
  return (
    <div className="card-news-container">
      <div className="card-image-container">
        <div style={{ backgroundImage: `url(${imagen})` }}></div>
      </div>
      <div className="card-category-container">
        <a href="#">{categoria}</a>
      </div>
      <div className="card-text-container">
        <a href="#">{texto}</a>
      </div>
      <p className="card-description">{descripcion}</p>
      <div className="card-footer-container">
        <span>{autor}</span>
        <span>{fecha}</span>
      </div>
    </div>
  );
}
