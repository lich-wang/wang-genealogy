---
schema: wang-person/v1
id: p_odCFDmGBELLsAuLd829DUx
status: active
merged_into: null
display_name: 王璘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LpWrje6ChGLHtAoPLsJepZ
        subject_person_id: p_odCFDmGBELLsAuLd829DUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eXfpUAVS46qFZyMQNUQ2xX
          claim_id: c_LpWrje6ChGLHtAoPLsJepZ
          source_id: s_Eg8tRgy2njnH5WZh72RZzQ
          stance: supports
          locator: CBDB:270783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270783）
          source: &a1
            id: s_Eg8tRgy2njnH5WZh72RZzQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 270783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270783&o=json
            external_identifier: CBDB:270783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3UVNWLg6R74pnMV2EJsAe9
        subject_person_id: p_odCFDmGBELLsAuLd829DUx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘，明人物。景泰五年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 270783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yvJgkm8_mE84y07OGPy9kl
          claim_id: c_3UVNWLg6R74pnMV2EJsAe9
          source_id: s_Eg8tRgy2njnH5WZh72RZzQ
          stance: supports
          locator: CBDB:270783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J3dbtZG3MXdvj9YIfmJEft
        subject_person_id: p_1C9G5XBRDC7u6iXVfxU3HA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_odCFDmGBELLsAuLd829DUx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AKFfIqdd2PHdOyBvXg7Dnl
          claim_id: c_J3dbtZG3MXdvj9YIfmJEft
          source_id: s_3vNUie-SjTsth3qIUHoUPI
          stance: supports
          locator: CBDB：兄弟 王瓘（198427）之父／母 王郁
          quotation: null
          interpretation_note: 由兄弟关系推断：王璘 与 王瓘 为同胞（CBDB 记「兄」），王瓘 之父／母即 王璘 之父／母。
          source:
            id: s_3vNUie-SjTsth3qIUHoUPI
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 270783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270783&o=json
            external_identifier: CBDB:270783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1C9G5XBRDC7u6iXVfxU3HA
        status: active
        display_name: 王郁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jo2AHOWgRTHjdDB9VHVc6R
        subject_person_id: p_He4MQneKrf3FsxiWWRGQhR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_odCFDmGBELLsAuLd829DUx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Xn1s6Pf1httLaKQlR8zSt
          claim_id: c_Jo2AHOWgRTHjdDB9VHVc6R
          source_id: s_3vNUie-SjTsth3qIUHoUPI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198427 王瓘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3vNUie-SjTsth3qIUHoUPI
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 270783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270783&o=json
            external_identifier: CBDB:270783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_He4MQneKrf3FsxiWWRGQhR
        status: active
        display_name: 王瓘
        merged_into_person_id: null
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| bio.summary | 王璘，明人物。景泰五年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 270783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1C9G5XBRDC7u6iXVfxU3HA | 王郁 | accepted |
| other | p_He4MQneKrf3FsxiWWRGQhR | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 270783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270783&o=json)
