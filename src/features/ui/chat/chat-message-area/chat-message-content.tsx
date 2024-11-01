import React, { useEffect, useRef, forwardRef, MutableRefObject } from "react";
 
interface ChatMessageContentAreaProps {
  children?: React.ReactNode;
}
 
const ChatMessageContentArea = forwardRef<HTMLDivElement, ChatMessageContentAreaProps>(
  (props, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const combinedRef = (ref as MutableRefObject<HTMLDivElement>) || internalRef;
 
    useEffect(() => {
      if (combinedRef.current) {
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
  }
);
 
export default ChatMessageContentArea;
