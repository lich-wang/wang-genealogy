---
schema: wang-person/v1
id: p_pfanBGC3L8J2UawV7jgzk2
status: active
merged_into: null
display_name: 王璣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7oafMmH2skriFkvKR3z9PC
        subject_person_id: p_pfanBGC3L8J2UawV7jgzk2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F83dCaokyfXTbshiomPQjG
          claim_id: c_7oafMmH2skriFkvKR3z9PC
          source_id: s_yij1v5rFiVE2CjgpoG6Jsj
          stance: supports
          locator: CBDB:562454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562454）
          source: &a1
            id: s_yij1v5rFiVE2CjgpoG6Jsj
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 562454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562454&o=json
            external_identifier: CBDB:562454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aJFJd53eZB4vmQmSEGyFUx
        subject_person_id: p_pfanBGC3L8J2UawV7jgzk2
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
        - id: cs_A3r1ate9oA5AaEVggL9C46
          claim_id: c_aJFJd53eZB4vmQmSEGyFUx
          source_id: s_yij1v5rFiVE2CjgpoG6Jsj
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

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 562454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562454&o=json)
