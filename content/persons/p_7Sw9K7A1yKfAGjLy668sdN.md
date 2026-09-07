---
schema: wang-person/v1
id: p_7Sw9K7A1yKfAGjLy668sdN
status: active
merged_into: null
display_name: 王源茂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LBj7ADa6WCjxJYTrNw2t9B
        subject_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源茂（卒于819年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175456 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BGd6hG6fuzb1L6bFyhKzQG
          claim_id: c_LBj7ADa6WCjxJYTrNw2t9B
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_2pIkZ2tVi6uP4KXBssvafl
          claim_id: c_LBj7ADa6WCjxJYTrNw2t9B
          source_id: s_7YFFpnvvG3i8FxcmdFVQtK
          stance: supports
          locator: CBDB:175456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7YFFpnvvG3i8FxcmdFVQtK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源茂（175456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json
            external_identifier: CBDB:175456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.591Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DMciTSMBcZ9AsjtUVWo4QF
        subject_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0819-01-01
            latest: 0819-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_urdxW8wB1UjA62xJBAswsu
          claim_id: c_DMciTSMBcZ9AsjtUVWo4QF
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BS4hNk2jmXFveyzVL9THEZ
        subject_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源茂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iWBMV2xSJbd2zXxpSjSMZG
          claim_id: c_BS4hNk2jmXFveyzVL9THEZ
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: Q45660727
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_yXsKmKJjqizL4W5c5LDusE
          claim_id: c_BS4hNk2jmXFveyzVL9THEZ
          source_id: s_7YFFpnvvG3i8FxcmdFVQtK
          stance: supports
          locator: Q45660727
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g47Cqy5ycKP7ExnN8k9KsG
        subject_person_id: p_Mfx73EGxmx5Kei6PX1Dz5V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ea3ia8vd34TnZRnrJcJGgq
          claim_id: c_g47Cqy5ycKP7ExnN8k9KsG
          source_id: s_xEU7qamzNzH2Kqf76LHwey
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xEU7qamzNzH2Kqf76LHwey
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濡（175454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json
            external_identifier: CBDB:175454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.078Z
            metadata_json: null
        - id: cs_nVGDt9PkMvHwq2dtQAApV8
          claim_id: c_g47Cqy5ycKP7ExnN8k9KsG
          source_id: s_dP8YP9TivMwdEJ8gu57v3K
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dP8YP9TivMwdEJ8gu57v3K
            source_type: api_record
            title: 维基数据：王濡（Q45660609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660609
            external_identifier: Q45660609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
        - id: cs_fQd6Ck2GpoH95JEXi8NTpa
          claim_id: c_g47Cqy5ycKP7ExnN8k9KsG
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_iJuJGVVm4w8johZL8C4v1c
          claim_id: c_g47Cqy5ycKP7ExnN8k9KsG
          source_id: s_7YFFpnvvG3i8FxcmdFVQtK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7YFFpnvvG3i8FxcmdFVQtK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源茂（175456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json
            external_identifier: CBDB:175456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.591Z
            metadata_json: null
      object_person:
        id: p_Mfx73EGxmx5Kei6PX1Dz5V
        status: active
        display_name: 王濡
        merged_into_person_id: null
  children:
    - claim:
        id: c_hEYB9Vfy48KtfTuHdCGfgN
        subject_person_id: p_7Sw9K7A1yKfAGjLy668sdN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cv6xJKW3B4C3nm223hT23m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GPpB7oXB3PKPFnguE2BzGJ
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_YUnocS5U1RNEsYPWN9UXCu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YUnocS5U1RNEsYPWN9UXCu
            source_type: api_record
            title: 维基数据：王源茂（Q45660727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660727
            external_identifier: Q45660727
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_mXmAaRXAqN9EXaThxuLxtK
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_7YFFpnvvG3i8FxcmdFVQtK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7YFFpnvvG3i8FxcmdFVQtK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源茂（175456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json
            external_identifier: CBDB:175456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.591Z
            metadata_json: null
        - id: cs_r4NEYBc8DR31srL1TSchYv
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Yr1wCT5zA7oBEZ4pBJEpHZ
            source_type: api_record
            title: 维基数据：王璋（Q45660786）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660786
            external_identifier: Q45660786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_z2G8N6yMJHCXBRHpZ2wobP
          claim_id: c_hEYB9Vfy48KtfTuHdCGfgN
          source_id: s_SNtDRKwNHPnrCYNgCpMrup
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SNtDRKwNHPnrCYNgCpMrup
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璋（175457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json
            external_identifier: CBDB:175457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.631Z
            metadata_json: null
      object_person:
        id: p_cv6xJKW3B4C3nm223hT23m
        status: active
        display_name: 王璋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源茂（卒于819年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任州刺史。中国历代人物传记资料库（CBDB）以人物编号 175456 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 819年 | accepted |
| name.primary | 王源茂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mfx73EGxmx5Kei6PX1Dz5V | 王濡 | accepted |
| children | p_cv6xJKW3B4C3nm223hT23m | 王璋 | accepted |

## 外部来源

- [维基数据：王濡（Q45660609）](https://www.wikidata.org/wiki/Q45660609)
- [维基数据：王源茂（Q45660727）](https://www.wikidata.org/wiki/Q45660727)
- [维基数据：王璋（Q45660786）](https://www.wikidata.org/wiki/Q45660786)
- [CBDB 中国历代人物传记资料库：王濡（175454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175454&o=json)
- [CBDB 中国历代人物传记资料库：王源茂（175456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175456&o=json)
- [CBDB 中国历代人物传记资料库：王璋（175457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175457&o=json)
