---
schema: wang-person/v1
id: p_dDTf6ZBEvQU9wGCyMFhaRm
status: active
merged_into: null
display_name: 王朝用
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J55XEJzo8MXKSDtiVAmGJZ
        subject_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JW1YrzB6GtYGkaFR1AGx56
          claim_id: c_J55XEJzo8MXKSDtiVAmGJZ
          source_id: s_isJK8J4qaGEhbi5PBfi6Qv
          stance: supports
          locator: CBDB:317783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317783）
          source: &a1
            id: s_isJK8J4qaGEhbi5PBfi6Qv
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 317783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json
            external_identifier: CBDB:317783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YXhfCYm7KPpjxrG6cnvJtp
        subject_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vDkqnk4cgnm4YkeyaMcO9c
          claim_id: c_YXhfCYm7KPpjxrG6cnvJtp
          source_id: s_isJK8J4qaGEhbi5PBfi6Qv
          stance: supports
          locator: CBDB:317783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NNhO8raML-MXjh8KuvIVg5
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Ul40py2Mlr6QWc-hbRSoC
          claim_id: c_NNhO8raML-MXjh8KuvIVg5
          source_id: s_2bSifL1mxPaoUNlWyxDVjq
          stance: supports
          locator: CBDB：兄弟 王宮用（204347）之父／母 王隆
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝用 与 王宮用 为同胞（CBDB 记「弟」），王宮用 之父／母即 王朝用 之父／母。
          source:
            id: s_2bSifL1mxPaoUNlWyxDVjq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 317783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json
            external_identifier: CBDB:317783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gv3jP8cXzjr19Yf1aibXF5
        status: active
        display_name: 王隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jp2xKZ1F3vgSgdW9X9YMvp
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXPOYMZd-wDE73xIRyp0Kh
          claim_id: c_jp2xKZ1F3vgSgdW9X9YMvp
          source_id: s_2bSifL1mxPaoUNlWyxDVjq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204347 王宮用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2bSifL1mxPaoUNlWyxDVjq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 317783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json
            external_identifier: CBDB:317783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6CiKvYHdk4eY1idbKnmk1W
        status: active
        display_name: 王宮用
        merged_into_person_id: null
---

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝用 | accepted |
| bio.summary | 王朝用，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gv3jP8cXzjr19Yf1aibXF5 | 王隆 | accepted |
| other | p_6CiKvYHdk4eY1idbKnmk1W | 王宮用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝用（CBDB 317783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json)
