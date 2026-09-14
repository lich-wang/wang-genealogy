---
schema: wang-person/v1
id: p_33j9uQiGD4MQDenFMrKYdL
status: active
merged_into: null
display_name: 王瑬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a9QFBNTicGjFxS2EKq7EZz
        subject_person_id: p_33j9uQiGD4MQDenFMrKYdL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bqD8nBjtp3kEG2sU4oBDUc
          claim_id: c_a9QFBNTicGjFxS2EKq7EZz
          source_id: s_q5p4kJsvumbQd8m2N59Nb1
          stance: supports
          locator: CBDB:268923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268923）
          source: &a1
            id: s_q5p4kJsvumbQd8m2N59Nb1
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 268923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json
            external_identifier: CBDB:268923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_akwNEfGNKYbZKeF5uHv3wR
        subject_person_id: p_33j9uQiGD4MQDenFMrKYdL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑬，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PDAhNwh3KdoceaR7MWOBy3
          claim_id: c_akwNEfGNKYbZKeF5uHv3wR
          source_id: s_q5p4kJsvumbQd8m2N59Nb1
          stance: supports
          locator: CBDB:268923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ujQqEc6EXMblsXRZvJ23iJ
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33j9uQiGD4MQDenFMrKYdL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wK5WQ6cfh3s-303gOaXZap
          claim_id: c_ujQqEc6EXMblsXRZvJ23iJ
          source_id: s_P-RJEFC2lRPdlPA_mgnOMZ
          stance: supports
          locator: CBDB：兄弟 王璽（201213）之父／母 王萬悅
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑬 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑬 之父／母。
          source:
            id: s_P-RJEFC2lRPdlPA_mgnOMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 268923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json
            external_identifier: CBDB:268923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uFwD6xBc7pcKYRU4SJgBny
        status: active
        display_name: 王萬悅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CALKQ4QyAIvaqH4f-uYEjL
        subject_person_id: p_33j9uQiGD4MQDenFMrKYdL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tinSGHVqltgFcUKn7lXEmz
          claim_id: c_CALKQ4QyAIvaqH4f-uYEjL
          source_id: s_P-RJEFC2lRPdlPA_mgnOMZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201213 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P-RJEFC2lRPdlPA_mgnOMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 268923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json
            external_identifier: CBDB:268923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王瑬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑬 | accepted |
| bio.summary | 王瑬，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uFwD6xBc7pcKYRU4SJgBny | 王萬悅 | accepted |
| other | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑬（CBDB 268923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json)
