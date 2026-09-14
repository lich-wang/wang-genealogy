---
schema: wang-person/v1
id: p_fD7qPwbvZ6FE66Ydz4AFyX
status: active
merged_into: null
display_name: 王秀孫
cbdb_id: 232804
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hadSk7wLnz41fPPkDzGMd8
        subject_person_id: p_fD7qPwbvZ6FE66Ydz4AFyX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀孫，明人物。籍贯安福。（中国历代人物传记资料库 CBDB 232804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_njMKY9YvvT1tIIv7o1sk-a
          claim_id: c_hadSk7wLnz41fPPkDzGMd8
          source_id: s_gdE5NrDPUjvjt2itrt8KHy
          stance: supports
          locator: CBDB:232804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gdE5NrDPUjvjt2itrt8KHy
            source_type: api_record
            title: 中国历代人物传记资料库：王秀孫（CBDB 232804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232804&o=json
            external_identifier: CBDB:232804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngudauyHTq9vipDiRbQrog
        subject_person_id: p_fD7qPwbvZ6FE66Ydz4AFyX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mk2y6ebdg5TkLf43K5UHQw
          claim_id: c_ngudauyHTq9vipDiRbQrog
          source_id: s_gdE5NrDPUjvjt2itrt8KHy
          stance: supports
          locator: CBDB:232804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dDV0KK-Ng9rEqJcVK58UU5
        subject_person_id: p_CoUh8uj5CWroLH246QDHok
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fD7qPwbvZ6FE66Ydz4AFyX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FG5UC9hhdcHoquYCuVMTTL
          claim_id: c_dDV0KK-Ng9rEqJcVK58UU5
          source_id: s_w-ZGv4yw3z96yNdB1WD1kI
          stance: supports
          locator: CBDB：兄弟 王湯孫（207629）之父／母 王而縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王秀孫 与 王湯孫 为同胞（CBDB 记「兄」），王湯孫 之父／母即 王秀孫 之父／母。
          source:
            id: s_w-ZGv4yw3z96yNdB1WD1kI
            source_type: api_record
            title: 中国历代人物传记资料库：王秀孫（CBDB 232804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232804&o=json
            external_identifier: CBDB:232804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CoUh8uj5CWroLH246QDHok
        status: active
        display_name: 王而縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fITHCqcp2AsE2hXrniQfG3
        subject_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fD7qPwbvZ6FE66Ydz4AFyX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iU1XFqweSPzbfv5lQ1b-Xv
          claim_id: c_fITHCqcp2AsE2hXrniQfG3
          source_id: s_w-ZGv4yw3z96yNdB1WD1kI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207629 王湯孫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w-ZGv4yw3z96yNdB1WD1kI
            source_type: api_record
            title: 中国历代人物传记资料库：王秀孫（CBDB 232804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232804&o=json
            external_identifier: CBDB:232804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DvVKW3AUxK5cCLW8rtgfB4
        status: active
        display_name: 王湯孫
        merged_into_person_id: null
---

# 王秀孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秀孫，明人物。籍贯安福。（中国历代人物传记资料库 CBDB 232804） | accepted |
| name.primary | 王秀孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CoUh8uj5CWroLH246QDHok | 王而縉 | accepted |
| other | p_DvVKW3AUxK5cCLW8rtgfB4 | 王湯孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秀孫（CBDB 232804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232804&o=json)
