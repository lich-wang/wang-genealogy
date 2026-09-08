---
schema: wang-person/v1
id: p_v4E1SJLyT6GNwLJ7xUHM9m
status: active
merged_into: null
display_name: 倪葆春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJF89Eeco91aVgkbw8sBT8
        subject_person_id: p_v4E1SJLyT6GNwLJ7xUHM9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 倪葆春
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3ag9LNGy8NBpWjxcSQ8DX
          claim_id: c_EJF89Eeco91aVgkbw8sBT8
          source_id: s_VDJCa5FFajTShL1aP46XKs
          stance: supports
          locator: Q10888386
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source:
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
        - id: cs_187MM2gLHfnGKTfUrCQivT
          claim_id: c_1HyKWcGgHhbWN6gz35iGU9
          source_id: s_VDJCa5FFajTShL1aP46XKs
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_sSTgxA95cAuy7U8RCb3Y4d
        status: active
        display_name: 王淑贞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 倪葆春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 倪葆春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sSTgxA95cAuy7U8RCb3Y4d | 王淑贞 | accepted |

## 外部来源

- [维基数据：倪葆春（Q10888386）](https://www.wikidata.org/wiki/Q10888386)
- [中文维基百科：王淑贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%91%E8%B4%9E)
