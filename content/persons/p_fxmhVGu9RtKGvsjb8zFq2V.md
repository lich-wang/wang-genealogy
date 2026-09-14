---
schema: wang-person/v1
id: p_fxmhVGu9RtKGvsjb8zFq2V
status: active
merged_into: null
display_name: 王興詩
cbdb_id: 333205
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xWiv8GWS2kG6oguEgyuMg5
        subject_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興詩，明人物。嘉靖四十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 333205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zABDXqldM5gJED5W_3A1Km
          claim_id: c_xWiv8GWS2kG6oguEgyuMg5
          source_id: s_Jkd8i4yptmKaUHxmpGyn9M
          stance: supports
          locator: CBDB:333205
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Jkd8i4yptmKaUHxmpGyn9M
            source_type: api_record
            title: 中国历代人物传记资料库：王興詩（CBDB 333205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json
            external_identifier: CBDB:333205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t7hFnQcbkpjyBnr1jnJpa7
        subject_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YyBSypNHbeHfRDYDaeetrs
          claim_id: c_t7hFnQcbkpjyBnr1jnJpa7
          source_id: s_Jkd8i4yptmKaUHxmpGyn9M
          stance: supports
          locator: CBDB:333205
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TKgLfmXeKpJHWnnXMdEHus
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I29NsqV6YPTsE5gDBfscHA
          claim_id: c_TKgLfmXeKpJHWnnXMdEHus
          source_id: s_XjhUQz0xq6R4G0wgtefwGx
          stance: supports
          locator: CBDB：兄弟 王庭詩（205441）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王興詩 与 王庭詩 为同胞（CBDB 记「兄」），王庭詩 之父／母即 王興詩 之父／母。
          source:
            id: s_XjhUQz0xq6R4G0wgtefwGx
            source_type: api_record
            title: 中国历代人物传记资料库：王興詩（CBDB 333205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json
            external_identifier: CBDB:333205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XvLvgZx3E1ajPvY553eFr9
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Lvg6FPu4tL3eiHwUKdlgbE
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xgu-Yhqon24p14MooyLfl8
          claim_id: c_Lvg6FPu4tL3eiHwUKdlgbE
          source_id: s_XjhUQz0xq6R4G0wgtefwGx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205441 王庭詩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XjhUQz0xq6R4G0wgtefwGx
            source_type: api_record
            title: 中国历代人物传记资料库：王興詩（CBDB 333205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json
            external_identifier: CBDB:333205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R3KjiJ6AtFp3cp2mBnFBEY
        status: active
        display_name: 王庭詩
        merged_into_person_id: null
---

# 王興詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王興詩，明人物。嘉靖四十四年進士，籍贯華州。（中国历代人物传记资料库 CBDB 333205） | accepted |
| name.primary | 王興詩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XvLvgZx3E1ajPvY553eFr9 | 王吉兆 | accepted |
| other | p_R3KjiJ6AtFp3cp2mBnFBEY | 王庭詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興詩（CBDB 333205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json)
