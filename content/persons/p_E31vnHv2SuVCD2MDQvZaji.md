---
schema: wang-person/v1
id: p_E31vnHv2SuVCD2MDQvZaji
status: active
merged_into: null
display_name: 王圻
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2UNsB7qtVx1JJoJnTCxyPh
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8knKqFYE9QhDKon9fCJxe8
          claim_id: c_2UNsB7qtVx1JJoJnTCxyPh
          source_id: s_XhEzxUKDcDmvSa4jqbUxKb
          stance: supports
          locator: CBDB:236486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236486）
          source: &a1
            id: s_XhEzxUKDcDmvSa4jqbUxKb
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQEHU53aP84CfbBPfLnb5J
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XpXQNJA_GSL5imIMpz57D8
          claim_id: c_TQEHU53aP84CfbBPfLnb5J
          source_id: s_XhEzxUKDcDmvSa4jqbUxKb
          stance: supports
          locator: CBDB:236486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Cl3TrnNh8gOYPwS00m9OLZ
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E31vnHv2SuVCD2MDQvZaji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2szUI4TluOdVP3J6DtZqMv
          claim_id: c_Cl3TrnNh8gOYPwS00m9OLZ
          source_id: s_s0w4V3pGjHlrajtL6CCST7
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王圻 与 王念祖 为同胞（CBDB 记「弟」），王念祖 之父／母即 王圻 之父／母。
          source:
            id: s_s0w4V3pGjHlrajtL6CCST7
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XE41abEZy-h_3b6-4Iijsp
        subject_person_id: p_E31vnHv2SuVCD2MDQvZaji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g4G2pRi580TlZrqx5Ub49z
          claim_id: c_XE41abEZy-h_3b6-4Iijsp
          source_id: s_s0w4V3pGjHlrajtL6CCST7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s0w4V3pGjHlrajtL6CCST7
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 236486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json
            external_identifier: CBDB:236486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圻 | accepted |
| bio.summary | 王圻，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王圻（CBDB 236486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236486&o=json)
