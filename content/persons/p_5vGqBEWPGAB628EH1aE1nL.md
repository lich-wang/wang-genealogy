---
schema: wang-person/v1
id: p_5vGqBEWPGAB628EH1aE1nL
status: active
merged_into: null
display_name: 王舒甲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rAPie7ckr4AVfV3VL7eUg
        subject_person_id: p_5vGqBEWPGAB628EH1aE1nL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Yk83RUno2W97DpLBzorfA
          claim_id: c_1rAPie7ckr4AVfV3VL7eUg
          source_id: s_1KFAgkexAdcF3jDzPiw334
          stance: supports
          locator: CBDB:69368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69368）
          source: &a1
            id: s_1KFAgkexAdcF3jDzPiw334
            source_type: api_record
            title: 中国历代人物传记资料库：王舒甲（CBDB 69368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69368&o=json
            external_identifier: CBDB:69368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CZtuC1MDeNJ4gWCjZx1oXp
        subject_person_id: p_5vGqBEWPGAB628EH1aE1nL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1839年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tMh7H1eNfv3HiMfLy1n7fk
          claim_id: c_CZtuC1MDeNJ4gWCjZx1oXp
          source_id: s_1KFAgkexAdcF3jDzPiw334
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
        id: c_GKpKuwhg2Ms9EybU9UHvwN
        subject_person_id: p_5vGqBEWPGAB628EH1aE1nL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAnpHRU9WE4hhR4KBX9YpZ
          claim_id: c_GKpKuwhg2Ms9EybU9UHvwN
          source_id: s_1KFAgkexAdcF3jDzPiw334
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
        id: c_C9HeXsDKsHBPEp6LZHhYbQ
        subject_person_id: p_5vGqBEWPGAB628EH1aE1nL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒甲（1839年—1863年），清人物。籍贯合肥。（中国历代人物传记资料库 CBDB 69368）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9TFABIkRr10y2KrISOunTc
          claim_id: c_C9HeXsDKsHBPEp6LZHhYbQ
          source_id: s_1KFAgkexAdcF3jDzPiw334
          stance: supports
          locator: CBDB:69368
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

# 王舒甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舒甲 | accepted |
| birth.date | 1839年 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | 王舒甲（1839年—1863年），清人物。籍贯合肥。（中国历代人物传记资料库 CBDB 69368） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舒甲（CBDB 69368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69368&o=json)
