import "./Page4.css"

function SoundTrack() {
  return (
    <div className="soundtrackSection">
      <h2 className="soundtrackTitle">
        Our Soundtracks 🎧
      </h2>

      <p className="soundtrackSubtitle">
        songs that make me think of you
        <br />
        (also I can't listen to these without smiling like an idiot)
      </p>

      <div className="songList">

        <iframe
          src="https://open.spotify.com/embed/track/3vCzLB6kS2lGcIpm1OOUsy?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Ishq Hai"
        ></iframe>

        <iframe
          src="https://open.spotify.com/embed/track/5yAfCVJwa3r9wAQSOfawqm?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Minnalvala"
        ></iframe>

        <iframe
          src="https://open.spotify.com/embed/track/1VvGJIAjhGdB7InVP9NA7V?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Tere Liye"
        ></iframe>

      </div>
    </div>
  )
}

export default SoundTrack
