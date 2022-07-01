const path = require('path');

const apiPath = path.resolve(__dirname, 'apps/api');
const webPath = path.resolve(__dirname, 'apps/web');

const ciApiPath = path.resolve(__dirname, 'out/apps/api');
const ciWebPath = path.resolve(__dirname, 'out/apps/web');

module.exports = {
    scripts: {
        prepare: {
            default: `nps prepare.web prepare.api`,
            web: `pnpm`,
            api: `nps prepare.docker prisma.migrate.dev`,
            docker: 'docker-compose up -d',
            ci: {
                web: `pnpx turbo prune --scope=web && cd out && pnpm install --frozen-lockfile`,
                api: `pnpx turbo prune --scope=api && cd out && pnpm install --frozen-lockfile && nps prisma.generate`,
            },
        },
        test: {
            default: `nps test.web test.api`,
            web: `cd ${webPath} && pnpm test:watch`,
            api: `cd ${apiPath} && pnpm test:watch`,
            ci: {
                default: `nps test.ci.web test.ci.api`,
                web: `cd ${ciWebPath} && pnpm test:ci`,
                api: `cd ${ciApiPath} && pnpm test:ci`,
            },
            watch: {
                default: `nps test.watch.web test.watch.api`,
                web: `cd ${webPath} && pnpm test:ci`,
                api: `cd ${apiPath} && pnpm test:watch`,
            },
        },
        prisma: {
            generate: `cd ${apiPath} && pnpx prisma generate`,
            studio: `cd ${apiPath} && pnpx prisma studio`,
            migrate: {
                dev: `cd ${apiPath} && pnpx prisma migrate dev`,
            },
        },
        build: {
            default: 'pnpx turbo run build',
            ci: {
                web: 'cd out && pnpm run build',
                api: 'cd out && pnpm run build',
            },
        },
        docker: {
            build: {
                default: 'nps docker.build.web docker.build.api',
                web: `docker build -t web . -f ${webPath}/Dockerfile`,
                api: `docker build -t api . -f ${apiPath}/Dockerfile`,
            },
        },
        dev: 'pnpx turbo run dev',
    },
};
