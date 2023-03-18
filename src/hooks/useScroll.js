const useScroll = () => {
  return (id) => {
    const element = document?.getElementById(id)
    element?.scrollIntoView({behavior: "smooth"})
  }
}

export default useScroll