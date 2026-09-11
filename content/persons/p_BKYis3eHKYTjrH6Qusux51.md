---
schema: wang-person/v1
id: p_BKYis3eHKYTjrH6Qusux51
status: active
merged_into: null
display_name: 王尚彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xUpp3MPRSJEdeERKzC7Lx9
        subject_person_id: p_BKYis3eHKYTjrH6Qusux51
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eJoAGLx7dy9k5PvzvzHrkv
          claim_id: c_xUpp3MPRSJEdeERKzC7Lx9
          source_id: s_FcwPW6vTQ5LaTbMmFFC4KY
          stance: supports
          locator: CBDB:637291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637291）
          source: &a1
            id: s_FcwPW6vTQ5LaTbMmFFC4KY
            source_type: api_record
            title: 中国历代人物传记资料库：王尚彬（CBDB 637291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637291&o=json
            external_identifier: CBDB:637291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FHwDAKyLLf2d2dRGCxYbRB
        subject_person_id: p_BKYis3eHKYTjrH6Qusux51
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚彬，清人物。籍贯黃州府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UheZ1w-w54DKA5qtFsc_ki
          claim_id: c_FHwDAKyLLf2d2dRGCxYbRB
          source_id: s_FcwPW6vTQ5LaTbMmFFC4KY
          stance: supports
          locator: CBDB:637291
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

# 王尚彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚彬 | accepted |
| bio.summary | 王尚彬，清人物。籍贯黃州府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚彬（CBDB 637291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637291&o=json)
