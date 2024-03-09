import { Icon } from "@iconify-icon/react";

export default function OptionMenu() {
  return (
    <div className="z-40 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full flex items-center justify-center max-md:py-4 max-md:bg-zinc-900">
      <ul className="option-menu flex cursor-pointer text-base font-light justify-around w-full max-md:w-8/12 md:*:mr-3 *:flex *:items-center *:justify-center *:max-md:flex-col">
        <li className="hover:underline">
          <Icon
            icon="material-symbols:home"
            className="md:mr-1 text-lg max-md:text-3xl"
          />
          <p className="max-md:text-xs">Home</p>
        </li>
        <li className="hover:underline">
          <Icon icon="mdi:cart" className="md:mr-1 text-lg max-md:text-3xl" />
          <p className="max-md:text-xs">Cart</p>
        </li>
        <li className="hover:underline">
          <Icon
            icon="lets-icons:shop"
            className="md:mr-1 text-lg max-md:text-3xl"
          />
          <p className="max-md:text-xs">My Shop</p>
        </li>
      </ul>
    </div>
  );
}
