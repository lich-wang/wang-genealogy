---
schema: wang-person/v1
id: p_7VzTA9domDdPkLvFgB5MaX
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2wccHsj1mQHMzeSuhXMzCA
        subject_person_id: p_7VzTA9domDdPkLvFgB5MaX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NHCqzeD6r4NG3GiLhy9K4i
          claim_id: c_2wccHsj1mQHMzeSuhXMzCA
          source_id: s_7G7uERLDw4DrgyLATxJAWi
          stance: supports
          locator: CBDB:209415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209415）
          source: &a1
            id: s_7G7uERLDw4DrgyLATxJAWi
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 209415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json
            external_identifier: CBDB:209415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ENa8Dy7GrYS9xRSbfE1vgu
        subject_person_id: p_7VzTA9domDdPkLvFgB5MaX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G-bLmDGGzHJ49GrtxFeM0l
          claim_id: c_ENa8Dy7GrYS9xRSbfE1vgu
          source_id: s_7G7uERLDw4DrgyLATxJAWi
          stance: supports
          locator: CBDB:209415
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。天順八年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 209415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 209415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209415&o=json)
