---
schema: wang-person/v1
id: p_vt7A5hDWsfw5HVCfiDymEC
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4rZCcdehLQ4pS68MQijdy
        subject_person_id: p_vt7A5hDWsfw5HVCfiDymEC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4FM2FS7JE7DJtWF7UxKd1n
          claim_id: c_L4rZCcdehLQ4pS68MQijdy
          source_id: s_zjGq1fH7hPK1XUSyWYgUFF
          stance: supports
          locator: CBDB:191380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191380）
          source: &a1
            id: s_zjGq1fH7hPK1XUSyWYgUFF
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 191380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191380&o=json
            external_identifier: CBDB:191380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_De6AWrL7LtfowVVdwECMjK
        subject_person_id: p_vt7A5hDWsfw5HVCfiDymEC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 750年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6HB2UH3c1e7cgw93GvoAt
          claim_id: c_De6AWrL7LtfowVVdwECMjK
          source_id: s_zjGq1fH7hPK1XUSyWYgUFF
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
        id: c_HfJ8oVAPHxHa7tdtFNoNyG
        subject_person_id: p_vt7A5hDWsfw5HVCfiDymEC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟（卒于750年），唐人物。曾任左千牛。（中国历代人物传记资料库 CBDB 191380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2zjt0ON8951dLS-NZ2PByQ
          claim_id: c_HfJ8oVAPHxHa7tdtFNoNyG
          source_id: s_zjGq1fH7hPK1XUSyWYgUFF
          stance: supports
          locator: CBDB:191380
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| death.date | 750年 | accepted |
| bio.summary | 王舟（卒于750年），唐人物。曾任左千牛。（中国历代人物传记资料库 CBDB 191380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 191380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191380&o=json)
