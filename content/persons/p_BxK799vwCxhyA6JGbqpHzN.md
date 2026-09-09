---
schema: wang-person/v1
id: p_BxK799vwCxhyA6JGbqpHzN
status: active
merged_into: null
display_name: 王乾章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_34ebW2gUo7UgebKXmm1uaD
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gngYfdWPHhR6Lb6BKygF2i
          claim_id: c_34ebW2gUo7UgebKXmm1uaD
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: CBDB:126679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126679）
          source: &a1
            id: s_n8fY6D3sur5MtKi8shwUp7
            source_type: api_record
            title: 中国历代人物传记资料库：王乾章（CBDB 126679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json
            external_identifier: CBDB:126679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TK7w2Lke8Y6mhgTb5AsSAh
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4rp9oyTJjF5EDEpFMjJ3G
          claim_id: c_TK7w2Lke8Y6mhgTb5AsSAh
          source_id: s_n8fY6D3sur5MtKi8shwUp7
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
        id: c_oKdfJjB12ivaG3XQkG6bL1
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3uY9NaLqJGcD1s2DiwZ2c
          claim_id: c_oKdfJjB12ivaG3XQkG6bL1
          source_id: s_n8fY6D3sur5MtKi8shwUp7
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
        id: c_5mi63F8Lnes2k5E4kmACTa
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GmN1RXXWgk26yjQmW516KN
          claim_id: c_5mi63F8Lnes2k5E4kmACTa
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王乾章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾章 | accepted |
| birth.date | 1527年 | accepted |
| death.date | 1599年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乾章（CBDB 126679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json)
