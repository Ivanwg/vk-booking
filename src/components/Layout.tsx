
interface IProps {
  children: React.ReactNode;
}

const Layout = ({children}: IProps) => {
  return ( 
    <main>
      <div className='container'>
        <div className='content'>
          {children}
        </div>
      </div>
    </main>
   );
}
 
export default Layout;