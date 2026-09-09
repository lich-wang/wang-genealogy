---
schema: wang-person/v1
id: p_BtTApjgsFgyMJtB8waKAra
status: active
merged_into: null
display_name: 王烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BXfnNGF2TqyFsJNJvP4sx
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hf9hiWP1Gf5VJwChtAJPbv
          claim_id: c_7BXfnNGF2TqyFsJNJvP4sx
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
          stance: supports
          locator: CBDB:153595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153595）
          source: &a1
            id: s_KM4pLxHEcGb8aAa9Dvmz2g
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 153595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json
            external_identifier: CBDB:153595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bWGK8NcuGUBPtN18FwyixN
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZoVJQ9HFK17VjnrWEuVTU
          claim_id: c_bWGK8NcuGUBPtN18FwyixN
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
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

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 153595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json)
