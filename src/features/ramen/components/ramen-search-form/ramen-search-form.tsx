"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export type RamenSearchFormProps = {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

export const RamenSearchForm: React.FC<RamenSearchFormProps> = ({
  defaultValue,
  placeholder = "キーワードで検索",
  className = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q") as string;

    const params = new URLSearchParams(searchParams.toString());

    if (query?.trim()) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    // ページをリセット
    params.delete("page");

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="flex items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg px-4 py-3 border border-gray-200 focus-within:border-gray-300 focus-within:bg-white">
        <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
        <input
          type="text"
          name="q"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500 text-sm"
        />
      </div>
    </form>
  );
};
