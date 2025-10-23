import Noticia from "./Noticia";

const noticias = [
  {
    imagen: "https://img.asmedia.epimg.net/resizer/v2/5MFEVVVJURGF3JFLM66ASVZL3I.jpg?width=960&height=540",
    categoria: "Fútbol",
    texto: "El Real Madrid se impone con claridad al Barcelona",
    descripcion: "Gran partido en el clásico con goles de Vinícius y Bellingham. Los blancos refuerzan su liderato en LaLiga.",
    autor: "AS DEPORTES",
    fecha: "21 de octubre de 2025",
  },
  {
    imagen: "https://img.asmedia.epimg.net/resizer/v2/RUEJKY7BEBE3HDWQOZKTBHFQSU.jpg?width=960&height=540",
    categoria: "Champions League",
    texto: "El Atlético logra una victoria histórica en Europa",
    descripcion: "Partidazo en el Metropolitano con doblete de Griezmann y remontada ante el Bayern Múnich.",
    autor: "AS EUROPA",
    fecha: "21 de octubre de 2025",
  },
];

export default function ListaNoticias() {
  return (
    <div className="row">
      {noticias.map((n, i) => (
        <div className="col-12 col-md-6" key={i}>
          <Noticia {...n} />
        </div>
      ))}
    </div>
  );
}
