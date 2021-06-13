export class QuestionAnswerService{
    movie10 = "Three Questions: July 31st, Privet Drive;Harry Potter series";
    movie20 = "Taboo!;The Princess and the Frog";
    movie30 = "Who played the role of Arthur Dent in the movie The Hitchhiker's Guide to the Galaxy?;Martin Freeman";
    movie40 = "Dumb Charades!;Badhai Ho";
    movie50 = "What TV show was Jack Nicholson referencing when he ad-libbed 'Here’s Johnny!' in The Shining?;The Tonight Show Starring Johnny Carson";
  
    tvshow10 = "Three Questions: Rashida Jones, Star-Lord; Parks and Recreation";
    tvshow20 = "Taboo!;The Chernobyl Miniseries";
    tvshow30 = "Dumb Charades!;Sarabhai vs Sarabhai";
    tvshow40 = "'Torchwood' and 'The Sarah Jane Adventures' are some of the spin offs of which popular, long running show?; Doctor Who";
    tvshow50 = "Every episode of X has an image or reference to Superman. What is X?; Seinfeld";
  
    music10= "Guess the song and the movie!;Khwabon Ke Parindey from Zindagi Na Milegi Dobara;Song10";
    music20= "Guess the song and the movie;Naina Da Kya Kasoor from AndhaDhun;Song20";
    music30= "Guess the song and the movie;Ladki Badi Anjaani Hai from Kuch Kuch Hota Hai;Song30";
    music40= "Guess the song and the movie;Jashn-E-Bahaaraa from Jodhaa Akbar;Song40";
    music50= "Guess the song and the movie;O Re Piya from Aaja Nachle;Song50";
    
    books10 = "E.L. James’s Fifty Shades of Grey was originally fan fiction for which book series?; The Twilight Series by Stephenie Meyer";
    books20= "Guess the series!;\nA Song of Ice and Fire by George R.R. Martin;BookCover";
    books30= "What are Issac Asimov's Three Laws of Robotics?;1)A robot may not injure a human being or, through inaction, allow a human being to come to harm. \n\n 2)A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.\
    \n\n 3)A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.";
    books40= "Chronologically, which novel comes first in C. S. Lewis’s Chronicles of Narnia series?;The Magician’s Nephew";
    books50= "Guess the connection between the following images:;\nThey represent books written by Gillian Flynn;GuessConnection";

    science10= "What is the chemical composition of Dry Ice?;Carbon Dioxide- CO2";
    science20= "If the sun suddenly stopped producing light, how much time would it take for us to find out?; 8 minutes and 19 seconds";
    science30= "After the moon and Venus, which is the third brightest object in the night sky?;The International Space Station";
    science40= "In 1951, a sample of X's cancer cells were sent to a researcher who was collecting such samples from cancer patients for research. While the other collected cells died out quickly in the lab, X's doubled every 20-24 hours. Her cells are still alive today and are being used for research. Who is X?;Henrietta Lacks";
    science50= "Pierre Gassendi, a French philosopher-scientist, observed gunfire from a distance in order to measure which natural phenomenon?;The speed of sound";

    enableMovie10 = true;
    enableMovie20 = false;
    enableMovie30 = false;
    enableMovie40 = false;
    enableMovie50 = false;
  
    enableTvshow10 = true;
    enableTvshow20 = false;
    enableTvshow30 = false;
    enableTvshow40 = false;
    enableTvshow50 = false;
  
    enableMusic10 = true;
    enableMusic20 = false;
    enableMusic30 = false;
    enableMusic40 = false;
    enableMusic50 = false;
  
  
    enableBooks10 = true;
    enableBooks20 = false;
    enableBooks30 = false;
    enableBooks40 = false;
    enableBooks50 = false;

    enableScience10 = true;
    enableScience20 = false;
    enableScience30 = false;
    enableScience40 = false;
    enableScience50 = false;

    currentCategoryandNumber:string = "";

    dispQ: boolean = false;

    isClickable(category,points){
        switch(category){
            case 'Movies': 
                switch(points){
                    case 10: return this.enableMovie10;
                    case 20: return this.enableMovie20;
                    case 30: return this.enableMovie30;
                    case 40: return this.enableMovie40;
                    case 50: return this.enableMovie50;
                }
            case 'TV Shows':
                switch(points){
                    case 10: return this.enableTvshow10;
                    case 20: return this.enableTvshow20;
                    case 30: return this.enableTvshow30;
                    case 40: return this.enableTvshow40;
                    case 50: return this.enableTvshow50;
                }
            case 'Bollywood Music': 
                switch(points){
                    case 10: return this.enableMusic10;
                    case 20: return this.enableMusic20;
                    case 30: return this.enableMusic30;
                    case 40: return this.enableMusic40;
                    case 50: return this.enableMusic50;
                }
            case 'Books': 
            switch(points){
                case 10: return this.enableBooks10;
                case 20: return this.enableBooks20;
                case 30: return this.enableBooks30;
                case 40: return this.enableBooks40;
                case 50: return this.enableBooks50;
            }

            case 'Science': 
            switch(points){
                case 10: return this.enableScience10;
                case 20: return this.enableScience20;
                case 30: return this.enableScience30;
                case 40: return this.enableScience40;
                case 50: return this.enableScience50;
            }
        }


    }

    displayQuestion(category,points){
        switch(category){
            case 'Movies':
                switch(points){
                    case 10: this.dispQ = true;
                    break;
                    case 20: if(this.enableMovie20){
                        this.dispQ = true;
                    }
                    break;
                    case 30: if(this.enableMovie30){
                        this.dispQ = true;
                    };
                    break;
                    case 40: if(this.enableMovie40){
                        this.dispQ = true;
                    }
                    break;
                    case 50: if(this.enableMovie50){
                        this.dispQ = true;
                    }
                    break;
                }
            break;

            case 'TV Shows':
                    switch(points){
                        case 10:
                            this.dispQ = true;
                        break;
                        case 20: if(this.enableTvshow20){
                            this.dispQ = true;
                        }
                        break;
                        case 30: if(this.enableTvshow30){
                            this.dispQ = true;
                        }
                        break;
                        case 40: if(this.enableTvshow40){
                            this.dispQ = true;
                        }
                        break;
                        case 50: if(this.enableTvshow50){
                            this.dispQ = true;
                        }
                        break;
                    }
            break;

            case 'Bollywood Music':
                    switch(points){
                            case 10: this.dispQ = true;
                            break;
                            case 20: if(this.enableMusic20){
                                this.dispQ = true;
                            }
                            break;
                            case 30: if(this.enableMusic30){
                                this.dispQ = true;
                            }
                            break;
                            case 40: if(this.enableMusic40){
                                this.dispQ = true;
                            }
                            break;
                            case 50: if(this.enableMusic50){
                                this.dispQ = true;
                            }
                            break;
                        }
            break;

            case 'Books':
                switch(points){
                        case 10: if(this.enableBooks10){
                            this.dispQ = true;
                        }
                        break;
                        case 20: if(this.enableBooks20){
                            this.dispQ =true;
                        }
                        break;
                        case 30: if(this.enableBooks30){
                            this.dispQ = true;
                        }
                        break;
                        case 40: if(this.enableBooks40){
                            this.dispQ = true;
                        }
                        break;
                        case 50: if(this.enableBooks50){
                            this.dispQ = true;
                        }
                        break;
                    }
            break;

            case 'Science':
                switch(points){
                        case 10: if(this.enableScience10){
                            this.dispQ = true;
                        }
                        break;
                        case 20: if(this.enableScience20){
                            this.dispQ =true;
                        }
                        break;
                        case 30: if(this.enableScience30){
                            this.dispQ = true;
                        }
                        break;
                        case 40: if(this.enableScience40){
                            this.dispQ = true;
                        }
                        break;
                        case 50: if(this.enableScience50){
                            this.dispQ = true;
                        }
                        break;
                    }
            break;



        }
    }

    clearQuestion(){
        this.dispQ = false;
    }

    

    setCurrentCategory(category: string, points: number){

        switch(category){
            case 'Movies':
                switch(points){
                    case 10: this.currentCategoryandNumber = this.movie10;
                             this.enableMovie20 = true;
                    break;
                    case 20: if(this.enableMovie20){
                        this.currentCategoryandNumber = this.movie20;
                        this.enableMovie30 = true;
                    }
                    else{
                        this.currentCategoryandNumber = "";
                    }

                    break;
                    case 30: if(this.enableMovie30){
                        this.currentCategoryandNumber = this.movie30;
                        this.enableMovie40 = true;
                    }else{
                        this.currentCategoryandNumber = "";
                    }
                    break;
                    case 40: if(this.enableMovie40){
                        this.currentCategoryandNumber = this.movie40;
                    this.enableMovie50 = true;
                    }else{
                        this.currentCategoryandNumber="";
                    }
                    break;
                    case 50: if(this.enableMovie50){
                        this.currentCategoryandNumber = this.movie50;
                    }else{
                        this.currentCategoryandNumber = "";
                    }
                    break;
                }
            break;

            case 'TV Shows':
                    switch(points){
                        case 10: this.currentCategoryandNumber = this.tvshow10;
                        this.enableTvshow20 = true;
                        break;
                        case 20: if(this.enableTvshow20){
                            this.currentCategoryandNumber = this.tvshow20;
                            this.enableTvshow30 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 30: if(this.enableTvshow30){
                            this.currentCategoryandNumber = this.tvshow30;
                            this.enableTvshow40 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 40: if(this.enableTvshow40){
                            this.currentCategoryandNumber = this.tvshow40;
                            this.enableTvshow50 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 50: if(this.enableTvshow50){
                            this.currentCategoryandNumber = this.tvshow50;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                    }
            break;

            case 'Bollywood Music':
                    switch(points){
                            case 10: this.currentCategoryandNumber = this.music10;
                            this.enableMusic20 = true;
                            break;
                            case 20: if(this.enableMusic20){
                                
                                this.currentCategoryandNumber = this.music20;
                                this.enableMusic30 = true;
                            }else{
                                this.currentCategoryandNumber = "";
                            }
                            break;
                            case 30: if(this.enableMusic30){
                                this.currentCategoryandNumber = this.music30;
                                this.enableMusic40 = true;
                            }else{
                                this.currentCategoryandNumber = "";
                            }
                            break;
                            case 40: if(this.enableMusic40){
                                this.currentCategoryandNumber = this.music40;
                                this.enableMusic50 = true;
                            }else{
                                this.currentCategoryandNumber = "";
                            }
                            break;
                            case 50: if(this.enableMusic50){
                                this.currentCategoryandNumber = this.music50;
                            }else{
                                this.currentCategoryandNumber = "";
                            }
                            break;
                        }
            break;


            case 'Books':
                switch(points){
                        case 10: if(this.enableBooks10){
                            this.currentCategoryandNumber = this.books10;
                            this.enableBooks20 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 20: if(this.enableBooks20){
                            this.currentCategoryandNumber = this.books20;
                            this.enableBooks30 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 30: if(this.enableBooks30){
                            this.currentCategoryandNumber = this.books30;
                            this.enableBooks40 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 40: if(this.enableBooks40){
                            this.currentCategoryandNumber = this.books40;
                            this.enableBooks50 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 50: if(this.enableBooks50){
                            this.currentCategoryandNumber = this.books50;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                    }
            break;

            case 'Science':
                switch(points){
                        case 10: if(this.enableScience10){
                            this.currentCategoryandNumber = this.science10;
                            this.enableScience20 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 20: if(this.enableScience20){
                            this.currentCategoryandNumber = this.science20;
                            this.enableScience30 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 30: if(this.enableScience30){
                            this.currentCategoryandNumber = this.science30;
                            this.enableScience40 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 40: if(this.enableScience40){
                            this.currentCategoryandNumber = this.science40;
                            this.enableScience50 = true;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                        case 50: if(this.enableScience50){
                            this.currentCategoryandNumber = this.science50;
                        }else{
                            this.currentCategoryandNumber = "";
                        }
                        break;
                    }
            break;



        }
    }

    clearCurrentCategoryAndNumberFlag(){
        this.currentCategoryandNumber = " ";
    }

    getQuestion(){
        return this.currentCategoryandNumber;
    }

    resetDisp(){
        this.dispQ = false;
    }
}