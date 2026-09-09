---
schema: wang-person/v1
id: p_iMPPRN8r6s7XqUVRTVxt9p
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dKPD1Q6LZXi1ZFGuv8SxrQ
        subject_person_id: p_iMPPRN8r6s7XqUVRTVxt9p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pABVSLLA8SZnJ3XXMcbc6t
          claim_id: c_dKPD1Q6LZXi1ZFGuv8SxrQ
          source_id: s_9b9Sgf9kFNKUxK4UadhFRv
          stance: supports
          locator: CBDB:465958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465958）
          source: &a1
            id: s_9b9Sgf9kFNKUxK4UadhFRv
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 465958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465958&o=json
            external_identifier: CBDB:465958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QaC16YArY5xmNAy2eH1Niu
        subject_person_id: p_iMPPRN8r6s7XqUVRTVxt9p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋(劉)人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGVv89DQy732EdApckEG6d
          claim_id: c_QaC16YArY5xmNAy2eH1Niu
          source_id: s_9b9Sgf9kFNKUxK4UadhFRv
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | CBDB 记载为宋(劉)人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 465958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465958&o=json)
