<template>
    <div class="container mx-auto p-4 min-h-screen">
        <h1 class="text-3xl font-bold mb-4">About Me</h1>
        <AboutMe />
        <!-- Toolkit -->
        <div class="pt-8">
            <h2 class="text-2xl font-semibold mb-2">Toolkit</h2>
            <p class="mb-4 text-xl">Here are some of the tools and technologies I use:</p>
            <div class="overflow-x-auto max-w-1/2">
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="text-lg font-semibold">Backend Technologies</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:python-dark" size="48" />
                                    <Icon name="skill-icons:lua-dark" size="48" />
                                    <Icon name="skill-icons:cs" size="48" />
                                    <Icon name="skill-icons:c" size="48" />
                                    <Icon name="skill-icons:bash-dark" size="48" />
                                    <Icon name="skill-icons:golang" size="48" />
                                    <Icon name="skill-icons:kotlin-dark" size="48" />
                                    <Icon name="skill-icons:bun-dark" size="48" />
                                    <Icon name="skill-icons:fastapi" size="48" />
                                    <Icon name="skill-icons:flask-dark" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">Frontend Technologies</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:html" size="48" />
                                    <Icon name="skill-icons:css" size="48" />
                                    <Icon name="skill-icons:javascript" size="48" />
                                    <Icon name="skill-icons:typescript" size="48" />
                                    <Icon name="skill-icons:nuxtjs-dark" size="48" />
                                    <Icon name="skill-icons:nextjs-dark" size="48" />
                                    <Icon name="skill-icons:vuejs-dark" size="48" />
                                    <Icon name="skill-icons:react-dark" size="48" />
                                    <Icon name="skill-icons:tailwindcss-dark" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">Database Technologies</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:mysql-dark" size="48" />
                                    <Icon name="skill-icons:postgresql-dark" size="48" />
                                    <Icon name="skill-icons:sqlite" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">DevOps/Cloud Technologies</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:aws-dark" size="48" />
                                    <Icon name="skill-icons:cloudflare-dark" size="48" />
                                    <Icon name="skill-icons:docker" size="48" />
                                    <Icon name="devicon:firebase" size="48" />
                                    <Icon name="skill-icons:gcp-dark" size="48" />
                                    <Icon name="skill-icons:git" size="48" />
                                    <Icon name="skill-icons:github-dark" size="48" />
                                    <Icon name="skill-icons:githubactions-dark" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">Media Editing</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:aftereffects" size="48" />
                                    <Icon name="skill-icons:audition" size="48" />
                                    <Icon name="skill-icons:figma-dark" size="48" />
                                    <Icon name="skill-icons:premiere" size="48" />
                                    <Icon name="skill-icons:photoshop" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">IDEs/Editors</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:neovim-dark" size="48" />
                                    <Icon name="skill-icons:vscode-dark" size="48" />
                                    <Icon name="skill-icons:rider-dark" size="48" />
                                    <Icon name="skill-icons:clion-dark" size="48" />
                                    <Icon name="skill-icons:idea-dark" size="48" />
                                    <Icon name="skill-icons:visualstudio-dark" size="48" />
                                    <Icon name="skill-icons:obsidian-dark" size="48" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-lg font-semibold">Operating Systems</td>
                            <td>
                                <div class="grid grid-cols-5 gap-4">
                                    <Icon name="skill-icons:windows-dark" size="48" />
                                    <Icon name="skill-icons:arch-dark" size="48" />
                                    <Icon name="skill-icons:debian-dark" size="48" />
                                    <Icon name="skill-icons:kali-dark" size="48" />
                                    <Icon name="skill-icons:mint-dark" size="48" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <WorkInProgress />
    </div>
</template>
