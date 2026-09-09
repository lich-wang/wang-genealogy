---
schema: wang-person/v1
id: p_hEFhwUEzH2dB433RHJ2LCZ
status: active
merged_into: null
display_name: 王進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k293iNPJm7E8XLNh12cwGt
        subject_person_id: p_hEFhwUEzH2dB433RHJ2LCZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3TXArgAD2yEnGLSZ8nx58S
          claim_id: c_k293iNPJm7E8XLNh12cwGt
          source_id: s_JTisP1mQ81sz17so9U7PCf
          stance: supports
          locator: CBDB:287957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287957）
          source: &a1
            id: s_JTisP1mQ81sz17so9U7PCf
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 287957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json
            external_identifier: CBDB:287957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3UYUwbT4UoC26LFkQA4PV
        subject_person_id: p_hEFhwUEzH2dB433RHJ2LCZ
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
        - id: cs_NA9Q4HjAKWkEun8RG83kTT
          claim_id: c_a3UYUwbT4UoC26LFkQA4PV
          source_id: s_JTisP1mQ81sz17so9U7PCf
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

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 287957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287957&o=json)
