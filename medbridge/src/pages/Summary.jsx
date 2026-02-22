function Summary() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">AI Health Summary</h2>

        <p className="text-gray-700 leading-relaxed">
          Based on your symptoms, you may have a mild viral infection.
          Recommended: Rest, hydration, and monitoring temperature.
        </p>

        <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
          <h3 className="font-semibold">Risk Level:</h3>
          <p>Moderate</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;