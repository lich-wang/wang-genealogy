---
schema: wang-person/v1
id: p_dW3m768TfqRBE8QThXUJDP
status: active
merged_into: null
display_name: 王崇道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ndyc6LnQ7MA1NYGgk3qFLK
        subject_person_id: p_dW3m768TfqRBE8QThXUJDP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgEsA31hj3Nnh39SrL8Yog
          claim_id: c_Ndyc6LnQ7MA1NYGgk3qFLK
          source_id: s_8xjMCxdyeP57j5S3bATJPJ
          stance: supports
          locator: CBDB:302975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302975）
          source: &a1
            id: s_8xjMCxdyeP57j5S3bATJPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 302975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json
            external_identifier: CBDB:302975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o64EQjtBw2dFv9Yz1Qirxp
        subject_person_id: p_dW3m768TfqRBE8QThXUJDP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇道，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SBuC8-v8AtJi6CUU-IwHv7
          claim_id: c_o64EQjtBw2dFv9Yz1Qirxp
          source_id: s_8xjMCxdyeP57j5S3bATJPJ
          stance: supports
          locator: CBDB:302975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0B0qmWu66pdZKsOwJ3kbpX
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_dW3m768TfqRBE8QThXUJDP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kclb6Q9DTlmZ1OTEKKU1jE
          claim_id: c_0B0qmWu66pdZKsOwJ3kbpX
          source_id: s_b2WfhldqjJ93Atgw3SbY2y
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇道 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇道 之父／母。
          source:
            id: s_b2WfhldqjJ93Atgw3SbY2y
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 302975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json
            external_identifier: CBDB:302975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YCdG7XtqNcYaExuN76xqKv
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jAeXHaqfGmkjbsS2at_ShT
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dW3m768TfqRBE8QThXUJDP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhvh5mS08NfT0aClo3jkSt
          claim_id: c_jAeXHaqfGmkjbsS2at_ShT
          source_id: s_b2WfhldqjJ93Atgw3SbY2y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124981 王崇古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b2WfhldqjJ93Atgw3SbY2y
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 302975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json
            external_identifier: CBDB:302975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
---

# 王崇道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇道 | accepted |
| bio.summary | 王崇道，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YCdG7XtqNcYaExuN76xqKv | 王瑶 | accepted |
| other | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇道（CBDB 302975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json)
