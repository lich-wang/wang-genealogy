---
schema: wang-person/v1
id: p_uaU9mnVmH8FrRuJRbj78gj
status: active
merged_into: null
display_name: 王世熙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fWq7CkBqzZm8iyxytPdxhS
        subject_person_id: p_uaU9mnVmH8FrRuJRbj78gj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U1bmn5hrYJqXjz2xFuF6wi
          claim_id: c_fWq7CkBqzZm8iyxytPdxhS
          source_id: s_LwTNNjs17r3JN2e6YrSsDn
          stance: supports
          locator: CBDB:297050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297050）
          source: &a1
            id: s_LwTNNjs17r3JN2e6YrSsDn
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 297050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297050&o=json
            external_identifier: CBDB:297050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yCcf54CAguXAVbyiYZA42x
        subject_person_id: p_uaU9mnVmH8FrRuJRbj78gj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世熙，明人物。嘉靖十四年進士，籍贯汶上。（中国历代人物传记资料库 CBDB 297050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RZ-0HI1UGbefkM4bRSTl5a
          claim_id: c_yCcf54CAguXAVbyiYZA42x
          source_id: s_LwTNNjs17r3JN2e6YrSsDn
          stance: supports
          locator: CBDB:297050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NUcZ5YzQmR2TXKlT1Y-2VC
        subject_person_id: p_qnL6JTk4AmGBe9uJN2PZjY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uaU9mnVmH8FrRuJRbj78gj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63vgHYEF_lOj-F3ojFfZVH
          claim_id: c_NUcZ5YzQmR2TXKlT1Y-2VC
          source_id: s_UXX-L-znyHZ5ay1mHXhT_V
          stance: supports
          locator: CBDB：兄弟 王世雍（202939）之父／母 王杲
          quotation: null
          interpretation_note: 由兄弟关系推断：王世熙 与 王世雍 为同胞（CBDB 记「兄」），王世雍 之父／母即 王世熙 之父／母。
          source:
            id: s_UXX-L-znyHZ5ay1mHXhT_V
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 297050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297050&o=json
            external_identifier: CBDB:297050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qnL6JTk4AmGBe9uJN2PZjY
        status: active
        display_name: 王杲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5OrQbWPPhfH6WE6uJq3ySQ
        subject_person_id: p_dmToVAW68CjUAQM41bQAM7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uaU9mnVmH8FrRuJRbj78gj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__F86n5zuDuIuQgaTYxJrTO
          claim_id: c_5OrQbWPPhfH6WE6uJq3ySQ
          source_id: s_UXX-L-znyHZ5ay1mHXhT_V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202939 王世雍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UXX-L-znyHZ5ay1mHXhT_V
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 297050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297050&o=json
            external_identifier: CBDB:297050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dmToVAW68CjUAQM41bQAM7
        status: active
        display_name: 王世雍
        merged_into_person_id: null
---

# 王世熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世熙 | accepted |
| bio.summary | 王世熙，明人物。嘉靖十四年進士，籍贯汶上。（中国历代人物传记资料库 CBDB 297050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qnL6JTk4AmGBe9uJN2PZjY | 王杲 | accepted |
| other | p_dmToVAW68CjUAQM41bQAM7 | 王世雍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世熙（CBDB 297050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297050&o=json)
