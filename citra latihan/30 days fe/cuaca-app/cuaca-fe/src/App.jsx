import {useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "8f89e7c185ec00cff4bfdc1b392dc5a5"; //bisa di gonta ganti dengan apikey yang lain sesuai yg di OpenWeather

  const getWeather = async () => {
    if (!city) return alert("Masukkan nama kota dulu!");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("Kota tidak ditemukan!");
        setWeather(null);
      }
    } catch (err) {
      console.error("Gagal ambil data:", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 p-6">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 max-w-sm w-full text-gray-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1">🌤️ Cuaca Hari Ini</h1>
          <p className="text-sm text-gray-600 mb-4">Informasi cuaca terkini</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="🔍 Masukkan nama kota"
          className="w-[75%] px-3 py-1.5 border border-black rounded-full shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          />
          <button
          onClick={getWeather}
          className="w-[25%] bg-blue-300 text-black px-3 py-1.5 rounded-full font-semibold text-xs"
          >
           Cari
          </button>
        </div>

       {weather && (
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="mx-auto w-24 h-24"
          />
          <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
        </div>
        )}

        {weather && (
          <div className="grid grid-cols-3 gap-3 text-sm text-center">
            <div className="bg-white rounded-xl p-3 shadow-inner">
              <p className="font-semibold">Angin</p>
              <p>{weather.wind.speed} km/jam</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-inner">
              <p className="font-semibold">Kelembapan</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-inner">
              <p className="font-semibold">Tekanan</p>
              <p>{weather.main.pressure} hPa</p>
            </div>
          </div>
        )}

        {weather && (
          <p className="mt-6 text-xs text-center text-gray-500">
            Terakhir diperbarui:{" "}
            {new Date(weather.dt * 1000).toLocaleString("id-ID", {
              dateStyle: "long",
              timeStyle: "short",
              timeZone: "Asia/Jakarta",
            })}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
