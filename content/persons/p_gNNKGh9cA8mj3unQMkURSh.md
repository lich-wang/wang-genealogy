---
schema: wang-person/v1
id: p_gNNKGh9cA8mj3unQMkURSh
status: active
merged_into: null
display_name: 王升
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1YipQEvzuM3JzTC1dypJB
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州長史。中国历代人物传记资料库（CBDB）以人物编号 175379 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DJdZhE88PPHYAv3hoEJDA9
          claim_id: c_N1YipQEvzuM3JzTC1dypJB
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_W8STWzdfFt3nIrpxTa2g-j
          claim_id: c_N1YipQEvzuM3JzTC1dypJB
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: CBDB:175379
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NXX3utDWdsAdm7gLswNmL6
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uTFUWzKLYiALT6bhyijpzj
          claim_id: c_NXX3utDWdsAdm7gLswNmL6
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TEFjBBYo1ignBNMzhzMrph
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5eJsFnC3SU8BBLuesNQFXd
          claim_id: c_TEFjBBYo1ignBNMzhzMrph
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: Q45656308
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_LL5T3Eu7huFdVVbA8d8Pas
          claim_id: c_TEFjBBYo1ignBNMzhzMrph
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: Q45656308
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z9wD6SWSAfHacvBUtqoYLJ
        subject_person_id: p_QAy8esGqXh4jpJu14jC2nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gNNKGh9cA8mj3unQMkURSh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PJ5GW22CZCGYQHhhBU5gjS
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_h2mefce4DJDBc45VEYT8g6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h2mefce4DJDBc45VEYT8g6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方則（175354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json
            external_identifier: CBDB:175354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.773Z
            metadata_json: null
        - id: cs_SDFwEzmK9S2xwm3gALinAa
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_PEi5PX3u187bT4kpf14tBk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PEi5PX3u187bT4kpf14tBk
            source_type: api_record
            title: 维基数据：王方则（Q45654812）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654812
            external_identifier: Q45654812
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.609Z
            metadata_json: null
        - id: cs_ak9YJ2sWf7KnUmwN831ein
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_RNTBQJzqY6gB7P95AUTNEG
          claim_id: c_Z9wD6SWSAfHacvBUtqoYLJ
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
      object_person:
        id: p_QAy8esGqXh4jpJu14jC2nj
        status: active
        display_name: 王方则
        merged_into_person_id: null
  children:
    - claim:
        id: c_uWFWcUtscqQ2jNiC7qmoB6
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oqJyshhnaM6gipZPsvALnC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GdN41aVN2ha6KYRuPJSr63
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
        - id: cs_TQPZNrCg4PUNC3BaAjRQdC
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_7wHEdBRQoCYKnC6ENfCKWB
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_BPayNbcmVFhh17mWcYhmRB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BPayNbcmVFhh17mWcYhmRB
            source_type: api_record
            title: 维基数据：王绘（Q45656368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656368
            external_identifier: Q45656368
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_8tyV9eWC8YjNUDyUsMyEQf
          claim_id: c_uWFWcUtscqQ2jNiC7qmoB6
          source_id: s_hbkweP25trTPPowjoo9LfM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hbkweP25trTPPowjoo9LfM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繪（175380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175380&o=json
            external_identifier: CBDB:175380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.281Z
            metadata_json: null
      object_person:
        id: p_oqJyshhnaM6gipZPsvALnC
        status: active
        display_name: 王绘
        merged_into_person_id: null
    - claim:
        id: c_G2nHHoxssLWE2cpVXsmkZY
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rRe1MYifTALRTroz4iZG8i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V3yzL2obxFKvJG5YawDRcU
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_vfc2Yj4H6FYfho8VZWUKyT
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
        - id: cs_XmirLXisejbspg7ru3WrLm
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_1y6Whfper9sB13aAFKU8bc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1y6Whfper9sB13aAFKU8bc
            source_type: api_record
            title: 维基数据：王纵（Q45656430）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656430
            external_identifier: Q45656430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_WaTFdDaWCsp15KBa67Vy27
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_1qVNJgS51ap7jEiNZPAHQm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1qVNJgS51ap7jEiNZPAHQm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縱（175381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175381&o=json
            external_identifier: CBDB:175381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.267Z
            metadata_json: null
      object_person:
        id: p_rRe1MYifTALRTroz4iZG8i
        status: active
        display_name: 王纵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王升（卒于733年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任州長史。中国历代人物传记资料库（CBDB）以人物编号 175379 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 733年 | accepted |
| name.primary | 王升 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QAy8esGqXh4jpJu14jC2nj | 王方则 | accepted |
| children | p_oqJyshhnaM6gipZPsvALnC | 王绘 | accepted |
| children | p_rRe1MYifTALRTroz4iZG8i | 王纵 | accepted |

## 外部来源

- [维基数据：王方则（Q45654812）](https://www.wikidata.org/wiki/Q45654812)
- [维基数据：王绘（Q45656368）](https://www.wikidata.org/wiki/Q45656368)
- [维基数据：王升（Q45656308）](https://www.wikidata.org/wiki/Q45656308)
- [维基数据：王纵（Q45656430）](https://www.wikidata.org/wiki/Q45656430)
- [CBDB 中国历代人物传记资料库：王方則（175354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175354&o=json)
- [CBDB 中国历代人物传记资料库：王繪（175380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175380&o=json)
- [CBDB 中国历代人物传记资料库：王昇（175379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json)
- [CBDB 中国历代人物传记资料库：王縱（175381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175381&o=json)
