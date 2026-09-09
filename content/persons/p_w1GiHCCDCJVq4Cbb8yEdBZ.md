---
schema: wang-person/v1
id: p_w1GiHCCDCJVq4Cbb8yEdBZ
status: active
merged_into: null
display_name: 王之政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U77q1nBFd87D8rBquX5Tw3
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNALHYsw6ffDjQEEoeAKRm
          claim_id: c_U77q1nBFd87D8rBquX5Tw3
          source_id: s_AkT7bdZRSM9dKaqiVizv3B
          stance: supports
          locator: CBDB:555348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555348）
          source: &a1
            id: s_AkT7bdZRSM9dKaqiVizv3B
            source_type: api_record
            title: 中国历代人物传记资料库：王之政（CBDB 555348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555348&o=json
            external_identifier: CBDB:555348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J2b5s3GdLXqr9jgrdsnquv
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
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
        - id: cs_fq6kUKpNNedkbi29AVxxfZ
          claim_id: c_J2b5s3GdLXqr9jgrdsnquv
          source_id: s_AkT7bdZRSM9dKaqiVizv3B
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

# 王之政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之政 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之政（CBDB 555348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555348&o=json)
