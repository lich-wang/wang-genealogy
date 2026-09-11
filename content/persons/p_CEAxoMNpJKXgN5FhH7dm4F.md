---
schema: wang-person/v1
id: p_CEAxoMNpJKXgN5FhH7dm4F
status: active
merged_into: null
display_name: 王命岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gAmMG4teSR2WysTsHniVkW
        subject_person_id: p_CEAxoMNpJKXgN5FhH7dm4F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ec1ym2iwSxpgn6PUXJKQvo
          claim_id: c_gAmMG4teSR2WysTsHniVkW
          source_id: s_QiFJDiLQtcfoyN1GtNrnxt
          stance: supports
          locator: CBDB:56844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56844）
          source: &a1
            id: s_QiFJDiLQtcfoyN1GtNrnxt
            source_type: api_record
            title: 中国历代人物传记资料库：王命岳（CBDB 56844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56844&o=json
            external_identifier: CBDB:56844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CJsCvm6MH71WEo2VcQaGqo
        subject_person_id: p_CEAxoMNpJKXgN5FhH7dm4F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1609年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zn59BvoQCfiwGd83adXpJC
          claim_id: c_CJsCvm6MH71WEo2VcQaGqo
          source_id: s_QiFJDiLQtcfoyN1GtNrnxt
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
        id: c_E1r2Qz12wKAtaBvD5gZJ74
        subject_person_id: p_CEAxoMNpJKXgN5FhH7dm4F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4mkKA46yBKhXBbe4M9M6C
          claim_id: c_E1r2Qz12wKAtaBvD5gZJ74
          source_id: s_QiFJDiLQtcfoyN1GtNrnxt
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
        id: c_wCttHLveRP8vtrTjevUDDk
        subject_person_id: p_CEAxoMNpJKXgN5FhH7dm4F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命岳（1609年—1667年），清人物。明清進士進士，籍贯晉江，入仕進士，曾任兵科給事中、同考官。（中国历代人物传记资料库 CBDB 56844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUCZFxL8KJ3V4nzcz0056Q
          claim_id: c_wCttHLveRP8vtrTjevUDDk
          source_id: s_QiFJDiLQtcfoyN1GtNrnxt
          stance: supports
          locator: CBDB:56844
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

# 王命岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王命岳 | accepted |
| birth.date | 1609年 | accepted |
| death.date | 1667年 | accepted |
| bio.summary | 王命岳（1609年—1667年），清人物。明清進士進士，籍贯晉江，入仕進士，曾任兵科給事中、同考官。（中国历代人物传记资料库 CBDB 56844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王命岳（CBDB 56844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56844&o=json)
