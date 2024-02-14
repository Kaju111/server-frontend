
const Leader = () => {
  return (
    <section className="loader">
      <div></div>
    </section>
  )
}

export default Leader

interface SkeletonProps {
  width?: string;
  length?: number
}

export const Skeleton = ({ width = 'unset', length = 3 }: SkeletonProps) => {
  const skeletons = Array.from({ length }, (_, idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ))
  return (
    <div className="skeleton-loader" style={{ width }}>
      {skeletons}
    </div>
  )
}