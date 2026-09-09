---
schema: wang-person/v1
id: p_qwA3Z1DXVfeRAVibVYS9KD
status: active
merged_into: null
display_name: 王介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohCdWZXYpYK3bc4vGuG8eV
        subject_person_id: p_qwA3Z1DXVfeRAVibVYS9KD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qb4go29QyB8vb55dSz3JDW
          claim_id: c_ohCdWZXYpYK3bc4vGuG8eV
          source_id: s_ucabDRP8pyR4H8FmPN1Xsd
          stance: supports
          locator: CBDB:343720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343720）
          source: &a1
            id: s_ucabDRP8pyR4H8FmPN1Xsd
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 343720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343720&o=json
            external_identifier: CBDB:343720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_toWQym6tcxMQ4Gyr1HNHBc
        subject_person_id: p_qwA3Z1DXVfeRAVibVYS9KD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykK8sxfPjB7pFA1ByeXV61
          claim_id: c_toWQym6tcxMQ4Gyr1HNHBc
          source_id: s_ucabDRP8pyR4H8FmPN1Xsd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 343720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343720&o=json)
