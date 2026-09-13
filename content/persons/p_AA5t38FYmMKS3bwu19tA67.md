---
schema: wang-person/v1
id: p_AA5t38FYmMKS3bwu19tA67
status: active
merged_into: null
display_name: 王景略
cbdb_id: 23165
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KLHPaip2S45jJDGPXAUqiP
        subject_person_id: p_AA5t38FYmMKS3bwu19tA67
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景略，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_a3QiJOjNY1T6cLpCxOFa_X
          claim_id: c_KLHPaip2S45jJDGPXAUqiP
          source_id: s_QBy2oKe5jHFnjTwWrJqN1F
          stance: supports
          locator: CBDB:23165
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QBy2oKe5jHFnjTwWrJqN1F
            source_type: api_record
            title: 中国历代人物传记资料库：王景略（CBDB 23165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23165&o=json
            external_identifier: CBDB:23165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KJhjr2M3GF5hYxrv7A7hXQ
        subject_person_id: p_AA5t38FYmMKS3bwu19tA67
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景略
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EeGBUYPoSk3rNCXRhFRL5x
          claim_id: c_KJhjr2M3GF5hYxrv7A7hXQ
          source_id: s_QBy2oKe5jHFnjTwWrJqN1F
          stance: supports
          locator: CBDB:23165
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RNBL2XDmzfXXlwTDocGC3T
        subject_person_id: p_V8jynzKLZNGYw9PD8YeQik
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AA5t38FYmMKS3bwu19tA67
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pm9sPdR0Qf-jjlVcCJ8ldn
          claim_id: c_RNBL2XDmzfXXlwTDocGC3T
          source_id: s_QBy2oKe5jHFnjTwWrJqN1F
          stance: supports
          locator: CBDB 双向互证（父 王師虞 ⇄ 子 王景略）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: &a2
            id: s_QBy2oKe5jHFnjTwWrJqN1F
            source_type: api_record
            title: 中国历代人物传记资料库：王景略（CBDB 23165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23165&o=json
            external_identifier: CBDB:23165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_V8jynzKLZNGYw9PD8YeQik
        status: active
        display_name: 王師虞
        merged_into_person_id: null
  children:
    - claim:
        id: c_6BILkbPrZXDQPP8of4s3mu
        subject_person_id: p_AA5t38FYmMKS3bwu19tA67
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NrSbsVxWb6HeSJJMvGiVCq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvguGO-jncXLHyIiquOxT1
          claim_id: c_6BILkbPrZXDQPP8of4s3mu
          source_id: s_ci8sUDaa5XuoyXFXTT9f4p
          stance: supports
          locator: CBDB 双向互证（父 王景略 ⇄ 子 王藻）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ci8sUDaa5XuoyXFXTT9f4p
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 23167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23167&o=json
            external_identifier: CBDB:23167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NrSbsVxWb6HeSJJMvGiVCq
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c_zRV8I313yy_tIzfM2G5E2k
        subject_person_id: p_AA5t38FYmMKS3bwu19tA67
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PWZKPghh5Q5wLxBM3REBqJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F9SE1v_HHxZ0wZP-y-LDgM
          claim_id: c_zRV8I313yy_tIzfM2G5E2k
          source_id: s_QBy2oKe5jHFnjTwWrJqN1F
          stance: supports
          locator: CBDB 双向互证（子 王芾 ⇄ 父 王景略）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a2
      object_person:
        id: p_PWZKPghh5Q5wLxBM3REBqJ
        status: active
        display_name: 王芾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景略，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23165） | accepted |
| name.primary | 王景略 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V8jynzKLZNGYw9PD8YeQik | 王師虞 | accepted |
| children | p_NrSbsVxWb6HeSJJMvGiVCq | 王藻 | accepted |
| children | p_PWZKPghh5Q5wLxBM3REBqJ | 王芾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景略（CBDB 23165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23165&o=json)
- [中国历代人物传记资料库：王藻（CBDB 23167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23167&o=json)
