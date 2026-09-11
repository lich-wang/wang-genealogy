---
schema: wang-person/v1
id: p_uJ3i5QvqeCpnXSLuhzsCGR
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zZKtYVk1c9tFQhBee92zje
        subject_person_id: p_uJ3i5QvqeCpnXSLuhzsCGR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7Qd4KvBJ4puiLCzNRwrCp
          claim_id: c_zZKtYVk1c9tFQhBee92zje
          source_id: s_HMTkHuzjLG25b8U7pEDAyF
          stance: supports
          locator: CBDB:342691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342691）
          source: &a1
            id: s_HMTkHuzjLG25b8U7pEDAyF
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 342691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342691&o=json
            external_identifier: CBDB:342691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aMHNNn2PLVo5Y4cp6YP6X5
        subject_person_id: p_uJ3i5QvqeCpnXSLuhzsCGR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，清人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 342691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RIBhWKMEIUPiodO3JewNYW
          claim_id: c_aMHNNn2PLVo5Y4cp6YP6X5
          source_id: s_HMTkHuzjLG25b8U7pEDAyF
          stance: supports
          locator: CBDB:342691
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

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，清人物。明清進士進士，籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 342691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 342691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342691&o=json)
