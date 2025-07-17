function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md slogan">
          <h1 className="mb-5 text-5xl font-bold">TravelSkutt</h1>
          <p className="mb-5">
            Karena setiap langkah membawa makna mari kita jelajahi dunia
            bersama.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
