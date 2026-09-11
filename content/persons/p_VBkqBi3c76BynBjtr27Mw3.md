---
schema: wang-person/v1
id: p_VBkqBi3c76BynBjtr27Mw3
status: active
merged_into: null
display_name: 王翃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNVwkwi1zrYXNziGG7cqRp
        subject_person_id: p_VBkqBi3c76BynBjtr27Mw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZKhgXisYd7CYV9TknfnVeW
          claim_id: c_yNVwkwi1zrYXNziGG7cqRp
          source_id: s_k6Kow4SCpoWoNojFJrC7JT
          stance: supports
          locator: CBDB:69347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69347）
          source: &a1
            id: s_k6Kow4SCpoWoNojFJrC7JT
            source_type: api_record
            title: 中国历代人物传记资料库：王翃（CBDB 69347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69347&o=json
            external_identifier: CBDB:69347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tCDGSD6jFXzZTAEQHknBiH
        subject_person_id: p_VBkqBi3c76BynBjtr27Mw3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXdq1zy7tUFA1qpf9GZv9A
          claim_id: c_tCDGSD6jFXzZTAEQHknBiH
          source_id: s_k6Kow4SCpoWoNojFJrC7JT
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
        id: c_GKhNEjiXMEDnt9bVKa1bBQ
        subject_person_id: p_VBkqBi3c76BynBjtr27Mw3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbR4478VCyQggJAuDKNHHT
          claim_id: c_GKhNEjiXMEDnt9bVKa1bBQ
          source_id: s_k6Kow4SCpoWoNojFJrC7JT
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
        id: c_ecWpDtVMpda5eqV8EEDSTp
        subject_person_id: p_VBkqBi3c76BynBjtr27Mw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃（1603年—1653年），清人物。籍贯嘉興，身份为詩人、詞人，入仕布衣。（中国历代人物传记资料库 CBDB 69347）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QqkcT485xydKHKzCjVPIq0
          claim_id: c_ecWpDtVMpda5eqV8EEDSTp
          source_id: s_k6Kow4SCpoWoNojFJrC7JT
          stance: supports
          locator: CBDB:69347
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

# 王翃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翃 | accepted |
| birth.date | 1603年 | accepted |
| death.date | 1653年 | accepted |
| bio.summary | 王翃（1603年—1653年），清人物。籍贯嘉興，身份为詩人、詞人，入仕布衣。（中国历代人物传记资料库 CBDB 69347） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翃（CBDB 69347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69347&o=json)
