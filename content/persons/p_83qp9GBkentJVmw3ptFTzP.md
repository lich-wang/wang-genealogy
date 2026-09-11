---
schema: wang-person/v1
id: p_83qp9GBkentJVmw3ptFTzP
status: active
merged_into: null
display_name: 王宗瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p57B5NmSZPhgK4FPiFVonr
        subject_person_id: p_83qp9GBkentJVmw3ptFTzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KJBJmmXapQBxBhXYkJmSDs
          claim_id: c_p57B5NmSZPhgK4FPiFVonr
          source_id: s_A667v8tSP9BVuJ14KG68zV
          stance: supports
          locator: CBDB:383685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383685）
          source: &a1
            id: s_A667v8tSP9BVuJ14KG68zV
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑤（CBDB 383685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383685&o=json
            external_identifier: CBDB:383685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BjpN4kuPgzEwAPDsTXUcCA
        subject_person_id: p_83qp9GBkentJVmw3ptFTzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EDkMZ7wMD9JJk5jXEM6GaW
          claim_id: c_BjpN4kuPgzEwAPDsTXUcCA
          source_id: s_A667v8tSP9BVuJ14KG68zV
          stance: supports
          locator: CBDB:383685
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

# 王宗瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗瑤 | accepted |
| bio.summary | 王宗瑤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗瑤（CBDB 383685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383685&o=json)
