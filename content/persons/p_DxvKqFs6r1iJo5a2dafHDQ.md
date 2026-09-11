---
schema: wang-person/v1
id: p_DxvKqFs6r1iJo5a2dafHDQ
status: active
merged_into: null
display_name: 王寓生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZH3SMMfSkBvAL7xgpSL8VT
        subject_person_id: p_DxvKqFs6r1iJo5a2dafHDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7a69p6ek9GJuuP3Xer9zN
          claim_id: c_ZH3SMMfSkBvAL7xgpSL8VT
          source_id: s_zaC4Z9KLEHaPcTbKFwEYPY
          stance: supports
          locator: CBDB:637246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637246）
          source: &a1
            id: s_zaC4Z9KLEHaPcTbKFwEYPY
            source_type: api_record
            title: 中国历代人物传记资料库：王寓生（CBDB 637246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637246&o=json
            external_identifier: CBDB:637246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FxU5m3LKKd587frHh4k7P4
        subject_person_id: p_DxvKqFs6r1iJo5a2dafHDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寓生，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_59BPb4WUV5UFHYm88DuhM1
          claim_id: c_FxU5m3LKKd587frHh4k7P4
          source_id: s_zaC4Z9KLEHaPcTbKFwEYPY
          stance: supports
          locator: CBDB:637246
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

# 王寓生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寓生 | accepted |
| bio.summary | 王寓生，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寓生（CBDB 637246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637246&o=json)
