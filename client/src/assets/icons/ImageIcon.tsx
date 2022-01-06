import { IconTypes } from '../../types';
import withIcon from './withIcon';

function ImageIcon(props: IconTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.945 23.667h10.11c3.956 0 6.612-2.775 6.612-6.903V7.236c0-4.128-2.656-6.903-6.61-6.903H6.945C2.99.333.334 3.108.334 7.236v9.528c0 4.128 2.656 6.903 6.61 6.903Zm.971-12.834a2.919 2.919 0 0 1-2.915-2.916A2.919 2.919 0 0 1 7.916 5a2.92 2.92 0 0 1 2.915 2.917 2.92 2.92 0 0 1-2.915 2.917Zm13.209 4.59c.39 1.002.188 2.206-.23 3.198-.495 1.18-1.443 2.073-2.637 2.463-.53.174-1.087.25-1.642.25H6.784c-.978 0-1.844-.235-2.554-.672-.445-.275-.523-.908-.194-1.319a330.07 330.07 0 0 0 1.645-2.07c1.047-1.329 1.752-1.714 2.536-1.375.317.14.637.349.965.57.875.595 2.092 1.413 3.694.525 1.097-.614 1.733-1.668 2.287-2.585l.01-.015.116-.193c.186-.308.37-.612.578-.892.26-.35 1.226-1.446 2.476-.666.797.491 1.467 1.156 2.184 1.867.273.272.468.582.598.914Z"
      />
    </svg>
  );
}

export default withIcon(ImageIcon);
