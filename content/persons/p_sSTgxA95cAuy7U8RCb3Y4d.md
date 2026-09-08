---
schema: wang-person/v1
id: p_sSTgxA95cAuy7U8RCb3Y4d
status: active
merged_into: null
display_name: 王淑贞
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SYfTTMWJbgg8z9BpuherLV
        subject_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑贞（1899年?—1991年11月2日），祖籍江苏苏州，農曆5月生于北京，中国医学家。王淑贞与林巧稚有“北林南王”之称。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_neDQIsHlkrIufl_pMOGBFj
          claim_id: c_SYfTTMWJbgg8z9BpuherLV
          source_id: s_pZWBbj3nZMP7LC9HBd54u3
          stance: supports
          locator: 导言
          quotation: 王淑贞（1899年?—1991年11月2日），祖籍江苏苏州，農曆
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_pZWBbj3nZMP7LC9HBd54u3
            source_type: website
            title: 中文维基百科：王淑贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E
            external_identifier: Q16906124
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_epZxwcYRWEH7BDpLurnvx9
        subject_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1899年5月31日
            calendar_note: 维基数据 P569 结构化日期，精度：日
            earliest: 1899-05-31
            latest: 1899-05-31
            precision: day
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M1JqqPq6oL5XSSdavjUgFf
          claim_id: c_epZxwcYRWEH7BDpLurnvx9
          source_id: s_6mPzvTWLFMU3PjABx7xVby
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6mPzvTWLFMU3PjABx7xVby
            source_type: api_record
            title: 维基数据：王淑贞（Q16906124）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906124
            external_identifier: Q16906124
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pi1cHhWURFUPwUiFko76cL
        subject_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1991年11月2日
            calendar_note: 维基数据 P570 结构化日期，精度：日
            earliest: 1991-11-02
            latest: 1991-11-02
            precision: day
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TxsbCUu21B6gnZ3GFwY8sf
          claim_id: c_Pi1cHhWURFUPwUiFko76cL
          source_id: s_6mPzvTWLFMU3PjABx7xVby
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6mPzvTWLFMU3PjABx7xVby
            source_type: api_record
            title: 维基数据：王淑贞（Q16906124）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906124
            external_identifier: Q16906124
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1KdDFsQ6dPrCUU3A5YnKAz
        subject_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑贞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FEFpN3tAWUrA8g741PJEuK
          claim_id: c_1KdDFsQ6dPrCUU3A5YnKAz
          source_id: s_6mPzvTWLFMU3PjABx7xVby
          stance: supports
          locator: Q16906124
          quotation: null
          interpretation_note: null
          source:
            id: s_6mPzvTWLFMU3PjABx7xVby
            source_type: api_record
            title: 维基数据：王淑贞（Q16906124）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906124
            external_identifier: Q16906124
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5G48XCY7piNFXHVmZbzg5U
        subject_person_id: p_LXKFHguzJ5DjK8ySHadw6f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAwgD4K5wDBJjqhFSwkh3w
          claim_id: c_5G48XCY7piNFXHVmZbzg5U
          source_id: s_xmDk28iHW5carA3UyGCGoB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xmDk28iHW5carA3UyGCGoB
            source_type: api_record
            title: 维基数据：王季同（Q61306471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306471
            external_identifier: Q61306471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%A3%E5%90%8C
        - id: cs_jhsoy9bNH6MeJpECK7cxu2
          claim_id: c_5G48XCY7piNFXHVmZbzg5U
          source_id: s_pZWBbj3nZMP7LC9HBd54u3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_LXKFHguzJ5DjK8ySHadw6f
        status: active
        display_name: 王季同
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1HyKWcGgHhbWN6gz35iGU9
        subject_person_id: p_sSTgxA95cAuy7U8RCb3Y4d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_v4E1SJLyT6GNwLJ7xUHM9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huAv84PM87Wd3swT6hNiZ1
          claim_id: c_1HyKWcGgHhbWN6gz35iGU9
          source_id: s_pZWBbj3nZMP7LC9HBd54u3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_187MM2gLHfnGKTfUrCQivT
          claim_id: c_1HyKWcGgHhbWN6gz35iGU9
          source_id: s_VDJCa5FFajTShL1aP46XKs
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VDJCa5FFajTShL1aP46XKs
            source_type: api_record
            title: 维基数据：倪葆春（Q10888386）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10888386
            external_identifier: Q10888386
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%80%AA%E8%91%86%E6%98%A5
      object_person:
        id: p_v4E1SJLyT6GNwLJ7xUHM9m
        status: active
        display_name: 倪葆春
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王淑贞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑贞（1899年?—1991年11月2日），祖籍江苏苏州，農曆5月生于北京，中国医学家。王淑贞与林巧稚有“北林南王”之称。 | accepted |
| birth.date | 1899年5月31日 | accepted |
| death.date | 1991年11月2日 | accepted |
| name.primary | 王淑贞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LXKFHguzJ5DjK8ySHadw6f | 王季同 | accepted |
| spouses | p_v4E1SJLyT6GNwLJ7xUHM9m | 倪葆春 | accepted |

## 外部来源

- [维基数据：倪葆春（Q10888386）](https://www.wikidata.org/wiki/Q10888386)
- [维基数据：王季同（Q61306471）](https://www.wikidata.org/wiki/Q61306471)
- [维基数据：王淑贞（Q16906124）](https://www.wikidata.org/wiki/Q16906124)
- [中文维基百科：王淑贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E)
