---
schema: wang-person/v1
id: p_F753EnNEpt4TJ6XmcXezcF
status: active
merged_into: null
display_name: 王洪文
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UpikMoEiryhavMVuVxgTz6
        subject_person_id: p_F753EnNEpt4TJ6XmcXezcF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪文（1899年12月22日—1932年11月中旬），原名义宝，字重达，湖北通山人，中国共产党早期人物，曾任通山县苏维埃主席。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TRccFMCQ5AOLgUlHIvFGsd
          claim_id: c_UpikMoEiryhavMVuVxgTz6
          source_id: s_yN44HgF2egA8avYIQ7KN5a
          stance: supports
          locator: 导言
          quotation: 王洪文（1899年12月22日—1932年11月中旬），原名义宝
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_yN44HgF2egA8avYIQ7KN5a
            source_type: website
            title: 中文维基百科：王洪文 (1899年)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B4%AA%E6%96%87_(1899%E5%B9%B4)
            external_identifier: Q137920379
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rmPQRYq4YTKfkrQyaKZ85e
        subject_person_id: p_F753EnNEpt4TJ6XmcXezcF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1899年12月22日
            calendar_note: 维基数据 P569 结构化日期，精度：日
            earliest: 1899-12-22
            latest: 1899-12-22
            precision: day
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uQoQ9s9ajW7HzZP57hovnX
          claim_id: c_rmPQRYq4YTKfkrQyaKZ85e
          source_id: s_JTXTce8HhQxZQZHEZKefN7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JTXTce8HhQxZQZHEZKefN7
            source_type: api_record
            title: 维基数据：王洪文（Q137920379）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q137920379
            external_identifier: Q137920379
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:17.386Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ji7m2WLHEghtAa5a61mJ2k
        subject_person_id: p_F753EnNEpt4TJ6XmcXezcF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1932年11月
            calendar_note: 维基数据 P570 结构化日期，精度：月
            earliest: 1932-11-01
            latest: 1932-11-30
            precision: month
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5vMTgttvhMXvNjCkE6KSHV
          claim_id: c_Ji7m2WLHEghtAa5a61mJ2k
          source_id: s_JTXTce8HhQxZQZHEZKefN7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JTXTce8HhQxZQZHEZKefN7
            source_type: api_record
            title: 维基数据：王洪文（Q137920379）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q137920379
            external_identifier: Q137920379
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:17.386Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8dT3BnQo96mjYa9XBYD49X
        subject_person_id: p_F753EnNEpt4TJ6XmcXezcF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iFRXx5dAAFeHa4s8JU3fgu
          claim_id: c_8dT3BnQo96mjYa9XBYD49X
          source_id: s_JTXTce8HhQxZQZHEZKefN7
          stance: supports
          locator: Q137920379
          quotation: null
          interpretation_note: null
          source:
            id: s_JTXTce8HhQxZQZHEZKefN7
            source_type: api_record
            title: 维基数据：王洪文（Q137920379）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q137920379
            external_identifier: Q137920379
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:17.386Z
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

# 王洪文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪文（1899年12月22日—1932年11月中旬），原名义宝，字重达，湖北通山人，中国共产党早期人物，曾任通山县苏维埃主席。 | accepted |
| birth.date | 1899年12月22日 | accepted |
| death.date | 1932年11月 | accepted |
| name.primary | 王洪文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王洪文（Q137920379）](https://www.wikidata.org/wiki/Q137920379)
- [中文维基百科：王洪文 (1899年)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B4%AA%E6%96%87_(1899%E5%B9%B4))
