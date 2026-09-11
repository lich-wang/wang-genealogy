---
schema: wang-person/v1
id: p_ur46QXiCVMeiJZMKuLBCqg
status: active
merged_into: null
display_name: 王敦敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c44SgUKHRL65UquEYpzDzS
        subject_person_id: p_ur46QXiCVMeiJZMKuLBCqg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V278XcAqEB65rVEnhinh3C
          claim_id: c_c44SgUKHRL65UquEYpzDzS
          source_id: s_tJVWfeP7H8C22rYkUxK5pL
          stance: supports
          locator: CBDB:692338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692338）
          source: &a1
            id: s_tJVWfeP7H8C22rYkUxK5pL
            source_type: api_record
            title: 中国历代人物传记资料库：王敦敬（CBDB 692338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692338&o=json
            external_identifier: CBDB:692338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEAnSGSAKHZNYc7CpjvFd9
        subject_person_id: p_ur46QXiCVMeiJZMKuLBCqg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦敬，明人物。籍贯黟縣，身份为書法家、不求仕。（中国历代人物传记资料库 CBDB 692338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AQbJ3iFGO_OTqjObVtqOWR
          claim_id: c_KEAnSGSAKHZNYc7CpjvFd9
          source_id: s_tJVWfeP7H8C22rYkUxK5pL
          stance: supports
          locator: CBDB:692338
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

# 王敦敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦敬 | accepted |
| bio.summary | 王敦敬，明人物。籍贯黟縣，身份为書法家、不求仕。（中国历代人物传记资料库 CBDB 692338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦敬（CBDB 692338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692338&o=json)
