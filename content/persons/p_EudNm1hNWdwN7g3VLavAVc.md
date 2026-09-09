---
schema: wang-person/v1
id: p_EudNm1hNWdwN7g3VLavAVc
status: active
merged_into: null
display_name: 王崇蕙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQC1LRE6dEWybEnrvsfR1c
        subject_person_id: p_EudNm1hNWdwN7g3VLavAVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9bFM64d1CRH6iCjoeqPuM
          claim_id: c_NQC1LRE6dEWybEnrvsfR1c
          source_id: s_14AnGt9yEnbJfrpS8PAXD4
          stance: supports
          locator: CBDB:568785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568785）
          source: &a1
            id: s_14AnGt9yEnbJfrpS8PAXD4
            source_type: api_record
            title: 中国历代人物传记资料库：王崇蕙（CBDB 568785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568785&o=json
            external_identifier: CBDB:568785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_npUp8J7pU1bLF43cnmtjvL
        subject_person_id: p_EudNm1hNWdwN7g3VLavAVc
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
        - id: cs_FjL8bLYcqsBUMvJeMz58ZK
          claim_id: c_npUp8J7pU1bLF43cnmtjvL
          source_id: s_14AnGt9yEnbJfrpS8PAXD4
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

# 王崇蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇蕙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇蕙（CBDB 568785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568785&o=json)
