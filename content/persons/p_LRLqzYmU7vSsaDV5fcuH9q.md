---
schema: wang-person/v1
id: p_LRLqzYmU7vSsaDV5fcuH9q
status: active
merged_into: null
display_name: 王慎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bG8jeMsD6H7K6ZutUkqtNQ
        subject_person_id: p_LRLqzYmU7vSsaDV5fcuH9q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175517 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pRXuQhHvN2A1xEMuHEoRbM
          claim_id: c_bG8jeMsD6H7K6ZutUkqtNQ
          source_id: s_w6ZLqnYQ7PDgL8pGTNoBBs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_w6ZLqnYQ7PDgL8pGTNoBBs
            source_type: api_record
            title: 维基数据：王慎（Q45664267）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664267
            external_identifier: Q45664267
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_HcRkLlBaoZibTQyuFZ2WiI
          claim_id: c_bG8jeMsD6H7K6ZutUkqtNQ
          source_id: s_q8XzXf12qppqFvuVDBDqhQ
          stance: supports
          locator: CBDB:175517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_q8XzXf12qppqFvuVDBDqhQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175517&o=json
            external_identifier: CBDB:175517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.734Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Zbrm2NPjXPxUhH2vWVq97c
        subject_person_id: p_LRLqzYmU7vSsaDV5fcuH9q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DM3qULLZxUR5KQwpENnpAA
          claim_id: c_Zbrm2NPjXPxUhH2vWVq97c
          source_id: s_w6ZLqnYQ7PDgL8pGTNoBBs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_w6ZLqnYQ7PDgL8pGTNoBBs
            source_type: api_record
            title: 维基数据：王慎（Q45664267）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664267
            external_identifier: Q45664267
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLW2ue3euvyhFoHJMw6RUd
        subject_person_id: p_LRLqzYmU7vSsaDV5fcuH9q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_31MzhEiZq96UxMBQcJtFa4
          claim_id: c_RLW2ue3euvyhFoHJMw6RUd
          source_id: s_q8XzXf12qppqFvuVDBDqhQ
          stance: supports
          locator: Q45664267
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_L8M42sxVr6G8HM3UHGL5Jz
          claim_id: c_RLW2ue3euvyhFoHJMw6RUd
          source_id: s_w6ZLqnYQ7PDgL8pGTNoBBs
          stance: supports
          locator: Q45664267
          quotation: null
          interpretation_note: null
          source:
            id: s_w6ZLqnYQ7PDgL8pGTNoBBs
            source_type: api_record
            title: 维基数据：王慎（Q45664267）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664267
            external_identifier: Q45664267
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ftPrCwp8ShGJteqH3SBS4W
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LRLqzYmU7vSsaDV5fcuH9q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DkhPTRFcq57n2LR7TJT1w6
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_YQVsUWqaSW9WLnQhN4obHy
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_V281foiHQXAmh1yeQtQ4z3
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_w6ZLqnYQ7PDgL8pGTNoBBs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6ZLqnYQ7PDgL8pGTNoBBs
            source_type: api_record
            title: 维基数据：王慎（Q45664267）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664267
            external_identifier: Q45664267
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_wBPzyCGX8YH28CC1x2KG9p
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_q8XzXf12qppqFvuVDBDqhQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_q8XzXf12qppqFvuVDBDqhQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175517&o=json
            external_identifier: CBDB:175517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.734Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慎（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175517 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王慎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |

## 外部来源

- [维基数据：王慎（Q45664267）](https://www.wikidata.org/wiki/Q45664267)
- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [CBDB 中国历代人物传记资料库：王慎（175517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175517&o=json)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
