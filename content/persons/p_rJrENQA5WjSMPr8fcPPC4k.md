---
schema: wang-person/v1
id: p_rJrENQA5WjSMPr8fcPPC4k
status: active
merged_into: null
display_name: 王宗沐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uBuzZ2NJsCYGJV7utQ6guW
        subject_person_id: p_rJrENQA5WjSMPr8fcPPC4k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗沐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PNJU56HDoB3uWjb3Egk25
          claim_id: c_uBuzZ2NJsCYGJV7utQ6guW
          source_id: s_Js8kpQFeBriGEjk9euGQbF
          stance: supports
          locator: CBDB:470232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470232）
          source: &a1
            id: s_Js8kpQFeBriGEjk9euGQbF
            source_type: api_record
            title: 中国历代人物传记资料库：王宗沐（CBDB 470232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470232&o=json
            external_identifier: CBDB:470232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cXN58MCGuzQk9EMD9M8MJa
        subject_person_id: p_rJrENQA5WjSMPr8fcPPC4k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗沐，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470232）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0mK1tS6rIo5iKiMIMnjnEI
          claim_id: c_cXN58MCGuzQk9EMD9M8MJa
          source_id: s_Js8kpQFeBriGEjk9euGQbF
          stance: supports
          locator: CBDB:470232
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

# 王宗沐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗沐 | accepted |
| bio.summary | 王宗沐，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗沐（CBDB 470232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470232&o=json)
