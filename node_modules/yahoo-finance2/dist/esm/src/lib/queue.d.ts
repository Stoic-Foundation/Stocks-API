interface Job {
    func: () => Promise<void>;
    resolve: (arg: any) => void;
    reject: (arg: any) => void;
}
export interface QueueOptions {
    concurrency?: number;
    timeout?: number;
}
export default class Queue {
    concurrency: number;
    _running: number;
    _queue: Array<Job>;
    constructor(opts?: QueueOptions);
    runNext(): void;
    checkQueue(): void;
    add(func: () => Promise<any>): Promise<unknown>;
}
export {};
