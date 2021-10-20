//import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  PostCreateInput,
  useCreatePostMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
import Select, { OptionTypeBase } from 'react-select'

import { CreatePostFormStyled } from './styles'
//import { Context } from 'src/pages/_App/Context'
//import FormControl from '@prisma-cms/ui/dist/form/FormControl'

import { useMashroomsQuery } from 'src/modules/gql/generated'

import Uploader, { UploadResponse } from '@prisma-cms/uploader'

interface Option extends OptionTypeBase {
  value: string
  label: string
}

/**
 * Форма добавления поста
 */
const CreatePostForm: React.FC = () => {
  //const context = useContext(Context)
  const router = useRouter()

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<PostCreateInput> = yup
      .object({
        title: yup.string().required(),
        text: yup.string(),
        mashroomId: yup.string(),
        image: yup.string(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger, setValue } =
    useForm<PostCreateInput>({
      resolver: yupResolver(schema),
      shouldFocusError: true,
      /**
       * Устанавливаем режим ревалидации формы при изменении данных.
       * https://github.com/react-hook-form/react-hook-form/issues/2755#issuecomment-683268595
       */
      mode: 'onChange',
      /*defaultValues: {
        showEmail: false,
        showFullname: true,
      },*/
    })

  /**
   * При загрузке формы сразу вызываем валидацию формы,
   * чтобы показать обязательные поля
   */
  useEffect(() => {
    trigger()
  }, [trigger])

  /**
   * Хук регистрации
   */

  const [creatpostMutation, { loading: createpostLoading }] =
    useCreatePostMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (createpostLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    creatpostMutation({
      variables: {
        data,
      },
    })
      .then((r) => {
        if (r.data?.createPost) {
          router.push(`/posts/${r.data.createPost.id}`)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  /**
   * Рендерер поля
   */
  const titleFieldRender: ControllerProps<PostCreateInput, 'title'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Наименование"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  const textFieldRender: ControllerProps<PostCreateInput, 'text'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Текст"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  const imageFieldRender: ControllerProps<PostCreateInput, 'image'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Картинка"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  /**
   * Выбор гриба
   */
  const onChangeMashroom = useCallback(
    (option: Option | null) => {
      /**
       * Устанавливаем значение
       */
      setValue('mashroomId', option?.value || undefined, {
        /**
         * Эти параметры нужны, чтобы форма перевалидировалась
         */
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    },
    [setValue]
  )

  const mashrooms = useMashroomsQuery()

  //console.log('mashrooms', mashrooms.data?.mashrooms)

  const mashroomList: Option[] = useMemo(() => {
    const res: Option[] = []

    mashrooms.data?.mashrooms.map((mash) => {
      return res.push({ value: mash.id, label: mash.name })
    })
    return res
  }, [mashrooms.data?.mashrooms])

  //console.log('mashroomsList', mashroomList)

  const mashroomFieldRender: ControllerProps<
    PostCreateInput,
    'mashroomId'
  >['render'] = useCallback(
    ({ field, formState }) => {
      /**
       * В селект в качестве значения передается не текстовое значение, а конкретный опшен,
       * а в форму мы передаем именно текстовое значение.
       * Поэтому мы здесь ищем конкретный опшен по значению
       */
      const option: Option | null =
        (field.value && mashroomList.find((n) => n.value === field.value)) ||
        null

      return (
        <div
          style={{
            width: '100%',
            maxWidth: '40ch',
          }}
        >
          <Select<Option>
            options={mashroomList}
            {...field}
            value={option}
            onChange={onChangeMashroom}
            // styles={{
            //   /**
            //    * Задаем стили контейнеру
            //    */
            //   container: (base) => ({
            //     ...base,
            //     width: '100%',
            //     maxWidth: '40ch',
            //   }),
            // }}
          />

          {formState.errors[field.name] ? (
            <div
              style={{
                color: 'red',
              }}
            >
              {formState.errors[field.name]?.message}
            </div>
          ) : null}
        </div>
      )
    },
    [mashroomList, onChangeMashroom]
  )

  /**
   * Идея в том, чтобы загрузить картинку на сервер с помощью @prisma-cms/uploarder, добавить строку в таблицу Field, а url загруженной картинки
   * поле image формы. И поле сделать недоступное для редактирования пользователем.
   */

  // const Upload: React.FC<T> = () => {
  const onUpload = useCallback(
    (result: UploadResponse) => {
      //console.log('result', result)

      setValue('image', result.data.singleUpload?.path, {
        /**
         * Эти параметры нужны, чтобы форма перевалидировалась
         */
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    },
    [setValue]
  )
  /*
    return (
      <>
        <Uploader name="post" onUpload={onUpload} directory="images/" />
      </>
    )*/
  //}

  return useMemo(() => {
    return (
      <>
        <CreatePostFormStyled onSubmit={onSubmit}>
          <h2>Добавить пост</h2>
          <Controller
            name="title"
            control={control}
            render={titleFieldRender}
          />
          <Controller name="text" control={control} render={textFieldRender} />
          <Controller
            name="mashroomId"
            control={control}
            render={mashroomFieldRender}
          />

          <Controller
            name="image"
            control={control}
            render={imageFieldRender}
          />

          <Uploader name="post" onUpload={onUpload} directory="images/" />
          {
            //<Controller name="image" control={control} render={Upload} />
          }

          <Button
            type="submit"
            disabled={createpostLoading || !formState.isValid}
            variant={formState.isValid ? 'success' : 'default'}
          >
            Добавить
          </Button>
        </CreatePostFormStyled>
      </>
    )
  }, [
    control,
    createpostLoading,
    formState.isValid,
    imageFieldRender,
    mashroomFieldRender,
    onSubmit,
    onUpload,
    textFieldRender,
    titleFieldRender,
  ])
}

export default CreatePostForm
