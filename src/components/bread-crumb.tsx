"use client"                                                                   



// InfoCard.jsx
import React from 'react';
import { Breadcrumbs } from "@material-tailwind/react";
import { useTheme } from '@/app/ThemeProvider';

interface BreadCrumbProps {
  breadcrumbs: { href: string; label: string }[];
}

export function MyBreadCrumb({ breadcrumbs }: BreadCrumbProps) {
  const { darkTheme } = useTheme();

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : 'bg-gray-200'} w-full px-2`}>
      <Breadcrumbs className="bg-gray-500">
        {breadcrumbs.map((breadcrumb, index) => (
          <a key={index} href={breadcrumb.href} className="flex items-center opacity-90">
            {index === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            )}
            <span className="px-1">{breadcrumb.label}</span>
          </a>
        ))}
      </Breadcrumbs>
    </div>
  );
} 
