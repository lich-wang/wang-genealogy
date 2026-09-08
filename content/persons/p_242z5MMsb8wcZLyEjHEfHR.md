---
schema: wang-person/v1
id: p_242z5MMsb8wcZLyEjHEfHR
status: active
merged_into: null
display_name: 王應修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9K5Q1tE9ctLNHbm5AsCL2z
        subject_person_id: p_242z5MMsb8wcZLyEjHEfHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62CBkxCgvLVEPj936QMDx2
          claim_id: c_9K5Q1tE9ctLNHbm5AsCL2z
          source_id: s_cFYhdtSnqvyL26LauV7GFF
          stance: supports
          locator: CBDB:550852
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_cFYhdtSnqvyL26LauV7GFF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應修（550852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550852&o=json
            external_identifier: CBDB:550852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eZM3nc5FcKZVP2GXKeu1K7
        subject_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_242z5MMsb8wcZLyEjHEfHR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11KVWy21S9cJTv7Wb1gkhW
          claim_id: c_eZM3nc5FcKZVP2GXKeu1K7
          source_id: s_mrU2gd98oKTzUYL8GJNQru
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：南陽府志
          source:
            id: s_mrU2gd98oKTzUYL8GJNQru
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汝魯（126502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json
            external_identifier: CBDB:126502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:07.904Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：王汝魯（126502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json)
- [CBDB 中国历代人物传记资料库：王應修（550852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550852&o=json)
