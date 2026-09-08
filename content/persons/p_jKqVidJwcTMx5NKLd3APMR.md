---
schema: wang-person/v1
id: p_jKqVidJwcTMx5NKLd3APMR
status: active
merged_into: null
display_name: 王瓌
cbdb_id: 184937
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A4grA5qCXxGZHPhpdUXZNu
        subject_person_id: p_jKqVidJwcTMx5NKLd3APMR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oz1xAqU8VwhC9bSbRo6PsS
          claim_id: c_A4grA5qCXxGZHPhpdUXZNu
          source_id: s_xB3vVrbuHBzPontAgF3Vsg
          stance: supports
          locator: Q45603143
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_xB3vVrbuHBzPontAgF3Vsg
            source_type: api_record
            title: 维基数据：王瓌（Q45603143）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603143
            external_identifier: Q45603143
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_pP27bbFK6gzhAMNFeGjz2N
          claim_id: c_A4grA5qCXxGZHPhpdUXZNu
          source_id: s_W6FgkDJwadDyaHhhgi1wWx
          stance: supports
          locator: CBDB:184937
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_W6FgkDJwadDyaHhhgi1wWx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瓌（184937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184937&o=json
            external_identifier: CBDB:184937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vn9J5KSTAjmHFQssoENG1D
        subject_person_id: p_jKqVidJwcTMx5NKLd3APMR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 184937
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oZXqtBHTsfXft7soFR4EkH
          claim_id: c_Vn9J5KSTAjmHFQssoENG1D
          source_id: s_xB3vVrbuHBzPontAgF3Vsg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B7D68GwTMrYgQf7eETWQn1
        subject_person_id: p_jKqVidJwcTMx5NKLd3APMR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqNnfo24S3K8kQQNQTyugo
          claim_id: c_B7D68GwTMrYgQf7eETWQn1
          source_id: s_xB3vVrbuHBzPontAgF3Vsg
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7WNVYr2FAUHPoZ2SLJrtK7
        subject_person_id: p_jKqVidJwcTMx5NKLd3APMR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLR2LwV5BkQKiVBVi28oBG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DnTXETpm3k8k1QZ2K13MNh
          claim_id: c_7WNVYr2FAUHPoZ2SLJrtK7
          source_id: s_5qmAs78nS9KmbmEN8TQgud
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5qmAs78nS9KmbmEN8TQgud
            source_type: api_record
            title: 维基数据：王缙（Q45603209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603209
            external_identifier: Q45603209
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_3NigPWYrJMbTZRyEQn47m1
          claim_id: c_7WNVYr2FAUHPoZ2SLJrtK7
          source_id: s_xB3vVrbuHBzPontAgF3Vsg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_mLR2LwV5BkQKiVBVi28oBG
        status: active
        display_name: 王缙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓌 | accepted |
| bio.summary | Tang dynasty person CBDB = 184937 | accepted |
| death.date | 743年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mLR2LwV5BkQKiVBVi28oBG | 王缙 | accepted |

## 外部来源

- [维基数据：王瓌（Q45603143）](https://www.wikidata.org/wiki/Q45603143)
- [维基数据：王缙（Q45603209）](https://www.wikidata.org/wiki/Q45603209)
- [CBDB 中国历代人物传记资料库：王瓌（184937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184937&o=json)
