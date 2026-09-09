---
schema: wang-person/v1
id: p_yhagHPLAgGF916n7f1YPNt
status: active
merged_into: null
display_name: 王士嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKUTAd4wBgp1RDdQ4h8DEw
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j2T2ttpk1PDe1855zrEaP4
          claim_id: c_LKUTAd4wBgp1RDdQ4h8DEw
          source_id: s_mYMiPT2bL7r1D3Gp4R5Hoh
          stance: supports
          locator: CBDB:322438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322438）
          source: &a1
            id: s_mYMiPT2bL7r1D3Gp4R5Hoh
            source_type: api_record
            title: 中国历代人物传记资料库：王士嘉（CBDB 322438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322438&o=json
            external_identifier: CBDB:322438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADRqL3pm67S5kEFLc3xiyt
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9ui1EzfQQLro5BEDJV5BH
          claim_id: c_ADRqL3pm67S5kEFLc3xiyt
          source_id: s_mYMiPT2bL7r1D3Gp4R5Hoh
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

# 王士嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士嘉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士嘉（CBDB 322438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322438&o=json)
