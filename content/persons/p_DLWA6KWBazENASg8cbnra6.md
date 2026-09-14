---
schema: wang-person/v1
id: p_DLWA6KWBazENASg8cbnra6
status: active
merged_into: null
display_name: 王徽謨
cbdb_id: 325300
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ng5zkcTMw5FejEN7Ra9xkr
        subject_person_id: p_DLWA6KWBazENASg8cbnra6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽謨，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325300）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_x54BLIXBYnUHM0t8YEPcBB
          claim_id: c_ng5zkcTMw5FejEN7Ra9xkr
          source_id: s_za1ES2UbV7u8xDZjoGugUq
          stance: supports
          locator: CBDB:325300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_za1ES2UbV7u8xDZjoGugUq
            source_type: api_record
            title: 中国历代人物传记资料库：王徽謨（CBDB 325300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json
            external_identifier: CBDB:325300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NisRxhCNLv3b6WB3FyBVn6
        subject_person_id: p_DLWA6KWBazENASg8cbnra6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_o9oL8rZUGGw53Ja4DNUgv5
          claim_id: c_NisRxhCNLv3b6WB3FyBVn6
          source_id: s_za1ES2UbV7u8xDZjoGugUq
          stance: supports
          locator: CBDB:325300
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e0TV4JszV8Xm63TuWOKfbn
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DLWA6KWBazENASg8cbnra6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_al80k6ZDpkGMYZvZDh9O1Z
          claim_id: c_e0TV4JszV8Xm63TuWOKfbn
          source_id: s_6Ku9nWZjMtsmuII5894L_X
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽謨 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽謨 之父／母。
          source:
            id: s_6Ku9nWZjMtsmuII5894L_X
            source_type: api_record
            title: 中国历代人物传记资料库：王徽謨（CBDB 325300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json
            external_identifier: CBDB:325300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v2Fkat16mGPQiTSwTrQAp8
        status: active
        display_name: 王宦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uXTB7K5QFKb5bnMwNjlA3L
        subject_person_id: p_DLWA6KWBazENASg8cbnra6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VgGXCv1Zf7vfOulD25cGim
          claim_id: c_uXTB7K5QFKb5bnMwNjlA3L
          source_id: s_6Ku9nWZjMtsmuII5894L_X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204879 王徽猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6Ku9nWZjMtsmuII5894L_X
            source_type: api_record
            title: 中国历代人物传记资料库：王徽謨（CBDB 325300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json
            external_identifier: CBDB:325300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N1zXfVAzsHV9UYAEDLb5C7
        status: active
        display_name: 王徽猷
        merged_into_person_id: null
---

# 王徽謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徽謨，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325300） | accepted |
| name.primary | 王徽謨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v2Fkat16mGPQiTSwTrQAp8 | 王宦 | accepted |
| other | p_N1zXfVAzsHV9UYAEDLb5C7 | 王徽猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽謨（CBDB 325300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json)
