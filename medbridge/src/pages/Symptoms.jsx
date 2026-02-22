import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Symptoms() {
  const [symptoms, setSymptoms] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summary");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Enter Your Symptoms
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Example: Fever, cough, headache..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Analyze with AI
          </button>
        </form>
      </div>
    </div>
  );
}

export default Symptoms;