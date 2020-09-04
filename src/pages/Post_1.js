import React from "react";
import Base from "./../components/Base";
import sleepingImage from "../images/sleeping.jpg";
import carbs from "../images/carbs.jpg"

export default function Post_1() {
  return (
    <Base>
      <div className="container">
        <h1 className="title text-center m-4">Why so much of cravings?</h1>
        <div className="content">
          <p>
            As the pandemic is going on, people are more prone to do less
            physical activity and eat more. This results in deposition of fats
            and make them unfit. The question is why do we feel so much of
            cravings?
          </p>
          
          <h1 className="text-center card-title">Stress</h1>
          <img
            src="https://media.giphy.com/media/P1SXkeh3wxZ4Y/giphy.gif"
            alt=""
            //style={{ width: `40%`, height: `40%` }}
            className="helloPic img-fluid "
          />
          <p>
            Some people have a tendency of eating food while having stress.
            Eating food releases dopamine in brain, a feel-good neurotransmitter
            in the brain. So, try to avoid unnecessary stress.
          </p>

          <h1 className="text-center card-title">Sleep</h1>
          <img
            src={sleepingImage}
            alt=""
            //style={{ width: `40%`, height: `40%` }}
            className="helloPic img-fluid"
          />
          <p>
            Lack of sleep can lead us to feel cravings due to hormonal
            imbalance. Everyone should have at least 6-8 hours of good sleep.
          </p>

          <h1 className="text-center card-title">Improper Nutrition</h1>
          <p>
            This article is mainly based on this section.We should always have a
            balanced diet i.e. a proper combination of macronutrients. To get
            this, first lets know the basics, The calories that we get from the
            food are basically from 3 macronutrients are :
          </p>

          <p>1.Carbohydrate ( 4 kCal/gram )</p>
          <p>2.Proteins ( 4 kCal/gram )</p>
          <p>3.Fats ( 9 kCal/gram )</p>

          <span>
            <p className="bg-warning">
              NOTE: Water, vitamins, Fibre, Minerals don't have calories.
            </p>
          </span>

          <p>
           <b>Complex carbohydrates</b> generally have nutritional value and made up of longer chains of molecules, so body digests
            it very slowly to glucose. This leads to slow release of energy which is use
            for longer period. Hence, we do not get hungry frequently.
          </p>

          <p>
            Complex carbohydrates can be found in – Rice, brown bread , Oats ,
            wheat, pulses , fruits.
          </p>

          <p>
            Whereas, <b>Simple Carbohydrates</b> have low nutritional value and made up of shorter chains of molecules, so body digests
            it quickly as glucose. When that much of glucose is not use as an
            energy (due to physical less activity), body converts it into fats.
            As simple carbs are digested quickly, we feel hungry sooner.
          </p>

          <p>
            Simple carbohydrates can be found in – Sugar, many processed Foods,
            soft drinks, chocolates, cookies.
          </p>

          <img
            src={carbs}
            alt=""
            //style={{ width: `50%`, height: `50%` }}
            className="helloPic img-fluid"
          />

          <p>
            Avoiding the <b>sugary foods</b> at the first place is best way, don't
            place those foods infront of you .
          </p>
          <p>
            We should always eat more complex carbohydrates and minimise eating
            simple carbohydrates so that, stomach will stay filled for longer period.
            
             Also, we should eat enough proteins, at least
            60 grams per day. Drinking plenty of water is highly recommended, at
            least 3.5L per day.
          </p>

          <p>Try to have balanced nutrition meals with 40% of carbs , 30% of proteins and 30% of fats.</p>

          <p>
            <b>If you find this content helpful, let me know and share it to others.</b>
          </p>
        </div>
      </div>
    </Base>
  );
}
