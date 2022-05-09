import { PureComponent } from "react";
import { CategoryWrap, StyledLink } from "./styled";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

class Category extends PureComponent {

    renderNavBarSkeleton() {
        return (
            <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
                <li><Skeleton width={100} height={30} /></li>
                <li><Skeleton width={100} height={30} /></li>
            </SkeletonTheme>
        )
    }

    renderNavbar() {
        const { categories } = this.props;
        return (categories.map((category, index) => (
            <StyledLink key={index} id={category} to={`/${category}`} exact>
                {category}
            </StyledLink>
        )
        ))
    };

    render() {
        return (
            <CategoryWrap>
                {this.props.categories.length > 0 ? (this.renderNavbar()) : (this.renderNavBarSkeleton())}
            </CategoryWrap>
        )
    }
}

export default Category