---
schema: wang-person/v1
id: p_5qamUc8yEU62UKNwEvAnFU
status: active
merged_into: null
display_name: 王元春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GanG4GBn72kYPuBFCHHf3x
        subject_person_id: p_5qamUc8yEU62UKNwEvAnFU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SDoV15dAhLg67UX1UwJgaL
          claim_id: c_GanG4GBn72kYPuBFCHHf3x
          source_id: s_VYLNgn722yHC4XJrJYJD69
          stance: supports
          locator: CBDB:636155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636155）
          source: &a1
            id: s_VYLNgn722yHC4XJrJYJD69
            source_type: api_record
            title: 中国历代人物传记资料库：王元春（CBDB 636155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636155&o=json
            external_identifier: CBDB:636155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QCae4QmVKB1tWnEM88XXv4
        subject_person_id: p_5qamUc8yEU62UKNwEvAnFU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元春，清人物。籍贯盧氏，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vinWpwKSDfxipxGWTz1RRS
          claim_id: c_QCae4QmVKB1tWnEM88XXv4
          source_id: s_VYLNgn722yHC4XJrJYJD69
          stance: supports
          locator: CBDB:636155
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

# 王元春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元春 | accepted |
| bio.summary | 王元春，清人物。籍贯盧氏，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元春（CBDB 636155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636155&o=json)
