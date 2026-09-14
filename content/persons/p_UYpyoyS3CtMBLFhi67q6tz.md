---
schema: wang-person/v1
id: p_UYpyoyS3CtMBLFhi67q6tz
status: active
merged_into: null
display_name: 王溱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNn5y6HcFMG4S5PCoMFvg4
        subject_person_id: p_UYpyoyS3CtMBLFhi67q6tz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ARbmAQw9C2C91YV8nekhHa
          claim_id: c_tNn5y6HcFMG4S5PCoMFvg4
          source_id: s_eioXnqnBXXaNkB2ysFrprm
          stance: supports
          locator: CBDB:260081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260081）
          source: &a1
            id: s_eioXnqnBXXaNkB2ysFrprm
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 260081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json
            external_identifier: CBDB:260081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qz7QXJ1eY7MxAMN8HEKVij
        subject_person_id: p_UYpyoyS3CtMBLFhi67q6tz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溱，明人物。成化二十三年進士，籍贯濬縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 260081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9OQmrgpJ1hWAvBKynLbjAS
          claim_id: c_qz7QXJ1eY7MxAMN8HEKVij
          source_id: s_eioXnqnBXXaNkB2ysFrprm
          stance: supports
          locator: CBDB:260081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WmBPwj3cT1yCPN6btVNlOp
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UYpyoyS3CtMBLFhi67q6tz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsB6zitV6RNDXa21_WXgbB
          claim_id: c_WmBPwj3cT1yCPN6btVNlOp
          source_id: s_3pKF0ITNPJO186e0Wy1_SJ
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王溱 与 王洧 为同胞（CBDB 记「弟」），王洧 之父／母即 王溱 之父／母。
          source:
            id: s_3pKF0ITNPJO186e0Wy1_SJ
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 260081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json
            external_identifier: CBDB:260081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43jCdaQscpAsd5Gw1VzpwH
        status: active
        display_name: 王宸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gY1AcMCKXpoDyeW28czzo7
        subject_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UYpyoyS3CtMBLFhi67q6tz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qZnQZQfBkbctVoY7hJmCcN
          claim_id: c_gY1AcMCKXpoDyeW28czzo7
          source_id: s_3pKF0ITNPJO186e0Wy1_SJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126589 王洧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3pKF0ITNPJO186e0Wy1_SJ
            source_type: api_record
            title: 中国历代人物传记资料库：王溱（CBDB 260081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json
            external_identifier: CBDB:260081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6nEkGFMvqFS2nrjxSDZLbY
        status: active
        display_name: 王洧
        merged_into_person_id: null
---

# 王溱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溱 | accepted |
| bio.summary | 王溱，明人物。成化二十三年進士，籍贯濬縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 260081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_43jCdaQscpAsd5Gw1VzpwH | 王宸 | accepted |
| other | p_6nEkGFMvqFS2nrjxSDZLbY | 王洧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溱（CBDB 260081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260081&o=json)
