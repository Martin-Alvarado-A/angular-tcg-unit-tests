export class DataService {
  constructor() {}

  getDetails(): Promise<string> {
    const resultPromise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });

    return resultPromise;
  }
}
