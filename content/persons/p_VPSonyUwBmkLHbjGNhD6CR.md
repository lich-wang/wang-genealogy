---
schema: wang-person/v1
id: p_VPSonyUwBmkLHbjGNhD6CR
status: active
merged_into: null
display_name: 王鉷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wE6FKc6Zp2PZoDwByK4A15
        subject_person_id: p_VPSonyUwBmkLHbjGNhD6CR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tRtSfDC5v69HHXbHEnao5n
          claim_id: c_wE6FKc6Zp2PZoDwByK4A15
          source_id: s_KeECJLLZtGPnxuz73JNn6o
          stance: supports
          locator: CBDB:503845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503845）
          source: &a1
            id: s_KeECJLLZtGPnxuz73JNn6o
            source_type: api_record
            title: 中国历代人物传记资料库：王鉷（CBDB 503845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503845&o=json
            external_identifier: CBDB:503845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tJkbdBGhxGpn72K52VL9vQ
        subject_person_id: p_VPSonyUwBmkLHbjGNhD6CR
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
        - id: cs_yFELzU5CHH8vJ57X392xuo
          claim_id: c_tJkbdBGhxGpn72K52VL9vQ
          source_id: s_KeECJLLZtGPnxuz73JNn6o
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

# 王鉷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉷（CBDB 503845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503845&o=json)
