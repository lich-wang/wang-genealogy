---
schema: wang-person/v1
id: p_dYSoEEnLUQCYWuAAWig9C8
status: active
merged_into: null
display_name: 王蘊章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JGAPQFvNUjTjJ5qGiZBw6Q
        subject_person_id: p_dYSoEEnLUQCYWuAAWig9C8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JuZgttUUpxtHBAR4nqdzgC
          claim_id: c_JGAPQFvNUjTjJ5qGiZBw6Q
          source_id: s_kybmKD4fVR8UEP3DAVZcef
          stance: supports
          locator: CBDB:640186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640186）
          source: &a1
            id: s_kybmKD4fVR8UEP3DAVZcef
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊章（CBDB 640186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640186&o=json
            external_identifier: CBDB:640186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vwSUQdBSbAr2w85NMc5WaL
        subject_person_id: p_dYSoEEnLUQCYWuAAWig9C8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊章，清人物。籍贯清苑，入仕附貢生，曾任典史。（中国历代人物传记资料库 CBDB 640186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xvEgWwQI8EqwQurjsX3BHt
          claim_id: c_vwSUQdBSbAr2w85NMc5WaL
          source_id: s_kybmKD4fVR8UEP3DAVZcef
          stance: supports
          locator: CBDB:640186
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

# 王蘊章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊章 | accepted |
| bio.summary | 王蘊章，清人物。籍贯清苑，入仕附貢生，曾任典史。（中国历代人物传记资料库 CBDB 640186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊章（CBDB 640186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640186&o=json)
