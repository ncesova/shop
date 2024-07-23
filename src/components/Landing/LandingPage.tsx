import {Link} from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="mt-20 flex h-max w-full flex-col items-center justify-center gap-6 p-4">
      <span className="font-heading text-3xl font-bold">Welcome to Store</span>
      <span className="font-body text-xl text-slate-500">
        Discover new products every week for very pleasant prices
      </span>
      <Link
        to="/store"
        className="rounded-2xl bg-slate-700 p-6 font-body font-extrabold tracking-widest text-white">
        SHOP NOW
      </Link>
      <img src="../src/assets/images/Sneaker.jpeg" className="mt-24" />
    </div>
  );
}
