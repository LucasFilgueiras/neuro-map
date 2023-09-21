'use client';

import { Sidebar } from 'flowbite-react';

export default function Menu() {
    return (
        <Sidebar className='fixed top-0 left-0 p-3 bg-slate-300 h-full transition ease-in-out delay-150'>
            <Sidebar.Items className='mt-10'>
                <Sidebar.ItemGroup>
                    {/* <Sidebar.Collapse
                        label="E-commerce"
                    >
                        <Sidebar.Item href="#">
                            Products
                        </Sidebar.Item>
                    </Sidebar.Collapse> */}
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Hemisfério direito</p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Hemisfério esquerdo</p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Lobo frontal</p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Lobo parietal</p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Lobo occipital</p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>Lobo temporal</p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}


