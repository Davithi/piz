import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="286" rx="4" ry="4" width="280" height="32" /> 
    <rect x="119" y="410" rx="19" ry="19" width="153" height="48" /> 
    <rect x="-1" y="327" rx="0" ry="0" width="280" height="71" /> 
    <circle cx="140" cy="136" r="136" /> 
    <rect x="2" y="416" rx="0" ry="0" width="86" height="38" />
  </ContentLoader>
)

export default Skeleton