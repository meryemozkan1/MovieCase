type CompanyType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type LanguageType = { english_name: string; iso_639_1: string; name: string };

type CountryType = { iso_3166_1: string; name: string };

type PropsType = {
  data: CompanyType[] | CountryType[] | LanguageType[];
};

const ItemList = ({ data }: PropsType) => {
  return (
    <div className="my-5">
      <div className="flex gap-5">
        {data.map((item) => (
          <p className="text-gray-400">{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
