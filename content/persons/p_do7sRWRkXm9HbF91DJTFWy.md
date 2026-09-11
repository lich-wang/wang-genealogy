---
schema: wang-person/v1
id: p_do7sRWRkXm9HbF91DJTFWy
status: active
merged_into: null
display_name: 王智
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lvn6GGUp7QqNgYudgZ8HH4
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RheLjS1m9gsQe4DQAb6sAg
          claim_id: c_Lvn6GGUp7QqNgYudgZ8HH4
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: CBDB:281419
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281419）
          source: &a1
            id: s_x8iqghaZ9G1jhaNV7hymRN
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json
            external_identifier: CBDB:281419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNUg7D16416r4vhGLuAL6x
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 281419）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F1j5_xhclpJrGyj7ljxI2X
          claim_id: c_tNUg7D16416r4vhGLuAL6x
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: CBDB:281419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mBllBBCnHLbUZR1ElSYn6-
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__I4ztS48i22vikE5YKL7lO
          claim_id: c_mBllBBCnHLbUZR1ElSYn6-
          source_id: s_x8iqghaZ9G1jhaNV7hymRN
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G4qJhuZsQYn7A9yfHcTR6Z
        status: active
        display_name: 王獻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | 王智，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 281419） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G4qJhuZsQYn7A9yfHcTR6Z | 王獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 281419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281419&o=json)
