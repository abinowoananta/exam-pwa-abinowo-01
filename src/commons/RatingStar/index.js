/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
// import StarIcon from '@heroicons/react/24/solid/StarIcon';
import { COLORS } from '@theme_vars';
import cx from 'classnames';

// eslint-disable-next-line object-curly-newline
const RatingStar = ({
    classContainer,
    value = 1,
    maxvalue = 5,
    onChange = () => {},
    disabled = true,
    sizeIcon = 'sm',
    miniSummary = false,
    prefixName = 'noprefix',
}) => {
    const icon = [];

    const classes = cx('hover:cursor-pointer', {
        'w-[20px] h-[20px]': sizeIcon === 'sm',
        'w-[24px] h-[24px]': sizeIcon === 'md',
        'w-[28px] h-[28px]': sizeIcon === 'lg',
    });

    if (miniSummary) {
        return (
            <div role="button" className={cx('mini-summary', 'mr-0', 'p-0')} disabled={disabled}>
                {
                    React.cloneElement((
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.3446 4.07612C11.5509 3.44126 12.4491 3.44126 12.6554 4.07612L14.1659 8.72518C14.2582 9.0091 14.5228 9.20132 14.8213 9.20132H19.7096C20.3771 9.20132 20.6547 10.0555 20.1146 10.4479L16.1599 13.3212C15.9184 13.4966 15.8173 13.8077 15.9096 14.0916L17.4202 18.7406C17.6264 19.3755 16.8998 19.9034 16.3598 19.5111L12.405 16.6378C12.1635 16.4623 11.8365 16.4623 11.595 16.6378L7.64025 19.5111C7.1002 19.9034 6.37358 19.3755 6.57986 18.7406L8.09043 14.0916C8.18268 13.8077 8.08162 13.4966 7.8401 13.3212L3.88538 10.4479C3.34533 10.0555 3.62288 9.20132 4.29041 9.20132H9.17872C9.47725 9.20132 9.74183 9.0091 9.83408 8.72518L11.3446 4.07612Z" fill="#F59E0B" />
                        </svg>
                    ))
                }
            </div>
        );
    }

    for (let ind = 1; ind <= maxvalue; ind += 1) {
        if (ind <= value) {
            icon.push(
                <div role="button" className={cx('mr-0', 'p-0')} key={ind} disabled={disabled} onClick={() => onChange(ind)}>
                    {
                        React.cloneElement((
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.3446 4.07612C11.5509 3.44126 12.4491 3.44126 12.6554 4.07612L14.1659 8.72518C14.2582 9.0091 14.5228 9.20132 14.8213 9.20132H19.7096C20.3771 9.20132 20.6547 10.0555 20.1146 10.4479L16.1599 13.3212C15.9184 13.4966 15.8173 13.8077 15.9096 14.0916L17.4202 18.7406C17.6264 19.3755 16.8998 19.9034 16.3598 19.5111L12.405 16.6378C12.1635 16.4623 11.8365 16.4623 11.595 16.6378L7.64025 19.5111C7.1002 19.9034 6.37358 19.3755 6.57986 18.7406L8.09043 14.0916C8.18268 13.8077 8.08162 13.4966 7.8401 13.3212L3.88538 10.4479C3.34533 10.0555 3.62288 9.20132 4.29041 9.20132H9.17872C9.47725 9.20132 9.74183 9.0091 9.83408 8.72518L11.3446 4.07612Z" fill="#F59E0B" />
                            </svg>
                        ), {
                            className: 'h-[20px] w-[20px]',
                        })
                    }
                </div>,
            );
        } else {
            // eslint-disable-next-line no-lonely-if
            if (ind - value > 0 && ind - value < 1) {
                icon.push(
                    <div role="button" className={cx('mr-0', 'p-0')} key={ind} disabled={disabled} onClick={() => onChange(ind)}>
                        {
                            React.cloneElement((
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cx(classes, 'text-yellow-400 flex items-center justify-center desktop:hidden')}>
                                        <path
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={cx(classes, 'hidden desktop:flex definitions')}
                                    >
                                        <defs>
                                            <linearGradient id={`${prefixName}-grad2-${ind}`}>
                                                <stop offset={`${(value - (ind - 1)) * 100}%`} stopColor={COLORS.yellow[400]} />
                                                <stop offset={`${(value - (ind - 1)) * 100}%`} stopColor={COLORS.neutral[200]} />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill={`url(#${prefixName}-grad2-${ind})`}
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </>
                            ), {
                                className: 'h-[20px] w-[20px]',
                            })
                        }
                    </div>,
                );
            } else {
                icon.push(
                    <div role="button" className={cx('mr-0', 'p-0', classes)} key={ind} disabled={disabled} onClick={() => onChange(ind)}>
                        {
                            React.cloneElement((
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.3446 4.07612C11.5509 3.44126 12.4491 3.44126 12.6554 4.07612L14.1659 8.72518C14.2582 9.0091 14.5228 9.20132 14.8213 9.20132H19.7096C20.3771 9.20132 20.6547 10.0555 20.1146 10.4479L16.1599 13.3212C15.9184 13.4966 15.8173 13.8077 15.9096 14.0916L17.4202 18.7406C17.6264 19.3755 16.8998 19.9034 16.3598 19.5111L12.405 16.6378C12.1635 16.4623 11.8365 16.4623 11.595 16.6378L7.64025 19.5111C7.1002 19.9034 6.37358 19.3755 6.57986 18.7406L8.09043 14.0916C8.18268 13.8077 8.08162 13.4966 7.8401 13.3212L3.88538 10.4479C3.34533 10.0555 3.62288 9.20132 4.29041 9.20132H9.17872C9.47725 9.20132 9.74183 9.0091 9.83408 8.72518L11.3446 4.07612Z" fill="#DDD9D4" />
                                </svg>
                            ), {
                                className: 'h-[20px] w-[20px]',
                            })
                        }
                    </div>,
                );
            }
        }
    }

    return <div className={cx('flex', 'flex-row mobile:gap-[1px]', classContainer)}>{icon.map((Item) => Item)}</div>;
};

export default RatingStar;
