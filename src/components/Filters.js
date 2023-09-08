import { useProductsContext } from '../context/products_context';
import { getUniqueFilters } from '../utils/helpers';
import { Wrapper } from '../styles/Filters';

export const Filters = () => {
  const { all_products, updateFilters } = useProductsContext();

  const filters = all_products && getUniqueFilters(all_products);

  const renderList = [];

  for (const key in filters) {
    renderList.push(
      <div key={key}>
        <h2>{key}</h2>
        {[...filters[key]].map((item) => {
          return (
            <div key={item}>
              <label className="container">
                {item}
                <input
                  type="checkbox"
                  name={key}
                  value={item}
                  onChange={(e) => updateFilters(e)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="content">{renderList}</div>
    </Wrapper>
  );
};
