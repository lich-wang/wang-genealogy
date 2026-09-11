---
schema: wang-person/v1
id: p_49EAHPDGUkxDkUqKkX9KJH
status: active
merged_into: null
display_name: 王問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vt2U9QRYz67wiA4hhHM3jp
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D7rhdS7TBBUD9bGZN4UoQR
          claim_id: c_vt2U9QRYz67wiA4hhHM3jp
          source_id: s_fARM7JtUx2oHHqRa82eMDh
          stance: supports
          locator: CBDB:324431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324431）
          source: &a1
            id: s_fARM7JtUx2oHHqRa82eMDh
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 324431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json
            external_identifier: CBDB:324431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wTBdrgMNDAVjw7Yd5Z11Qp
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ES18uaMc6yKdNA-lWpw2p
          claim_id: c_wTBdrgMNDAVjw7Yd5Z11Qp
          source_id: s_fARM7JtUx2oHHqRa82eMDh
          stance: supports
          locator: CBDB:324431
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

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| bio.summary | 王問，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問（CBDB 324431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json)
