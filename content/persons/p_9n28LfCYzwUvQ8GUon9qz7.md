---
schema: wang-person/v1
id: p_9n28LfCYzwUvQ8GUon9qz7
status: active
merged_into: null
display_name: 王孝源
cbdb_id: 175589
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GxBdcNPGPW9EoeGXeqYKBV
        subject_person_id: p_9n28LfCYzwUvQ8GUon9qz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝源（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_YTYKgWs6T8AgRZSxGJLHMZ
          claim_id: c_GxBdcNPGPW9EoeGXeqYKBV
          source_id: s_DkybaLomHZWwY7oacoZpcQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DkybaLomHZWwY7oacoZpcQ
            source_type: api_record
            title: 维基数据：王孝源（Q45668019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668019
            external_identifier: Q45668019
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_-vWQY07JFk8I1bspphiD4E
          claim_id: c_GxBdcNPGPW9EoeGXeqYKBV
          source_id: s_AfyWReALuNJvrEs8j6sBjW
          stance: supports
          locator: CBDB:175589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AfyWReALuNJvrEs8j6sBjW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孝源（175589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175589&o=json
            external_identifier: CBDB:175589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.986Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LLPjL8YWTFHp4wWt9Zj9M7
        subject_person_id: p_9n28LfCYzwUvQ8GUon9qz7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q4vtCMpjqz3W3VzyWk1sRW
          claim_id: c_LLPjL8YWTFHp4wWt9Zj9M7
          source_id: s_DkybaLomHZWwY7oacoZpcQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_DkybaLomHZWwY7oacoZpcQ
            source_type: api_record
            title: 维基数据：王孝源（Q45668019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668019
            external_identifier: Q45668019
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_U5LP4ezmNkiRXU1uQjet4M
        subject_person_id: p_9n28LfCYzwUvQ8GUon9qz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝源
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KA4T3sjNVvi1vq7tJE2QJz
          claim_id: c_U5LP4ezmNkiRXU1uQjet4M
          source_id: s_AfyWReALuNJvrEs8j6sBjW
          stance: supports
          locator: Q45668019
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hHrau69HvRwYiebHq8YsXf
          claim_id: c_U5LP4ezmNkiRXU1uQjet4M
          source_id: s_DkybaLomHZWwY7oacoZpcQ
          stance: supports
          locator: Q45668019
          quotation: null
          interpretation_note: null
          source:
            id: s_DkybaLomHZWwY7oacoZpcQ
            source_type: api_record
            title: 维基数据：王孝源（Q45668019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668019
            external_identifier: Q45668019
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EX8UhPQcXmriJxf9345nbA
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9n28LfCYzwUvQ8GUon9qz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GjjPseEPx7aksp8oj316fc
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
        - id: cs_rTus7FR5ZLb2Fgn5L3xJzX
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_RzA8Y1MMGaP8wALMWnZirs
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_DkybaLomHZWwY7oacoZpcQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DkybaLomHZWwY7oacoZpcQ
            source_type: api_record
            title: 维基数据：王孝源（Q45668019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668019
            external_identifier: Q45668019
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_LTQPhKnV3cGFhHNWCQMG6y
          claim_id: c_EX8UhPQcXmriJxf9345nbA
          source_id: s_AfyWReALuNJvrEs8j6sBjW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AfyWReALuNJvrEs8j6sBjW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孝源（175589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175589&o=json
            external_identifier: CBDB:175589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.986Z
            metadata_json: null
      object_person:
        id: p_9FvatVLgt41nwWMTrcYVYc
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝源（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175589） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王孝源 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9FvatVLgt41nwWMTrcYVYc | 王和 | accepted |

## 外部来源

- [维基数据：王和（Q45667864）](https://www.wikidata.org/wiki/Q45667864)
- [维基数据：王孝源（Q45668019）](https://www.wikidata.org/wiki/Q45668019)
- [CBDB 中国历代人物传记资料库：王和（175586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json)
- [CBDB 中国历代人物传记资料库：王孝源（175589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175589&o=json)
