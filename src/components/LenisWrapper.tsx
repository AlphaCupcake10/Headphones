import { ReactLenis } from "@studio-freight/react-lenis"
import { ReactNode } from "react";

export default function LenisWrapper(props:{children:ReactNode})
{ 
  return (
    <>
      <ReactLenis root>
        { props.children }
      </ReactLenis>
    </>
  )
}