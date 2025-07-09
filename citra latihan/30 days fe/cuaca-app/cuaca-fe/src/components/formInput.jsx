function FormInput() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <input
        type="text"
        placeholder="🔍 Masukkan nama kota"
        className="w-[75%] px-3 py-1.5 border border-black rounded-full shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />
      <button
        className="w-[25%] bg-blue-300 text-black px-3 py-1.5 rounded-full font-semibold text-xs"
      >
        Cari
      </button>
    </div>
  );
}

export default FormInput;
