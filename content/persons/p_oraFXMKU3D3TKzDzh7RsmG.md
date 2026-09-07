---
schema: wang-person/v1
id: p_oraFXMKU3D3TKzDzh7RsmG
status: active
merged_into: null
display_name: 王思敬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YbmYSGbFn6PL3rXpWgwYvq
        subject_person_id: p_oraFXMKU3D3TKzDzh7RsmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175449 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ttp42nq9owttdXUy8SkENK
          claim_id: c_YbmYSGbFn6PL3rXpWgwYvq
          source_id: s_yKEdcyv2KLqMuEwPuseALp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yKEdcyv2KLqMuEwPuseALp
            source_type: api_record
            title: 维基数据：王思敬（Q45660309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660309
            external_identifier: Q45660309
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_Rnxi0N5mPozirVIAkBs6Tu
          claim_id: c_YbmYSGbFn6PL3rXpWgwYvq
          source_id: s_SVF3VEcBDazBKjH16sEjo9
          stance: supports
          locator: CBDB:175449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SVF3VEcBDazBKjH16sEjo9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思敬（175449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175449&o=json
            external_identifier: CBDB:175449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.338Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fKMfNtM93wShFb6f2Y9EJL
        subject_person_id: p_oraFXMKU3D3TKzDzh7RsmG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ae5EevGZ2Kg2f3swgAShw8
          claim_id: c_fKMfNtM93wShFb6f2Y9EJL
          source_id: s_yKEdcyv2KLqMuEwPuseALp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yKEdcyv2KLqMuEwPuseALp
            source_type: api_record
            title: 维基数据：王思敬（Q45660309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660309
            external_identifier: Q45660309
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oCWUU4prRxM5KzZwcTgmFa
        subject_person_id: p_oraFXMKU3D3TKzDzh7RsmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G2vNT6sF6QZmY9FJNv3tsA
          claim_id: c_oCWUU4prRxM5KzZwcTgmFa
          source_id: s_yKEdcyv2KLqMuEwPuseALp
          stance: supports
          locator: Q45660309
          quotation: null
          interpretation_note: null
          source:
            id: s_yKEdcyv2KLqMuEwPuseALp
            source_type: api_record
            title: 维基数据：王思敬（Q45660309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660309
            external_identifier: Q45660309
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_xroKVjv6n3TmGpYiG7p79K
          claim_id: c_oCWUU4prRxM5KzZwcTgmFa
          source_id: s_SVF3VEcBDazBKjH16sEjo9
          stance: supports
          locator: Q45660309
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bJWyqwP1bTLUGbWt3n9dJm
        subject_person_id: p_HJR95p6bpmzGSt9XMtckxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oraFXMKU3D3TKzDzh7RsmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8LxH5dP2u6K29fkrx3tGWN
          claim_id: c_bJWyqwP1bTLUGbWt3n9dJm
          source_id: s_iV3qW6A4QfnxLU7PD4KfDQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV3qW6A4QfnxLU7PD4KfDQ
            source_type: api_record
            title: 维基数据：王缋（Q45660247）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660247
            external_identifier: Q45660247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs_Pv9AyaVk9XQ4yukcSyy8Dc
          claim_id: c_bJWyqwP1bTLUGbWt3n9dJm
          source_id: s_8W1MwDdomqFBQtfPT2qDbd
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8W1MwDdomqFBQtfPT2qDbd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繢（175448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175448&o=json
            external_identifier: CBDB:175448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.598Z
            metadata_json: null
        - id: cs_WHK6YFwiEm1EuSa8FdBDFr
          claim_id: c_bJWyqwP1bTLUGbWt3n9dJm
          source_id: s_yKEdcyv2KLqMuEwPuseALp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yKEdcyv2KLqMuEwPuseALp
            source_type: api_record
            title: 维基数据：王思敬（Q45660309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660309
            external_identifier: Q45660309
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_MxduCvf175d4bEtN7c2a2M
          claim_id: c_bJWyqwP1bTLUGbWt3n9dJm
          source_id: s_SVF3VEcBDazBKjH16sEjo9
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SVF3VEcBDazBKjH16sEjo9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思敬（175449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175449&o=json
            external_identifier: CBDB:175449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.338Z
            metadata_json: null
      object_person:
        id: p_HJR95p6bpmzGSt9XMtckxr
        status: active
        display_name: 王缋
        merged_into_person_id: null
  children:
    - claim:
        id: c_aJUxLGUVG3bEedb47Y98vy
        subject_person_id: p_oraFXMKU3D3TKzDzh7RsmG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fwC3pBy6ccvaFLEwFaAgdu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ELc8ni1Hx3S1m9fRaVJwxB
          claim_id: c_aJUxLGUVG3bEedb47Y98vy
          source_id: s_SVF3VEcBDazBKjH16sEjo9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SVF3VEcBDazBKjH16sEjo9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思敬（175449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175449&o=json
            external_identifier: CBDB:175449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.338Z
            metadata_json: null
        - id: cs_ZNhp3SKtc1spNNxmgjP78c
          claim_id: c_aJUxLGUVG3bEedb47Y98vy
          source_id: s_yKEdcyv2KLqMuEwPuseALp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_yKEdcyv2KLqMuEwPuseALp
            source_type: api_record
            title: 维基数据：王思敬（Q45660309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660309
            external_identifier: Q45660309
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.178Z
            metadata_json: null
        - id: cs_HWxu2fEmiW39vCZok9MW3L
          claim_id: c_aJUxLGUVG3bEedb47Y98vy
          source_id: s_sitLWvHHK7TUtcs8QVaEju
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sitLWvHHK7TUtcs8QVaEju
            source_type: api_record
            title: 维基数据：王海云（Q45660369）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660369
            external_identifier: Q45660369
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:28.974Z
            metadata_json: null
        - id: cs_yYipCCEKw5ZmPu5igCr4aR
          claim_id: c_aJUxLGUVG3bEedb47Y98vy
          source_id: s_PXHSk5otACWDSh5SZ6w9mo
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PXHSk5otACWDSh5SZ6w9mo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王海雲（175450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175450&o=json
            external_identifier: CBDB:175450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:29.139Z
            metadata_json: null
      object_person:
        id: p_fwC3pBy6ccvaFLEwFaAgdu
        status: active
        display_name: 王海云
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思敬（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175449 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王思敬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HJR95p6bpmzGSt9XMtckxr | 王缋 | accepted |
| children | p_fwC3pBy6ccvaFLEwFaAgdu | 王海云 | accepted |

## 外部来源

- [维基数据：王海云（Q45660369）](https://www.wikidata.org/wiki/Q45660369)
- [维基数据：王缋（Q45660247）](https://www.wikidata.org/wiki/Q45660247)
- [维基数据：王思敬（Q45660309）](https://www.wikidata.org/wiki/Q45660309)
- [CBDB 中国历代人物传记资料库：王海雲（175450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175450&o=json)
- [CBDB 中国历代人物传记资料库：王繢（175448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175448&o=json)
- [CBDB 中国历代人物传记资料库：王思敬（175449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175449&o=json)
