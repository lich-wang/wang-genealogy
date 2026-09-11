---
schema: wang-person/v1
id: p_GUXmkwDBkur4RF4gGGX8X2
status: active
merged_into: null
display_name: 王文勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XaMGWkfCewBkmU7CAmTu28
        subject_person_id: p_GUXmkwDBkur4RF4gGGX8X2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPPqpxc2rx1LjCT5wssvHy
          claim_id: c_XaMGWkfCewBkmU7CAmTu28
          source_id: s_8oCWhR7w3GiUS8JXkXz6sr
          stance: supports
          locator: CBDB:638216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638216）
          source: &a1
            id: s_8oCWhR7w3GiUS8JXkXz6sr
            source_type: api_record
            title: 中国历代人物传记资料库：王文勲（CBDB 638216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638216&o=json
            external_identifier: CBDB:638216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8noJBCzio78u7Sm3Bo714
        subject_person_id: p_GUXmkwDBkur4RF4gGGX8X2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文勲，清人物。籍贯咸寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NL7VNnYu3idIAChRRwDGOk
          claim_id: c_t8noJBCzio78u7Sm3Bo714
          source_id: s_8oCWhR7w3GiUS8JXkXz6sr
          stance: supports
          locator: CBDB:638216
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

# 王文勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文勲 | accepted |
| bio.summary | 王文勲，清人物。籍贯咸寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638216） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文勲（CBDB 638216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638216&o=json)
