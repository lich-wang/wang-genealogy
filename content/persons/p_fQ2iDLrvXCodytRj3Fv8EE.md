---
schema: wang-person/v1
id: p_fQ2iDLrvXCodytRj3Fv8EE
status: active
merged_into: null
display_name: 王師
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GDhLEjjSpBkv1Hk5P9WHK4
        subject_person_id: p_fQ2iDLrvXCodytRj3Fv8EE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wXwjyqDExzTRPK54Mxs8nE
          claim_id: c_GDhLEjjSpBkv1Hk5P9WHK4
          source_id: s_DwDJxhYtMuDb6Kqx4wck33
          stance: supports
          locator: CBDB:215744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215744）
          source: &a1
            id: s_DwDJxhYtMuDb6Kqx4wck33
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 215744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json
            external_identifier: CBDB:215744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtGEMArnLcjFScdUNyu4LE
        subject_person_id: p_fQ2iDLrvXCodytRj3Fv8EE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215744）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u2Z0UnZ6hg2nZ5lB0K-Eme
          claim_id: c_GtGEMArnLcjFScdUNyu4LE
          source_id: s_DwDJxhYtMuDb6Kqx4wck33
          stance: supports
          locator: CBDB:215744
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

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| bio.summary | 王師，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 215744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json)
