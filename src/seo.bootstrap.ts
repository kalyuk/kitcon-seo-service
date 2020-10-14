import 'reflect-metadata';
import './controllers';

import { confugure, resolve } from '@kitcon/core/annotations';
import { Bootstrap } from '@kitcon/node/annotations';
import { HttpService } from '@kitcon/node/services/http.service';
import { DatabusService } from '@kitcon/node/services/abstract/databus.service';
import { RedisDatabusService } from '@kitcon/node/services/redis-databus.service';

@Bootstrap
export class SeoBootstrap {

    @confugure
    private databusService(): DatabusService {
        return new RedisDatabusService('SEO-SERVICE');
    }

    @resolve
    private readonly httpService: HttpService;

    init() {
        this.databusService()
            .listen();
        this.httpService.listen();
    }
}
