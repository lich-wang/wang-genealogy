---
schema: wang-person/v1
id: p_jqvw912aesobh26Bf6t9NC
status: active
merged_into: null
display_name: 王述古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kop8ZgzeG3uP8mMNq91aEX
        subject_person_id: p_jqvw912aesobh26Bf6t9NC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_17L5ma5tLMvxBQNmdi8EhS
          claim_id: c_kop8ZgzeG3uP8mMNq91aEX
          source_id: s_qzd4YAQFoTf3MHTqygzSMW
          stance: supports
          locator: CBDB:640393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640393）
          source: &a1
            id: s_qzd4YAQFoTf3MHTqygzSMW
            source_type: api_record
            title: 中国历代人物传记资料库：王述古（CBDB 640393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640393&o=json
            external_identifier: CBDB:640393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ew1L95YXpR1n4fPN48ZePS
        subject_person_id: p_jqvw912aesobh26Bf6t9NC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述古，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 640393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3bQJel9LH2ErvlYDuHULf
          claim_id: c_Ew1L95YXpR1n4fPN48ZePS
          source_id: s_qzd4YAQFoTf3MHTqygzSMW
          stance: supports
          locator: CBDB:640393
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

# 王述古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述古 | accepted |
| bio.summary | 王述古，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 640393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述古（CBDB 640393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640393&o=json)
