---
schema: wang-person/v1
id: p_4WyRjEwm4g74qGtK9TaHgA
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7oTE7osdewWRK54TichJB
        subject_person_id: p_4WyRjEwm4g74qGtK9TaHgA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安（生于前1世纪），新迁王。维基数据以独立条目 Q16077230 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vhdJsj0mQWZIF3tIjWCo68
          claim_id: c_Q7oTE7osdewWRK54TichJB
          source_id: s_GDyyZ7HwY2KheG7HfWnc6S
          stance: supports
          locator: Q16077230
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_GDyyZ7HwY2KheG7HfWnc6S
            source_type: api_record
            title: 維基數據：王安（Q16077230）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077230
            external_identifier: Q16077230
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:41.286Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Zjjsn2qhMGW2YUNWPMtdoA
        subject_person_id: p_4WyRjEwm4g74qGtK9TaHgA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jAp6SJytFD6evYhGvn262X
          claim_id: c_Zjjsn2qhMGW2YUNWPMtdoA
          source_id: s_GDyyZ7HwY2KheG7HfWnc6S
          stance: supports
          locator: Q16077230
          quotation: null
          interpretation_note: null
          source:
            id: s_GDyyZ7HwY2KheG7HfWnc6S
            source_type: api_record
            title: 維基數據：王安（Q16077230）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077230
            external_identifier: Q16077230
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:41.286Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kRnQr3UxTDPotPnwQCYEtJ
        subject_person_id: p_4WyRjEwm4g74qGtK9TaHgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Zabp1TDXEQD5GdaJiFzf4H
          claim_id: c_kRnQr3UxTDPotPnwQCYEtJ
          source_id: s_GDyyZ7HwY2KheG7HfWnc6S
          stance: supports
          locator: Q16077230
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i3NwthmZLXMPHf7QmzKuyp
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4WyRjEwm4g74qGtK9TaHgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_k8ztcZPsYaFBW5snnkaqyT
          claim_id: c_i3NwthmZLXMPHf7QmzKuyp
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
        - id: cs_fMzuyPHx5AFcPa7XhqbXh8
          claim_id: c_i3NwthmZLXMPHf7QmzKuyp
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
        - id: cs_mdy8DSifBTy2c3hZCqp47j
          claim_id: c_i3NwthmZLXMPHf7QmzKuyp
          source_id: s_GDyyZ7HwY2KheG7HfWnc6S
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GDyyZ7HwY2KheG7HfWnc6S
            source_type: api_record
            title: 維基數據：王安（Q16077230）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077230
            external_identifier: Q16077230
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:41.286Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D)
        - id: cs_gLKfw6Khm54Evgwk4t5d1Z
          claim_id: c_i3NwthmZLXMPHf7QmzKuyp
          source_id: s_jast9ec5PWJot7Ueg2WRnE
          stance: supports
          locator: 条文：之子/之女
          quotation: 王安{{BD|前1世纪||21年||catIdx=W}}，汉朝外戚，王莽的三子，母亲是王莽的正妻王氏，东平陵（今山东济南东）人
          interpretation_note: null
          source:
            id: s_jast9ec5PWJot7Ueg2WRnE
            source_type: website
            title: 中文维基百科：王安 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:24.666Z
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
        id: c_AErxAkLm2g7eeWPCh8cwUH
        subject_person_id: p_4WyRjEwm4g74qGtK9TaHgA
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
        - id: cs_cvs931op6TCwLrJC7cFMDg
          claim_id: c_AErxAkLm2g7eeWPCh8cwUH
          source_id: s_jast9ec5PWJot7Ueg2WRnE
          stance: supports
          locator: 条文：妻/娶
          quotation: 王安{{BD|前1世纪||21年||catIdx=W}}，汉朝外戚，王莽的三子，母亲是王莽的正妻王氏，东平陵（今山东济南东）人
          interpretation_note: null
          source:
            id: s_jast9ec5PWJot7Ueg2WRnE
            source_type: website
            title: 中文维基百科：王安 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:24.666Z
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安（生于前1世纪），新迁王。维基数据以独立条目 Q16077230 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| spouses | p_GcNA3tAmUdhWNfqQjUwGnM | 王皇后 | accepted |

## 外部来源

- [維基數據：王安（Q16077230）](https://www.wikidata.org/wiki/Q16077230)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [中文维基百科：王安 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89_(%E6%96%B0%E6%9C%9D))
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
