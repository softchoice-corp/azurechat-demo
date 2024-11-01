import React, { useEffect, useRef, forwardRef } from "react";
 
interface ChatMessageContentAreaProps {
  children?: React.ReactNode;
}
 
const ChatMessageContentArea: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ChatMessageContentAreaProps
> = (props, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const combinedRef = ref || internalRef;
 
  useEffect(() => {
    if (combinedRef && combinedRef.current) {
      const links = combinedRef.current.querySelectorAll("a");
      links.forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  }, [props.children]);
 
  return (
<div
      ref={combinedRef}
      className="container max-w-3xl relative min-h-screen pb-[240px] pt-16 flex flex-col gap-16"
>
      {props.children}
</div>
  );
};
 
export default forwardRef(ChatMessageContentArea);
