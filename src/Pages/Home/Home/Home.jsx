import Banner from '../Banner/Banner';
import Phone from '../Phone/Phone';
import Category from '../Category/Category';
import Some from '../Some/Some';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Some></Some>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;