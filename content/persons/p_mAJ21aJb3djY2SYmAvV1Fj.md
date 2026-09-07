---
schema: wang-person/v1
id: p_mAJ21aJb3djY2SYmAvV1Fj
status: active
merged_into: null
display_name: 王采
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7KGVy8WSqMWaSNgbpPRBaJ
        subject_person_id: p_mAJ21aJb3djY2SYmAvV1Fj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采（1078年—1118年），史料所见人物。本项目依据《王采》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vQGsnF39gDAeC5HkV0ovbo
          claim_id: c_7KGVy8WSqMWaSNgbpPRBaJ
          source_id: s_y6DozBQYpPWzF1mS86MZ5P
          stance: supports
          locator: Q45373331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_y6DozBQYpPWzF1mS86MZ5P
            source_type: api_record
            title: 维基数据：王采（Q45373331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373331
            external_identifier: Q45373331
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9tMJdZJdK1Nsro1eQD8qbj
        subject_person_id: p_mAJ21aJb3djY2SYmAvV1Fj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1078-01-01
            latest: 1078-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VQrZLdc5ucA6Li8A9VHVxy
          claim_id: c_9tMJdZJdK1Nsro1eQD8qbj
          source_id: s_y6DozBQYpPWzF1mS86MZ5P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y6DozBQYpPWzF1mS86MZ5P
            source_type: api_record
            title: 维基数据：王采（Q45373331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373331
            external_identifier: Q45373331
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KKjd6FZiH2KidThpzE5v5w
        subject_person_id: p_mAJ21aJb3djY2SYmAvV1Fj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1118年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1118-01-01
            latest: 1118-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R31jMeyPr2AbAA6mgU7ymw
          claim_id: c_KKjd6FZiH2KidThpzE5v5w
          source_id: s_y6DozBQYpPWzF1mS86MZ5P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_y6DozBQYpPWzF1mS86MZ5P
            source_type: api_record
            title: 维基数据：王采（Q45373331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373331
            external_identifier: Q45373331
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4osXJRM3KZvFG9i8qp2EHG
        subject_person_id: p_mAJ21aJb3djY2SYmAvV1Fj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9JMnGYYG4Xv7QbrmCv6H6S
          claim_id: c_4osXJRM3KZvFG9i8qp2EHG
          source_id: s_y6DozBQYpPWzF1mS86MZ5P
          stance: supports
          locator: Q45373331
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e7w4NkSuZWVyunjYHJa8B4
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mAJ21aJb3djY2SYmAvV1Fj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Tpv9dk3aP25nn6Ck5o9xo
          claim_id: c_e7w4NkSuZWVyunjYHJa8B4
          source_id: s_AMCEA11HjgWEugGDaB86eR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMCEA11HjgWEugGDaB86eR
            source_type: api_record
            title: 维基数据：王韶（Q10417893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417893
            external_identifier: Q10417893
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
        - id: cs_BLXJSMkf97BHCYG9kiF7mh
          claim_id: c_e7w4NkSuZWVyunjYHJa8B4
          source_id: s_haQ49XjsJgPBddfbyHyvFp
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_haQ49XjsJgPBddfbyHyvFp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王韶（1865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json
            external_identifier: CBDB:1865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:28.099Z
            metadata_json: null
        - id: cs_ZKR35r6Yz4d6Rin1fHUeBK
          claim_id: c_e7w4NkSuZWVyunjYHJa8B4
          source_id: s_y6DozBQYpPWzF1mS86MZ5P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y6DozBQYpPWzF1mS86MZ5P
            source_type: api_record
            title: 维基数据：王采（Q45373331）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373331
            external_identifier: Q45373331
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王采（1078年—1118年），史料所见人物。本项目依据《王采》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1078年 | accepted |
| death.date | 1118年 | accepted |
| name.primary | 王采 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |

## 外部来源

- [维基数据：王采（Q45373331）](https://www.wikidata.org/wiki/Q45373331)
- [维基数据：王韶（Q10417893）](https://www.wikidata.org/wiki/Q10417893)
- [CBDB 中国历代人物传记资料库：王韶（1865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1865&o=json)
