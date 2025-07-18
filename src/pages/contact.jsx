import "../App.css";

function Contact() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "120px",
        padding: "3rem",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "'Comic Sans MS', cursive, sans-serif",
        }}
      >
        Contact
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Setiap langkah adalah awal dari kisah baru. Di TravelSkutt, kami percaya
        bahwa perjalanan bukan sekadar berpindah tempat, tapi tentang makna yang
        tumbuh di setiap momen.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Kalau kamu punya pertanyaan, butuh bantuan buat nyusun rencana liburan,
        atau sekadar ingin ngobrol dulu, kami selalu ada. Jangan ragu untuk
        menghubungi kami, karena langkah kecil hari ini bisa jadi awal dari
        petualangan luar biasa.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        📧 Email:{" "}
        <a href="mailto:travel@example.com" style={{ color: "#aad7ff" }}>
          TravelSkutt@example.com
        </a>
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        📍 Jam operasional: <strong>Senin–Jumat, 9 pagi – 5 sore</strong>
      </p>
    </div>
  );
}

export default Contact;
