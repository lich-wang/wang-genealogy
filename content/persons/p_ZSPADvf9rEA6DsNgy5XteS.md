---
schema: wang-person/v1
id: p_ZSPADvf9rEA6DsNgy5XteS
status: active
merged_into: null
display_name: 王暭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHbYVxacf45ey4SZuMU3ak
        subject_person_id: p_ZSPADvf9rEA6DsNgy5XteS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暭（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任觀察推官。中国历代人物传记资料库（CBDB）以人物编号 175467 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MGudeuMcY4V53rHzEKj9Vo
          claim_id: c_zHbYVxacf45ey4SZuMU3ak
          source_id: s_U4wH7dCaQDtxeLG5JWwMKK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_U4wH7dCaQDtxeLG5JWwMKK
            source_type: api_record
            title: 维基数据：王暭（Q45661391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661391
            external_identifier: Q45661391
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_ehX9dy4aGlO-_lVaoW0k_c
          claim_id: c_zHbYVxacf45ey4SZuMU3ak
          source_id: s_jZc9sgg9qy5T5PLcw31oJv
          stance: supports
          locator: CBDB:175467
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jZc9sgg9qy5T5PLcw31oJv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暭（175467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175467&o=json
            external_identifier: CBDB:175467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.401Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r4hUy18qHHTDNn4TgUAKCt
        subject_person_id: p_ZSPADvf9rEA6DsNgy5XteS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0856-01-01
            latest: 0856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hk4sDrsiVN7C6iu2twBK73
          claim_id: c_r4hUy18qHHTDNn4TgUAKCt
          source_id: s_U4wH7dCaQDtxeLG5JWwMKK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_U4wH7dCaQDtxeLG5JWwMKK
            source_type: api_record
            title: 维基数据：王暭（Q45661391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661391
            external_identifier: Q45661391
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWZURJNzMP6LFT8sWFsLSA
        subject_person_id: p_ZSPADvf9rEA6DsNgy5XteS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KmSYshjiPS6jFx55vJwit1
          claim_id: c_kWZURJNzMP6LFT8sWFsLSA
          source_id: s_U4wH7dCaQDtxeLG5JWwMKK
          stance: supports
          locator: Q45661391
          quotation: null
          interpretation_note: null
          source:
            id: s_U4wH7dCaQDtxeLG5JWwMKK
            source_type: api_record
            title: 维基数据：王暭（Q45661391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661391
            external_identifier: Q45661391
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_WM98LsprW8hhN2tp9dUQw1
          claim_id: c_kWZURJNzMP6LFT8sWFsLSA
          source_id: s_jZc9sgg9qy5T5PLcw31oJv
          stance: supports
          locator: Q45661391
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2BJnxXZpFyRtk9KriSwDj7
        subject_person_id: p_vEhXCL8FygQQwURMRVeMJc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZSPADvf9rEA6DsNgy5XteS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ze4pBNvzKcyFcMwtpBP6Bo
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_7GmMcPgx4bg8fGLDs9ngLk
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7GmMcPgx4bg8fGLDs9ngLk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王長文（175463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json
            external_identifier: CBDB:175463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_yzQ57mUSBJK5frS7e6VyZF
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_XqngANYUVtYQtG6CooyTkB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XqngANYUVtYQtG6CooyTkB
            source_type: api_record
            title: 维基数据：王长文（Q45661148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661148
            external_identifier: Q45661148
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_4V22QEQx7CDbrPc5AhRGKq
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_U4wH7dCaQDtxeLG5JWwMKK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_U4wH7dCaQDtxeLG5JWwMKK
            source_type: api_record
            title: 维基数据：王暭（Q45661391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661391
            external_identifier: Q45661391
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:02.226Z
            metadata_json: null
        - id: cs_TM1pBG4Ri8GFRjfW99NMpf
          claim_id: c_2BJnxXZpFyRtk9KriSwDj7
          source_id: s_jZc9sgg9qy5T5PLcw31oJv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jZc9sgg9qy5T5PLcw31oJv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暭（175467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175467&o=json
            external_identifier: CBDB:175467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:02.401Z
            metadata_json: null
      object_person:
        id: p_vEhXCL8FygQQwURMRVeMJc
        status: active
        display_name: 王长文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暭（卒于856年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任觀察推官。中国历代人物传记资料库（CBDB）以人物编号 175467 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 856年 | accepted |
| name.primary | 王暭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vEhXCL8FygQQwURMRVeMJc | 王长文 | accepted |

## 外部来源

- [维基数据：王暭（Q45661391）](https://www.wikidata.org/wiki/Q45661391)
- [维基数据：王长文（Q45661148）](https://www.wikidata.org/wiki/Q45661148)
- [CBDB 中国历代人物传记资料库：王暭（175467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175467&o=json)
- [CBDB 中国历代人物传记资料库：王長文（175463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175463&o=json)
