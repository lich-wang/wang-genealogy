---
schema: wang-person/v1
id: p_NM9mn6Dc9dbq8DQ3665HJo
status: active
merged_into: null
display_name: 王县太君
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yr8LMTR7Nb26ykRElxll9n
        subject_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王县太君（1025年—1091年），史料所见人物。本项目依据《王县太君》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EEMvLZQ5muWe9lbz_rXdgL
          claim_id: c_Yr8LMTR7Nb26ykRElxll9n
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: Q45364574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MR67jA3WCNJBCtLy2PXqHp
            source_type: api_record
            title: 维基数据：王县太君（Q45364574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364574
            external_identifier: Q45364574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:04.589Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FEGcq9FK5JpGryKRnwc3BL
        subject_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1025年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1025-01-01
            latest: 1025-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yQmJZS4Shfe8CGWgfG2vJH
          claim_id: c_FEGcq9FK5JpGryKRnwc3BL
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FZZowjNMA2KvyK7A8acDUQ
        subject_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1091年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1091-01-01
            latest: 1091-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wX1Ub5CeGfyjGcNnrXwxdN
          claim_id: c_FZZowjNMA2KvyK7A8acDUQ
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MR67jA3WCNJBCtLy2PXqHp
            source_type: api_record
            title: 维基数据：王县太君（Q45364574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364574
            external_identifier: Q45364574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:04.589Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pUFBu2uwNDaKsGhDgA2tJN
        subject_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王县太君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F9VpDu6mVrhKvLH17uRCv8
          claim_id: c_pUFBu2uwNDaKsGhDgA2tJN
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: Q45364574
          quotation: null
          interpretation_note: null
          source:
            id: s_MR67jA3WCNJBCtLy2PXqHp
            source_type: api_record
            title: 维基数据：王县太君（Q45364574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364574
            external_identifier: Q45364574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:04.589Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L1JwYNBcsLwZp29hW4sBBe
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WVH9BCiQhLsMBC5RYFZn35
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_cg3GPbyLk5QXDzTFHPTU7w
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_rcakKYoji78c9HKxpwEcvA
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_99qRkLEE1MfJL4Ac6oWaJ8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世彥（17779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json
            external_identifier: CBDB:17779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.361Z
            metadata_json: null
      object_person:
        id: p_FeTYKhXT263ArThLLQ1A9F
        status: active
        display_name: 王世彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王县太君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王县太君（1025年—1091年），史料所见人物。本项目依据《王县太君》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1025年 | accepted |
| death.date | 1091年 | accepted |
| name.primary | 王县太君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FeTYKhXT263ArThLLQ1A9F | 王世彦 | accepted |

## 外部来源

- [维基数据：王世彦（Q45387199）](https://www.wikidata.org/wiki/Q45387199)
- [维基数据：王县太君（Q45364574）](https://www.wikidata.org/wiki/Q45364574)
- [CBDB 中国历代人物传记资料库：王世彥（17779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json)
