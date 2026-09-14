---
schema: wang-person/v1
id: p_sQm8vRe6yfwU4PQxcEpNLQ
status: active
merged_into: null
display_name: 王杞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_75XPEiX4636Gk4Wjs9Rk11
        subject_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R86CUhjMLnhHchWj6Awo4K
          claim_id: c_75XPEiX4636Gk4Wjs9Rk11
          source_id: s_TvAMF8rtteHFMRhgf14Mjo
          stance: supports
          locator: CBDB:271107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271107）
          source: &a1
            id: s_TvAMF8rtteHFMRhgf14Mjo
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 271107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json
            external_identifier: CBDB:271107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MNK4BDf59go1d5S4vUA7A
        subject_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞，明人物。弘治十五年進士，籍贯望江，曾任義官。（中国历代人物传记资料库 CBDB 271107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GGjskKlQ7L2RHyHd3MBuHA
          claim_id: c_7MNK4BDf59go1d5S4vUA7A
          source_id: s_TvAMF8rtteHFMRhgf14Mjo
          stance: supports
          locator: CBDB:271107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pBXW7IwTDNSDd4hbub8RZI
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_bPwn-LLDDLdF8ZidRTyw
          claim_id: c_pBXW7IwTDNSDd4hbub8RZI
          source_id: s_ARltkL7FOlUphEvhw7T1eX
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王杞 与 王材 为同胞（CBDB 记「弟」），王材 之父／母即 王杞 之父／母。
          source:
            id: s_ARltkL7FOlUphEvhw7T1eX
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 271107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json
            external_identifier: CBDB:271107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4UdY2V4RIZdsZSrRn3SG_p
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYU1pIugWjYf89r9xIhriB
          claim_id: c_4UdY2V4RIZdsZSrRn3SG_p
          source_id: s_ARltkL7FOlUphEvhw7T1eX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ARltkL7FOlUphEvhw7T1eX
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 271107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json
            external_identifier: CBDB:271107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dqAK3hD6kewBU4JbJcy31
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王杞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞 | accepted |
| bio.summary | 王杞，明人物。弘治十五年進士，籍贯望江，曾任義官。（中国历代人物传记资料库 CBDB 271107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| other | p_5dqAK3hD6kewBU4JbJcy31 | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杞（CBDB 271107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json)
