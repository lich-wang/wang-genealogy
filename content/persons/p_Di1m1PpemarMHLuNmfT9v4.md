---
schema: wang-person/v1
id: p_Di1m1PpemarMHLuNmfT9v4
status: active
merged_into: null
display_name: 王怀琛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__Qp1JiQeNYCkujS8zj8geQ
        subject_person_id: p_Di1m1PpemarMHLuNmfT9v4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怀琛（1890年—1971年），史料所见人物。本项目依据《王怀琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_lyHlV5of8Vvkhdp6n7hsVF
          claim_id: c__Qp1JiQeNYCkujS8zj8geQ
          source_id: s_zwPuGc47Ph8Saqddn8FSsv
          stance: supports
          locator: Q18914074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zwPuGc47Ph8Saqddn8FSsv
            source_type: api_record
            title: 维基数据：王怀琛（Q18914074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18914074
            external_identifier: Q18914074
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%80%E7%90%9B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Rcxp8tmGfNrQATC7VPfWkA
        subject_person_id: p_Di1m1PpemarMHLuNmfT9v4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1890年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1890-01-01
            latest: 1890-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MWaKLq2bLSngzKoFyVM9ua
          claim_id: c_Rcxp8tmGfNrQATC7VPfWkA
          source_id: s_zwPuGc47Ph8Saqddn8FSsv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zwPuGc47Ph8Saqddn8FSsv
            source_type: api_record
            title: 维基数据：王怀琛（Q18914074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18914074
            external_identifier: Q18914074
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%80%E7%90%9B
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hKQBLQm1Ti1pPsfPmytmGu
        subject_person_id: p_Di1m1PpemarMHLuNmfT9v4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1971年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1971-01-01
            latest: 1971-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nip5NvsXvF3ruuDsMwuMxa
          claim_id: c_hKQBLQm1Ti1pPsfPmytmGu
          source_id: s_zwPuGc47Ph8Saqddn8FSsv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zwPuGc47Ph8Saqddn8FSsv
            source_type: api_record
            title: 维基数据：王怀琛（Q18914074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18914074
            external_identifier: Q18914074
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%80%E7%90%9B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kd7dSHVprYB32cuP7JZtjF
        subject_person_id: p_Di1m1PpemarMHLuNmfT9v4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怀琛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YB9n7zuMiE7JDUddGtTrHb
          claim_id: c_Kd7dSHVprYB32cuP7JZtjF
          source_id: s_zwPuGc47Ph8Saqddn8FSsv
          stance: supports
          locator: Q18914074
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NacmDV6jSSBbVkugwqHZsG
        subject_person_id: p_pK2ZBhvz3Ewm7dLCNssMxP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Di1m1PpemarMHLuNmfT9v4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UXSkDU6rT17FmGEtpwzAGt
          claim_id: c_NacmDV6jSSBbVkugwqHZsG
          source_id: s_zwPuGc47Ph8Saqddn8FSsv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zwPuGc47Ph8Saqddn8FSsv
            source_type: api_record
            title: 维基数据：王怀琛（Q18914074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18914074
            external_identifier: Q18914074
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%80%E7%90%9B
        - id: cs_zckyqHMgZrBsHoCmMgUP9D
          claim_id: c_NacmDV6jSSBbVkugwqHZsG
          source_id: s_BHjJy2KP1Dxu5wm8YQvVX3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BHjJy2KP1Dxu5wm8YQvVX3
            source_type: api_record
            title: 维基数据：王同愈（Q15915661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915661
            external_identifier: Q15915661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.395Z
            metadata_json: null
      object_person:
        id: p_pK2ZBhvz3Ewm7dLCNssMxP
        status: active
        display_name: 王同愈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王怀琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王怀琛（1890年—1971年），史料所见人物。本项目依据《王怀琛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1890年 | accepted |
| death.date | 1971年 | accepted |
| name.primary | 王怀琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pK2ZBhvz3Ewm7dLCNssMxP | 王同愈 | accepted |

## 外部来源

- [维基数据：王怀琛（Q18914074）](https://www.wikidata.org/wiki/Q18914074)
- [维基数据：王同愈（Q15915661）](https://www.wikidata.org/wiki/Q15915661)
