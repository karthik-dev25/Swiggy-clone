import React, { useState, useCallback } from 'react';

// ✅ Child component wrapped with React.memo
const PaginationControls = React.memo(({ onNext, onPrev }) => {
  console.log("PaginationControls rendered");

  return (
    <div>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
});


const ProductListing = () => {
  const [page, setPage] = useState(1);

  const handleNext = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setPage(prev => (prev > 1 ? prev - 1 : 1));
  }, []);

  return (
    <div>
      <h2>Page: {page}</h2>
      {/* Pagination control uses useCallback handlers */}
      <PaginationControls onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

export default ProductListing;
