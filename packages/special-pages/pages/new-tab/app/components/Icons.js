import { h } from 'preact'

/**
 *
 */
export function Chevron ({ ...rest }) {
    return <svg {...rest} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4995 13.9998L11.9995 8.49976L6.49951 13.9998" stroke="black" stroke-opacity="0.84"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}

export function Shield () {
    return <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 18.9248C10.2513 18.9248 10.5025 18.8677 10.7275 18.7537L10.9205 18.6558C13.1295 17.5362 15.056 16.5598 16.3439 14.6338C17.5454 12.8372 18.1591 10.2713 18.1235 6.09848C18.1204 5.73156 17.936 5.38377 17.6178 5.14475C17.2997 4.90572 16.8789 4.79883 16.4639 4.85164C15.2725 5.00323 14.3392 4.96274 13.5192 4.70846C12.6918 4.4519 11.9186 3.9592 11.0923 3.11722C10.8185 2.83828 10.4201 2.67694 10 2.6748V18.9248Z"
            fill="#876ECB"/>
        <path
            d="M10 18.9248C9.74874 18.9248 9.49748 18.8677 9.2725 18.7537L9.07949 18.6558C6.87045 17.5362 4.94397 16.5598 3.65607 14.6338C2.45459 12.8372 1.84089 10.2713 1.87646 6.09848C1.87959 5.73156 2.064 5.38377 2.38216 5.14475C2.70033 4.90572 3.12112 4.79883 3.53611 4.85164C4.7275 5.00323 5.66076 4.96274 6.4808 4.70846C7.30822 4.4519 8.08137 3.9592 8.90771 3.11722C9.18147 2.83828 9.57994 2.67694 10 2.6748V18.9248Z"
            fill="#C7B9EE"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10 2.6748C10.3452 2.6748 10.625 2.95463 10.625 3.2998V18.9248C10.625 19.27 10.3452 19.5498 10 19.5498C9.65482 19.5498 9.375 19.27 9.375 18.9248V3.2998C9.375 2.95463 9.65482 2.6748 10 2.6748Z"
            fill="#5132A9"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.02372 2.33246C8.7492 2.48062 8.49158 2.67298 8.30643 2.8595C7.57073 3.60064 7.04408 3.85875 6.30382 4.09532C5.59839 4.32075 4.75975 4.37625 3.61237 4.23161C3.04558 4.16016 2.46049 4.30401 2.0057 4.64615C1.54767 4.99072 1.25642 5.51411 1.25148 6.09347C1.21552 10.315 1.83228 13.0309 3.13653 14.9813C4.51572 17.0437 6.57089 18.0852 8.72867 19.1787L8.79689 19.2133L8.98981 19.3111C8.98983 19.3111 8.98978 19.3111 8.98981 19.3111C9.6174 19.6293 10.3825 19.6294 11.0101 19.3111C11.0101 19.3111 11.0101 19.3112 11.0101 19.3111L11.2713 19.1787C13.4291 18.0852 15.4843 17.0437 16.8635 14.9813C18.1677 13.0309 18.7845 10.3149 18.7485 6.09318C18.7436 5.51335 18.4519 4.98962 17.9932 4.64507C17.5379 4.30296 16.9522 4.15949 16.385 4.23166C15.2456 4.37664 14.4096 4.33023 13.7043 4.11153C12.967 3.88291 12.4438 3.62394 11.6961 2.86203C11.5098 2.6722 11.2504 2.47966 10.9759 2.33217C10.7113 2.18999 10.3608 2.05069 10.0015 2.04981C9.63948 2.04892 9.28757 2.19005 9.02372 2.33246ZM9.61741 3.43247C9.80402 3.33175 9.93886 3.29966 9.99846 3.29981C10.0609 3.29996 10.198 3.33321 10.3843 3.4333C10.5607 3.52807 10.7155 3.6475 10.8039 3.73759C11.7089 4.65963 12.4165 5.02093 13.3341 5.30545C14.2689 5.5953 15.2994 5.62986 16.5428 5.47166C16.8056 5.43822 17.0615 5.50851 17.2424 5.64446C17.4201 5.77797 17.4972 5.94982 17.4986 6.10383C17.5337 10.2279 16.9231 12.6435 15.8244 14.2864C14.6423 16.0541 12.8734 16.9653 10.638 18.0984L10.4449 18.1962C10.1726 18.3343 9.82743 18.3343 9.55515 18.1962L9.36208 18.0984C7.12665 16.9654 5.35768 16.0541 4.17561 14.2864C3.07695 12.6435 2.46631 10.228 2.50144 6.10412C2.50275 5.95022 2.57973 5.77853 2.75716 5.64505C2.93782 5.50914 3.19337 5.43868 3.45604 5.47179C4.71457 5.63044 5.74964 5.5847 6.68433 5.28599C7.58941 4.99675 8.29797 4.64234 9.19357 3.74012C9.28492 3.64808 9.44147 3.52743 9.61741 3.43247Z"
            fill="#5132A9"/>
    </svg>
}
