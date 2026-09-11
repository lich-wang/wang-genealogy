---
schema: wang-person/v1
id: p_rhxJkneEWB8jm8b59umBtT
status: active
merged_into: null
display_name: 王珦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qaZxcAW2jRUV4VS4JBkJzJ
        subject_person_id: p_rhxJkneEWB8jm8b59umBtT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DGeJWCj8L3XUL6iLqgjmVf
          claim_id: c_qaZxcAW2jRUV4VS4JBkJzJ
          source_id: s_sAjAXXPCeoajrVZS96JzpM
          stance: supports
          locator: CBDB:260248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260248）
          source: &a1
            id: s_sAjAXXPCeoajrVZS96JzpM
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 260248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json
            external_identifier: CBDB:260248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mo3k7SD2gN98ErqoJLBHDV
        subject_person_id: p_rhxJkneEWB8jm8b59umBtT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hecOor25NA-IZKVvqKXa46
          claim_id: c_mo3k7SD2gN98ErqoJLBHDV
          source_id: s_sAjAXXPCeoajrVZS96JzpM
          stance: supports
          locator: CBDB:260248
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

# 王珦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珦 | accepted |
| bio.summary | 王珦，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珦（CBDB 260248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json)
