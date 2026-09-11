---
schema: wang-person/v1
id: p_eB5KYwD5C7595A3oo7ULDk
status: active
merged_into: null
display_name: 王諶潮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o7FKK2Zg2KyG4sL6RNtkAB
        subject_person_id: p_eB5KYwD5C7595A3oo7ULDk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DraVcP1XdoJ4pprVx5CjCQ
          claim_id: c_o7FKK2Zg2KyG4sL6RNtkAB
          source_id: s_72rWFNnp7VX3p4dRigJ6En
          stance: supports
          locator: CBDB:640282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640282）
          source: &a1
            id: s_72rWFNnp7VX3p4dRigJ6En
            source_type: api_record
            title: 中国历代人物传记资料库：王諶潮（CBDB 640282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640282&o=json
            external_identifier: CBDB:640282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wWdQoWYivfnXzPALx662qF
        subject_person_id: p_eB5KYwD5C7595A3oo7ULDk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶潮，清人物。籍贯安化，曾任學正。（中国历代人物传记资料库 CBDB 640282）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zCqqkknpWgversTHxTN4LG
          claim_id: c_wWdQoWYivfnXzPALx662qF
          source_id: s_72rWFNnp7VX3p4dRigJ6En
          stance: supports
          locator: CBDB:640282
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諶潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諶潮 | accepted |
| bio.summary | 王諶潮，清人物。籍贯安化，曾任學正。（中国历代人物传记资料库 CBDB 640282） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諶潮（CBDB 640282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640282&o=json)
