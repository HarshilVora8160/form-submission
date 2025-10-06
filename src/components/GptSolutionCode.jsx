import React, { useState } from "react";

export default function SubjectChanger() {
  const subjects = ["Math", "Science", "English", "History", "Geography"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subject, setSubject] = useState(subjects[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if we already reached the last subject
    if (currentIndex < subjects.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSubject(subjects[nextIndex]);
    } else {
      alert("All subjects are done!");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={subject}
          readOnly
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          disabled={currentIndex === subjects.length - 1}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
