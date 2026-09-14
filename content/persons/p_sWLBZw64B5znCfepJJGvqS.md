---
schema: wang-person/v1
id: p_sWLBZw64B5znCfepJJGvqS
status: active
merged_into: null
display_name: 王桂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBF14HrN2Tqo4h7qB1LEuk
        subject_person_id: p_sWLBZw64B5znCfepJJGvqS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FJ3RJqJQitEW72QsShb6kU
          claim_id: c_wBF14HrN2Tqo4h7qB1LEuk
          source_id: s_P9LQLb165zra95SJd9x6gb
          stance: supports
          locator: CBDB:294529
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294529）
          source: &a1
            id: s_P9LQLb165zra95SJd9x6gb
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 294529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json
            external_identifier: CBDB:294529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FT45iobwAGMqa7mhx5QFk9
        subject_person_id: p_sWLBZw64B5znCfepJJGvqS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QMT_4jsbqrlO0ptz5N_-Pv
          claim_id: c_FT45iobwAGMqa7mhx5QFk9
          source_id: s_P9LQLb165zra95SJd9x6gb
          stance: supports
          locator: CBDB:294529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pmq8O4DRcQGYCn-EaqonbJ
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sWLBZw64B5znCfepJJGvqS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L5ns58YpkFZknCcpHE1jwK
          claim_id: c_pmq8O4DRcQGYCn-EaqonbJ
          source_id: s_hY1ZnLwCvGF4jClfN6oanU
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王桂 与 王梅 为同胞（CBDB 记「弟」），王梅 之父／母即 王桂 之父／母。
          source:
            id: s_hY1ZnLwCvGF4jClfN6oanU
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 294529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json
            external_identifier: CBDB:294529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5oVCjNf3jZsLG4jhJ57YhB
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NpgxQNEZ8AYBDYqCcoeEPd
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sWLBZw64B5znCfepJJGvqS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3g4rtptQYEpnQ3OKNNBYJ
          claim_id: c_NpgxQNEZ8AYBDYqCcoeEPd
          source_id: s_hY1ZnLwCvGF4jClfN6oanU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hY1ZnLwCvGF4jClfN6oanU
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 294529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json
            external_identifier: CBDB:294529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e7c3DhdEJw2765tvQyZA4M
        status: active
        display_name: 王梅
        merged_into_person_id: null
---

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | 王桂，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294529） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5oVCjNf3jZsLG4jhJ57YhB | 王鸞 | accepted |
| other | p_e7c3DhdEJw2765tvQyZA4M | 王梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 294529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294529&o=json)
