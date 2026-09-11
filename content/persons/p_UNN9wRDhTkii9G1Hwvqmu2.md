---
schema: wang-person/v1
id: p_UNN9wRDhTkii9G1Hwvqmu2
status: active
merged_into: null
display_name: 王元佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8m9EB16DepX9CMgY79jTX
        subject_person_id: p_UNN9wRDhTkii9G1Hwvqmu2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hvfKLKTud17HaQVR7YcARc
          claim_id: c_a8m9EB16DepX9CMgY79jTX
          source_id: s_sHPfQap8eyAqBPsN6gH6M7
          stance: supports
          locator: CBDB:101057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101057）
          source: &a1
            id: s_sHPfQap8eyAqBPsN6gH6M7
            source_type: api_record
            title: 中国历代人物传记资料库：王元佑（CBDB 101057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101057&o=json
            external_identifier: CBDB:101057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1Q8VVBTMHjvvBAduB1bqJw
        subject_person_id: p_UNN9wRDhTkii9G1Hwvqmu2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1327年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4aJCg97s1WVA4N2VzKaUp
          claim_id: c_1Q8VVBTMHjvvBAduB1bqJw
          source_id: s_sHPfQap8eyAqBPsN6gH6M7
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
        id: c_ScENEPoeMbKzspjhmX8Ngs
        subject_person_id: p_UNN9wRDhTkii9G1Hwvqmu2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1375年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AfGMpVqf1QSBA7vGkHCZCn
          claim_id: c_ScENEPoeMbKzspjhmX8Ngs
          source_id: s_sHPfQap8eyAqBPsN6gH6M7
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
        id: c_QEiaXDSa83j6BEgEJtKw59
        subject_person_id: p_UNN9wRDhTkii9G1Hwvqmu2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元佑（1327年—1375年），明人物。籍贯平陽州。（中国历代人物传记资料库 CBDB 101057）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4oKRdea9NENgUQQwPt7yCw
          claim_id: c_QEiaXDSa83j6BEgEJtKw59
          source_id: s_sHPfQap8eyAqBPsN6gH6M7
          stance: supports
          locator: CBDB:101057
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

# 王元佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元佑 | accepted |
| birth.date | 1327年 | accepted |
| death.date | 1375年 | accepted |
| bio.summary | 王元佑（1327年—1375年），明人物。籍贯平陽州。（中国历代人物传记资料库 CBDB 101057） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元佑（CBDB 101057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101057&o=json)
