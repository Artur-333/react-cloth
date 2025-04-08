import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={290}
    height={395}
    viewBox="0 0 290 395"
    backgroundColor="#a39f9f"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="-267" rx="0" ry="0" width="259" height="260" /> 
    <rect x="159" y="109" rx="0" ry="0" width="1" height="1" /> 
    <rect x="210" y="141" rx="0" ry="0" width="3" height="8" /> 
    <rect x="116" y="28" rx="0" ry="0" width="1" height="56" /> 
    <rect x="93" y="23" rx="0" ry="0" width="7" height="6" /> 
    <rect x="3" y="6" rx="0" ry="0" width="262" height="260" /> 
    <rect x="19" y="273" rx="0" ry="0" width="222" height="25" /> 
    <rect x="21" y="302" rx="0" ry="0" width="208" height="23" /> 
    <rect x="178" y="346" rx="21" ry="21" width="95" height="41" /> 
    <rect x="11" y="348" rx="0" ry="0" width="55" height="41" /> 
    <rect x="80" y="349" rx="0" ry="0" width="51" height="40" />
  </ContentLoader>
)



