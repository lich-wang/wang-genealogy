---
schema: wang-person/v1
id: p_xFxdufDZ4cCLUjq7DAvTTt
status: active
merged_into: null
display_name: 王正思
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRQ2V8pCiTE6uZ7BSZrQED
        subject_person_id: p_xFxdufDZ4cCLUjq7DAvTTt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LiMb2WxJYD27ss16maRogY
          claim_id: c_gRQ2V8pCiTE6uZ7BSZrQED
          source_id: s_5kbm6eVUHxs9FNfRNnS3P8
          stance: supports
          locator: CBDB:690127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690127）
          source: &a1
            id: s_5kbm6eVUHxs9FNfRNnS3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王正思（CBDB 690127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690127&o=json
            external_identifier: CBDB:690127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zPfqC7JnFTmKeGkkxB5V7E
        subject_person_id: p_xFxdufDZ4cCLUjq7DAvTTt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正思，宋人物。籍贯臨城，曾任將作監主簿。（中国历代人物传记资料库 CBDB 690127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5G_D70yULuDVKDBN0UK1p5
          claim_id: c_zPfqC7JnFTmKeGkkxB5V7E
          source_id: s_5kbm6eVUHxs9FNfRNnS3P8
          stance: supports
          locator: CBDB:690127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JZqh_D0M5WnAEkiJpYksJ1
        subject_person_id: p_9epbfLViLxzdJRKQE2V4dh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xFxdufDZ4cCLUjq7DAvTTt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z7OrnMOFCBsopF8Z-s9cOe
          claim_id: c_JZqh_D0M5WnAEkiJpYksJ1
          source_id: s_8eVWpbWcT1yBzQfb3ZcBjm
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1903）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8eVWpbWcT1yBzQfb3ZcBjm
            source_type: api_record
            title: 中国历代人物传记资料库：王正思（CBDB 690127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690127&o=json
            external_identifier: CBDB:690127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9epbfLViLxzdJRKQE2V4dh
        status: active
        display_name: 王鬷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正思 | accepted |
| bio.summary | 王正思，宋人物。籍贯臨城，曾任將作監主簿。（中国历代人物传记资料库 CBDB 690127） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9epbfLViLxzdJRKQE2V4dh | 王鬷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正思（CBDB 690127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690127&o=json)
