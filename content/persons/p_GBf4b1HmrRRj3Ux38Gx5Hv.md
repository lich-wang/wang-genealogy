---
schema: wang-person/v1
id: p_GBf4b1HmrRRj3Ux38Gx5Hv
status: active
merged_into: null
display_name: 王子卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XwgUKPgMgy7Enejs5Zzvc6
        subject_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82DJAp7K7DDsEN7kAxH59n
          claim_id: c_XwgUKPgMgy7Enejs5Zzvc6
          source_id: s_VHuWKkxgrHdpNZE1BMKxZu
          stance: supports
          locator: CBDB:265622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265622）
          source: &a1
            id: s_VHuWKkxgrHdpNZE1BMKxZu
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 265622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json
            external_identifier: CBDB:265622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2C6k2uRcQWssr6yrJv2gX6
        subject_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿，明人物。弘治六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 265622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1pkZ-lo6Mq8klbbE8rSTcV
          claim_id: c_2C6k2uRcQWssr6yrJv2gX6
          source_id: s_VHuWKkxgrHdpNZE1BMKxZu
          stance: supports
          locator: CBDB:265622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mVTWp6D2Ulhw6d97YYuG17
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KLvjbcsGwps3j-WGna1HAc
          claim_id: c_mVTWp6D2Ulhw6d97YYuG17
          source_id: s_HFYjsT_SVCvVS4ySQKZTEY
          stance: supports
          locator: CBDB：兄弟 王子成（200985）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王子卿 与 王子成 为同胞（CBDB 记「兄」），王子成 之父／母即 王子卿 之父／母。
          source:
            id: s_HFYjsT_SVCvVS4ySQKZTEY
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 265622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json
            external_identifier: CBDB:265622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NoQErvZxoB9KT1iHrT84WN
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6wpbjAZyQhEyQpY8NW8eGW
        subject_person_id: p_GBf4b1HmrRRj3Ux38Gx5Hv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_akpqJMSSGZNHLkzngCE1Qi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ngGTvjhTYgtaNSQDOOZq2D
          claim_id: c_6wpbjAZyQhEyQpY8NW8eGW
          source_id: s_HFYjsT_SVCvVS4ySQKZTEY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200985 王子成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HFYjsT_SVCvVS4ySQKZTEY
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 265622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json
            external_identifier: CBDB:265622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_akpqJMSSGZNHLkzngCE1Qi
        status: active
        display_name: 王子成
        merged_into_person_id: null
---

# 王子卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子卿 | accepted |
| bio.summary | 王子卿，明人物。弘治六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 265622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NoQErvZxoB9KT1iHrT84WN | 王紹 | accepted |
| other | p_akpqJMSSGZNHLkzngCE1Qi | 王子成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子卿（CBDB 265622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265622&o=json)
