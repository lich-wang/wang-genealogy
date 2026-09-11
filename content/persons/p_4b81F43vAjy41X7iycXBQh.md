---
schema: wang-person/v1
id: p_4b81F43vAjy41X7iycXBQh
status: active
merged_into: null
display_name: 王開運
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2G8tJMgZPkCMjf7M55kpT
        subject_person_id: p_4b81F43vAjy41X7iycXBQh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HNmNHUbEpuA4wQP4jy7aqw
          claim_id: c_D2G8tJMgZPkCMjf7M55kpT
          source_id: s_sEzfFUky1qVfP87KXmpmXC
          stance: supports
          locator: CBDB:34194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34194）
          source: &a1
            id: s_sEzfFUky1qVfP87KXmpmXC
            source_type: api_record
            title: 中国历代人物传记资料库：王開運（CBDB 34194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34194&o=json
            external_identifier: CBDB:34194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RMWU6LxzXpRmKekLB58igd
        subject_person_id: p_4b81F43vAjy41X7iycXBQh
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
        - id: cs_HCM2vhrvZq338QfQBtJ7hb
          claim_id: c_RMWU6LxzXpRmKekLB58igd
          source_id: s_sEzfFUky1qVfP87KXmpmXC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jobEj-MhDB_3xR4I-QbidW
        subject_person_id: p_4b81F43vAjy41X7iycXBQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4uAHMCH2MArDtTa6SQ5iE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jr7UYSKx5XhC5lvaSIim-1
          claim_id: c_jobEj-MhDB_3xR4I-QbidW
          source_id: s_sEzfFUky1qVfP87KXmpmXC
          stance: supports
          locator: CBDB 双向互证（子 王式耜 ⇄ 父 王開運）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_i4uAHMCH2MArDtTa6SQ5iE
        status: active
        display_name: 王式耜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王開運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開運 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_i4uAHMCH2MArDtTa6SQ5iE | 王式耜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開運（CBDB 34194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34194&o=json)
