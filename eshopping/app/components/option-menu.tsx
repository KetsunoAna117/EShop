export default function OptionMenu() {
  return (
    <div className="z-40 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full flex items-center justify-center max-md:py-6 max-md:bg-zinc-900">
      <ul className="option-menu flex cursor-pointer text-base font-light">
        <li className="hover:underline mr-3">Home</li>
        <li className="hover:underline mr-3">Cart</li>
        <li className="hover:underline">MyShop</li>
      </ul>
    </div>
  );
}
