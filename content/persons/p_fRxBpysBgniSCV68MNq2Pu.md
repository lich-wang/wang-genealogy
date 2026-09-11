---
schema: wang-person/v1
id: p_fRxBpysBgniSCV68MNq2Pu
status: active
merged_into: null
display_name: 王世傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cdcRUR5nDYxci4Bj6peKw
        subject_person_id: p_fRxBpysBgniSCV68MNq2Pu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ckG2zQ1xBvjFGMCPUnm1As
          claim_id: c_6cdcRUR5nDYxci4Bj6peKw
          source_id: s_auPf2bX98EDaDrNeVDGSuz
          stance: supports
          locator: CBDB:101115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101115）
          source: &a1
            id: s_auPf2bX98EDaDrNeVDGSuz
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 101115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101115&o=json
            external_identifier: CBDB:101115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DjW7YCrcM4BaR1Jd3M9FyM
        subject_person_id: p_fRxBpysBgniSCV68MNq2Pu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，元人物。籍贯東平路，曾任知州。（中国历代人物传记资料库 CBDB 101115）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tdKH2-qtCN60vXmS5ElkYH
          claim_id: c_DjW7YCrcM4BaR1Jd3M9FyM
          source_id: s_auPf2bX98EDaDrNeVDGSuz
          stance: supports
          locator: CBDB:101115
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

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | 王世傑，元人物。籍贯東平路，曾任知州。（中国历代人物传记资料库 CBDB 101115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 101115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101115&o=json)
