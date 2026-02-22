function Medicine() {
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Medicine"
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold">Paracetamol 500mg</h3>
        <p className="text-gray-600">Dose: 1 tablet twice daily</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Medicine"
          className="rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold">Cough Syrup</h3>
        <p className="text-gray-600">Dose: 10ml twice daily</p>
      </div>
    </div>
  );
}

export default Medicine;