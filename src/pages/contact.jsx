import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../contact.css'; // sesuaikan path jika beda folder

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1 className="contact-title">
          Contact us <FaEnvelope className="title-icon" />
        </h1>

        <p className="contact-description">
          Setiap langkah adalah awal dari kisah baru. Di <strong>TravelSkutt</strong>, kami percaya bahwa perjalanan bukan sekadar berpindah tempat, tapi tentang makna yang tumbuh di setiap momen.
          <br /><br />
          Kalau kamu punya pertanyaan, butuh bantuan buat nyusun rencana liburan, atau sekadar ingin ngobrol dulu, kami selalu ada. Jangan ragu menghubungi kami, karena langkah kecil hari ini bisa jadi awal petualangan luar biasa.
        </p>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaEnvelope className="info-icon" />
            <span>Email: TravelSkutt@example.com</span>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Jam operasional: <strong>Senin–Jumat, 9 pagi – 5 sore</strong></span>
          </div>
        </div>

        <button className="contact-button">Kirim Pesan</button>
      </div>
    </div>
  );
};

export default Contact;