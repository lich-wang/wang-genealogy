---
schema: wang-person/v1
id: p_fUYBC4Cq8NN4Uo7UcrDqkN
status: active
merged_into: null
display_name: 王絃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7Nd78tJQdE2dzWAci3xq1
        subject_person_id: p_fUYBC4Cq8NN4Uo7UcrDqkN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8MZV5kxUuKTG2g9uiGxo2Q
          claim_id: c_K7Nd78tJQdE2dzWAci3xq1
          source_id: s_n3wqznn7f2nio8crwcr7Xq
          stance: supports
          locator: CBDB:482429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482429）
          source: &a1
            id: s_n3wqznn7f2nio8crwcr7Xq
            source_type: api_record
            title: 中国历代人物传记资料库：王絃（CBDB 482429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482429&o=json
            external_identifier: CBDB:482429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VnC57695cL3u7pwZ7dTod3
        subject_person_id: p_fUYBC4Cq8NN4Uo7UcrDqkN
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
        - id: cs_Kn1nKLe8CzPCT38A67wiTV
          claim_id: c_VnC57695cL3u7pwZ7dTod3
          source_id: s_n3wqznn7f2nio8crwcr7Xq
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

# 王絃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絃 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王絃（CBDB 482429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482429&o=json)
