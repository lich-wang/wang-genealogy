---
schema: wang-person/v1
id: p_L6e8HB8GohB5NJoBPANcAy
status: active
merged_into: null
display_name: 王墀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17FbGbo5heNiSfsDMjFW77
        subject_person_id: p_L6e8HB8GohB5NJoBPANcAy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JENw2VhYZaJp1q9jt1LtPE
          claim_id: c_17FbGbo5heNiSfsDMjFW77
          source_id: s_ZiQDomnJv1xyB1CBUyU5A9
          stance: supports
          locator: CBDB:331803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331803）
          source: &a1
            id: s_ZiQDomnJv1xyB1CBUyU5A9
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 331803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json
            external_identifier: CBDB:331803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tdy6d7VygBaC9V7CaFhHVA
        subject_person_id: p_L6e8HB8GohB5NJoBPANcAy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀，明人物。嘉靖四十四年進士，籍贯嘉定。（中国历代人物传记资料库 CBDB 331803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O_MGqdrhr5dG37FxWB7akE
          claim_id: c_Tdy6d7VygBaC9V7CaFhHVA
          source_id: s_ZiQDomnJv1xyB1CBUyU5A9
          stance: supports
          locator: CBDB:331803
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

# 王墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墀 | accepted |
| bio.summary | 王墀，明人物。嘉靖四十四年進士，籍贯嘉定。（中国历代人物传记资料库 CBDB 331803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墀（CBDB 331803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json)
