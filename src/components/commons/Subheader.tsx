interface SubheaderProps {
  title: string;
}

const Subheader = ({ title }: SubheaderProps) => {
  return (
    <div className='px-4 py-12'>
      <h1 className='text-2xl font-semibold text-font-color-header'>
        { title }
      </h1>
      <p>For the questions below, please choose the best option to complete the sentence or conversation.</p>
    </div>
  );
};

export default Subheader;