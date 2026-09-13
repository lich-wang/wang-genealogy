---
schema: wang-person/v1
id: p_PPdLNEa3a8BzoBdhUASVVB
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9kk4X7D5QVXicsrhgbjI3
        subject_person_id: p_PPdLNEa3a8BzoBdhUASVVB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建（767年—830年），字仲初，颍川（今河南许昌）人，唐朝进士、诗人。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5letdjZOCzmQuA-poC8Hp3
          claim_id: c_W9kk4X7D5QVXicsrhgbjI3
          source_id: s_VZrXeykligMXv2z7VeB8yD
          stance: supports
          locator: 导言
          quotation: 王建（767年—830年），字仲初，颍川（今河南许昌）人，唐朝进
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_VZrXeykligMXv2z7VeB8yD
            source_type: website
            title: 中文维基百科：王建 (唐朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%BA_(%E5%94%90%E6%9C%9D)
            external_identifier: Q4133151
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v1KZsgDW3R1p18QWQ1R34M
        subject_person_id: p_PPdLNEa3a8BzoBdhUASVVB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0767-01-01
            latest: 0767-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_14FuHJap1b4nDctjYy5w1f
          claim_id: c_v1KZsgDW3R1p18QWQ1R34M
          source_id: s_tDoz9C8xkMX5Tr13VjZwFa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tDoz9C8xkMX5Tr13VjZwFa
            source_type: api_record
            title: 维基数据：王建（Q4133151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4133151
            external_identifier: Q4133151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:45.578Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M85SC2qBTzM6PgXf7c6A7f
        subject_person_id: p_PPdLNEa3a8BzoBdhUASVVB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0830-01-01
            latest: 0830-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6yCNijdJeUmAb9PxEmLtP2
          claim_id: c_M85SC2qBTzM6PgXf7c6A7f
          source_id: s_tDoz9C8xkMX5Tr13VjZwFa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tDoz9C8xkMX5Tr13VjZwFa
            source_type: api_record
            title: 维基数据：王建（Q4133151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4133151
            external_identifier: Q4133151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:45.578Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s2ZxM2XPF9r4R8fRwdUJbw
        subject_person_id: p_PPdLNEa3a8BzoBdhUASVVB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pPszqb93p4PcEYkTTenFNN
          claim_id: c_s2ZxM2XPF9r4R8fRwdUJbw
          source_id: s_tDoz9C8xkMX5Tr13VjZwFa
          stance: supports
          locator: Q4133151
          quotation: null
          interpretation_note: null
          source:
            id: s_tDoz9C8xkMX5Tr13VjZwFa
            source_type: api_record
            title: 维基数据：王建（Q4133151）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4133151
            external_identifier: Q4133151
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:45.578Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建（767年—830年），字仲初，颍川（今河南许昌）人，唐朝进士、诗人。 | accepted |
| birth.date | 767年 | accepted |
| death.date | 830年 | accepted |
| name.primary | 王建 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王建（Q4133151）](https://www.wikidata.org/wiki/Q4133151)
- [中文维基百科：王建 (唐朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%BA_(%E5%94%90%E6%9C%9D))
