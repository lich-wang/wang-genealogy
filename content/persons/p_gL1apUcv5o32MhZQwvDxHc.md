---
schema: wang-person/v1
id: p_gL1apUcv5o32MhZQwvDxHc
status: active
merged_into: null
display_name: 王晉元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4VFcYhsLXLFCP6kAByPpJb
        subject_person_id: p_gL1apUcv5o32MhZQwvDxHc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3SQicf5UnFdnjAjMCB1Sg6
          claim_id: c_4VFcYhsLXLFCP6kAByPpJb
          source_id: s_m5rp9YjD4YKw4HEXcH3hQp
          stance: supports
          locator: CBDB:638462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638462）
          source: &a1
            id: s_m5rp9YjD4YKw4HEXcH3hQp
            source_type: api_record
            title: 中国历代人物传记资料库：王晉元（CBDB 638462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638462&o=json
            external_identifier: CBDB:638462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dAMwstBrL8L86XWBwNUji8
        subject_person_id: p_gL1apUcv5o32MhZQwvDxHc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉元，清人物。籍贯山西省，入仕進士，曾任郎中。（中国历代人物传记资料库 CBDB 638462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_geqjnJOsFIDDvhswU8yv-n
          claim_id: c_dAMwstBrL8L86XWBwNUji8
          source_id: s_m5rp9YjD4YKw4HEXcH3hQp
          stance: supports
          locator: CBDB:638462
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

# 王晉元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉元 | accepted |
| bio.summary | 王晉元，清人物。籍贯山西省，入仕進士，曾任郎中。（中国历代人物传记资料库 CBDB 638462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉元（CBDB 638462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638462&o=json)
