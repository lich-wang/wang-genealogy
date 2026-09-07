---
schema: wang-person/v1
id: p_4AFVL7D2qkGJ7zeboMLC8m
status: active
merged_into: null
display_name: 王寂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aHqBsu47ig4xNEMFrJ73Pb
        subject_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175570 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Bf1MYTUuVrpZ1NTTA2AVEV
          claim_id: c_aHqBsu47ig4xNEMFrJ73Pb
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: null
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
        - id: cs_RDMavT3lsYnmcruZC52QQF
          claim_id: c_aHqBsu47ig4xNEMFrJ73Pb
          source_id: s_dju6nn4sQt1MDHeUnHhavY
          stance: supports
          locator: CBDB:175570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ADBb9Bugg4z4kaYWH7sEm7
        subject_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e1VW28AtNc5VzM6foaeC2K
          claim_id: c_ADBb9Bugg4z4kaYWH7sEm7
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nwx8JnhXV6LwmTvq8L3bce
        subject_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E2AnmdCXwi4scEZzTsn5xn
          claim_id: c_Nwx8JnhXV6LwmTvq8L3bce
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: Q45667093
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
        - id: cs_UYs2JEoi7BVP916ZKQJuPP
          claim_id: c_Nwx8JnhXV6LwmTvq8L3bce
          source_id: s_dju6nn4sQt1MDHeUnHhavY
          stance: supports
          locator: Q45667093
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mR8KQFhN9vLfBxy2Bno5TE
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1ANKtZ4gRRmkoN6gouQU2S
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
        - id: cs_jKVEJwHA7NEGuV9QAUYDWj
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_idGvNezjBxTUrsB7VyDQo3
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: P22（父）
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
        - id: cs_5zS9EVAgSLw6sWr3h93DjT
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_dju6nn4sQt1MDHeUnHhavY
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_WdFmE9KEnRrkWkP6FtALJ2
        status: active
        display_name: 王晊
        merged_into_person_id: null
  children:
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
        id: p_Fr9HKkPgWfExUH3gusQmRG
        status: active
        display_name: 王嗣文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寂（卒于746年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175570 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WdFmE9KEnRrkWkP6FtALJ2 | 王晊 | accepted |
| children | p_Fr9HKkPgWfExUH3gusQmRG | 王嗣文 | accepted |

## 外部来源

- [维基数据：王寂（Q45667093）](https://www.wikidata.org/wiki/Q45667093)
- [维基数据：王嗣文（Q45667144）](https://www.wikidata.org/wiki/Q45667144)
- [维基数据：王晊（Q45666881）](https://www.wikidata.org/wiki/Q45666881)
- [CBDB 中国历代人物传记资料库：王寂（175570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175570&o=json)
- [CBDB 中国历代人物传记资料库：王嗣文（175571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175571&o=json)
- [CBDB 中国历代人物传记资料库：王晊（175566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json)
