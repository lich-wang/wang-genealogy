---
schema: wang-person/v1
id: p_mnrGmRFND9NnBfAoaDvqhv
status: active
merged_into: null
display_name: 王崧齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ksf5FyNjfgANkV7LND9fsZ
        subject_person_id: p_mnrGmRFND9NnBfAoaDvqhv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崧齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3BGKVmoFLMenNq4Tbj81m3
          claim_id: c_Ksf5FyNjfgANkV7LND9fsZ
          source_id: s_nadED8keCD7QdebdBzyP9w
          stance: supports
          locator: CBDB:637362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637362）
          source: &a1
            id: s_nadED8keCD7QdebdBzyP9w
            source_type: api_record
            title: 中国历代人物传记资料库：王崧齢（CBDB 637362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637362&o=json
            external_identifier: CBDB:637362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDFJuxKKdPTCb4d21iT9D5
        subject_person_id: p_mnrGmRFND9NnBfAoaDvqhv
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
        - id: cs_AwKA3xnaMCZKvHQ45jqxKs
          claim_id: c_ZDFJuxKKdPTCb4d21iT9D5
          source_id: s_nadED8keCD7QdebdBzyP9w
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

# 王崧齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崧齢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崧齢（CBDB 637362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637362&o=json)
