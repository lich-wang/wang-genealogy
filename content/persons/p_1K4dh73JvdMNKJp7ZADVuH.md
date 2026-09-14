---
schema: wang-person/v1
id: p_1K4dh73JvdMNKJp7ZADVuH
status: active
merged_into: null
display_name: 王婁
cbdb_id: 261845
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ExPh8PUWjwnyPqYXUh5DQ1
        subject_person_id: p_1K4dh73JvdMNKJp7ZADVuH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婁，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QYxBzlCsT40lXuoQ4qhfNv
          claim_id: c_ExPh8PUWjwnyPqYXUh5DQ1
          source_id: s_QnrWbNE8QHQcQQBtforKf5
          stance: supports
          locator: CBDB:261845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QnrWbNE8QHQcQQBtforKf5
            source_type: api_record
            title: 中国历代人物传记资料库：王婁（CBDB 261845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261845&o=json
            external_identifier: CBDB:261845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FFm7BNcM73GFZbLBVFqS6g
        subject_person_id: p_1K4dh73JvdMNKJp7ZADVuH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZyYJdU7LzxHs5x7W1pvwzQ
          claim_id: c_FFm7BNcM73GFZbLBVFqS6g
          source_id: s_QnrWbNE8QHQcQQBtforKf5
          stance: supports
          locator: CBDB:261845
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6mmmh5c3DPlniRQtgqSXRB
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1K4dh73JvdMNKJp7ZADVuH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H9-WzIo6fYc--wiiRZeBhF
          claim_id: c_6mmmh5c3DPlniRQtgqSXRB
          source_id: s_eQcDaIiWh4NQmhCk0G2yBQ
          stance: supports
          locator: CBDB：兄弟 王奎（200714）之父／母 王乾溥
          quotation: null
          interpretation_note: 由兄弟关系推断：王婁 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王婁 之父／母。
          source:
            id: s_eQcDaIiWh4NQmhCk0G2yBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王婁（CBDB 261845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261845&o=json
            external_identifier: CBDB:261845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g6tTV8xspEG83C3EPVzpm7
        status: active
        display_name: 王乾溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Co8UW1GUIHuLVuncEyypQa
        subject_person_id: p_1K4dh73JvdMNKJp7ZADVuH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7J2AYV1LPRBXcKV5LMrG5o
          claim_id: c_Co8UW1GUIHuLVuncEyypQa
          source_id: s_eQcDaIiWh4NQmhCk0G2yBQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200714 王奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eQcDaIiWh4NQmhCk0G2yBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王婁（CBDB 261845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261845&o=json
            external_identifier: CBDB:261845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
---

# 王婁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王婁，明人物。弘治三年進士，籍贯安福。（中国历代人物传记资料库 CBDB 261845） | accepted |
| name.primary | 王婁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g6tTV8xspEG83C3EPVzpm7 | 王乾溥 | accepted |
| other | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王婁（CBDB 261845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261845&o=json)
