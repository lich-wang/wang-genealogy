---
schema: wang-person/v1
id: p_J1kC3vsL3hsJDeuTGs4QkU
status: active
merged_into: null
display_name: 王正庸
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mHQBeGPs16FR-g9owLJ0EP
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正庸（1872年—1931年），史料所见人物。本项目依据《王正庸》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YEJHZBZzg244nDRdRE4Y9I
          claim_id: c_mHQBeGPs16FR-g9owLJ0EP
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: Q112683524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nvknGa7j3AjPUAQa1BK5Xg
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1872年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1872-01-01
            latest: 1872-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UDNXNWMc69SW2rWh17DKEV
          claim_id: c_nvknGa7j3AjPUAQa1BK5Xg
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
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
        id: c_7FDTZzQ7Uaafmd2NiNwiCB
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1931-01-01
            latest: 1931-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ggR6DB8oU1vp7sKXDiHT1s
          claim_id: c_7FDTZzQ7Uaafmd2NiNwiCB
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZU4uP7RsdFWYZxvr1dAz3V
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正庸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cyRz1sA9tz2ykAqDC5xpyz
          claim_id: c_ZU4uP7RsdFWYZxvr1dAz3V
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: Q112683524
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9SPA8W9oHt3fjD8nMgeqk3
        subject_person_id: p_Mu15E56wyrNWUKHP8qFxt8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VmqHm5Dij3734LM9knBkRK
          claim_id: c_9SPA8W9oHt3fjD8nMgeqk3
          source_id: s_Vu8MRc3pp9WwKYcye94xWa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vu8MRc3pp9WwKYcye94xWa
            source_type: api_record
            title: 维基数据：王际唐（Q30949751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q30949751
            external_identifier: Q30949751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%85%89_(%E8%8B%B1%E5%9C%8B%E5%82%B3%E6%95%99%E5%A3%AB)
        - id: cs_iAiyHwsHQRNhhZP3AQx5JC
          claim_id: c_9SPA8W9oHt3fjD8nMgeqk3
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person:
        id: p_Mu15E56wyrNWUKHP8qFxt8
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  children:
    - claim:
        id: c_5xzhCuNxhgJaZ7n2oNJK72
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bD1F4PjXgxLbtQNz6i5ZcH
          claim_id: c_5xzhCuNxhgJaZ7n2oNJK72
          source_id: s_D1QxCC8u2yVo6eBx3Z8XD1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D1QxCC8u2yVo6eBx3Z8XD1
            source_type: api_record
            title: 维基数据：王恭守（Q21017023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21017023
            external_identifier: Q21017023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
        - id: cs_dxYteyw3zY6JK8JMTnKi2Y
          claim_id: c_5xzhCuNxhgJaZ7n2oNJK72
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person:
        id: p_NRmDJMD9Wzr4UWs937zuPi
        status: active
        display_name: 王恭守
        merged_into_person_id: null
    - claim:
        id: c_yhW3NgesTFZwcBf4QUViME
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8EUKk8GcJT7hZ42ed4Cbtm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NAVA7AZdMnBK8MUAcAfpjM
          claim_id: c_yhW3NgesTFZwcBf4QUViME
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
        - id: cs_VcbCkAnFFN7PDjJ1qx9Qpi
          claim_id: c_yhW3NgesTFZwcBf4QUViME
          source_id: s_ZHNb5AxKmDnxNDcM4PzXEd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZHNb5AxKmDnxNDcM4PzXEd
            source_type: api_record
            title: 维基数据：王錫熾（Q22098963）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22098963
            external_identifier: Q22098963
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8C%AB%E7%86%BE
      object_person:
        id: p_8EUKk8GcJT7hZ42ed4Cbtm
        status: active
        display_name: 王錫熾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正庸（1872年—1931年），史料所见人物。本项目依据《王正庸》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1872年 | accepted |
| death.date | 1931年 | accepted |
| name.primary | 王正庸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mu15E56wyrNWUKHP8qFxt8 | 王际唐 | accepted |
| children | p_NRmDJMD9Wzr4UWs937zuPi | 王恭守 | accepted |
| children | p_8EUKk8GcJT7hZ42ed4Cbtm | 王錫熾 | accepted |

## 外部来源

- [维基数据：王恭守（Q21017023）](https://www.wikidata.org/wiki/Q21017023)
- [维基数据：王际唐（Q30949751）](https://www.wikidata.org/wiki/Q30949751)
- [维基数据：王錫熾（Q22098963）](https://www.wikidata.org/wiki/Q22098963)
- [维基数据：王正庸（Q112683524）](https://www.wikidata.org/wiki/Q112683524)
