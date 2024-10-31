import React, { ForwardRefRenderFunction, useEffect } from "react";

interface ChatMessageContentAreaProps {
  children?: React.ReactNode;
}

const ChatMessageContentArea: ForwardRefRenderFunction<
  HTMLDivElement,
  ChatMessageContentAreaProps
> = (props, ref) => {
  useEffect(() => {
    const links = ref.current?.querySelectorAll('a'); // Select all anchor tags in the current ref
    if (links) {
      links.forEach(link => {
        link.setAttribute('target', '_blank'); // Open in new tab
        link.setAttribute('rel', 'noopener noreferrer'); // Security measure
      });
    }
  }, [props.children]); // Run effect when children change

  return (
    <div
      ref={ref}
      className="container max-w-3xl relative min-h-screen pb-[240px] pt-16 flex flex-col gap-16"
    >
      {props.children}
    </div>
  );
};

export default React.forwardRef(ChatMessageContentArea);
