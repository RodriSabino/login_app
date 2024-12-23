"use client";

import React from 'react'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi"; 


export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div className="p-4">
      {session?.user && (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
              <span className="font-medium">{session.user.name}</span>
          </div>
          
          <button 
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm"
          >
            <FiLogOut size={14} />
            Salir
          </button>
        </div>
      )}
      
      {/* Resto del contenido de tu página */}
    </div>
  )
}