---
schema: wang-person/v1
id: p_F5GKsa5sVFbupdtwEbchGV
status: active
merged_into: null
display_name: 王鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MfAkapo7BVXjGGLAALAn38
        subject_person_id: p_F5GKsa5sVFbupdtwEbchGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rqB4hevy178hAFePmr7KAb
          claim_id: c_MfAkapo7BVXjGGLAALAn38
          source_id: s_7b94AKJpHDJLRmTpPzKw7h
          stance: supports
          locator: CBDB:478531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478531）
          source: &a1
            id: s_7b94AKJpHDJLRmTpPzKw7h
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 478531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478531&o=json
            external_identifier: CBDB:478531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DhiruQLP5H8G2kQH71fUs
        subject_person_id: p_F5GKsa5sVFbupdtwEbchGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ox9LPc7NHuZox5o4naTu7w
          claim_id: c_8DhiruQLP5H8G2kQH71fUs
          source_id: s_7b94AKJpHDJLRmTpPzKw7h
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

# 王鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 478531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478531&o=json)
