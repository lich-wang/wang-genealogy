---
schema: wang-person/v1
id: p_Fr9HKkPgWfExUH3gusQmRG
status: active
merged_into: null
display_name: 王嗣文
cbdb_id: 175571
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k6h35ynDNDa59gWJXnUuw8
        subject_person_id: p_Fr9HKkPgWfExUH3gusQmRG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣文（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175571 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nisZQ774oE77v7stxeYRAD
          claim_id: c_k6h35ynDNDa59gWJXnUuw8
          source_id: s_uKCCt68h31VenQwkay8d6P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uKCCt68h31VenQwkay8d6P
            source_type: api_record
            title: 维基数据：王嗣文（Q45667144）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667144
            external_identifier: Q45667144
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_5ywiZlzaQAwRvDWGbVid-u
          claim_id: c_k6h35ynDNDa59gWJXnUuw8
          source_id: s_sx1vierKJuPyB17PtvBs66
          stance: supports
          locator: CBDB:175571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sx1vierKJuPyB17PtvBs66
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣文（175571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175571&o=json
            external_identifier: CBDB:175571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.546Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eXx8n2RXAdz4Six2HEwyGK
        subject_person_id: p_Fr9HKkPgWfExUH3gusQmRG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DGCmm9TPfBXbfL4DTsQaqW
          claim_id: c_eXx8n2RXAdz4Six2HEwyGK
          source_id: s_uKCCt68h31VenQwkay8d6P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uKCCt68h31VenQwkay8d6P
            source_type: api_record
            title: 维基数据：王嗣文（Q45667144）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667144
            external_identifier: Q45667144
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Zc65i6ZKBVqrkRjjQMy98
        subject_person_id: p_Fr9HKkPgWfExUH3gusQmRG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Uixv1U1eH1uAiz6vjZ5mDp
          claim_id: c_4Zc65i6ZKBVqrkRjjQMy98
          source_id: s_uKCCt68h31VenQwkay8d6P
          stance: supports
          locator: Q45667144
          quotation: null
          interpretation_note: null
          source:
            id: s_uKCCt68h31VenQwkay8d6P
            source_type: api_record
            title: 维基数据：王嗣文（Q45667144）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667144
            external_identifier: Q45667144
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_y4njAZGCcMJB4PCbrdbD4z
          claim_id: c_4Zc65i6ZKBVqrkRjjQMy98
          source_id: s_sx1vierKJuPyB17PtvBs66
          stance: supports
          locator: Q45667144
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pdVtb6dnB3wAFo7Qywg6x8
        subject_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fr9HKkPgWfExUH3gusQmRG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LjiFyyfGJ4hqVYL6Dn6Nej
          claim_id: c_pdVtb6dnB3wAFo7Qywg6x8
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pk3Pwfrpc4jo4EVzSm5d5v
            source_type: api_record
            title: 维基数据：王寂（Q45667093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667093
            external_identifier: Q45667093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_dhbkC4q9Kuo7VW4gfCr66w
          claim_id: c_pdVtb6dnB3wAFo7Qywg6x8
          source_id: s_dju6nn4sQt1MDHeUnHhavY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_dju6nn4sQt1MDHeUnHhavY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（175570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175570&o=json
            external_identifier: CBDB:175570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.930Z
            metadata_json: null
        - id: cs_tSb8GooQsqVMA3t9RhwGbA
          claim_id: c_pdVtb6dnB3wAFo7Qywg6x8
          source_id: s_uKCCt68h31VenQwkay8d6P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uKCCt68h31VenQwkay8d6P
            source_type: api_record
            title: 维基数据：王嗣文（Q45667144）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667144
            external_identifier: Q45667144
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_5mwzLVPh9e392n167KdfJ3
          claim_id: c_pdVtb6dnB3wAFo7Qywg6x8
          source_id: s_sx1vierKJuPyB17PtvBs66
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sx1vierKJuPyB17PtvBs66
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王嗣文（175571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175571&o=json
            external_identifier: CBDB:175571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.546Z
            metadata_json: null
      object_person:
        id: p_4AFVL7D2qkGJ7zeboMLC8m
        status: active
        display_name: 王寂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣文（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175571 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王嗣文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4AFVL7D2qkGJ7zeboMLC8m | 王寂 | accepted |

## 外部来源

- [维基数据：王寂（Q45667093）](https://www.wikidata.org/wiki/Q45667093)
- [维基数据：王嗣文（Q45667144）](https://www.wikidata.org/wiki/Q45667144)
- [CBDB 中国历代人物传记资料库：王寂（175570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175570&o=json)
- [CBDB 中国历代人物传记资料库：王嗣文（175571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175571&o=json)
