---
schema: wang-person/v1
id: p_QQS2uT34uLgVeU49WUG1R1
status: active
merged_into: null
display_name: 王伯貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVFzqWJwpd5MY3Sj1bzStp
        subject_person_id: p_QQS2uT34uLgVeU49WUG1R1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TVMG9EJRm3ZjGaXqJ8caKY
          claim_id: c_TVFzqWJwpd5MY3Sj1bzStp
          source_id: s_VS38sa6zgKRrbEZGaCLPiL
          stance: supports
          locator: CBDB:34494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34494）
          source: &a1
            id: s_VS38sa6zgKRrbEZGaCLPiL
            source_type: api_record
            title: 中国历代人物传记资料库：王伯貞（CBDB 34494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34494&o=json
            external_identifier: CBDB:34494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_boGUoLRibfBSzEkXAE4464
        subject_person_id: p_QQS2uT34uLgVeU49WUG1R1
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
        - id: cs_hTNE2qkH4yyQCJQBP1UtFF
          claim_id: c_boGUoLRibfBSzEkXAE4464
          source_id: s_VS38sa6zgKRrbEZGaCLPiL
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
        id: c_JBHuxaOZ86uNCNJ4rRnKPe
        subject_person_id: p_QQS2uT34uLgVeU49WUG1R1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgGP8n81XBb5kcs7D54q73
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59OFa-Mmtifv8YmRY882I-
          claim_id: c_JBHuxaOZ86uNCNJ4rRnKPe
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: CBDB 双向互证（父 王伯貞 ⇄ 子 王直）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PgGP8n81XBb5kcs7D54q73
        status: active
        display_name: 王直
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯貞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PgGP8n81XBb5kcs7D54q73 | 王直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯貞（CBDB 34494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34494&o=json)
- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
