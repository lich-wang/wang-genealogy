---
schema: wang-person/v1
id: p_dC912Bjk1RkcSXPF4e9s7x
status: active
merged_into: null
display_name: 王孟仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V9v9iwZ2AAdx4u2xLpUUq9
        subject_person_id: p_dC912Bjk1RkcSXPF4e9s7x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Bb5wxrygGeDYYUBv6k38r
          claim_id: c_V9v9iwZ2AAdx4u2xLpUUq9
          source_id: s_3gYSBTePoV5V8Ggt8obT2D
          stance: supports
          locator: CBDB:560927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560927）
          source: &a1
            id: s_3gYSBTePoV5V8Ggt8obT2D
            source_type: api_record
            title: 中国历代人物传记资料库：王孟仁（CBDB 560927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560927&o=json
            external_identifier: CBDB:560927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yk1hd4a72jP79CkaBkGtPZ
        subject_person_id: p_dC912Bjk1RkcSXPF4e9s7x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟仁，明人物。籍贯江寧，身份为畫家。（中国历代人物传记资料库 CBDB 560927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oqXbqH76j1KLZcZ7EmXLWj
          claim_id: c_Yk1hd4a72jP79CkaBkGtPZ
          source_id: s_3gYSBTePoV5V8Ggt8obT2D
          stance: supports
          locator: CBDB:560927
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

# 王孟仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟仁 | accepted |
| bio.summary | 王孟仁，明人物。籍贯江寧，身份为畫家。（中国历代人物传记资料库 CBDB 560927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟仁（CBDB 560927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560927&o=json)
