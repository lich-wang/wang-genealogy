---
schema: wang-person/v1
id: p_EqARATPgBBrHMxLZoEz1Gp
status: active
merged_into: null
display_name: 王坤亨
cbdb_id: 219264
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y1HrZ4mdqtGZqaS83FXgiv
        subject_person_id: p_EqARATPgBBrHMxLZoEz1Gp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤亨，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219264）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_D-eTeb6QnUtIiLRbU9gclj
          claim_id: c_Y1HrZ4mdqtGZqaS83FXgiv
          source_id: s_ToLF4E48gyS8LRRy7vx8dA
          stance: supports
          locator: CBDB:219264
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ToLF4E48gyS8LRRy7vx8dA
            source_type: api_record
            title: 中国历代人物传记资料库：王坤亨（CBDB 219264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json
            external_identifier: CBDB:219264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8TfTKFsnpiNfz1xdbY6xY
        subject_person_id: p_EqARATPgBBrHMxLZoEz1Gp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JxVYSYvBJtgeGmJBwKMxoE
          claim_id: c_F8TfTKFsnpiNfz1xdbY6xY
          source_id: s_ToLF4E48gyS8LRRy7vx8dA
          stance: supports
          locator: CBDB:219264
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MquGUFVlL-tIQhCvlRrWEx
        subject_person_id: p_dQG6P5Z5ucUGLgZuSEfakq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EqARATPgBBrHMxLZoEz1Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4DtjIYZySsKbjigtPXKdN
          claim_id: c_MquGUFVlL-tIQhCvlRrWEx
          source_id: s_6elau11NqpuOoF9iEfijvF
          stance: supports
          locator: CBDB：兄弟 王乾亨（206520）之父／母 王熙政
          quotation: null
          interpretation_note: 由兄弟关系推断：王坤亨 与 王乾亨 为同胞（CBDB 记「兄」），王乾亨 之父／母即 王坤亨 之父／母。
          source:
            id: s_6elau11NqpuOoF9iEfijvF
            source_type: api_record
            title: 中国历代人物传记资料库：王坤亨（CBDB 219264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json
            external_identifier: CBDB:219264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dQG6P5Z5ucUGLgZuSEfakq
        status: active
        display_name: 王熙政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5I-cBdFuHd17EVUREUe9Gg
        subject_person_id: p_EqARATPgBBrHMxLZoEz1Gp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DKwYQtNoN1SW0Mah8dLwk
          claim_id: c_5I-cBdFuHd17EVUREUe9Gg
          source_id: s_6elau11NqpuOoF9iEfijvF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206520 王乾亨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6elau11NqpuOoF9iEfijvF
            source_type: api_record
            title: 中国历代人物传记资料库：王坤亨（CBDB 219264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json
            external_identifier: CBDB:219264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhrvputkBEQ43wY64CJw5k
        status: active
        display_name: 王乾亨
        merged_into_person_id: null
---

# 王坤亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坤亨，明人物。萬曆八年進士，籍贯代州。（中国历代人物传记资料库 CBDB 219264） | accepted |
| name.primary | 王坤亨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dQG6P5Z5ucUGLgZuSEfakq | 王熙政 | accepted |
| other | p_mhrvputkBEQ43wY64CJw5k | 王乾亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坤亨（CBDB 219264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219264&o=json)
