import { ComponentProps, JSX } from 'solid-js';
import './CoolButton.css';

interface CoolButtonProps extends ComponentProps<'button'> {
  onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
}

export default function CoolButton(props: CoolButtonProps) {
  // const spanRef = useRef<HTMLSpanElement>(null)
  // const buttonRef = useRef<HTMLButtonElement>(null)
  let spanRef: HTMLSpanElement | undefined = undefined;
  let buttonRef: HTMLButtonElement | undefined = undefined;
  // buttonRef.width

  const handleClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = (
    e,
  ) => {
    // let relX = e.nativeEvent.offsetX
    // let relY = e.nativeEvent.offsetY
    let relX = e.offsetX;
    let relY = e.offsetY;
    if (spanRef) {
      spanRef.style.top = relY + 'px';
      spanRef.style.left = relX + 'px';
    }
    let width = buttonRef?.getBoundingClientRect().width || 0;
    if (spanRef) {
      spanRef.style.width = (width * 2) + 'px';
      spanRef.style.height = (width * 2) + 'px';
    }
    if (buttonRef) {
      buttonRef.style.color = 'black';
    }
    setTimeout(() => {
      if (spanRef) {
        spanRef.style.width = '0px';
        spanRef.style.height = '0px';
      }
      if (buttonRef) {
        buttonRef.style.color = 'white';
      }
    }, 500);
  };

  return (
    <button
      class='coolButton'
      ref={buttonRef}
      onClick={(e) => {
        handleClick(e);

        let func = props.onClick as JSX.EventHandler<
          HTMLButtonElement,
          MouseEvent
        >;
        func(e);
        // if (props.onClick && typeof props.onClick != 'BoundEventHandler<HTMLButtonElement, MouseEvent>') {
        //     props.onClick(e)
        // }
        // if (props.onClick && typeof props.onClick !== JSX.BoundEventHandler<HTMLButtonElement, MouseEvent>) (props.onClick as JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>)(e)
      }}
    >
      {props.title}
      <span ref={spanRef}></span>
    </button>
  );
}
