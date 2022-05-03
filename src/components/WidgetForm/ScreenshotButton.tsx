import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { Dispatch, useCallback, useState } from 'react';

import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: Dispatch<string | null>;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = useCallback(async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }, [onScreenshotTook]);

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 180,
          backgroundPosition: 'right bottom'
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
