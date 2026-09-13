---
schema: wang-person/v1
id: p_6x2EniRjqP1E63qXhDSZmQ
status: active
merged_into: null
display_name: 王擢
cbdb_id: 175501
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4W7FQtcmyXDmcS1Kjj65s
        subject_person_id: p_6x2EniRjqP1E63qXhDSZmQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175501）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_v24vGLQ547L7JiYfnt8jKq
          claim_id: c_B4W7FQtcmyXDmcS1Kjj65s
          source_id: s_tEkHcaJwLGbDdUCp9eAqrd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tEkHcaJwLGbDdUCp9eAqrd
            source_type: api_record
            title: 维基数据：王擢（Q45663376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663376
            external_identifier: Q45663376
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_qrxjlD3mLg0pVR-IIa6Ke6
          claim_id: c_B4W7FQtcmyXDmcS1Kjj65s
          source_id: s_gEaNLCcLHApwqxH7FT24cB
          stance: supports
          locator: CBDB:175501
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gEaNLCcLHApwqxH7FT24cB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王擢（175501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175501&o=json
            external_identifier: CBDB:175501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.068Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NSKPKzNo6DnGCNCzyHaHwU
        subject_person_id: p_6x2EniRjqP1E63qXhDSZmQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rakK4EW2vzygQV6p858sN8
          claim_id: c_NSKPKzNo6DnGCNCzyHaHwU
          source_id: s_tEkHcaJwLGbDdUCp9eAqrd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tEkHcaJwLGbDdUCp9eAqrd
            source_type: api_record
            title: 维基数据：王擢（Q45663376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663376
            external_identifier: Q45663376
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MbYFqD2UbDpjGpj5Zivitn
        subject_person_id: p_6x2EniRjqP1E63qXhDSZmQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ERMECkDxF75z8fb169diaZ
          claim_id: c_MbYFqD2UbDpjGpj5Zivitn
          source_id: s_gEaNLCcLHApwqxH7FT24cB
          stance: supports
          locator: Q45663376
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hS79CQecu62uASPoUuxqcb
          claim_id: c_MbYFqD2UbDpjGpj5Zivitn
          source_id: s_tEkHcaJwLGbDdUCp9eAqrd
          stance: supports
          locator: Q45663376
          quotation: null
          interpretation_note: null
          source:
            id: s_tEkHcaJwLGbDdUCp9eAqrd
            source_type: api_record
            title: 维基数据：王擢（Q45663376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663376
            external_identifier: Q45663376
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gjBHFNnK8DNyagvcc7mSar
        subject_person_id: p_TyJ2M3ZheRX5T2BF68hTVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6x2EniRjqP1E63qXhDSZmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2KSTwu9pdpj1Q8N3krFEhP
          claim_id: c_gjBHFNnK8DNyagvcc7mSar
          source_id: s_w6Eqp9zJRFFLrBraexCCYD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6Eqp9zJRFFLrBraexCCYD
            source_type: api_record
            title: 维基数据：王源中（Q16903986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903986
            external_identifier: Q16903986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BA%90%E4%B8%AD
        - id: cs_hHQQMpkVNHq7tVyNoFfdKK
          claim_id: c_gjBHFNnK8DNyagvcc7mSar
          source_id: s_obzovB79XtaLoD1NBN8fF4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_obzovB79XtaLoD1NBN8fF4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源中（175500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json
            external_identifier: CBDB:175500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.738Z
            metadata_json: null
        - id: cs_TaeoDqFyu3pF2rJCU4VYQ1
          claim_id: c_gjBHFNnK8DNyagvcc7mSar
          source_id: s_tEkHcaJwLGbDdUCp9eAqrd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tEkHcaJwLGbDdUCp9eAqrd
            source_type: api_record
            title: 维基数据：王擢（Q45663376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663376
            external_identifier: Q45663376
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json: null
        - id: cs_Zgx9NPnYeiXAWNgBwq5YH2
          claim_id: c_gjBHFNnK8DNyagvcc7mSar
          source_id: s_gEaNLCcLHApwqxH7FT24cB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_gEaNLCcLHApwqxH7FT24cB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王擢（175501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175501&o=json
            external_identifier: CBDB:175501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.068Z
            metadata_json: null
      object_person:
        id: p_TyJ2M3ZheRX5T2BF68hTVk
        status: active
        display_name: 王源中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王擢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王擢（卒于875年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175501） | accepted |
| death.date | 875年 | accepted |
| name.primary | 王擢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TyJ2M3ZheRX5T2BF68hTVk | 王源中 | accepted |

## 外部来源

- [维基数据：王源中（Q16903986）](https://www.wikidata.org/wiki/Q16903986)
- [维基数据：王擢（Q45663376）](https://www.wikidata.org/wiki/Q45663376)
- [CBDB 中国历代人物传记资料库：王源中（175500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json)
- [CBDB 中国历代人物传记资料库：王擢（175501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175501&o=json)
