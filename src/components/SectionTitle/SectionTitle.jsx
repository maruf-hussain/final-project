
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2">--- {subheading} ---</p>
            <h3 className="uppercase text-3xl border-y-4 py-4">{heading}</h3>
     </div>
    );
};

export default SectionTitle;