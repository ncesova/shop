import {Link} from 'react-router-dom';
import img from '/public/Sneaker.jpeg';
import {motion} from 'framer-motion';
import {routeVariants} from '../../App';

export function LandingPage() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="initial"
      transition={{type: 'tween'}}
      className="mt-20 flex h-max w-full flex-col items-center justify-center gap-6 p-4">
      <span className="font-heading text-3xl font-bold">Welcome to Store</span>
      <span className="font-body text-xl text-slate-500">
        Discover new products every week for very pleasant prices
      </span>
      <Link
        to="/store"
        className="rounded-2xl bg-slate-700 p-6 font-body font-extrabold tracking-widest text-white">
        SHOP NOW
      </Link>
      <img src={img} className="mt-24" />
    </motion.div>
  );
}
