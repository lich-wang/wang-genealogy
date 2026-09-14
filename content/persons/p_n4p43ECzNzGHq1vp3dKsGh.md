---
schema: wang-person/v1
id: p_n4p43ECzNzGHq1vp3dKsGh
status: active
merged_into: null
display_name: 王國言
cbdb_id: 300445
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4hwJGG65zQbT3HFMhBMP98
        subject_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國言，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300445）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ONLQtpG8nHlQZ6czZcwqkd
          claim_id: c_4hwJGG65zQbT3HFMhBMP98
          source_id: s_F8By8LAq1ZTPrNHSjLSRHh
          stance: supports
          locator: CBDB:300445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F8By8LAq1ZTPrNHSjLSRHh
            source_type: api_record
            title: 中国历代人物传记资料库：王國言（CBDB 300445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json
            external_identifier: CBDB:300445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCjfJkd3jh92TGwZotuwh9
        subject_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WNJM3CgXuaJzPFZSEBPbVZ
          claim_id: c_uCjfJkd3jh92TGwZotuwh9
          source_id: s_F8By8LAq1ZTPrNHSjLSRHh
          stance: supports
          locator: CBDB:300445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p9FMCtJzBoJish2_WogECN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pQSjvhM9yOkhVq9NAWlxUf
          claim_id: c_p9FMCtJzBoJish2_WogECN
          source_id: s_SjKoXEAZI6xBjldjoD68l-
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國言 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國言 之父／母。
          source:
            id: s_SjKoXEAZI6xBjldjoD68l-
            source_type: api_record
            title: 中国历代人物传记资料库：王國言（CBDB 300445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json
            external_identifier: CBDB:300445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nfDQpFcmyR41HhRtmj92PA
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PbVjgHiPj8mNL-IcBwjmzX
        subject_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4s-5L0Np9cvj3nUWJNpOO
          claim_id: c_PbVjgHiPj8mNL-IcBwjmzX
          source_id: s_SjKoXEAZI6xBjldjoD68l-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SjKoXEAZI6xBjldjoD68l-
            source_type: api_record
            title: 中国历代人物传记资料库：王國言（CBDB 300445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json
            external_identifier: CBDB:300445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
---

# 王國言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國言，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300445） | accepted |
| name.primary | 王國言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nfDQpFcmyR41HhRtmj92PA | 王愷 | accepted |
| other | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國言（CBDB 300445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json)
