interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className='px-5 py-3 border-solid border-b-8 border-[#004c76] bg-background-main'>
      <h1 className='text-3xl font-semibold text-font-color-header'>
        { title }
      </h1>
    </div>
  );
};

export default Header;