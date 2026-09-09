---
schema: wang-person/v1
id: p_w1QHMdcZ87JvZ858Yijich
status: active
merged_into: null
display_name: 王遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LiPUgDau27Wkm9LHHcJ9Jo
        subject_person_id: p_w1QHMdcZ87JvZ858Yijich
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eogz4eyvENTUf34uL2D73k
          claim_id: c_LiPUgDau27Wkm9LHHcJ9Jo
          source_id: s_43SdkEHMR89RwLumthpB8v
          stance: supports
          locator: CBDB:462822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462822）
          source: &a1
            id: s_43SdkEHMR89RwLumthpB8v
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 462822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462822&o=json
            external_identifier: CBDB:462822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1KpeutYhZu6hpTW1sTW1r
        subject_person_id: p_w1QHMdcZ87JvZ858Yijich
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为北魏人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McpPUNdqCQF6kvCZxs3QrX
          claim_id: c_D1KpeutYhZu6hpTW1sTW1r
          source_id: s_43SdkEHMR89RwLumthpB8v
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

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| bio.summary | CBDB 记载为北魏人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇（CBDB 462822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462822&o=json)
