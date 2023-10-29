'use client';

import { Sidebar } from 'flowbite-react';
import "./container.css"

export default function Menu() {
    return (
        <Sidebar className={`fixed top-0 left-0 p-3 bg-zinc-900 h-full w-3/12 overflow-y-auto`}>
            <Sidebar.Items className='mt-12 ml-3 hover:none'>
                <Sidebar.ItemGroup className='hover:bg-transparent'>
                    <Sidebar.Item href="/" className='text-white hover:bg-transparent hover:underline'>
                        <p>Página inicial</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/hemisferio-direito" className='text-white hover:bg-transparent hover:underline'>
                        <p>Hemisfério direito</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/hemisferio-esquerdo" className='text-white hover:bg-transparent hover:underline'>
                        <p>Hemisfério esquerdo</p>
                    </Sidebar.Item>
                    <div className='flex'>
                        <Sidebar.Item href="/lobo-frontal" className='text-white hover:bg-transparent hover:underline'>
                            <p>Lobo frontal</p>
                        </Sidebar.Item>
                        <Sidebar.Collapse className='text-white hover:bg-transparent hover:underline hover:scale-125'>
                            <Sidebar.Item href="/lobo-frontal/area-pre-central" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área pré-central</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/area-pre-motora" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área pré-motora</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/cortex-pre-frontal" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex pré-frontal</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/giro-frontal-medio" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Giro frontal médio</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/giro-frontal-superior" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Giro frontal superior</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/lobo-frontal-inferior" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Lobo frontal inferior</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-frontal/lobo-frontal-medio" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Lobo frontal médio</p>
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Sidebar.Item href="/lobo-parietal" className="text-white hover:bg-transparent hover:underline">
                            <p>Lobo parietal</p>
                        </Sidebar.Item>
                        <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                            <Sidebar.Item href="/lobo-parietal/area-associacao-parietal" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área associação parietal</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-parietal/area-integracao-multissensorial" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área de integração multissensorial</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-parietal/area-reconhecimento-objetos" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área de reconhecimento de objetos</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-parietal/cortex-somatossensorial-primario" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex somatossensorial primário</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-parietal/cortex-somatossensorial-secundario" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex somatossensorial secundário</p>
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Sidebar.Item href="/lobo-occipital" className="text-white hover:bg-transparent hover:underline">
                            <p>Lobo occipital</p>
                        </Sidebar.Item>
                        <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                            <Sidebar.Item href="/lobo-occipital/area-17-brodmann" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área 17 de Brodmann</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-occipital/areas-associativas-visuais" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Áreas associativas visuais</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-occipital/cortex-visual-primario" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex visual primário</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-occipital/cortex-visual-secundario" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex visual secundário</p>
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Sidebar.Item href="/lobo-temporal" className="text-white hover:bg-transparent hover:underline">
                            <p>Lobo temporal</p>
                        </Sidebar.Item>
                        <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                            <Sidebar.Item href="/lobo-temporal/area-brodmann-20-21" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área 20 e 21 de Brodmann</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-temporal/area-wernicke" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Área wernicke</p>
                            </Sidebar.Item>
                            <div className='flex'>
                                <Sidebar.Item href="/lobo-temporal/cortex-auditivo" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                    <p>Córtex auditivo</p>
                                </Sidebar.Item>
                                <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                                    <Sidebar.Item href="/lobo-temporal/cortex-auditivo/area-brodmann-41" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Área de Brodmann 41</p>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/lobo-temporal/cortex-auditivo/area-brodmann-42" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Área de Brodmann 42</p>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/lobo-temporal/cortex-auditivo/areas-associacao-auditiva" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Áreas de associação auditiva</p>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/lobo-temporal/cortex-auditivo/cortex-auditivo-secundario" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Córtex auditivo secundário</p>
                                    </Sidebar.Item>
                                </Sidebar.Collapse>
                            </div>
                            <Sidebar.Item href="/lobo-temporal/cortex-temporal-inferior" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Córtex temporal inferior</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/lobo-temporal/giro-fusiforme" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                <p>Giro fusiforme</p>
                            </Sidebar.Item>
                            <div className='flex'>
                                <Sidebar.Item href="/lobo-temporal/hipocampo" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                    <p>Hipocampo</p>
                                </Sidebar.Item>
                                <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                                    <Sidebar.Item href="/lobo-temporal/hipocampo/campos-ammon" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Campos ammon</p>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/lobo-temporal/hipocampo/fornix" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Fórnix</p>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/lobo-temporal/hipocampo/giro-denteado" className="ml-[-100px] text-white hover:bg-transparent hover:underline">
                                        <p>Giro denteado</p>
                                    </Sidebar.Item>
                                </Sidebar.Collapse>
                            </div>
                        </Sidebar.Collapse>
                    </div>
                    <div className='flex'>
                        <Sidebar.Item href="/cerebelo" className="text-white hover:bg-transparent hover:underline">
                            <p>Cerebelo</p>
                        </Sidebar.Item>
                        <Sidebar.Collapse className="text-white hover:bg-transparent hover:underline">
                            <Sidebar.Item href="/cerebelo/lobo-anterior" className="ml-[-70px] text-white hover:bg-transparent hover:underline">
                                <p>Lobo anterior</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/cerebelo/lobo-posterior" className="ml-[-70px] text-white hover:bg-transparent hover:underline">
                                <p>Lobo posterior</p>
                            </Sidebar.Item>
                            <Sidebar.Item href="/cerebelo/vermis" className="ml-[-70px] text-white hover:bg-transparent hover:underline">
                                <p>Vermis</p>
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                    </div>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}


