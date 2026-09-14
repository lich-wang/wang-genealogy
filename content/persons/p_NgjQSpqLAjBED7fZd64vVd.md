---
schema: wang-person/v1
id: p_NgjQSpqLAjBED7fZd64vVd
status: active
merged_into: null
display_name: 王倬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FDfmK4zZM8z3ej9eQGHPA
        subject_person_id: p_NgjQSpqLAjBED7fZd64vVd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kbycsQydEV3WA9JFjR5zof
          claim_id: c_9FDfmK4zZM8z3ej9eQGHPA
          source_id: s_4hN8L3AiqT2psF7dWt8cTg
          stance: supports
          locator: CBDB:244032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244032）
          source: &a1
            id: s_4hN8L3AiqT2psF7dWt8cTg
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 244032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json
            external_identifier: CBDB:244032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gnhNMSs1emzvbscQ5CcrCS
        subject_person_id: p_NgjQSpqLAjBED7fZd64vVd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YdBGCQ0o6YlDZPpr4f0Sdu
          claim_id: c_gnhNMSs1emzvbscQ5CcrCS
          source_id: s_4hN8L3AiqT2psF7dWt8cTg
          stance: supports
          locator: CBDB:244032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vggMna7dMOrYNe_3g8e29h
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NgjQSpqLAjBED7fZd64vVd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7r01izcmYhpPUKJyfgiH8
          claim_id: c_vggMna7dMOrYNe_3g8e29h
          source_id: s_L_6wUw31k5w1_Qrdafk7jO
          stance: supports
          locator: CBDB：兄弟 王儼（126889）之父／母 王致中
          quotation: null
          interpretation_note: 由兄弟关系推断：王倬 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王倬 之父／母。
          source:
            id: s_L_6wUw31k5w1_Qrdafk7jO
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 244032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json
            external_identifier: CBDB:244032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1G549N2d23KvV8NGLNV5ym
        status: active
        display_name: 王致中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YeOnifyTyo6rvPVnrfqfdd
        subject_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NgjQSpqLAjBED7fZd64vVd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_8okwKpYFznYjsym5DcpU
          claim_id: c_YeOnifyTyo6rvPVnrfqfdd
          source_id: s_L_6wUw31k5w1_Qrdafk7jO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126889 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L_6wUw31k5w1_Qrdafk7jO
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 244032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json
            external_identifier: CBDB:244032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8P5PCH5aTQeZpUfSAM9z5q
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬 | accepted |
| bio.summary | 王倬，明人物。成化五年進士，籍贯華容。（中国历代人物传记资料库 CBDB 244032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1G549N2d23KvV8NGLNV5ym | 王致中 | accepted |
| other | p_8P5PCH5aTQeZpUfSAM9z5q | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倬（CBDB 244032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244032&o=json)
