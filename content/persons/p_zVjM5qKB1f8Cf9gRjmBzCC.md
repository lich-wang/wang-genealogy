---
schema: wang-person/v1
id: p_zVjM5qKB1f8Cf9gRjmBzCC
status: active
merged_into: null
display_name: 王景佺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RDRFTUbuZkQbMjJjde4Xt8
        subject_person_id: p_zVjM5qKB1f8Cf9gRjmBzCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景佺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMB5mPcHP87KEcBMCHNPPk
          claim_id: c_RDRFTUbuZkQbMjJjde4Xt8
          source_id: s_vqJoWa5sPjoa4GQ69awrpd
          stance: supports
          locator: CBDB:690148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690148）
          source: &a1
            id: s_vqJoWa5sPjoa4GQ69awrpd
            source_type: api_record
            title: 中国历代人物传记资料库：王景佺（CBDB 690148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690148&o=json
            external_identifier: CBDB:690148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCMcmEZsNPmLKgAuSqnCfS
        subject_person_id: p_zVjM5qKB1f8Cf9gRjmBzCC
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
        - id: cs_LHywQoB8c6Gi6qCq3ZSbww
          claim_id: c_HCMcmEZsNPmLKgAuSqnCfS
          source_id: s_vqJoWa5sPjoa4GQ69awrpd
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

# 王景佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景佺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景佺（CBDB 690148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690148&o=json)
