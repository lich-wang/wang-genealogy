---
schema: wang-person/v1
id: p_PZHVQD4iVHL1xh8QKphQB7
status: active
merged_into: null
display_name: 王希顏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DekGkdYopTh6H5vxMJnvcx
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ReJb71eU4wJRu3scHSvesh
          claim_id: c_DekGkdYopTh6H5vxMJnvcx
          source_id: s_9PgcLJU3UknpFFibAtLLpk
          stance: supports
          locator: CBDB:287988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287988）
          source: &a1
            id: s_9PgcLJU3UknpFFibAtLLpk
            source_type: api_record
            title: 中国历代人物传记资料库：王希顏（CBDB 287988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json
            external_identifier: CBDB:287988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CqjTQhyaVTTC8y1rVyTMjL
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希顏，明人物。嘉靖八年進士，籍贯東莞，曾任典膳。（中国历代人物传记资料库 CBDB 287988）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EWyJSXavD9HWEqShKxXRtg
          claim_id: c_CqjTQhyaVTTC8y1rVyTMjL
          source_id: s_9PgcLJU3UknpFFibAtLLpk
          stance: supports
          locator: CBDB:287988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m7Vaik2ZZQbnWAU2U5f5Zt
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kSLtqCgUZL2OOSSF0QUpF
          claim_id: c_m7Vaik2ZZQbnWAU2U5f5Zt
          source_id: s_IWf7a9l76EhTM9Vc8C8bLV
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希顏 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王希顏 之父／母。
          source:
            id: s_IWf7a9l76EhTM9Vc8C8bLV
            source_type: api_record
            title: 中国历代人物传记资料库：王希顏（CBDB 287988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json
            external_identifier: CBDB:287988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4jND336KsTQjFJcBTReoib
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1UCfJ8xGeQqmTpCrk4wFWH
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6VmvmafuX1VYwx-qMDTgj
          claim_id: c_1UCfJ8xGeQqmTpCrk4wFWH
          source_id: s_IWf7a9l76EhTM9Vc8C8bLV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IWf7a9l76EhTM9Vc8C8bLV
            source_type: api_record
            title: 中国历代人物传记资料库：王希顏（CBDB 287988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json
            external_identifier: CBDB:287988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
---

# 王希顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希顏 | accepted |
| bio.summary | 王希顏，明人物。嘉靖八年進士，籍贯東莞，曾任典膳。（中国历代人物传记资料库 CBDB 287988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4jND336KsTQjFJcBTReoib | 王瑄 | accepted |
| other | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希顏（CBDB 287988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json)
