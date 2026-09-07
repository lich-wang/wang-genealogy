---
schema: wang-person/v1
id: p_vbQhfF3N7tV5JWFtaWgohr
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FEiRQwfdHPvcm4gFaDRuQq
        subject_person_id: p_vbQhfF3N7tV5JWFtaWgohr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋（515年—559年），字坦度，一字小興，乐浪郡遂城县（今朝鲜民主主义人民共和国平壤市）人，南北朝西魏將領。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PyRyeEQTmTwC-TshEW5w-f
          claim_id: c_FEiRQwfdHPvcm4gFaDRuQq
          source_id: s_RO4MA4HQsyyXfZ_ml7587A
          stance: supports
          locator: 导言
          quotation: 王懋（515年—559年），字坦度，一字小興，乐浪郡遂城县（今朝
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_RO4MA4HQsyyXfZ_ml7587A
            source_type: website
            title: 中文维基百科：王懋 (北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%8B_(%E5%8C%97%E6%9C%9D)
            external_identifier: Q55716150
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_crrH5p5SpGQvD3C1PrGvHR
        subject_person_id: p_vbQhfF3N7tV5JWFtaWgohr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 515年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0515-01-01
            latest: 0515-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pntgBVqoY5Mkuuw6jMDf5Q
          claim_id: c_crrH5p5SpGQvD3C1PrGvHR
          source_id: s_hr3pnkdw7SJ1Zg9wghZVC3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hr3pnkdw7SJ1Zg9wghZVC3
            source_type: api_record
            title: 维基数据：王懋（Q55716150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55716150
            external_identifier: Q55716150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:11.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%8B_(%E5%8C%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4fxKp2kc1QtCS8oRsohCFt
        subject_person_id: p_vbQhfF3N7tV5JWFtaWgohr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AhKCUW5PDK8yT4oAy9No6v
          claim_id: c_4fxKp2kc1QtCS8oRsohCFt
          source_id: s_hr3pnkdw7SJ1Zg9wghZVC3
          stance: supports
          locator: Q55716150
          quotation: null
          interpretation_note: null
          source:
            id: s_hr3pnkdw7SJ1Zg9wghZVC3
            source_type: api_record
            title: 维基数据：王懋（Q55716150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55716150
            external_identifier: Q55716150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:11.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%8B_(%E5%8C%97%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j7G29qxDta7M5gNs3BGZyh
        subject_person_id: p_n2jDzx5sS6j3vpbbSVhqB9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vbQhfF3N7tV5JWFtaWgohr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uWUpi6siHvry126658fyG3
          claim_id: c_j7G29qxDta7M5gNs3BGZyh
          source_id: s_hr3pnkdw7SJ1Zg9wghZVC3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hr3pnkdw7SJ1Zg9wghZVC3
            source_type: api_record
            title: 维基数据：王懋（Q55716150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55716150
            external_identifier: Q55716150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:11.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%8B_(%E5%8C%97%E6%9C%9D)
        - id: cs_zdaERntG7yvz6DHsyJTJoW
          claim_id: c_j7G29qxDta7M5gNs3BGZyh
          source_id: s_8Vt11deCmUk8nxFgsES8ez
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8Vt11deCmUk8nxFgsES8ez
            source_type: api_record
            title: 维基数据：王盟（Q11573180）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573180
            external_identifier: Q11573180
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.945Z
            metadata_json: null
      object_person:
        id: p_n2jDzx5sS6j3vpbbSVhqB9
        status: active
        display_name: 王盟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懋（515年—559年），字坦度，一字小興，乐浪郡遂城县（今朝鲜民主主义人民共和国平壤市）人，南北朝西魏將領。 | accepted |
| birth.date | 515年 | accepted |
| name.primary | 王懋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n2jDzx5sS6j3vpbbSVhqB9 | 王盟 | accepted |

## 外部来源

- [维基数据：王懋（Q55716150）](https://www.wikidata.org/wiki/Q55716150)
- [维基数据：王盟（Q11573180）](https://www.wikidata.org/wiki/Q11573180)
- [中文维基百科：王懋 (北朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%8B_(%E5%8C%97%E6%9C%9D))
