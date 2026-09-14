---
schema: wang-person/v1
id: p_LzpJgrnCCiXQt5bvLnBDbB
status: active
merged_into: null
display_name: 王象復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ip5sz1N3u5hX3NitDbKQ6Z
        subject_person_id: p_LzpJgrnCCiXQt5bvLnBDbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VEBFb7qnsk4QPEErnbLvex
          claim_id: c_ip5sz1N3u5hX3NitDbKQ6Z
          source_id: s_3GseJivxs9u7c5D1BKXCov
          stance: supports
          locator: CBDB:235534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235534）
          source: &a1
            id: s_3GseJivxs9u7c5D1BKXCov
            source_type: api_record
            title: 中国历代人物传记资料库：王象復（CBDB 235534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json
            external_identifier: CBDB:235534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qUi8NuoeD9DyWAB291JCf4
        subject_person_id: p_LzpJgrnCCiXQt5bvLnBDbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象復，明人物。籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 235534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_flt4bKmHYqRDtYKfZ2DCrH
          claim_id: c_qUi8NuoeD9DyWAB291JCf4
          source_id: s_3GseJivxs9u7c5D1BKXCov
          stance: supports
          locator: CBDB:235534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_idTTQIRzgwmJmF2SpqnGwm
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LzpJgrnCCiXQt5bvLnBDbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YShGPmn46bZSF2isjMWx2
          claim_id: c_idTTQIRzgwmJmF2SpqnGwm
          source_id: s_X3-Dy2UtqFkyJb29nYXnWH
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象復 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象復 之父／母。
          source:
            id: s_X3-Dy2UtqFkyJb29nYXnWH
            source_type: api_record
            title: 中国历代人物传记资料库：王象復（CBDB 235534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json
            external_identifier: CBDB:235534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_28-8dmb9AvYAE6IjOa6sBF
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LzpJgrnCCiXQt5bvLnBDbB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQoHyV1dfyQ6dTxxwc5Mtu
          claim_id: c_28-8dmb9AvYAE6IjOa6sBF
          source_id: s_X3-Dy2UtqFkyJb29nYXnWH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X3-Dy2UtqFkyJb29nYXnWH
            source_type: api_record
            title: 中国历代人物传记资料库：王象復（CBDB 235534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json
            external_identifier: CBDB:235534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象復 | accepted |
| bio.summary | 王象復，明人物。籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 235534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象復（CBDB 235534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235534&o=json)
