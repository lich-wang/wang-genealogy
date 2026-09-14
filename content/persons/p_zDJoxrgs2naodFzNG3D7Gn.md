---
schema: wang-person/v1
id: p_zDJoxrgs2naodFzNG3D7Gn
status: active
merged_into: null
display_name: 王襄臣
cbdb_id: 297188
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7TVpRUPSJL3gPB6QUcQa2a
        subject_person_id: p_zDJoxrgs2naodFzNG3D7Gn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297188）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8Zp983fFp0VuJt_3DobBXy
          claim_id: c_7TVpRUPSJL3gPB6QUcQa2a
          source_id: s_9BExV4V4i2Vc1xn8Y2XrjC
          stance: supports
          locator: CBDB:297188
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9BExV4V4i2Vc1xn8Y2XrjC
            source_type: api_record
            title: 中国历代人物传记资料库：王襄臣（CBDB 297188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json
            external_identifier: CBDB:297188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgJtzbSgs8pKi3MLPAQmB8
        subject_person_id: p_zDJoxrgs2naodFzNG3D7Gn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王襄臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vv4sVNxNdBokKr38K2LM6Z
          claim_id: c_dgJtzbSgs8pKi3MLPAQmB8
          source_id: s_9BExV4V4i2Vc1xn8Y2XrjC
          stance: supports
          locator: CBDB:297188
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OoOSuvrT79QrZ62udT4Hr9
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zDJoxrgs2naodFzNG3D7Gn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oFGnmOTZ4lNxCCg2I-Xw1
          claim_id: c_OoOSuvrT79QrZ62udT4Hr9
          source_id: s_0OtuXsrmI42A4cvrr5p2FC
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王襄臣 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王襄臣 之父／母。
          source:
            id: s_0OtuXsrmI42A4cvrr5p2FC
            source_type: api_record
            title: 中国历代人物传记资料库：王襄臣（CBDB 297188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json
            external_identifier: CBDB:297188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHR15NKctLwCWm6W5TBJEq
        status: active
        display_name: 王一言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hrql3s3ByElpOCAER--WdT
        subject_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zDJoxrgs2naodFzNG3D7Gn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3P1gbhniQ_cRw3rAaNXYN3
          claim_id: c_hrql3s3ByElpOCAER--WdT
          source_id: s_0OtuXsrmI42A4cvrr5p2FC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202945 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0OtuXsrmI42A4cvrr5p2FC
            source_type: api_record
            title: 中国历代人物传记资料库：王襄臣（CBDB 297188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json
            external_identifier: CBDB:297188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZwm7RH4zQwJTHWtWTtHUQ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王襄臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王襄臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297188） | accepted |
| name.primary | 王襄臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHR15NKctLwCWm6W5TBJEq | 王一言 | accepted |
| other | p_DZwm7RH4zQwJTHWtWTtHUQ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王襄臣（CBDB 297188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json)
