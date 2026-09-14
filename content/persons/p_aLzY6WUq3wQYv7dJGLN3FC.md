---
schema: wang-person/v1
id: p_aLzY6WUq3wQYv7dJGLN3FC
status: active
merged_into: null
display_name: 王藥
cbdb_id: 386683
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4M9i9u7p1X9cJRxZXGZjV
        subject_person_id: p_aLzY6WUq3wQYv7dJGLN3FC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藥，明人物。籍贯金華，身份为畫家、書院山長，曾任州學正。（中国历代人物传记资料库 CBDB 386683）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KEK7pk0w_2RlCyyAdYY09L
          claim_id: c_j4M9i9u7p1X9cJRxZXGZjV
          source_id: s_5CdNsdpAZbf7XVsp75capL
          stance: supports
          locator: CBDB:386683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5CdNsdpAZbf7XVsp75capL
            source_type: api_record
            title: 中国历代人物传记资料库：王藥（CBDB 386683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386683&o=json
            external_identifier: CBDB:386683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eQhUaAoHhdSDFBo1Fxy3G7
        subject_person_id: p_aLzY6WUq3wQYv7dJGLN3FC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TtoXTvCK62myJ4QrVYoS2A
          claim_id: c_eQhUaAoHhdSDFBo1Fxy3G7
          source_id: s_5CdNsdpAZbf7XVsp75capL
          stance: supports
          locator: CBDB:386683
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E59NIK3SYNYD0VjGXZYCDr
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_aLzY6WUq3wQYv7dJGLN3FC
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9XO9g5sWKrQ5g6kWSVocmn
          claim_id: c_E59NIK3SYNYD0VjGXZYCDr
          source_id: s_k-8t0wfvrLKmBmmicHq4_l
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_k-8t0wfvrLKmBmmicHq4_l
            source_type: api_record
            title: 中国历代人物传记资料库：王藥（CBDB 386683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386683&o=json
            external_identifier: CBDB:386683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7iL2YaUSwb4m6n9tZWZ4k5
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王藥，明人物。籍贯金華，身份为畫家、書院山長，曾任州學正。（中国历代人物传记资料库 CBDB 386683） | accepted |
| name.primary | 王藥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7iL2YaUSwb4m6n9tZWZ4k5 | 唐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藥（CBDB 386683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386683&o=json)
