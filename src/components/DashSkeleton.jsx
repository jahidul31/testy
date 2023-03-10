import React from "react";

const DashSkeleton = () => {
  return (
    <>
      <div className="py-5 px-5 mb-4  bg-white shadow-md">
        <div role="status" class="w-full animate-pulse">
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80%] mb-4"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[70%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[60%]"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
        </div>
      </div>
      <div className="py-5 px-5 mb-4  bg-white shadow-md">
        <div role="status" class="w-full animate-pulse">
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80%] mb-4"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[70%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[60%]"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
        </div>
      </div>
      <div className="py-5 px-5 mb-4  bg-white shadow-md">
        <div role="status" class="w-full animate-pulse">
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80%] mb-4"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[70%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[60%]"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[40%] mb-2.5"></div>
        </div>
      </div>
    </>
  );
};

export default DashSkeleton;
