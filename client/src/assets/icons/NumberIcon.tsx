import { IconTypes } from '../../types';
import withIcon from './withIcon';

function NumberIcon(props: IconTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={24}
      viewBox="0 0 28 24"
      {...props}
    >
      <path d="M7.45 8.956c.42 0 .727.084.923.252.196.168.294.42.294.756 0 .69-.406 1.036-1.218 1.036H2.591c-.812 0-1.218-.345-1.218-1.036 0-.336.098-.588.294-.756.196-.168.504-.252.924-.252h1.134V3.902l-1.12.658a.955.955 0 0 1-.49.14c-.261 0-.485-.112-.672-.336a1.205 1.205 0 0 1-.28-.77.95.95 0 0 1 .49-.868l2.24-1.302c.411-.233.798-.35 1.162-.35.374 0 .672.112.896.336.234.224.35.527.35.91v6.636H7.45Zm9.15 0c.41 0 .714.084.91.252.205.159.308.41.308.756 0 .355-.103.616-.308.784-.196.168-.5.252-.91.252h-5.11c-.336 0-.602-.098-.798-.294a1.071 1.071 0 0 1-.294-.77c0-.401.159-.765.476-1.092l2.968-3.094c.616-.644.924-1.237.924-1.778 0-.317-.093-.56-.28-.728-.177-.168-.434-.252-.77-.252-.27 0-.523.042-.756.126a6.148 6.148 0 0 0-.784.336l-.28.14c-.037.019-.112.06-.224.126a1.754 1.754 0 0 1-.28.126.836.836 0 0 1-.266.042c-.233 0-.43-.103-.588-.308a1.237 1.237 0 0 1-.238-.756c0-.205.028-.373.084-.504a.987.987 0 0 1 .35-.364 5.48 5.48 0 0 1 1.47-.7 5.547 5.547 0 0 1 1.624-.252c.69 0 1.297.117 1.82.35.523.224.924.55 1.204.98.29.42.434.905.434 1.456 0 .57-.117 1.092-.35 1.568-.224.467-.611.99-1.162 1.568l-1.988 2.03H16.6Zm8.702-3.038c.55.159.98.448 1.288.868.317.42.476.929.476 1.526 0 .57-.154 1.064-.462 1.484-.308.42-.747.747-1.316.98-.56.224-1.218.336-1.974.336-.607 0-1.19-.08-1.75-.238a4.61 4.61 0 0 1-1.456-.714 1.128 1.128 0 0 1-.336-.378 1.148 1.148 0 0 1-.098-.49c0-.29.08-.532.238-.728.159-.205.355-.308.588-.308.13 0 .247.023.35.07a3.652 3.652 0 0 1 .546.266c.056.019.117.042.182.07.299.15.565.266.798.35.243.075.513.112.812.112.523 0 .896-.084 1.12-.252.233-.168.35-.448.35-.84 0-.364-.117-.625-.35-.784-.233-.159-.616-.238-1.148-.238h-.868c-.28 0-.5-.098-.658-.294a1.078 1.078 0 0 1-.238-.7c0-.27.08-.504.238-.7.159-.196.378-.294.658-.294h.616c.513 0 .887-.075 1.12-.224.233-.15.35-.387.35-.714 0-.345-.103-.611-.308-.798-.205-.196-.49-.294-.854-.294-.261 0-.509.042-.742.126a7.994 7.994 0 0 0-.756.336l-.294.14a8.61 8.61 0 0 1-.42.21 1.02 1.02 0 0 1-.35.056.73.73 0 0 1-.588-.294 1.177 1.177 0 0 1-.238-.742c0-.196.033-.36.098-.49s.177-.257.336-.378a4.659 4.659 0 0 1 1.414-.7 5.681 5.681 0 0 1 1.666-.252c.69 0 1.297.112 1.82.336.532.224.938.541 1.218.952.29.41.434.887.434 1.428 0 .513-.135.966-.406 1.358-.261.383-.63.663-1.106.84ZM7.498 19.374c.812 0 1.218.322 1.218.966 0 .663-.406.994-1.218.994H7.19v.476c0 .42-.116.737-.35.952-.233.215-.536.322-.91.322-.373 0-.676-.107-.91-.322-.224-.215-.336-.532-.336-.952v-.476H1.562c-.336 0-.602-.103-.798-.308a1.071 1.071 0 0 1-.294-.77c0-.327.103-.635.308-.924l4.004-5.712c.13-.187.294-.327.49-.42.206-.103.416-.154.63-.154.355 0 .658.112.91.336.252.224.378.537.378.938v5.054h.308Zm-4.494 0h1.68v-2.422l-1.68 2.422Zm11.685-2.828c.606 0 1.143.135 1.61.406a2.72 2.72 0 0 1 1.106 1.12c.27.476.406 1.027.406 1.652 0 .672-.159 1.265-.476 1.778-.318.513-.766.91-1.344 1.19-.579.28-1.246.42-2.002.42a5.914 5.914 0 0 1-1.708-.252 4.635 4.635 0 0 1-1.428-.7 1.381 1.381 0 0 1-.336-.378 1.148 1.148 0 0 1-.098-.49c0-.29.08-.532.238-.728.158-.205.354-.308.588-.308.14 0 .256.019.35.056.093.037.233.107.42.21l.28.14c.29.14.55.252.784.336.242.084.504.126.784.126.522 0 .91-.103 1.162-.308.252-.215.378-.546.378-.994 0-.42-.13-.747-.392-.98-.262-.233-.626-.35-1.092-.35-.28 0-.537.023-.77.07-.224.047-.49.13-.798.252a1.338 1.338 0 0 1-.63.154.987.987 0 0 1-.658-.224.789.789 0 0 1-.266-.616v-3.794c0-.392.102-.69.308-.896.205-.205.5-.308.882-.308h4.34c.812 0 1.218.322 1.218.966 0 .653-.406.98-1.218.98h-3.024v1.722c.392-.168.854-.252 1.386-.252Zm9.668-.042c.56 0 1.064.14 1.512.42.448.27.798.653 1.05 1.148.262.485.392 1.036.392 1.652 0 .653-.15 1.241-.448 1.764-.29.513-.695.915-1.218 1.204-.522.29-1.115.434-1.778.434-1.316 0-2.333-.43-3.052-1.288-.718-.859-1.078-2.081-1.078-3.668 0-1.045.168-1.955.504-2.73.346-.784.826-1.386 1.442-1.806.626-.42 1.354-.63 2.184-.63.523 0 1.055.084 1.596.252.55.168 1.022.401 1.414.7.159.121.27.247.336.378.075.13.112.294.112.49 0 .29-.084.537-.252.742a.73.73 0 0 1-.588.294 1.02 1.02 0 0 1-.35-.056 8.665 8.665 0 0 1-.42-.21l-.308-.154a8.518 8.518 0 0 0-.77-.336 1.87 1.87 0 0 0-.644-.112c-.476 0-.863.22-1.162.658-.29.43-.462 1.036-.518 1.82.215-.299.5-.532.854-.7a2.68 2.68 0 0 1 1.19-.266Zm-.644 4.648c.364 0 .654-.121.868-.364.215-.243.322-.565.322-.966 0-.41-.107-.733-.322-.966-.205-.243-.494-.364-.868-.364-.364 0-.658.121-.882.364-.214.243-.322.565-.322.966 0 .392.112.714.336.966.224.243.514.364.868.364Z" />
    </svg>
  );
}

export default withIcon(NumberIcon);
