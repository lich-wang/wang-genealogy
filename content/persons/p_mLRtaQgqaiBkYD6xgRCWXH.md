---
schema: wang-person/v1
id: p_mLRtaQgqaiBkYD6xgRCWXH
status: active
merged_into: null
display_name: 王可大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9w9q3gmFLJZ8uuK5TCrEZi
        subject_person_id: p_mLRtaQgqaiBkYD6xgRCWXH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QhfkbgAs4D3vaNGe19zAs7
          claim_id: c_9w9q3gmFLJZ8uuK5TCrEZi
          source_id: s_CZQwcrD474zKeeAkoiYMGC
          stance: supports
          locator: CBDB:71480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71480）
          source: &a1
            id: s_CZQwcrD474zKeeAkoiYMGC
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 71480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71480&o=json
            external_identifier: CBDB:71480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_763P6DKBGsxPAw8rEiqNaZ
        subject_person_id: p_mLRtaQgqaiBkYD6xgRCWXH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAznQY9YH6qASF5GJ3ewqu
          claim_id: c_763P6DKBGsxPAw8rEiqNaZ
          source_id: s_CZQwcrD474zKeeAkoiYMGC
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
        id: c_8ZVAo1CWRBD3EDHe3Et1om
        subject_person_id: p_mLRtaQgqaiBkYD6xgRCWXH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大（生于1638年），清人物。籍贯武安。（中国历代人物传记资料库 CBDB 71480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rbuk-KaDjlqbSM2UHuNYQa
          claim_id: c_8ZVAo1CWRBD3EDHe3Et1om
          source_id: s_CZQwcrD474zKeeAkoiYMGC
          stance: supports
          locator: CBDB:71480
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

# 王可大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可大 | accepted |
| birth.date | 1638年 | accepted |
| bio.summary | 王可大（生于1638年），清人物。籍贯武安。（中国历代人物传记资料库 CBDB 71480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 71480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71480&o=json)
