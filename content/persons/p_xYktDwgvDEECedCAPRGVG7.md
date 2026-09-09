---
schema: wang-person/v1
id: p_xYktDwgvDEECedCAPRGVG7
status: active
merged_into: null
display_name: 王基嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vCsC7m3GFadVwvVZbRPo3H
        subject_person_id: p_xYktDwgvDEECedCAPRGVG7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mLdTa9VUNSEmoSPLC6LZ5c
          claim_id: c_vCsC7m3GFadVwvVZbRPo3H
          source_id: s_AvQ3R8cPK3v6QYDvGwaiFt
          stance: supports
          locator: CBDB:577306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577306）
          source: &a1
            id: s_AvQ3R8cPK3v6QYDvGwaiFt
            source_type: api_record
            title: 中国历代人物传记资料库：王基嘉（CBDB 577306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577306&o=json
            external_identifier: CBDB:577306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6A4NhJGNq87hgtFFQpnftH
        subject_person_id: p_xYktDwgvDEECedCAPRGVG7
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
        - id: cs_5H4tDnSMoWaEb413Wb2T6j
          claim_id: c_6A4NhJGNq87hgtFFQpnftH
          source_id: s_AvQ3R8cPK3v6QYDvGwaiFt
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

# 王基嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基嘉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王基嘉（CBDB 577306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577306&o=json)
