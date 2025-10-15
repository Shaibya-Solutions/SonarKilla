"use client";

import { useState, useEffect } from "react";
import { X, Star } from "lucide-react";

interface ReviewPopupProps {
  googleReviewUrl?: string;
  delayMs?: number;
}

export function ReviewPopup({
  googleReviewUrl = "https://g.page/r/CW0BfTPdu9T7EBM/review",
  delayMs = 3000,
}: ReviewPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`review-popup ${isClosing ? "review-popup-exit" : ""}`}
      role='dialog'
      aria-labelledby='review-popup-title'
    >
      <button
        onClick={handleClose}
        className='absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors'
        aria-label='Close review popup'
      >
        <X className='w-4 h-4 text-white' />
      </button>

      <a
        href={googleReviewUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center gap-3 p-6 text-center group'
        onClick={() => {
          // Optional: Track analytics here
          console.log("Google review link clicked");
        }}
      >
        <div className='flex gap-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className='w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform'
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        <div>
          <h3
            id='review-popup-title'
            className='font-semibold text-white text-lg mb-1'
          >
            Love Our Service?
          </h3>
          <p className='text-white/90 text-sm'>
            Share your experience on Google Reviews
          </p>
        </div>

        <div className='mt-2 px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg group-hover:bg-orange-50 transition-colors'>
          Leave a Review
        </div>
      </a>
    </div>
  );
}
