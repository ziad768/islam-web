





export type PropsReciter = {
  linkSurahs :string
  numberSurah:number 
  };

export type Reciter =  {
      id: number;
      name: string;
      image: string;
      Server: string;
      rewaya: string;
      count: string;
      letter: string;
      suras: string;
    };

    export type PropsReciters={

      reciters:Reciter[]
    }
    export type Ayah={
      number: number,
                        audio: string,
                        audioSecondary: string[],
                        text:string,
                        numberInSurah: number,
                        juz: number,
                        manzil: number,
                        page: number,
                        ruku: number,
                        hizbQuarter: number,
                        sajda: boolean

    }
    export type surah =  {
      number :number,
      name :string,
      englishName :string,
      numberOfAyahs:number,
      ayahs: Ayah[],
    }
    export type CardQW =  {
      Name: string
      Link: string
      category:string
      disc: string
      countMSQ: number
    };
