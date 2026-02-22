function Hospitals() {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg flex justify-between">
        <div>
          <h3 className="text-xl font-bold">City Care Hospital</h3>
          <p className="text-gray-600">2.5 km away</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Book Slot
        </button>
      </div>
    </div>
  );
}

export default Hospitals;