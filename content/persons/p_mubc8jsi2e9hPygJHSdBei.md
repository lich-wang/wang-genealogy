---
schema: wang-person/v1
id: p_mubc8jsi2e9hPygJHSdBei
status: active
merged_into: null
display_name: 王陟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rag9X2hmRp4R1MrjpKeCoF
        subject_person_id: p_mubc8jsi2e9hPygJHSdBei
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rhBmBu8fCq1fVEAxzESKs7
          claim_id: c_rag9X2hmRp4R1MrjpKeCoF
          source_id: s_A5nB4qA18JGhG23wfK9ztc
          stance: supports
          locator: CBDB:1784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1784）
          source: &a1
            id: s_A5nB4qA18JGhG23wfK9ztc
            source_type: api_record
            title: 中国历代人物传记资料库：王陟（CBDB 1784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1784&o=json
            external_identifier: CBDB:1784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hepPZcH6NhwHCXP4oZ4VmV
        subject_person_id: p_mubc8jsi2e9hPygJHSdBei
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
        - id: cs_NWc3Q1Ve5NrGjnSjQNYDG8
          claim_id: c_hepPZcH6NhwHCXP4oZ4VmV
          source_id: s_A5nB4qA18JGhG23wfK9ztc
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

# 王陟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陟（CBDB 1784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1784&o=json)
