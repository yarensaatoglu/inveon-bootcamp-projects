using MOVIE.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MOVIE.DataAccess.Abstracts
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Category GetCategoryById(int id);
        Category CreateCategory(Category category);
        Category UpdateCategory(Category category);
        void DeleteCategory(int id);
    }
}
