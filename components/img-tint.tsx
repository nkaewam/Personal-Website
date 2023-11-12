import { useEffect, useRef, useState } from "react";

import { tintData, isColorful } from "@/lib/img";
import Image from "next/image";

type ReactImageTintProps = {
  src: string;
  color?: string | null;
  hoverColor?: string | null;
  alt: string;
  cache?: boolean;
  width: number | `${number}`;
  height: number | `${number}`;
  sizes?: string;
  className: string;
};

export const ImageTint = ({
  cache,
  src,
  color,
  alt,
  ...props
}: ReactImageTintProps) => {
  const [baseSrc, setBaseSrc] = useState(src);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const applyTint = async (src: string, color?: string | null) => {
      if (!!color && !isColorful(src) && ref.current) {
        const newSrc = await tintData(ref.current, color, {
          cache: Boolean(cache),
        });
        setBaseSrc(newSrc);
      }
    };
    applyTint(src, color);
  }, []);

  return (
    <Image
      ref={ref}
      src={baseSrc}
      alt={alt}
      crossOrigin="anonymous"
      {...props}
    />
  );
};

// export class ReactImageTint extends React.Component<
//   ReactImageTintProps,
//   ReactImageTintState
// > {
//   _mounted: boolean = false;

//   constructor(props: ReactImageTintProps) {
//     super(props);

//     this.state = {
//       src: props.src,
//     };
//   }

//   componentDidMount() {
//     this._mounted = true;

//     this.applyTint(this.props.src, this.props.color);
//   }

//   componentWillUnmount() {
//     this._mounted = false;
//   }

//   componentWillReceiveProps(newProps: ReactImageTintProps) {
//     if (newProps.src !== this.props.src) {
//       this.applyTint(newProps.src, newProps.color);
//     }
//   }

//   applyTint(src: string, color: string) {
//     if (!isColorful(src) && this.refs.img) {
//       const imgElement = this.refs.img as HTMLImageElement;

//       tintData(imgElement, color, { cache: Boolean(this.props.cache) }).then(
//         (src) => this._mounted && this.setState({ src })
//       );
//     }
//   }

//   render() {
//     return (
//       <img
//         src={this.state.src}
//         alt={this.props.alt}
//         ref="img"
//         crossOrigin="anonymous"
//       />
//     );
//   }
// }
