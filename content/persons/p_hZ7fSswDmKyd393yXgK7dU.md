---
schema: wang-person/v1
id: p_hZ7fSswDmKyd393yXgK7dU
status: active
merged_into: null
display_name: 王俊民
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHDcQK46s6NbrBQRUX4Cty
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RwfK6Y4AbtYLj8ZQvbVKNy
          claim_id: c_QHDcQK46s6NbrBQRUX4Cty
          source_id: s_ywmiqVsqmEVA1p5taHogkV
          stance: supports
          locator: CBDB:335615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335615）
          source: &a1
            id: s_ywmiqVsqmEVA1p5taHogkV
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 335615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335615&o=json
            external_identifier: CBDB:335615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AAM9uM74NnP24Vr1SY2Guk
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_67lGR0JwIS7YmbTUTydLCL
          claim_id: c_AAM9uM74NnP24Vr1SY2Guk
          source_id: s_ywmiqVsqmEVA1p5taHogkV
          stance: supports
          locator: CBDB:335615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_z4xbi6ysAf43OcfF_EWP3D
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQHZsXHYshTa1ML9xWjlpP
          claim_id: c_z4xbi6ysAf43OcfF_EWP3D
          source_id: s_ywmiqVsqmEVA1p5taHogkV
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mJFG2VmWYuWZQLFEyB56Dh
        status: active
        display_name: 王來召
        merged_into_person_id: null
    - claim:
        id: c_MRLQZ6SZ5ETF36v4E_bHHt
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_16MmSS3utaAD7uCEKL7nkU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VdaZtG8R5bIg5_PBOd4w6C
          claim_id: c_MRLQZ6SZ5ETF36v4E_bHHt
          source_id: s_S1WV9gys734H5rxLcpyVCS
          stance: supports
          locator: CBDB：兄弟 王來召（205587）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王來聘 与 王來召 为同胞（CBDB 记「弟」），王來召 之父／母即 王來聘 之父／母。
          source:
            id: s_S1WV9gys734H5rxLcpyVCS
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 335619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335619&o=json
            external_identifier: CBDB:335619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_16MmSS3utaAD7uCEKL7nkU
        status: active
        display_name: 王來聘
        merged_into_person_id: null
    - claim:
        id: c_77sQUvvVgLnfuTQ6rX0WGv
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SbwASiY46QeAUyAy9ypLwQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WEi94ARHJtLowJec3apHXZ
          claim_id: c_77sQUvvVgLnfuTQ6rX0WGv
          source_id: s_sYiWqfWQfYKc0lUi7-udqR
          stance: supports
          locator: CBDB：兄弟 王來召（205587）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王來召 为同胞（CBDB 记「兄」），王來召 之父／母即 王來問 之父／母。
          source:
            id: s_sYiWqfWQfYKc0lUi7-udqR
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 335622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json
            external_identifier: CBDB:335622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SbwASiY46QeAUyAy9ypLwQ
        status: active
        display_name: 王來問
        merged_into_person_id: null
    - claim:
        id: c_qMUyAyxE3970b_48LrHcve
        subject_person_id: p_hZ7fSswDmKyd393yXgK7dU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jJ6uwzEZ3GiRCVSQcjzESL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jW_gxnheHCz8rZAbiJZz9n
          claim_id: c_qMUyAyxE3970b_48LrHcve
          source_id: s_XKLcSwyj8iZt2QGFclx7tZ
          stance: supports
          locator: CBDB：兄弟 王來召（205587）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王來檄 与 王來召 为同胞（CBDB 记「弟」），王來召 之父／母即 王來檄 之父／母。
          source:
            id: s_XKLcSwyj8iZt2QGFclx7tZ
            source_type: api_record
            title: 中国历代人物传记资料库：王來檄（CBDB 335620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json
            external_identifier: CBDB:335620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJ6uwzEZ3GiRCVSQcjzESL
        status: active
        display_name: 王來檄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊民 | accepted |
| bio.summary | 王俊民，明人物。隆慶二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 335615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mJFG2VmWYuWZQLFEyB56Dh | 王來召 | accepted |
| children | p_16MmSS3utaAD7uCEKL7nkU | 王來聘 | accepted |
| children | p_SbwASiY46QeAUyAy9ypLwQ | 王來問 | accepted |
| children | p_jJ6uwzEZ3GiRCVSQcjzESL | 王來檄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊民（CBDB 335615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335615&o=json)
- [中国历代人物传记资料库：王來聘（CBDB 335619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335619&o=json)
- [中国历代人物传记资料库：王來問（CBDB 335622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335622&o=json)
- [中国历代人物传记资料库：王來檄（CBDB 335620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335620&o=json)
