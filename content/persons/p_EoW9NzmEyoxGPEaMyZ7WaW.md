---
schema: wang-person/v1
id: p_EoW9NzmEyoxGPEaMyZ7WaW
status: active
merged_into: null
display_name: 王格
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPNwW7m8VG2WoumbfQwBn8
        subject_person_id: p_EoW9NzmEyoxGPEaMyZ7WaW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WT41V7fFpuP17TvoJpJz4Y
          claim_id: c_bPNwW7m8VG2WoumbfQwBn8
          source_id: s_X9XThQjRZrxubuHjLQYeeS
          stance: supports
          locator: CBDB:126642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126642）
          source: &a1
            id: s_X9XThQjRZrxubuHjLQYeeS
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 126642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126642&o=json
            external_identifier: CBDB:126642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wBcuFyuU3APbbqEJhTyMLW
        subject_person_id: p_EoW9NzmEyoxGPEaMyZ7WaW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeSxNzNQ3edLibLsxkkbnf
          claim_id: c_wBcuFyuU3APbbqEJhTyMLW
          source_id: s_X9XThQjRZrxubuHjLQYeeS
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
        id: c_kUekhMY6J1nJ7F7EJgBQDW
        subject_person_id: p_EoW9NzmEyoxGPEaMyZ7WaW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_juK4qCsK8TXZi2gVL8HEzp
          claim_id: c_kUekhMY6J1nJ7F7EJgBQDW
          source_id: s_X9XThQjRZrxubuHjLQYeeS
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
        id: c_6oAQJ3EWJ7hwju2BD14i54
        subject_person_id: p_EoW9NzmEyoxGPEaMyZ7WaW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格（1502年—1595年），明人物。明清進士進士，籍贯京山，入仕進士，曾任僉事、太僕寺少卿、知縣。（中国历代人物传记资料库 CBDB 126642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WOz2HlsQGZo1CoKUdsGBq0
          claim_id: c_6oAQJ3EWJ7hwju2BD14i54
          source_id: s_X9XThQjRZrxubuHjLQYeeS
          stance: supports
          locator: CBDB:126642
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

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| birth.date | 1502年 | accepted |
| death.date | 1595年 | accepted |
| bio.summary | 王格（1502年—1595年），明人物。明清進士進士，籍贯京山，入仕進士，曾任僉事、太僕寺少卿、知縣。（中国历代人物传记资料库 CBDB 126642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 126642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126642&o=json)
