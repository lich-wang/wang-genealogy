---
schema: wang-person/v1
id: p_39hKySbW7rCCbNVGgcEod3
status: active
merged_into: null
display_name: 王豐兒
cbdb_id: 160469
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1yhJfw2Y8qpFAQKLKULtT
        subject_person_id: p_39hKySbW7rCCbNVGgcEod3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豐兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lgONiDxO6wCgy6kMh1Pmha
          claim_id: c_i1yhJfw2Y8qpFAQKLKULtT
          source_id: s_d6Xz7VHhXDegztXw2wAVPD
          stance: supports
          locator: CBDB:160469
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_d6Xz7VHhXDegztXw2wAVPD
            source_type: api_record
            title: 中国历代人物传记资料库：王豐兒（CBDB 160469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160469&o=json
            external_identifier: CBDB:160469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_31Nj2w28gNFbNhnVf4gY24
        subject_person_id: p_39hKySbW7rCCbNVGgcEod3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豐兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hghxN2S8SPAewrc8ZePnbM
          claim_id: c_31Nj2w28gNFbNhnVf4gY24
          source_id: s_d6Xz7VHhXDegztXw2wAVPD
          stance: supports
          locator: CBDB:160469
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_d6Xz7VHhXDegztXw2wAVPD
            source_type: api_record
            title: 中国历代人物传记资料库：王豐兒（CBDB 160469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160469&o=json
            external_identifier: CBDB:160469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mFpI1E3w94sbehx9HQUjeC
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_39hKySbW7rCCbNVGgcEod3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6GOFoZ7G8Q1wBh5_v7VYA
          claim_id: c_mFpI1E3w94sbehx9HQUjeC
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cUBuvMo9eRXEUn6UkP3FHH
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 141997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json
            external_identifier: CBDB:141997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uLwVmgMC518Yd4ehoNd1de
        status: active
        display_name: 王誕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豐兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王豐兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160469 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王豐兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uLwVmgMC518Yd4ehoNd1de | 王誕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誕（CBDB 141997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json)
- [中国历代人物传记资料库：王豐兒（CBDB 160469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160469&o=json)
