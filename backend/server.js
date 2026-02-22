const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

const SUPABASE_URL = "https://jqgiwemnrsuyaxpotfjb.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZ2l3ZW1ucnN1eWF4cG90ZmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3Mjk0MzgsImV4cCI6MjA4NzMwNTQzOH0.iTrAQoQ75ZSq9mGv9vr8lAil_UAU-V9CPShJUM9uou0";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.get("/analyze", async (req, res) => {
  const symptom = req.query.symptom?.toLowerCase();

  if (!symptom) {
    return res.status(400).json({ error: "Symptom required" });
  }

  // 🔍 Get Disease
  const { data: diseaseData, error: diseaseError } = await supabase
    .from("medical_dataset50")
    .select("*")
    .ilike("symptoms", `%${symptom}%`)
    .limit(1);

  if (diseaseError) {
    return res.status(500).json({ error: diseaseError.message });
  }

  if (!diseaseData || diseaseData.length === 0) {
    return res.json({ message: "No disease found" });
  }

  const disease = diseaseData[0];

  // 🏥 Get Hospitals
  const { data: hospitals, error: hospitalError } = await supabase
  .from("hospital_table")
.eq("city", "Greater Noida")

console.log("Hospitals:", hospitals);
console.log("Hospital Error:", hospitalError);

  res.json({
    disease: disease.disease,
    risk: disease.risk_level,
    medicine: disease.suggested_medicine,
    hospitals: hospitals
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});