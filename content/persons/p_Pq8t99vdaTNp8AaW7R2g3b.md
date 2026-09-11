---
schema: wang-person/v1
id: p_Pq8t99vdaTNp8AaW7R2g3b
status: active
merged_into: null
display_name: 王維
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4DX4FT94Eq6QhdtM3nDLNz
        subject_person_id: p_Pq8t99vdaTNp8AaW7R2g3b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_24JzF97cE4Y8Z6XxXH5EYP
          claim_id: c_4DX4FT94Eq6QhdtM3nDLNz
          source_id: s_uh1K45uw6q9kEovd5yLLLi
          stance: supports
          locator: CBDB:639806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639806）
          source: &a1
            id: s_uh1K45uw6q9kEovd5yLLLi
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 639806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639806&o=json
            external_identifier: CBDB:639806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CgGsNZ3o4WMZWiMAZG3K6e
        subject_person_id: p_Pq8t99vdaTNp8AaW7R2g3b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2cXkVmqM_1TeGpfcQG5RE_
          claim_id: c_CgGsNZ3o4WMZWiMAZG3K6e
          source_id: s_uh1K45uw6q9kEovd5yLLLi
          stance: supports
          locator: CBDB:639806
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

# 王維

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維 | accepted |
| bio.summary | 王維，清人物。籍贯歸安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維（CBDB 639806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639806&o=json)
