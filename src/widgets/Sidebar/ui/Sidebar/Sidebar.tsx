import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import i18n from 'i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>{i18n.t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
