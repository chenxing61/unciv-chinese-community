import pypandoc
import os

input_file = r'C:\Users\27162\Desktop\战略视图\Unciv鳇脯菌校.docx'
output_file = r'C:\Users\27162\Desktop\战略视图\Unciv鳇脯菌校.md'

# 提取图片到 media 文件夹
output_dir = os.path.dirname(output_file)
media_dir = os.path.join(output_dir, 'media')

# 转换文档
pypandoc.convert_file(
    input_file,
    'markdown',
    outputfile=output_file,
    extra_args=[
        '--extract-media=' + output_dir,  # 提取图片
        '--wrap=preserve'  # 保留原有换行
    ]
)

print(f'转换成功！')
print(f'输出文件: {output_file}')
print(f'图片已提取到: {media_dir}')