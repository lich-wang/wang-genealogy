---
schema: wang-person/v1
id: p_a5ehXZLE6dQrvVRm9mst4h
status: active
merged_into: null
display_name: 王孝廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mKKMPBjvU7DXCNcSPNGW7s
        subject_person_id: p_a5ehXZLE6dQrvVRm9mst4h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Md59Ft9XtAsGco52L5gVHd
          claim_id: c_mKKMPBjvU7DXCNcSPNGW7s
          source_id: s_1aNuKrqHRWdUEd5Mepbs9F
          stance: supports
          locator: CBDB:166889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166889）
          source: &a1
            id: s_1aNuKrqHRWdUEd5Mepbs9F
            source_type: api_record
            title: 中国历代人物传记资料库：王孝廉（CBDB 166889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166889&o=json
            external_identifier: CBDB:166889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hstQ16aSEZX1hyR8RMEM45
        subject_person_id: p_a5ehXZLE6dQrvVRm9mst4h
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
        - id: cs_geHdAGf6urSMq8eF5CNKN5
          claim_id: c_hstQ16aSEZX1hyR8RMEM45
          source_id: s_1aNuKrqHRWdUEd5Mepbs9F
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

# 王孝廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝廉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝廉（CBDB 166889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166889&o=json)
