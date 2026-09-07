---
schema: wang-person/v1
id: p_LCBtWCmv4CF5FFP9jJAR39
status: active
merged_into: null
display_name: 王介
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1EcUQzsp4Wlz2Ab-hnMvC
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介（1158年—1213年），史料所见人物。本项目依据《王介》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_axJlO3vj-ZS_lOtGBxV52M
          claim_id: c_z1EcUQzsp4Wlz2Ab-hnMvC
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: Q45367613
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5RkC8g7e1MT4tfjwxDA2EK
            source_type: api_record
            title: 维基数据：王介（Q45367613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367613
            external_identifier: Q45367613
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9X56JYGirXbWmvz2UpvQSG
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1158年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1158-01-01
            latest: 1158-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Smm53WKecqBTAgfves1kCj
          claim_id: c_9X56JYGirXbWmvz2UpvQSG
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5RkC8g7e1MT4tfjwxDA2EK
            source_type: api_record
            title: 维基数据：王介（Q45367613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367613
            external_identifier: Q45367613
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ef3o1EGudLVvYHeNQCGWg4
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1213-01-01
            latest: 1213-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v8TVCujsgxXhJCRTsyfUDC
          claim_id: c_ef3o1EGudLVvYHeNQCGWg4
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5RkC8g7e1MT4tfjwxDA2EK
            source_type: api_record
            title: 维基数据：王介（Q45367613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367613
            external_identifier: Q45367613
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRdHLuuhgjy3ixkGdLSAYm
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_12dZzyc9eM4C62mR2Etg5v
          claim_id: c_WRdHLuuhgjy3ixkGdLSAYm
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: Q45367613
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hCdrUhvJKNjFyPLGJTUXi6
        subject_person_id: p_LCBtWCmv4CF5FFP9jJAR39
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NB3k3RM2oCbRQNMB5AZfBf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MZAw8AQrANqFJ8fc7KhKQ
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_eRnq3UjhdhP7bsDHzNdtPY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_eRnq3UjhdhP7bsDHzNdtPY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王介（10241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json
            external_identifier: CBDB:10241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:20.833Z
            metadata_json: null
        - id: cs_JwhS7hKrUvNZ7DF7MmQoTv
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_5RkC8g7e1MT4tfjwxDA2EK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5RkC8g7e1MT4tfjwxDA2EK
            source_type: api_record
            title: 维基数据：王介（Q45367613）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367613
            external_identifier: Q45367613
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_eVp6YLZZutXXeC2sHC6MWA
          claim_id: c_hCdrUhvJKNjFyPLGJTUXi6
          source_id: s_bKUpYjTAJXaY1B7GkU82As
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bKUpYjTAJXaY1B7GkU82As
            source_type: api_record
            title: 维基数据：王埜（Q45367618）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45367618
            external_identifier: Q45367618
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person:
        id: p_NB3k3RM2oCbRQNMB5AZfBf
        status: active
        display_name: 王埜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王介（1158年—1213年），史料所见人物。本项目依据《王介》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1158年 | accepted |
| death.date | 1213年 | accepted |
| name.primary | 王介 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NB3k3RM2oCbRQNMB5AZfBf | 王埜 | accepted |

## 外部来源

- [维基数据：王介（Q45367613）](https://www.wikidata.org/wiki/Q45367613)
- [维基数据：王埜（Q45367618）](https://www.wikidata.org/wiki/Q45367618)
- [CBDB 中国历代人物传记资料库：王介（10241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10241&o=json)
