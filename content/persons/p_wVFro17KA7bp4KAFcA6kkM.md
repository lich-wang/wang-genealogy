---
schema: wang-person/v1
id: p_wVFro17KA7bp4KAFcA6kkM
status: active
merged_into: null
display_name: 王捷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n4sKMoEuuiKn96XthKi8q6
        subject_person_id: p_wVFro17KA7bp4KAFcA6kkM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王捷，史料所见人物。本项目依据《維基數據：王捷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_H-QHurPKOkc3seUJtMvaG2
          claim_id: c_n4sKMoEuuiKn96XthKi8q6
          source_id: s_9WJYkNcmCRfuRte9wJ5E93
          stance: supports
          locator: Q16603520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9WJYkNcmCRfuRte9wJ5E93
            source_type: api_record
            title: 維基數據：王捷（Q16603520）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603520
            external_identifier: Q16603520
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:45.240Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8D%B7
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DQeesjaDjVaam2VZYiFrs8
        subject_person_id: p_wVFro17KA7bp4KAFcA6kkM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王捷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eLwDtH4Cg2eg6jgQ7qKJJp
          claim_id: c_DQeesjaDjVaam2VZYiFrs8
          source_id: s_9WJYkNcmCRfuRte9wJ5E93
          stance: supports
          locator: Q16603520
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_644XUBW8PknFYTByZpvqL8
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wVFro17KA7bp4KAFcA6kkM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_f8jtCKHSmAtjqdh7ooqsWe
          claim_id: c_644XUBW8PknFYTByZpvqL8
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
        - id: cs_NE5GX4QpahAz9KSfkedhoQ
          claim_id: c_644XUBW8PknFYTByZpvqL8
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
        - id: cs_9QFKrV6EAkTHmv3cZQJSay
          claim_id: c_644XUBW8PknFYTByZpvqL8
          source_id: s_9WJYkNcmCRfuRte9wJ5E93
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9WJYkNcmCRfuRte9wJ5E93
            source_type: api_record
            title: 維基數據：王捷（Q16603520）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603520
            external_identifier: Q16603520
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:45.240Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8D%B7
        - id: cs_wHeePFFjWEMQWJhsiwX56T
          claim_id: c_644XUBW8PknFYTByZpvqL8
          source_id: s_8XZU5R94U4ZCF5MaNVuAgg
          stance: supports
          locator: 条文：之子/之女
          quotation: 王捷（{{bd|?||?||}}），是中国新朝皇帝王莽的女儿
          interpretation_note: null
          source:
            id: s_8XZU5R94U4ZCF5MaNVuAgg
            source_type: website
            title: 中文维基百科：王捷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8D%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:27.229Z
            metadata_json: null
        - id: cs_LnVNUM4moPeRQSUFYECF4F
          claim_id: c_644XUBW8PknFYTByZpvqL8
          source_id: s_NGA9iAdpqzXTsWxeRayAY9
          stance: supports
          locator: 条文：之子/之女
          quotation: 王捷，是中国新朝皇帝王莽的女儿
          interpretation_note: null
          source:
            id: s_NGA9iAdpqzXTsWxeRayAY9
            source_type: website
            title: 中文维基百科：王捷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8D%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:27.225Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王捷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王捷，史料所见人物。本项目依据《維基數據：王捷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王捷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [維基數據：王捷（Q16603520）](https://www.wikidata.org/wiki/Q16603520)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [中文维基百科：王捷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8D%B7)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
