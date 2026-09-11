---
schema: wang-person/v1
id: p_ueHeesywxTcgCwtXPj5R5X
status: active
merged_into: null
display_name: 王苹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFWeWXpLx2SdwrpyqXKrwo
        subject_person_id: p_ueHeesywxTcgCwtXPj5R5X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vC4oXFAzdZDtuTs1CtsqNm
          claim_id: c_rFWeWXpLx2SdwrpyqXKrwo
          source_id: s_7oxqJKTCTiPB5PHiyi1DiR
          stance: supports
          locator: CBDB:69256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69256）
          source: &a1
            id: s_7oxqJKTCTiPB5PHiyi1DiR
            source_type: api_record
            title: 中国历代人物传记资料库：王苹（CBDB 69256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69256&o=json
            external_identifier: CBDB:69256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aUyNUER5W9FoQ7DANJkGTE
        subject_person_id: p_ueHeesywxTcgCwtXPj5R5X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGSM7VJH4AFbnenz3D4goS
          claim_id: c_aUyNUER5W9FoQ7DANJkGTE
          source_id: s_7oxqJKTCTiPB5PHiyi1DiR
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
        id: c_mCRwuQGFU7xusCB3E8QkLE
        subject_person_id: p_ueHeesywxTcgCwtXPj5R5X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tiA7sC25n5q98jsWQvFck1
          claim_id: c_mCRwuQGFU7xusCB3E8QkLE
          source_id: s_7oxqJKTCTiPB5PHiyi1DiR
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
        id: c_G6mXBPPFQ89wBExKrAb4ia
        subject_person_id: p_ueHeesywxTcgCwtXPj5R5X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苹（1661年—1720年），清人物。明清進士進士，籍贯歷城，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 69256）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0cLNQutF_Yq2qkmzuWbM9p
          claim_id: c_G6mXBPPFQ89wBExKrAb4ia
          source_id: s_7oxqJKTCTiPB5PHiyi1DiR
          stance: supports
          locator: CBDB:69256
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

# 王苹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王苹 | accepted |
| birth.date | 1661年 | accepted |
| death.date | 1720年 | accepted |
| bio.summary | 王苹（1661年—1720年），清人物。明清進士進士，籍贯歷城，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 69256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王苹（CBDB 69256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69256&o=json)
