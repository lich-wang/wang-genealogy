---
schema: wang-person/v1
id: p_2qmGd8DfoAfvLJZWcYMggW
status: active
merged_into: null
display_name: 王氏
cbdb_id: 145042
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qqb8UKkXNh5mnTLzEN38Zp
        subject_person_id: p_2qmGd8DfoAfvLJZWcYMggW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（829年—862年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_IqCYUvMUjAbsnB2vgpr0kF
          claim_id: c_qqb8UKkXNh5mnTLzEN38Zp
          source_id: s_H5TKVd31MLa5cxmhtTp8K1
          stance: supports
          locator: CBDB:145042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H5TKVd31MLa5cxmhtTp8K1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（145042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145042&o=json
            external_identifier: CBDB:145042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:31.201Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AuNELnSF8akE9WqzY4RMdH
        subject_person_id: p_2qmGd8DfoAfvLJZWcYMggW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0829-01-01
            latest: 0829-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BiboPzVD64576tTQ3xf8wN
          claim_id: c_AuNELnSF8akE9WqzY4RMdH
          source_id: s_c4uVey87A2zx6teBmVLE1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_c4uVey87A2zx6teBmVLE1H
            source_type: api_record
            title: 维基数据：王氏（Q65803736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803736
            external_identifier: Q65803736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:31.044Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QupHGdVQeAu6f2DHf87A6J
        subject_person_id: p_2qmGd8DfoAfvLJZWcYMggW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 862年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0862-01-01
            latest: 0862-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T8ZPnnYqQorbi6egiAaFxv
          claim_id: c_QupHGdVQeAu6f2DHf87A6J
          source_id: s_c4uVey87A2zx6teBmVLE1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_c4uVey87A2zx6teBmVLE1H
            source_type: api_record
            title: 维基数据：王氏（Q65803736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803736
            external_identifier: Q65803736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:31.044Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kW9EQ2AHWugW5PvdYcAUBg
        subject_person_id: p_2qmGd8DfoAfvLJZWcYMggW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_71i1dzSzzHbVsQoAkskhYD
          claim_id: c_kW9EQ2AHWugW5PvdYcAUBg
          source_id: s_H5TKVd31MLa5cxmhtTp8K1
          stance: supports
          locator: Q65803736
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RwSX7mZVwTahUgMxDhc4Vj
          claim_id: c_kW9EQ2AHWugW5PvdYcAUBg
          source_id: s_c4uVey87A2zx6teBmVLE1H
          stance: supports
          locator: Q65803736
          quotation: null
          interpretation_note: null
          source:
            id: s_c4uVey87A2zx6teBmVLE1H
            source_type: api_record
            title: 维基数据：王氏（Q65803736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803736
            external_identifier: Q65803736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:31.044Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3fFQLCfVAqGNSqDnZmopZJ
        subject_person_id: p_k4snsMNDBbDEPMCiLRM13y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2qmGd8DfoAfvLJZWcYMggW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CBHyCHGiMRUTgMkwWBc2XC
          claim_id: c_3fFQLCfVAqGNSqDnZmopZJ
          source_id: s_EApQSWYt5yLGZitGrfru9T
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_EApQSWYt5yLGZitGrfru9T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王?（190242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190242&o=json
            external_identifier: CBDB:190242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:22.740Z
            metadata_json: null
        - id: cs_Fj7w4ct5qe5WwUe9vy4Kxj
          claim_id: c_3fFQLCfVAqGNSqDnZmopZJ
          source_id: s_wzSwr7UfR1Q8AqwVK6pmCu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wzSwr7UfR1Q8AqwVK6pmCu
            source_type: api_record
            title: 维基数据：王𠧨（Q45594285）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45594285
            external_identifier: Q45594285
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:22.582Z
            metadata_json: null
        - id: cs_XXrswzm44Rg1SRzJZfhfEP
          claim_id: c_3fFQLCfVAqGNSqDnZmopZJ
          source_id: s_c4uVey87A2zx6teBmVLE1H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c4uVey87A2zx6teBmVLE1H
            source_type: api_record
            title: 维基数据：王氏（Q65803736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803736
            external_identifier: Q65803736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:31.044Z
            metadata_json: null
        - id: cs_RCPsMUF44Juv3DqKChWkYP
          claim_id: c_3fFQLCfVAqGNSqDnZmopZJ
          source_id: s_H5TKVd31MLa5cxmhtTp8K1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H5TKVd31MLa5cxmhtTp8K1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（145042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145042&o=json
            external_identifier: CBDB:145042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:31.201Z
            metadata_json: null
      object_person:
        id: p_k4snsMNDBbDEPMCiLRM13y
        status: active
        display_name: 王𠧨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏（829年—862年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145042） | accepted |
| birth.date | 829年 | accepted |
| death.date | 862年 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k4snsMNDBbDEPMCiLRM13y | 王𠧨 | accepted |

## 外部来源

- [维基数据：王氏（Q65803736）](https://www.wikidata.org/wiki/Q65803736)
- [维基数据：王𠧨（Q45594285）](https://www.wikidata.org/wiki/Q45594285)
- [CBDB 中国历代人物传记资料库：王?（190242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190242&o=json)
- [CBDB 中国历代人物传记资料库：王氏（145042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145042&o=json)
