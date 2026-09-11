---
schema: wang-person/v1
id: p_FxNwo3apNeHFEvguYHvrFg
status: active
merged_into: null
display_name: 王國治
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3VJHLZJHMkH8BiKp9QSQCw
        subject_person_id: p_FxNwo3apNeHFEvguYHvrFg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hL37HmzC43wfxb4JqkrXTH
          claim_id: c_3VJHLZJHMkH8BiKp9QSQCw
          source_id: s_JCbJmqQMBH17cLLPXHWJcY
          stance: supports
          locator: CBDB:700325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700325）
          source: &a1
            id: s_JCbJmqQMBH17cLLPXHWJcY
            source_type: api_record
            title: 中国历代人物传记资料库：王國治（CBDB 700325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700325&o=json
            external_identifier: CBDB:700325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pktkxGet6WRyvjEv2KjkYY
        subject_person_id: p_FxNwo3apNeHFEvguYHvrFg
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
        - id: cs_iHnJ578YyoNd7B1C3pMR6j
          claim_id: c_pktkxGet6WRyvjEv2KjkYY
          source_id: s_JCbJmqQMBH17cLLPXHWJcY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vnG0TPuToKhrDrGoaeL3qF
        subject_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxNwo3apNeHFEvguYHvrFg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcqV9jg8lIEYoh8pjZfke_
          claim_id: c_vnG0TPuToKhrDrGoaeL3qF
          source_id: s_JCbJmqQMBH17cLLPXHWJcY
          stance: supports
          locator: 錢塘縣志，lgid=219724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GWFRAzEGpCz4Hv1DHTKVjt
        status: active
        display_name: 王萬鑑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國治 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GWFRAzEGpCz4Hv1DHTKVjt | 王萬鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國治（CBDB 700325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700325&o=json)
