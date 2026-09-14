---
schema: wang-person/v1
id: p_kQJBgYox8247LCHAQbQ3L5
status: active
merged_into: null
display_name: 王夢曉
cbdb_id: 297279
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBEvEvG36Ne6wnrxG4DKKh
        subject_person_id: p_kQJBgYox8247LCHAQbQ3L5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢曉，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hCXGkrxqjnMNkC77e-Odej
          claim_id: c_QBEvEvG36Ne6wnrxG4DKKh
          source_id: s_L9drfDWJwdjnKnGsK1hn8Q
          stance: supports
          locator: CBDB:297279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L9drfDWJwdjnKnGsK1hn8Q
            source_type: api_record
            title: 中国历代人物传记资料库：王夢曉（CBDB 297279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json
            external_identifier: CBDB:297279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3zzFk6zKi1xaVZasFNJ1td
        subject_person_id: p_kQJBgYox8247LCHAQbQ3L5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢曉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Em97CiPEJtHmEm2eBGzweU
          claim_id: c_3zzFk6zKi1xaVZasFNJ1td
          source_id: s_L9drfDWJwdjnKnGsK1hn8Q
          stance: supports
          locator: CBDB:297279
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kzA9lIaT7CTZqp_PKBPuLI
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kQJBgYox8247LCHAQbQ3L5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6ZZ2SHJHrsg_9H5FF-nW-
          claim_id: c_kzA9lIaT7CTZqp_PKBPuLI
          source_id: s_74k5g9njJ6ViyOfx5uAeg8
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢曉 与 王夢弼 为同胞（CBDB 记「弟」），王夢弼 之父／母即 王夢曉 之父／母。
          source:
            id: s_74k5g9njJ6ViyOfx5uAeg8
            source_type: api_record
            title: 中国历代人物传记资料库：王夢曉（CBDB 297279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json
            external_identifier: CBDB:297279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQeCuqLFbJY887X7LuDmRP
        status: active
        display_name: 王世忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oxhdxCur_UltqW1kLX8SHG
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kQJBgYox8247LCHAQbQ3L5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OEZij8fmB4UpjhdfV7ca9W
          claim_id: c_oxhdxCur_UltqW1kLX8SHG
          source_id: s_74k5g9njJ6ViyOfx5uAeg8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126784 王夢弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_74k5g9njJ6ViyOfx5uAeg8
            source_type: api_record
            title: 中国历代人物传记资料库：王夢曉（CBDB 297279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json
            external_identifier: CBDB:297279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
---

# 王夢曉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢曉，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297279） | accepted |
| name.primary | 王夢曉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gQeCuqLFbJY887X7LuDmRP | 王世忠 | accepted |
| other | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢曉（CBDB 297279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297279&o=json)
