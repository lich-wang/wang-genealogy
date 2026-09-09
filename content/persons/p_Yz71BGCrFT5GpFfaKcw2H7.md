---
schema: wang-person/v1
id: p_Yz71BGCrFT5GpFfaKcw2H7
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Umz9bDKEv5avuaLarHr6c
        subject_person_id: p_Yz71BGCrFT5GpFfaKcw2H7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wewYWtQCVmaVGJ8r4PACcU
          claim_id: c_5Umz9bDKEv5avuaLarHr6c
          source_id: s_x9BNLJcrk7Jxas7CyKD27L
          stance: supports
          locator: CBDB:37902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37902）
          source: &a1
            id: s_x9BNLJcrk7Jxas7CyKD27L
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 37902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37902&o=json
            external_identifier: CBDB:37902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T293Xqhen5zQcpRwMgQeVc
        subject_person_id: p_Yz71BGCrFT5GpFfaKcw2H7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2JYhrhF6UqBuNL1m5KQtRZ
          claim_id: c_T293Xqhen5zQcpRwMgQeVc
          source_id: s_x9BNLJcrk7Jxas7CyKD27L
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 37902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37902&o=json)
