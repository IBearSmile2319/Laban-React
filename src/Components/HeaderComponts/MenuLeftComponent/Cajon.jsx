

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import Label from '@material-ui/icons/Label';
import { ArrowRight as ArrowRightIcon,ArrowDropDown as ArrowDropDownIcon} from '@material-ui/icons/';
const useTreeItemStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        '&:hover > $content': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:focus > $content, &$selected > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
        margin:2
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
}));
function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, ...other } = props;

    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                </div>
            }
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}
const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 240,
    },
});
function Cajon(props) {
    const classes=useStyles();
    return (
        
        <TreeView
        className={classes.root}
        defaultExpanded={['10']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        >
        {["1","2","3","4","5"].map((i)=>(
            <StyledTreeItem nodeId={i} labelText="tv,audio y fotos" labelIcon={Label}>
        
            <StyledTreeItem
                nodeId={"12"}
                labelText="Televisores"
            />
            <StyledTreeItem
                nodeId={"23"}
                labelText="Minicomponentes"
            />
            <StyledTreeItem
                nodeId={"32"}
                labelText="Amplificadore | auto"
            />
            <StyledTreeItem
                nodeId={"323"}
                labelText="micrófonos"
            />
        </StyledTreeItem>
        ))}
        
    </TreeView>
    )
}

export default Cajon
