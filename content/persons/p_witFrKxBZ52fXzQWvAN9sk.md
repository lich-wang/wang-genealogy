---
schema: wang-person/v1
id: p_witFrKxBZ52fXzQWvAN9sk
status: active
merged_into: null
display_name: 萧方智
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xcnqHzeChDdOuKALGOUeR4
        subject_person_id: p_witFrKxBZ52fXzQWvAN9sk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧方智：梁敬帝萧方智（543年—558年5月5日），字慧相，南梁的末代皇帝，梁元帝蕭繹的第九子，母夏貴妃。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UZ8xsCTdtQfOmNXt0Njjjn
          claim_id: c_xcnqHzeChDdOuKALGOUeR4
          source_id: s_oGz5y62y7AX2ZxUq92_8C6
          stance: supports
          locator: 导言
          quotation: 萧方智：梁敬帝萧方智（543年—558年5月5日），字慧相，南梁
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_oGz5y62y7AX2ZxUq92_8C6
            source_type: website
            title: 中文维基百科：梁敬帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%A2%81%E6%95%AC%E5%B8%9D
            external_identifier: Q1059979
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T14:17:42.905Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fiJfk2debo9X3Wyb7scHEN
        subject_person_id: p_witFrKxBZ52fXzQWvAN9sk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧方智
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gzo5FzbgZXiTDv9fV3AtCo
          claim_id: c_fiJfk2debo9X3Wyb7scHEN
          source_id: s_wpv8qSeQgRHZA82oMs1xc5
          stance: supports
          locator: Q1059979
          quotation: null
          interpretation_note: null
          source:
            id: s_wpv8qSeQgRHZA82oMs1xc5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蕭方智（339553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339553&o=json
            external_identifier: CBDB:339553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T09:53:36.261Z
            metadata_json: null
        - id: cs_RLhhS2L49nDWFfB4m9dzcn
          claim_id: c_fiJfk2debo9X3Wyb7scHEN
          source_id: s_w1yBfeKi8w3fJ7dvE3o1qK
          stance: supports
          locator: Q1059979
          quotation: null
          interpretation_note: null
          source:
            id: s_w1yBfeKi8w3fJ7dvE3o1qK
            source_type: api_record
            title: 维基数据：萧方智（Q1059979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1059979
            external_identifier: Q1059979
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:53:36.102Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%A2%81%E6%95%AC%E5%B8%9D
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aCBNN3n95KJ1cA8rPuyRZB
        subject_person_id: p_Uo9bkgk5S4jMoJYsZgDetf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_witFrKxBZ52fXzQWvAN9sk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nd4GUsqAkVLUVGHKEdHUoK
          claim_id: c_aCBNN3n95KJ1cA8rPuyRZB
          source_id: s_w1yBfeKi8w3fJ7dvE3o1qK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_w1yBfeKi8w3fJ7dvE3o1qK
            source_type: api_record
            title: 维基数据：萧方智（Q1059979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1059979
            external_identifier: Q1059979
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:53:36.102Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%A2%81%E6%95%AC%E5%B8%9D
        - id: cs_a7YR2fGYHBHHxLbts8Uc9k
          claim_id: c_aCBNN3n95KJ1cA8rPuyRZB
          source_id: s_in9NeXoCSb844PcCiHdso8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_in9NeXoCSb844PcCiHdso8
            source_type: api_record
            title: 维基数据：王皇后 (梁敬帝)（Q5374609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5374609
            external_identifier: Q5374609
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:39:53.956Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E6%A2%81%E6%95%AC%E5%B8%9D)
      object_person:
        id: p_Uo9bkgk5S4jMoJYsZgDetf
        status: active
        display_name: 王皇后 (梁敬帝)
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 萧方智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 萧方智：梁敬帝萧方智（543年—558年5月5日），字慧相，南梁的末代皇帝，梁元帝蕭繹的第九子，母夏貴妃。 | accepted |
| name.primary | 萧方智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Uo9bkgk5S4jMoJYsZgDetf | 王皇后 (梁敬帝) | accepted |

## 外部来源

- [维基数据：王皇后 (梁敬帝)（Q5374609）](https://www.wikidata.org/wiki/Q5374609)
- [维基数据：萧方智（Q1059979）](https://www.wikidata.org/wiki/Q1059979)
- [中文维基百科：梁敬帝](https://zh.wikipedia.org/wiki/%E6%A2%81%E6%95%AC%E5%B8%9D)
- [CBDB 中国历代人物传记资料库：蕭方智（339553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339553&o=json)
