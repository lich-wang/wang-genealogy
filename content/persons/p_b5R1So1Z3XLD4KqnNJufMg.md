---
schema: wang-person/v1
id: p_b5R1So1Z3XLD4KqnNJufMg
status: active
merged_into: null
display_name: 王悅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hmgqQQBTnu4z6Mb7U5M1D3
        subject_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XGjRAwuF8UNwVDLG2Jeq4H
          claim_id: c_hmgqQQBTnu4z6Mb7U5M1D3
          source_id: s_gkpF29M2yFHEnWt6f6Ce9i
          stance: supports
          locator: CBDB:25789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25789）
          source: &a1
            id: s_gkpF29M2yFHEnWt6f6Ce9i
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 25789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json
            external_identifier: CBDB:25789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8NLsk5sRGgAztGwFPW3BRq
        subject_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25789）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qDJfXcOD4opCELYQc-p-bN
          claim_id: c_8NLsk5sRGgAztGwFPW3BRq
          source_id: s_gkpF29M2yFHEnWt6f6Ce9i
          stance: supports
          locator: CBDB:25789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UUgxos4vnS_7BBhKBOz-Nj
        subject_person_id: p_7G76GCQV5KHCuJQ8PFFbQR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5R1So1Z3XLD4KqnNJufMg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aKGUcE5iedSRjLkkMyMXsb
          claim_id: c_UUgxos4vnS_7BBhKBOz-Nj
          source_id: s_UFPQr6bYVtt6PlCkzP0qqS
          stance: supports
          locator: CBDB 亲属：父（KinPerson 25788）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFPQr6bYVtt6PlCkzP0qqS
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 25789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json
            external_identifier: CBDB:25789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7G76GCQV5KHCuJQ8PFFbQR
        status: active
        display_name: 王導
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悅 | accepted |
| bio.summary | 王悅，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7G76GCQV5KHCuJQ8PFFbQR | 王導 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悅（CBDB 25789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25789&o=json)
