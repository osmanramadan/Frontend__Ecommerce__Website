import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showProductStars } from '../../redux/actions/productAction';

const GetCommentStarsHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState('');
  

  const res = useSelector((state) => state.productReducer.showProductStars);


  useEffect(() => {

    setLoading(true);
    if (localStorage.getItem('id') !== null) {
      var id = JSON.parse(localStorage.getItem('id'));
    }
    dispatch(showProductStars({ id: id }));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.status == 'success') {
          console.log(res.datam,'--------=====================')
          setData(res.data);
        }
      }
    }
  }, [res.data]);

  return [data];
};

export default GetCommentStarsHook;
