---
schema: wang-person/v1
id: p_21ouqBjgXaRVvZJcsc26L9
status: active
merged_into: null
display_name: 王質
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0Cbup0abqpBEne-CSkstBD
        subject_person_id: p_21ouqBjgXaRVvZJcsc26L9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質（511年—570年），史料所见人物。本项目依据《王質》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_TGDqg-eG51YiZ16n5VjS4u
          claim_id: c_0Cbup0abqpBEne-CSkstBD
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: Q11573215
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FG1yXp4nDFkXJLYNq3zwA4
            source_type: api_record
            title: 维基数据：王質（Q11573215）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573215
            external_identifier: Q11573215
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%AA_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4Q3BNhyeARbPy35DgLZo1F
        subject_person_id: p_21ouqBjgXaRVvZJcsc26L9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 511年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0511-01-01
            latest: 0511-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_osjPzEyFR2KWViHpKgJt4V
          claim_id: c_4Q3BNhyeARbPy35DgLZo1F
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FG1yXp4nDFkXJLYNq3zwA4
            source_type: api_record
            title: 维基数据：王質（Q11573215）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573215
            external_identifier: Q11573215
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%AA_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VxymKUH9NQJPmgM1fQZKSJ
        subject_person_id: p_21ouqBjgXaRVvZJcsc26L9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 570年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0570-01-01
            latest: 0570-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yfgv1iLbqvPj96wbiGhman
          claim_id: c_VxymKUH9NQJPmgM1fQZKSJ
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FG1yXp4nDFkXJLYNq3zwA4
            source_type: api_record
            title: 维基数据：王質（Q11573215）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573215
            external_identifier: Q11573215
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%AA_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qgTYD3yB7F1T1gcYQ4EKyP
        subject_person_id: p_21ouqBjgXaRVvZJcsc26L9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LbrEkPx4E3o2Qhf2xa54ga
          claim_id: c_qgTYD3yB7F1T1gcYQ4EKyP
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: Q11573215
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tHph4CF95mQ8aZwm42JSj6
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21ouqBjgXaRVvZJcsc26L9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GpnDWKy5dsunBs9vZ2u5NR
          claim_id: c_tHph4CF95mQ8aZwm42JSj6
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_JFQ5iK5dym2KCcbGAZDwv9
          claim_id: c_tHph4CF95mQ8aZwm42JSj6
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FG1yXp4nDFkXJLYNq3zwA4
            source_type: api_record
            title: 维基数据：王質（Q11573215）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573215
            external_identifier: Q11573215
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%AA_(%E5%8D%97%E6%9C%9D)
      object_person:
        id: p_J834gYrU1F2b3b6hCDtUW2
        status: active
        display_name: 王琳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王質（511年—570年），史料所见人物。本项目依据《王質》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 511年 | accepted |
| death.date | 570年 | accepted |
| name.primary | 王質 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J834gYrU1F2b3b6hCDtUW2 | 王琳 | accepted |

## 外部来源

- [维基数据：王琳（Q22814773）](https://www.wikidata.org/wiki/Q22814773)
- [维基数据：王質（Q11573215）](https://www.wikidata.org/wiki/Q11573215)
