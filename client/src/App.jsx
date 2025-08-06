import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}+site:indeed.com+OR+site:linkedin.com+OR+site:glassdoor.com+job`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Upgrade Salary</h1>
      <Input
        className="w-full max-w-xl p-3 rounded-lg border"
        type="text"
        placeholder="Search high-paying jobs (e.g., Senior Java Developer India)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="mt-4" onClick={handleSearch}>
        Search Jobs via Google
      </Button>
    </main>
  );
}

export default App;