---
schema: wang-person/v1
id: p_yyiyAguSX9Bdj5jRWXCN2T
status: active
merged_into: null
display_name: 王啟耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPTFRZBHe8kmUFVYRc5yi8
        subject_person_id: p_yyiyAguSX9Bdj5jRWXCN2T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tgDwKCTERaBdG8sofGjdXM
          claim_id: c_gPTFRZBHe8kmUFVYRc5yi8
          source_id: s_Lmj8HiUu1JM9eFMRNypm4n
          stance: supports
          locator: CBDB:636560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636560）
          source: &a1
            id: s_Lmj8HiUu1JM9eFMRNypm4n
            source_type: api_record
            title: 中国历代人物传记资料库：王啟耀（CBDB 636560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636560&o=json
            external_identifier: CBDB:636560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7DTUKPijhAjHdYi8pkNRoi
        subject_person_id: p_yyiyAguSX9Bdj5jRWXCN2T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRd3PWUmAYbGc71PS7Xn5N
          claim_id: c_7DTUKPijhAjHdYi8pkNRoi
          source_id: s_Lmj8HiUu1JM9eFMRNypm4n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王啟耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟耀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟耀（CBDB 636560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636560&o=json)
