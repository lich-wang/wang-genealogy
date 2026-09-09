---
schema: wang-person/v1
id: p_tqKA4M9c63vtq3BvfzMM6g
status: active
merged_into: null
display_name: 王漱芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bAta5FhLsNkqPHh1az4EPE
        subject_person_id: p_tqKA4M9c63vtq3BvfzMM6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漱芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6RpsaRWQW38Ax8iABaSiqM
          claim_id: c_bAta5FhLsNkqPHh1az4EPE
          source_id: s_Gx1VNFPFqNZ7ZzokfvLcL2
          stance: supports
          locator: CBDB:72171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72171）
          source: &a1
            id: s_Gx1VNFPFqNZ7ZzokfvLcL2
            source_type: api_record
            title: 中国历代人物传记资料库：王漱芳（CBDB 72171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72171&o=json
            external_identifier: CBDB:72171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5UQVDp6GTGMLGcPegqmUu1
        subject_person_id: p_tqKA4M9c63vtq3BvfzMM6g
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1916年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AsUvuYer7gNNCTZNjF9FgJ
          claim_id: c_5UQVDp6GTGMLGcPegqmUu1
          source_id: s_Gx1VNFPFqNZ7ZzokfvLcL2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDHFGZwSrdeUnVivW493GA
        subject_person_id: p_tqKA4M9c63vtq3BvfzMM6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cW9WeBH1oRNShGHtD664C3
          claim_id: c_qDHFGZwSrdeUnVivW493GA
          source_id: s_Gx1VNFPFqNZ7ZzokfvLcL2
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

# 王漱芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漱芳 | accepted |
| death.date | 1916年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漱芳（CBDB 72171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72171&o=json)
