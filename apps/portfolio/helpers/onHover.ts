export const onHover = ({
  mask,
  setHovered,
}: {
  mask: boolean
  setHovered: (hoverd: boolean) => void
}) => ({
  onMouseEnter: () => {
    mask ? setHovered(true) : undefined
  },
  onMouseLeave: () => {
    mask ? setHovered(false) : undefined
  },
})
