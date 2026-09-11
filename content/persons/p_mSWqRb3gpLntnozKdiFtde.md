---
schema: wang-person/v1
id: p_mSWqRb3gpLntnozKdiFtde
status: active
merged_into: null
display_name: 王台輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2rqEaQj8MCQS4DSRsTz26
        subject_person_id: p_mSWqRb3gpLntnozKdiFtde
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王台輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oQDVPDwLvL959DXD25LPr7
          claim_id: c_T2rqEaQj8MCQS4DSRsTz26
          source_id: s_2RVSzj9N7YyJBcucYALpcZ
          stance: supports
          locator: CBDB:462360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462360）
          source: &a1
            id: s_2RVSzj9N7YyJBcucYALpcZ
            source_type: api_record
            title: 中国历代人物传记资料库：王台輔（CBDB 462360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462360&o=json
            external_identifier: CBDB:462360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mP6nXThZtj8reVRS75Unqe
        subject_person_id: p_mSWqRb3gpLntnozKdiFtde
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王台輔，清人物。曾任守備。（中国历代人物传记资料库 CBDB 462360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iNt2W2mYrr5vdVZPqzFKxM
          claim_id: c_mP6nXThZtj8reVRS75Unqe
          source_id: s_2RVSzj9N7YyJBcucYALpcZ
          stance: supports
          locator: CBDB:462360
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

# 王台輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王台輔 | accepted |
| bio.summary | 王台輔，清人物。曾任守備。（中国历代人物传记资料库 CBDB 462360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王台輔（CBDB 462360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462360&o=json)
