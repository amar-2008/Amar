/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState, useEffect} from 'react';

const messages = [
  'Warming up the digital canvas...',
  'Polishing the pixels...',
  'Directing the digital actors...',
  'Adding a touch of cinematic magic...',
  'This can take a few minutes, good things come to those who wait!',
];

/**
 * A fullscreen overlay that displays a loading animation and text indicating that
 * a video is being created.
 */
export const SavingProgressPage: React.FC = () => {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fade-in"
      aria-live="polite"
      aria-busy="true">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-500"></div>
      <h2 className="text-2xl font-bold text-white mt-8">
        Creating your video...
      </h2>
      <p className="text-gray-400 mt-2 text-center px-4 w-full max-w-sm">
        {message}
      </p>
    </div>
  );
};
