---
schema: wang-person/v1
id: p_V4cPe3wdHPVVWF4J2k59kg
status: active
merged_into: null
display_name: 王翔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yd91isjgVquBrw1PupHQFp
        subject_person_id: p_V4cPe3wdHPVVWF4J2k59kg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rSEVQWjfDq362AGnyudjfa
          claim_id: c_Yd91isjgVquBrw1PupHQFp
          source_id: s_1Pj65aWzZUjxPucjsCgF4Q
          stance: supports
          locator: CBDB:38975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38975）
          source: &a1
            id: s_1Pj65aWzZUjxPucjsCgF4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 38975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38975&o=json
            external_identifier: CBDB:38975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HBshFs7jtxAeHPb9JF75gQ
        subject_person_id: p_V4cPe3wdHPVVWF4J2k59kg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dK9j2AuUiBLLqoohSYwASj
          claim_id: c_HBshFs7jtxAeHPb9JF75gQ
          source_id: s_1Pj65aWzZUjxPucjsCgF4Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ogbK_tuvKJcc07zqqoRoav
        subject_person_id: p_hANSDqgWKp6VdhqKbAfD2Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V4cPe3wdHPVVWF4J2k59kg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFySCBS351hB9uezXmMqsW
          claim_id: c_ogbK_tuvKJcc07zqqoRoav
          source_id: s_DCrHhwB9f5z3MvbM6d965Q
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DCrHhwB9f5z3MvbM6d965Q
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 38970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38970&o=json
            external_identifier: CBDB:38970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hANSDqgWKp6VdhqKbAfD2Q
        status: active
        display_name: 王宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hANSDqgWKp6VdhqKbAfD2Q | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 38970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38970&o=json)
- [中国历代人物传记资料库：王翔（CBDB 38975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38975&o=json)
