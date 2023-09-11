'use client';

import { Sidebar } from 'flowbite-react';

export default function Menu() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Dashboard
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Collapse
                        label="E-commerce"
                    >
                        <Sidebar.Item href="#">
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#">
                            Sales
                        </Sidebar.Item>
                        <Sidebar.Item href="#">
                            Refunds
                        </Sidebar.Item>
                        <Sidebar.Item href="#">
                            Shipping
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Inbox
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Users
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Products
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Sign In
                        </p>
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="#"
                    >
                        <p>
                            Sign Up
                        </p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}


