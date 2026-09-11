---
schema: wang-person/v1
id: p_9gUfySzx9U8FWiMy1JfAJa
status: active
merged_into: null
display_name: 王璪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N525rDu8C27FbisgvoLxop
        subject_person_id: p_9gUfySzx9U8FWiMy1JfAJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_odR4juMUxPks6AQX4j5CPQ
          claim_id: c_N525rDu8C27FbisgvoLxop
          source_id: s_cFahqDQz6w4VQDHpq9AwMr
          stance: supports
          locator: CBDB:71286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71286）
          source: &a1
            id: s_cFahqDQz6w4VQDHpq9AwMr
            source_type: api_record
            title: 中国历代人物传记资料库：王璪（CBDB 71286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71286&o=json
            external_identifier: CBDB:71286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dG7S259945r5CEAdNbCRzw
        subject_person_id: p_9gUfySzx9U8FWiMy1JfAJa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1708年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VPhWwe93aQYfgsR49jUft
          claim_id: c_dG7S259945r5CEAdNbCRzw
          source_id: s_cFahqDQz6w4VQDHpq9AwMr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ugu7k6Aj8J5BF8XbRsCpgb
        subject_person_id: p_9gUfySzx9U8FWiMy1JfAJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璪（生于1708年），清人物。籍贯成都。（中国历代人物传记资料库 CBDB 71286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rCxwbrxAEixxC5VdrlQA6O
          claim_id: c_Ugu7k6Aj8J5BF8XbRsCpgb
          source_id: s_cFahqDQz6w4VQDHpq9AwMr
          stance: supports
          locator: CBDB:71286
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

# 王璪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璪 | accepted |
| birth.date | 1708年 | accepted |
| bio.summary | 王璪（生于1708年），清人物。籍贯成都。（中国历代人物传记资料库 CBDB 71286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璪（CBDB 71286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71286&o=json)
