---
schema: wang-person/v1
id: p_A8FAveduRxHfZnWXJFoTec
status: active
merged_into: null
display_name: 王臨
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3jaEXv4wxYPNa4f2Sfe3v6
        subject_person_id: p_A8FAveduRxHfZnWXJFoTec
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨（生于前8年），史料所见人物。本项目依据《維基數據：王臨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_d54mgb7mBQuZkwS2SCrVsW
          claim_id: c_3jaEXv4wxYPNa4f2Sfe3v6
          source_id: s_vwgmqC1BdK3akkrv2aPxN3
          stance: supports
          locator: Q16260455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vwgmqC1BdK3akkrv2aPxN3
            source_type: api_record
            title: 維基數據：王臨（Q16260455）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260455
            external_identifier: Q16260455
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:43.935Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uGqo5PFDG2BP7BiU49EiZc
        subject_person_id: p_A8FAveduRxHfZnWXJFoTec
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前8年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DPjHuLc6FKuPvfjSPwkoSh
          claim_id: c_uGqo5PFDG2BP7BiU49EiZc
          source_id: s_vwgmqC1BdK3akkrv2aPxN3
          stance: supports
          locator: Q16260455
          quotation: null
          interpretation_note: null
          source:
            id: s_vwgmqC1BdK3akkrv2aPxN3
            source_type: api_record
            title: 維基數據：王臨（Q16260455）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260455
            external_identifier: Q16260455
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:43.935Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGvwx9pxEnkpQacCrd2cCU
        subject_person_id: p_A8FAveduRxHfZnWXJFoTec
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YPvxLQ42HFr5gAYQqsiNkR
          claim_id: c_MGvwx9pxEnkpQacCrd2cCU
          source_id: s_vwgmqC1BdK3akkrv2aPxN3
          stance: supports
          locator: Q16260455
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_42bnQxQP4kHKmEgwzaA7Hh
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8FAveduRxHfZnWXJFoTec
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M218KdcGDwfEnL1uHfd7MQ
          claim_id: c_42bnQxQP4kHKmEgwzaA7Hh
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_5tDScFd54Ja2DMiW45Jy1e
          claim_id: c_42bnQxQP4kHKmEgwzaA7Hh
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_SC6viNh9ZLmHMrC71EzJ59
          claim_id: c_42bnQxQP4kHKmEgwzaA7Hh
          source_id: s_vwgmqC1BdK3akkrv2aPxN3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vwgmqC1BdK3akkrv2aPxN3
            source_type: api_record
            title: 維基數據：王臨（Q16260455）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260455
            external_identifier: Q16260455
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:43.935Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
        - id: cs_FLAJkL7P2oM5dyUVadxnkc
          claim_id: c_42bnQxQP4kHKmEgwzaA7Hh
          source_id: s_EmZmLD24GBWnGgZu9tXXN6
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王莽之第四子
          interpretation_note: null
          source:
            id: s_EmZmLD24GBWnGgZu9tXXN6
            source_type: website
            title: 中文维基百科：王臨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:52.841Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_P6CYarRYF8Xh74vaid4GUt
        subject_person_id: p_A8FAveduRxHfZnWXJFoTec
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GcNA3tAmUdhWNfqQjUwGnM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V7p7vyRTbgaUkimVLwQEhv
          claim_id: c_P6CYarRYF8Xh74vaid4GUt
          source_id: s_ZKp92KDBDBDMmzHPwBFuEx
          stance: supports
          locator: 条文：妻/娶
          quotation: 王臨{{BD|前9年||21年||catIdx=W}}，王莽之第四子，母亲是王莽的正妻王氏，劉歆的女婿
          interpretation_note: null
          source:
            id: s_ZKp92KDBDBDMmzHPwBFuEx
            source_type: website
            title: 中文维基百科：王臨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:26.737Z
            metadata_json: null
        - id: cs_fW8XBWfZBMtwdvqddTgdP3
          claim_id: c_P6CYarRYF8Xh74vaid4GUt
          source_id: s_EmZmLD24GBWnGgZu9tXXN6
          stance: supports
          locator: 条文：妻/娶
          quotation: 王臨，王莽之第四子，母亲是王莽的正妻王氏，劉歆的女婿
          interpretation_note: null
          source:
            id: s_EmZmLD24GBWnGgZu9tXXN6
            source_type: website
            title: 中文维基百科：王臨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:52.841Z
            metadata_json: null
      object_person:
        id: p_GcNA3tAmUdhWNfqQjUwGnM
        status: active
        display_name: 王皇后
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王臨（生于前8年），史料所见人物。本项目依据《維基數據：王臨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前8年 | accepted |
| name.primary | 王臨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| spouses | p_GcNA3tAmUdhWNfqQjUwGnM | 王皇后 | accepted |

## 外部来源

- [維基數據：王臨（Q16260455）](https://www.wikidata.org/wiki/Q16260455)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [中文维基百科：王臨](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%87%A8)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
