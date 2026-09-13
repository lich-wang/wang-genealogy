---
schema: wang-person/v1
id: p_HJR95p6bpmzGSt9XMtckxr
status: active
merged_into: null
display_name: 王缋
cbdb_id: 175448
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1EY8WpFEhkfeSkhDGAuacC
        subject_person_id: p_HJR95p6bpmzGSt9XMtckxr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缋（卒于672年），唐人物。籍贯臨沂，曾任王府法曹參軍。（中国历代人物传记资料库 CBDB 175448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_t8oSzYR6X2C1pvDCkX9H9p
          claim_id: c_1EY8WpFEhkfeSkhDGAuacC
          source_id: s_iV3qW6A4QfnxLU7PD4KfDQ
          stance: supports
          locator: null
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
        - id: cs_DONf5ayQJvnsbUYNl3-Ppk
          claim_id: c_1EY8WpFEhkfeSkhDGAuacC
          source_id: s_8W1MwDdomqFBQtfPT2qDbd
          stance: supports
          locator: CBDB:175448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5fjMCWKLzxDcKN7QWU9QM4
        subject_person_id: p_HJR95p6bpmzGSt9XMtckxr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0672-01-01
            latest: 0672-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CBhrEZoFJ5256YHrn1no2a
          claim_id: c_5fjMCWKLzxDcKN7QWU9QM4
          source_id: s_iV3qW6A4QfnxLU7PD4KfDQ
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWvJsUm5BQ97suEWBhvMvk
        subject_person_id: p_HJR95p6bpmzGSt9XMtckxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5eNEGLfg1rf4Uve414coZE
          claim_id: c_KWvJsUm5BQ97suEWBhvMvk
          source_id: s_iV3qW6A4QfnxLU7PD4KfDQ
          stance: supports
          locator: Q45660247
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
        - id: cs_ueL9Sn8RH2x1daopqvheHP
          claim_id: c_KWvJsUm5BQ97suEWBhvMvk
          source_id: s_8W1MwDdomqFBQtfPT2qDbd
          stance: supports
          locator: Q45660247
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e5j4c7N6pTQqrk4JDnHx9V
        subject_person_id: p_ujGjqexGpFHSeeL644vaA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HJR95p6bpmzGSt9XMtckxr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wSh4XDhqt3zRK9ULC4Aat9
          claim_id: c_e5j4c7N6pTQqrk4JDnHx9V
          source_id: s_Nwn5LEBCq2tAp9BpBtAtnK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Nwn5LEBCq2tAp9BpBtAtnK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘直（175393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json
            external_identifier: CBDB:175393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.728Z
            metadata_json: null
        - id: cs_zvaLYFbeE2qr8QhEh6kZep
          claim_id: c_e5j4c7N6pTQqrk4JDnHx9V
          source_id: s_MuAKHk7C2oEADSy4mxkVHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuAKHk7C2oEADSy4mxkVHM
            source_type: api_record
            title: 维基数据：王弘直（Q45656974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656974
            external_identifier: Q45656974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98%E7%9B%B4
        - id: cs_W1GcNM5K6FEURcfMBqagWs
          claim_id: c_e5j4c7N6pTQqrk4JDnHx9V
          source_id: s_iV3qW6A4QfnxLU7PD4KfDQ
          stance: supports
          locator: P22（父）
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
        - id: cs_U6tGsLNZe96kcuGpacEQE3
          claim_id: c_e5j4c7N6pTQqrk4JDnHx9V
          source_id: s_8W1MwDdomqFBQtfPT2qDbd
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ujGjqexGpFHSeeL644vaA9
        status: active
        display_name: 王弘直
        merged_into_person_id: null
  children:
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
        id: p_oraFXMKU3D3TKzDzh7RsmG
        status: active
        display_name: 王思敬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王缋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缋（卒于672年），唐人物。籍贯臨沂，曾任王府法曹參軍。（中国历代人物传记资料库 CBDB 175448） | accepted |
| death.date | 672年 | accepted |
| name.primary | 王缋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujGjqexGpFHSeeL644vaA9 | 王弘直 | accepted |
| children | p_oraFXMKU3D3TKzDzh7RsmG | 王思敬 | accepted |

## 外部来源

- [维基数据：王弘直（Q45656974）](https://www.wikidata.org/wiki/Q45656974)
- [维基数据：王缋（Q45660247）](https://www.wikidata.org/wiki/Q45660247)
- [维基数据：王思敬（Q45660309）](https://www.wikidata.org/wiki/Q45660309)
- [CBDB 中国历代人物传记资料库：王弘直（175393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json)
- [CBDB 中国历代人物传记资料库：王繢（175448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175448&o=json)
- [CBDB 中国历代人物传记资料库：王思敬（175449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175449&o=json)
