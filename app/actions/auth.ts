'use server';

import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const DB_FILE = path.join(process.cwd(), 'users.txt');

export async function registerUser(userData: any) {
    try {
        if (!fs.existsSync(DB_FILE)) {
            fs.writeFileSync(DB_FILE, '', 'utf-8');
        }

        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        const lines = fileContent.split('\n').filter(l => l.trim().length > 0);
        
        let users = [];
        try {
           users = lines.map(l => JSON.parse(l));
        } catch(_e) {}
        
        if (users.find((u: any) => u.email === userData.email)) {
            return { error: 'El correo ya está registrado.' };
        }
        
        fs.appendFileSync(DB_FILE, JSON.stringify(userData) + '\n', 'utf-8');
        
        // Asignamos la cookie de sesión
        (await cookies()).set('session', JSON.stringify({ email: userData.email, role: userData.role }), { secure: false, path: '/' });
        return { success: true, role: userData.role };
    } catch(err) {
        console.error(err);
        return { error: 'Error al escribir el archivo de texto plano.' };
    }
}

export async function loginUser(email: string, pass: string) {
    try {
        if (!fs.existsSync(DB_FILE)) {
           return { error: 'No hay usuarios registrados.' };
        }

        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        const lines = fileContent.split('\n').filter(l => l.trim().length > 0);
        const users = lines.map(l => JSON.parse(l));
        
        const user = users.find((u: any) => u.email === email && u.password === pass);
        if (!user) {
            return { error: 'Credenciales inválidas.' };
        }
        
        (await cookies()).set('session', JSON.stringify({ email: user.email, role: user.role }), { secure: false, path: '/' });
        return { success: true, role: user.role };
    } catch(err) {
        return { error: 'Error accediendo al archivo.' };
    }
}

export async function getUserProfile() {
    try {
        const cookieStore = await cookies();
        const sessionStr = cookieStore.get('session')?.value;
        if (!sessionStr) return null;
        
        const session = JSON.parse(sessionStr);
        if (!fs.existsSync(DB_FILE)) return null;
        
        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        const lines = fileContent.split('\n').filter(l => l.trim().length > 0);
        const users = lines.map(l => JSON.parse(l));
        
        const user = users.find((u: any) => u.email === session.email);
        return user || null;
    } catch(err) {
        return null;
    }
}

export async function logoutUser() {
    (await cookies()).delete('session');
    redirect('/login');
}
