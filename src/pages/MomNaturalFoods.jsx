import React from "react";

const MomNaturalFoods = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold">
        Simple, Delicious, Just Like It Is… Mom's Natural Foods!
      </h2>
      <p className="italic mt-2">
        We pursued <strong>"good food"</strong> with real ingredients.
      </p>
      <p className="mt-1">
        We enriched our products with fruits, nuts, seeds, and grains grown in these lands!
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div>
          <div className="inline-block border-2 border-yellow-400 rounded-full px-4 py-2 text-xl font-bold">
            1
          </div>
          <h3 className="mt-4 font-semibold">Extra Virgin Olive Oil</h3>
          <p className="mt-2">
            In our products, we prefer only extra virgin, low-acidity Ayvalık olive oil — just as we use in our own home.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <div className="inline-block border-2 border-yellow-400 rounded-full px-4 py-2 text-xl font-bold">
            2
          </div>
          <h3 className="mt-4 font-semibold">No Added Sugar & No Additives</h3>
          <p className="mt-2">
            We use apple juice with a low glycemic index as a natural sweetener in our products, and we never use additives.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <div className="inline-block border-2 border-yellow-400 rounded-full px-4 py-2 text-xl font-bold">
            3
          </div>
          <h3 className="mt-4 font-semibold">Real Fruit Instead of Flavoring</h3>
          <p className="mt-2">
            The most important point in our products is using real ingredients. Therefore, we do not include preservatives, artificial sweeteners, colorings, or flavorings.
          </p>
        </div>
      </div>

      <button className="mt-8 bg-black text-white px-6 py-2 cursor-pointer rounded hover:bg-gray-800">
        All Products →
      </button>
    </section>
  );
};

export default MomNaturalFoods;
