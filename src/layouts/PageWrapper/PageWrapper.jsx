import Header from "../Header/Header";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PageWrapper;