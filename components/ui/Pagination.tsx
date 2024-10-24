import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <Button
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-2 bg-purple-500 text-white rounded disabled:opacity-50"
      >
        <ArrowBigLeft />
      </Button>
      <span className="mx-4 text-lg">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 bg-purple-500 text-white rounded disabled:opacity-50"
      >
        <ArrowBigRight />
      </Button>
    </div>
  );
}
