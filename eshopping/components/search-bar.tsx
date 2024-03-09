import { Icon } from "@iconify-icon/react";

export default function SearchBar({
  onChange,
  placeholder,
  onEnterButtonPressed,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onEnterButtonPressed: () => void;
}) {
  function onUserClickedEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onEnterButtonPressed();
    }
  }

  return (
    <div className="w-9/12 bg-white flex items-center px-5 py-3 rounded max-md:w-full">
      <Icon icon="map:search" className="text-gray-700 mr-3 text-lg" />
      <input
        onKeyDown={onUserClickedEnter}
        placeholder={placeholder}
        onChange={onChange}
        className="flex-1 text-black outline-none border-none bg-transparent text-sm"
      />
    </div>
  );
}
