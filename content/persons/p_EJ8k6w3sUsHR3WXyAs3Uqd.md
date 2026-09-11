---
schema: wang-person/v1
id: p_EJ8k6w3sUsHR3WXyAs3Uqd
status: active
merged_into: null
display_name: 王履
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2uRjZARXTKMkDmqp5QpnBo
        subject_person_id: p_EJ8k6w3sUsHR3WXyAs3Uqd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H5zEyMJT5W5WTNLTVJAzyC
          claim_id: c_2uRjZARXTKMkDmqp5QpnBo
          source_id: s_cZPxK4Q2FVsCximt1LoNAo
          stance: supports
          locator: CBDB:475714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475714）
          source: &a1
            id: s_cZPxK4Q2FVsCximt1LoNAo
            source_type: api_record
            title: 中国历代人物传记资料库：王履（CBDB 475714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475714&o=json
            external_identifier: CBDB:475714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJvSx3yJnN96fMdmhKVUyP
        subject_person_id: p_EJ8k6w3sUsHR3WXyAs3Uqd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 475714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1IG_wfbPyHPeut_AaiibBx
          claim_id: c_NJvSx3yJnN96fMdmhKVUyP
          source_id: s_cZPxK4Q2FVsCximt1LoNAo
          stance: supports
          locator: CBDB:475714
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

# 王履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履 | accepted |
| bio.summary | 王履，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 475714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履（CBDB 475714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475714&o=json)
