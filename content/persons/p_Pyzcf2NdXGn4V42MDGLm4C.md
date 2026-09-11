---
schema: wang-person/v1
id: p_Pyzcf2NdXGn4V42MDGLm4C
status: active
merged_into: null
display_name: 王騎鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kzbBMeqFWEwq6k222gLCQn
        subject_person_id: p_Pyzcf2NdXGn4V42MDGLm4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騎鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vzSs6HPgirV6DZTh4JJs54
          claim_id: c_kzbBMeqFWEwq6k222gLCQn
          source_id: s_RTYJfL4efKqftr6kzRT7tD
          stance: supports
          locator: CBDB:640895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640895）
          source: &a1
            id: s_RTYJfL4efKqftr6kzRT7tD
            source_type: api_record
            title: 中国历代人物传记资料库：王騎鶴（CBDB 640895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640895&o=json
            external_identifier: CBDB:640895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DxBGTfQc3mNLuaFdiYXiGx
        subject_person_id: p_Pyzcf2NdXGn4V42MDGLm4C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騎鶴，清人物。籍贯金華，曾任典史。（中国历代人物传记资料库 CBDB 640895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rbRzpu1lJfCSy_GmP5Hpuw
          claim_id: c_DxBGTfQc3mNLuaFdiYXiGx
          source_id: s_RTYJfL4efKqftr6kzRT7tD
          stance: supports
          locator: CBDB:640895
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

# 王騎鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騎鶴 | accepted |
| bio.summary | 王騎鶴，清人物。籍贯金華，曾任典史。（中国历代人物传记资料库 CBDB 640895） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騎鶴（CBDB 640895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640895&o=json)
