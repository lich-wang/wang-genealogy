---
schema: wang-person/v1
id: p_PNfmbNyKR2auC4aeL1AuSM
status: active
merged_into: null
display_name: 王永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AcHtEVDJwoZW5Ebow6zA5M
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7CNzTnFwf87ei7pwViSKER
          claim_id: c_AcHtEVDJwoZW5Ebow6zA5M
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
          stance: supports
          locator: CBDB:13516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13516）
          source: &a1
            id: s_sHRCQq4nQnkKPMFBzoveAB
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 13516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json
            external_identifier: CBDB:13516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eeANAjN4HYMEarZqhaK1R7
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後蜀人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KqV26UJGkktdH9TniP2d6s
          claim_id: c_eeANAjN4HYMEarZqhaK1R7
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
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

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | CBDB 记载为後蜀人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 13516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json)
