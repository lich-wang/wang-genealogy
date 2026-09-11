---
schema: wang-person/v1
id: p_wHwAJtDudMQ2GT5RL3YRMD
status: active
merged_into: null
display_name: 王翰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HXU6KvbC5LYXND8RmmB6nx
        subject_person_id: p_wHwAJtDudMQ2GT5RL3YRMD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7EFfpATo2VRJ4JnW87CDQq
          claim_id: c_HXU6KvbC5LYXND8RmmB6nx
          source_id: s_Th1hiqbFrhhZNVJBECdN9o
          stance: supports
          locator: CBDB:22090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22090）
          source: &a1
            id: s_Th1hiqbFrhhZNVJBECdN9o
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 22090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22090&o=json
            external_identifier: CBDB:22090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9EU1eSbLpvvpNJd1NLEdau
        subject_person_id: p_wHwAJtDudMQ2GT5RL3YRMD
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
        - id: cs_qYNZqMBX6fJRKMhCqoEENc
          claim_id: c_9EU1eSbLpvvpNJd1NLEdau
          source_id: s_Th1hiqbFrhhZNVJBECdN9o
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
        id: c_r0uW0Ioi4crWhmGVmADrAB
        subject_person_id: p_H8kG2WYMk6a9qQUsMCMMoM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHwAJtDudMQ2GT5RL3YRMD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcGStNEj9UUIaG2iaHV9kB
          claim_id: c_r0uW0Ioi4crWhmGVmADrAB
          source_id: s_YUF1HggwsC1W3F6NDLqQQA
          stance: supports
          locator: CBDB 双向互证（子 王翰 ⇄ 父 王誠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YUF1HggwsC1W3F6NDLqQQA
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 22089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22089&o=json
            external_identifier: CBDB:22089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H8kG2WYMk6a9qQUsMCMMoM
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H8kG2WYMk6a9qQUsMCMMoM | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 22089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22089&o=json)
- [中国历代人物传记资料库：王翰（CBDB 22090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22090&o=json)
