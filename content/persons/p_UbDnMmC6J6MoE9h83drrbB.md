---
schema: wang-person/v1
id: p_UbDnMmC6J6MoE9h83drrbB
status: active
merged_into: null
display_name: 王瑨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T2niwtn4VSNtEASYr5dCkz
        subject_person_id: p_UbDnMmC6J6MoE9h83drrbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gfMPRGVeoMSHnrN7YuQx5N
          claim_id: c_T2niwtn4VSNtEASYr5dCkz
          source_id: s_v6FkvqEUAjrca6cH8r2xPd
          stance: supports
          locator: CBDB:282506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282506）
          source: &a1
            id: s_v6FkvqEUAjrca6cH8r2xPd
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 282506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json
            external_identifier: CBDB:282506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zzoMCavm99jzCFq9Fnn8ow
        subject_person_id: p_UbDnMmC6J6MoE9h83drrbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CBazWv_TnMiSM2hfb6ZUkz
          claim_id: c_zzoMCavm99jzCFq9Fnn8ow
          source_id: s_v6FkvqEUAjrca6cH8r2xPd
          stance: supports
          locator: CBDB:282506
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k-921cIqxsfmYBqB5yjlO_
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UbDnMmC6J6MoE9h83drrbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2H8sxSS1MIOtfbafvHMlh
          claim_id: c_k-921cIqxsfmYBqB5yjlO_
          source_id: s_jb80SanRtbY4Eosw4h73cW
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑨 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王瑨 之父／母。
          source:
            id: s_jb80SanRtbY4Eosw4h73cW
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 282506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json
            external_identifier: CBDB:282506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ho_CjjYFR8iP_xMth2Gq4A
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UbDnMmC6J6MoE9h83drrbB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DmF2Cmg_IMwvezrl9FgiJJ
          claim_id: c_Ho_CjjYFR8iP_xMth2Gq4A
          source_id: s_jb80SanRtbY4Eosw4h73cW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jb80SanRtbY4Eosw4h73cW
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 282506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json
            external_identifier: CBDB:282506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
---

# 王瑨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑨 | accepted |
| bio.summary | 王瑨，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ws6vwZFsXZUpBYjSrkcdGJ | 王言 | accepted |
| other | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑨（CBDB 282506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json)
