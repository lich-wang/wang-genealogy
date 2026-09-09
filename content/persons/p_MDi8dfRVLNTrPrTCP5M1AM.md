---
schema: wang-person/v1
id: p_MDi8dfRVLNTrPrTCP5M1AM
status: active
merged_into: null
display_name: 王鈿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oc8X4wpaSWGP3Ray8G6Njf
        subject_person_id: p_MDi8dfRVLNTrPrTCP5M1AM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8pnFvAgfXRgs6FJxFCDyUf
          claim_id: c_oc8X4wpaSWGP3Ray8G6Njf
          source_id: s_5qZB89NSsc7qrJTuCBRRvN
          stance: supports
          locator: CBDB:568654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568654）
          source: &a1
            id: s_5qZB89NSsc7qrJTuCBRRvN
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 568654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568654&o=json
            external_identifier: CBDB:568654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a2Y6EM95zcDNF1PU9xvXfP
        subject_person_id: p_MDi8dfRVLNTrPrTCP5M1AM
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
        - id: cs_Mg749PD68BxF9x54K5aj2q
          claim_id: c_a2Y6EM95zcDNF1PU9xvXfP
          source_id: s_5qZB89NSsc7qrJTuCBRRvN
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

# 王鈿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈿 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈿（CBDB 568654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568654&o=json)
