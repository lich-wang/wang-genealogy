---
schema: wang-person/v1
id: p_DYD7R7R51CTL8Xjka8dyNx
status: active
merged_into: null
display_name: 王鍾珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8FSj3NCtNQhdBFoKnCKB4
        subject_person_id: p_DYD7R7R51CTL8Xjka8dyNx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZFkFdJP19x1CFqQGCiAZ5w
          claim_id: c_J8FSj3NCtNQhdBFoKnCKB4
          source_id: s_M1YN95efrzRPzfHR5D2uET
          stance: supports
          locator: CBDB:640677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640677）
          source: &a1
            id: s_M1YN95efrzRPzfHR5D2uET
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾珍（CBDB 640677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640677&o=json
            external_identifier: CBDB:640677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R9ShpfLp5PYJNHCEDR4Mur
        subject_person_id: p_DYD7R7R51CTL8Xjka8dyNx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾珍，清人物。籍贯青州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ghLxwNG-mz-WaKtuygR--m
          claim_id: c_R9ShpfLp5PYJNHCEDR4Mur
          source_id: s_M1YN95efrzRPzfHR5D2uET
          stance: supports
          locator: CBDB:640677
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

# 王鍾珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾珍 | accepted |
| bio.summary | 王鍾珍，清人物。籍贯青州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾珍（CBDB 640677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640677&o=json)
