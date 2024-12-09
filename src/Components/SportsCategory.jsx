import pic0  from'../assets/ball.jpg'
import pic1  from'../assets/base1.jpg'
import pic2  from'../assets/base2.jpg'
import pic3  from'../assets/red1.webp'
import pic4  from'../assets/bat.jpg'
import pic5  from'../assets/bat1.jpg'
import pic6  from'../assets/boot-2.jpg'
import pic7  from'../assets/boot.jpg'
import pic8  from'../assets/boot.jpg'

const SportsCategory = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Sport category</h1>
            <div className='sm:w-10/12 mx-auto py-10'>
                <h1 className='ext-2xl font-bold py-4'>Ball</h1>
                <div className='lg:flex gap-4'>
                <img className='w-80 h-52' src={pic0} alt="" />
                <img className='w-80 h-52' src={pic1} alt="" />
                <img className='w-80 h-52' src={pic2} alt="" />
                <img className='w-80 h-52' src={pic3} alt="" />
                <img className='w-80 h-52' src={pic8} alt="" />
                </div>
            </div>
            <div className='sm:w-10/12 mx-auto py-10'>
                <h1 className='ext-2xl font-bold py-4'>Bat and jersey</h1>
                <div className='lg:flex gap-4'>
                <img className='w-80 h-52' src={pic4} alt="" />
                <img className='w-80 h-52' src={pic5} alt="" />
                <img className='w-80 h-52' src={pic6} alt="" />
                <img className='w-80 h-52' src={pic7} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SportsCategory;