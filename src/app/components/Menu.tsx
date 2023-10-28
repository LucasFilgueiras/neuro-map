'use client';

import { Sidebar } from 'flowbite-react';
import Link from 'next/link';

export default function Menu() {
    return (
        <Sidebar className={`fixed top-0 left-0 p-3 bg-zinc-900 h-full w-3/12 overflow-y-auto`} color='black'>
            <Sidebar.Items className='mt-12 ml-3'>
                <Sidebar.ItemGroup>
                    <Link href="/" className='text-white'>
                        <p>Página inicial</p>
                    </Link>
                    <Link href="/hemisferio-direito" className='text-white'>
                        <p>Hemisfério direito</p>
                    </Link>
                    <Link href="/hemisferio-esquerdo" className='text-white'>
                        <p>Hemisfério esquerdo</p>
                    </Link>
                    <div className='flex text-white'>
                        <Link href="/lobo-frontal" className='text-white'>
                            <p>Lobo frontal</p>
                        </Link>
                        <Sidebar.Collapse className='text-white'>
                            <Link href="/lobo-frontal/area-pre-central" className="ml-[-100px] text-white">
                                <p>Área pré-central</p>
                            </Link>
                            <Link href="/lobo-frontal/area-pre-motora" className="ml-[-100px] text-white">
                                <p>Área pré-motora</p>
                            </Link>
                            <Link href="/lobo-frontal/cortex-pre-frontal" className="ml-[-100px] text-white">
                                <p>Córtex pré-frontal</p>
                            </Link>
                            <Link href="/lobo-frontal/giro-frontal-medio" className="ml-[-100px] text-white">
                                <p>Giro frontal médio</p>
                            </Link>
                            <Link href="/lobo-frontal/giro-frontal-superior" className="ml-[-100px] text-white">
                                <p>Giro frontal superior</p>
                            </Link>
                            <Link href="/lobo-frontal/lobo-frontal-inferior" className="ml-[-100px] text-white">
                                <p>Lobo frontal inferior</p>
                            </Link>
                            <Link href="/lobo-frontal/lobo-frontal-medio" className="ml-[-100px] text-white">
                                <p>Lobo frontal médio</p>
                            </Link>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex items-center'>
                        <Link href="/lobo-parietal" className="text-white">
                            <p>Lobo parietal</p>
                        </Link>
                        <Sidebar.Collapse className="text-white">
                            <Link href="/lobo-parietal/area-associacao-parietal" className="ml-[-100px] text-white">
                                <p>Área associação parietal</p>
                            </Link>
                            <Link href="/lobo-parietal/area-integracao-multissensorial" className="ml-[-100px] text-white">
                                <p>Área de integração multissensorial</p>
                            </Link>
                            <Link href="/lobo-parietal/area-reconhecimento-objetos" className="ml-[-100px] text-white">
                                <p>Área de reconhecimento de objetos</p>
                            </Link>
                            <Link href="/lobo-parietal/cortex-somatossensorial-primario" className="ml-[-100px] text-white">
                                <p>Córtex somatossensorial primário</p>
                            </Link>
                            <Link href="/lobo-parietal/cortex-somatossensorial-secundario" className="ml-[-100px] text-white">
                                <p>Córtex somatossensorial secundário</p>
                            </Link>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Link href="/lobo-occipital" className="text-white">
                            <p>Lobo occipital</p>
                        </Link>
                        <Sidebar.Collapse className="text-white">
                            <Link href="/lobo-occipital/area-17-brodmann" className="ml-[-100px] text-white">
                                <p>Área 17 de Brodmann</p>
                            </Link>
                            <Link href="/lobo-occipital/areas-associativas-visuais" className="ml-[-100px] text-white">
                                <p>Áreas associativas visuais</p>
                            </Link>
                            <Link href="/lobo-occipital/cortex-visual-primario" className="ml-[-100px] text-white">
                                <p>Córtex visual primário</p>
                            </Link>
                            <Link href="/lobo-occipital/cortex-visual-secundario" className="ml-[-100px] text-white">
                                <p>Córtex visual secundário</p>
                            </Link>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Link href="/lobo-temporal" className="text-white">
                            <p>Lobo temporal</p>
                        </Link>
                        <Sidebar.Collapse className="text-white">
                            <Link href="/lobo-temporal/area-brodmann-20-21" className="ml-[-100px] text-white">
                                <p>Área 20 e 21 de Brodmann</p>
                            </Link>
                            <Link href="/lobo-temporal/area-wernicke" className="ml-[-100px] text-white">
                                <p>Área wernicke</p>
                            </Link>
                            <div className='flex'>
                                <Link href="/lobo-temporal/cortex-auditivo" className="ml-[-100px] text-white">
                                    <p>Córtex auditivo</p>
                                </Link>
                                <Sidebar.Collapse className="text-white">
                                    <Link href="/lobo-temporal/cortex-auditivo/area-brodmann-41" className="ml-[-100px] text-white">
                                        <p>Área de Brodmann 41</p>
                                    </Link>
                                    <Link href="/lobo-temporal/cortex-auditivo/area-brodmann-42" className="ml-[-100px] text-white">
                                        <p>Área de Brodmann 42</p>
                                    </Link>
                                    <Link href="/lobo-temporal/cortex-auditivo/areas-associacao-auditiva" className="ml-[-100px] text-white">
                                        <p>Áreas de associação auditiva</p>
                                    </Link>
                                    <Link href="/lobo-temporal/cortex-auditivo/cortex-auditivo-secundario" className="ml-[-100px] text-white">
                                        <p>Córtex auditivo secundário</p>
                                    </Link>
                                </Sidebar.Collapse>
                            </div>
                            <Link href="/lobo-temporal/cortex-temporal-inferior" className="ml-[-100px] text-white">
                                <p>Córtex temporal inferior</p>
                            </Link>
                            <Link href="/lobo-temporal/giro-fusiforme" className="ml-[-100px] text-white">
                                <p>Giro fusiforme</p>
                            </Link>
                            <div className='flex'>
                                <Link href="/lobo-temporal/hipocampo" className="ml-[-100px] text-white">
                                    <p>Hipocampo</p>
                                </Link>
                                <Sidebar.Collapse className="text-white">
                                    <Link href="/lobo-temporal/hipocampo/campos-ammon" className="ml-[-100px] text-white">
                                        <p>Campos ammon</p>
                                    </Link>
                                    <Link href="/lobo-temporal/hipocampo/fornix" className="ml-[-100px] text-white">
                                        <p>Fórnix</p>
                                    </Link>
                                    <Link href="/lobo-temporal/hipocampo/giro-denteado" className="ml-[-100px] text-white">
                                        <p>Giro denteado</p>
                                    </Link>
                                </Sidebar.Collapse>
                            </div>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Link href="/cerebelo" className="text-white">
                            <p>Cerebelo</p>
                        </Link>
                        <Sidebar.Collapse className="text-white">
                            <Link href="/cerebelo/lobo-anterior" className="ml-[-70px] text-white">
                                <p>Lobo anterior</p>
                            </Link>
                            <Link href="/cerebelo/lobo-posterior" className="ml-[-70px] text-white">
                                <p>Lobo posterior</p>
                            </Link>
                            <Link href="/cerebelo/vermis" className="ml-[-70px] text-white">
                                <p>Vermis</p>
                            </Link>
                        </Sidebar.Collapse>
                    </div>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}


