---
schema: wang-person/v1
id: p_ZLbtvRZbm7sAMbjurg6W9G
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZ6HyFW8J328kmDfTr7mnv
        subject_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqPaWdFPv38G2To5nF8Lmi
          claim_id: c_MZ6HyFW8J328kmDfTr7mnv
          source_id: s_dQtBLnPiCZ6S5MLZwmbVNr
          stance: supports
          locator: CBDB:249822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249822）
          source: &a1
            id: s_dQtBLnPiCZ6S5MLZwmbVNr
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 249822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json
            external_identifier: CBDB:249822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LPNCiEWUfHe43XHNuRw2fZ
        subject_person_id: p_ZLbtvRZbm7sAMbjurg6W9G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。成化十一年進士，籍贯汲縣，入仕監生。（中国历代人物传记资料库 CBDB 249822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eotKOWN6C_7hZzZ07cWE7Z
          claim_id: c_LPNCiEWUfHe43XHNuRw2fZ
          source_id: s_dQtBLnPiCZ6S5MLZwmbVNr
          stance: supports
          locator: CBDB:249822
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。成化十一年進士，籍贯汲縣，入仕監生。（中国历代人物传记资料库 CBDB 249822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 249822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249822&o=json)
