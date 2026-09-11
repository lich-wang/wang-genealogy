---
schema: wang-person/v1
id: p_YyYgp5MX9iAmHh8eNM7iHL
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GDje5E38dmunaY2cLQjEt1
        subject_person_id: p_YyYgp5MX9iAmHh8eNM7iHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_41Av4WHtpFRjVETxJi1m8k
          claim_id: c_GDje5E38dmunaY2cLQjEt1
          source_id: s_pRD2xRrAAdoTxdxyT21GG5
          stance: supports
          locator: CBDB:66689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66689）
          source: &a1
            id: s_pRD2xRrAAdoTxdxyT21GG5
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 66689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66689&o=json
            external_identifier: CBDB:66689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QggLKRLUqeHkXc5CqsbbAe
        subject_person_id: p_YyYgp5MX9iAmHh8eNM7iHL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1359年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dqp4iq8dmBkJEe7EAKZd7c
          claim_id: c_QggLKRLUqeHkXc5CqsbbAe
          source_id: s_pRD2xRrAAdoTxdxyT21GG5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YptidrUhUXpYEWGoiwic5P
        subject_person_id: p_YyYgp5MX9iAmHh8eNM7iHL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1409年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3KZokLyi8TWEvv8Lx7LFq
          claim_id: c_YptidrUhUXpYEWGoiwic5P
          source_id: s_pRD2xRrAAdoTxdxyT21GG5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fREUa7a8zawksdaYqjLGmo
        subject_person_id: p_YyYgp5MX9iAmHh8eNM7iHL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠（1359年—1409年），明人物。籍贯孝感，曾任都督同知、衛指揮僉事、衛指揮同知。（中国历代人物传记资料库 CBDB 66689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FAl2L-e3vW3JzA82l590NI
          claim_id: c_fREUa7a8zawksdaYqjLGmo
          source_id: s_pRD2xRrAAdoTxdxyT21GG5
          stance: supports
          locator: CBDB:66689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
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

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| birth.date | 1359年 | accepted |
| death.date | 1409年 | accepted |
| bio.summary | 王忠（1359年—1409年），明人物。籍贯孝感，曾任都督同知、衛指揮僉事、衛指揮同知。（中国历代人物传记资料库 CBDB 66689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 66689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66689&o=json)
