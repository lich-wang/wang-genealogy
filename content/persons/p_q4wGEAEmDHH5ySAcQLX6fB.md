---
schema: wang-person/v1
id: p_q4wGEAEmDHH5ySAcQLX6fB
status: active
merged_into: null
display_name: 王福
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2vaLdsvf6K4ciYh6fzP24
        subject_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNTca8YSF6Es6ha8SfDEWu
          claim_id: c_H2vaLdsvf6K4ciYh6fzP24
          source_id: s_2AzNi6ht5P1DqQDm7nh9VF
          stance: supports
          locator: CBDB:257019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257019）
          source: &a1
            id: s_2AzNi6ht5P1DqQDm7nh9VF
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 257019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json
            external_identifier: CBDB:257019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qmLQyrEH4hW2iNk6mv5j1q
        subject_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257019）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_REcstOI_h1YVV3VzGp9848
          claim_id: c_qmLQyrEH4hW2iNk6mv5j1q
          source_id: s_2AzNi6ht5P1DqQDm7nh9VF
          stance: supports
          locator: CBDB:257019
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Of40Op3QlTDWNSamUKb3JU
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h897Jpn0oc_R3iNj_qgs3F
          claim_id: c_Of40Op3QlTDWNSamUKb3JU
          source_id: s_hm3emtYqbpXyVWCVawysvT
          stance: supports
          locator: CBDB：兄弟 王章（200383）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王福 与 王章 为同胞（CBDB 记「弟」），王章 之父／母即 王福 之父／母。
          source:
            id: s_hm3emtYqbpXyVWCVawysvT
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 257019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json
            external_identifier: CBDB:257019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJ23FYKPfQzC4jh84wbU1t
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uniSkUEe5J1w5v-Skmg-uN
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1II_1y4Rfz-aJbeiFGys6K
          claim_id: c_uniSkUEe5J1w5v-Skmg-uN
          source_id: s_hm3emtYqbpXyVWCVawysvT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200383 王章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hm3emtYqbpXyVWCVawysvT
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 257019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json
            external_identifier: CBDB:257019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZrffszDUs4AxXq4vwPGj2R
        status: active
        display_name: 王章
        merged_into_person_id: null
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJ23FYKPfQzC4jh84wbU1t | 王寅 | accepted |
| other | p_ZrffszDUs4AxXq4vwPGj2R | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 257019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json)
