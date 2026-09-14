---
schema: wang-person/v1
id: p_SWML8bniWE5duih6zfBZ9o
status: active
merged_into: null
display_name: 王全信
cbdb_id: 444949
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9x7Z51keSs5UdMPaBhCU1
        subject_person_id: p_SWML8bniWE5duih6zfBZ9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全信，唐人物。身份为外戚，曾任殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 444949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tjqTX2OtGhLQy7UuVV4Rju
          claim_id: c_K9x7Z51keSs5UdMPaBhCU1
          source_id: s_a3NTtCqqkb3GKEH3E7dVwg
          stance: supports
          locator: CBDB:444949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a3NTtCqqkb3GKEH3E7dVwg
            source_type: api_record
            title: 中国历代人物传记资料库：王全信（CBDB 444949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444949&o=json
            external_identifier: CBDB:444949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRBFvYVpqa8z5CNJ4fqdbA
        subject_person_id: p_SWML8bniWE5duih6zfBZ9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B9Tsz1P917qJyruytczgVD
          claim_id: c_DRBFvYVpqa8z5CNJ4fqdbA
          source_id: s_a3NTtCqqkb3GKEH3E7dVwg
          stance: supports
          locator: CBDB:444949
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i5ny4q6a0-6WG7Ou0X1a0b
        subject_person_id: p_pw5PbWZzfQQNgNYXwrhd1t
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_SWML8bniWE5duih6zfBZ9o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fC3nXWPkZLPCXGTMc0OSjE
          claim_id: c_i5ny4q6a0-6WG7Ou0X1a0b
          source_id: s_M75g-OqmTHyeY5mJdQGD0j
          stance: supports
          locator: CBDB：兄弟 王氏（444806）之父／母 王仁祐
          quotation: null
          interpretation_note: 由兄弟关系推断：王全信 与 王氏 为同胞（CBDB 记「妹」），王氏 之父／母即 王全信 之父／母。
          source:
            id: s_M75g-OqmTHyeY5mJdQGD0j
            source_type: api_record
            title: 中国历代人物传记资料库：王全信（CBDB 444949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444949&o=json
            external_identifier: CBDB:444949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pw5PbWZzfQQNgNYXwrhd1t
        status: active
        display_name: 王仁祐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3XTcWF7zg5D7cGSZ_NjJz2
        subject_person_id: p_SWML8bniWE5duih6zfBZ9o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHAoL6map17gl5wriEGdrM
          claim_id: c_3XTcWF7zg5D7cGSZ_NjJz2
          source_id: s_M75g-OqmTHyeY5mJdQGD0j
          stance: supports
          locator: CBDB 亲属：妹（KinPerson 444806 王氏(高宗廢后)）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_M75g-OqmTHyeY5mJdQGD0j
            source_type: api_record
            title: 中国历代人物传记资料库：王全信（CBDB 444949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444949&o=json
            external_identifier: CBDB:444949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        status: active
        display_name: 王氏
        merged_into_person_id: null
---

# 王全信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王全信，唐人物。身份为外戚，曾任殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 444949） | accepted |
| name.primary | 王全信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pw5PbWZzfQQNgNYXwrhd1t | 王仁祐 | accepted |
| other | p_q7Qd8bWirDBt2fuJ4Z1Gc2 | 王氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王全信（CBDB 444949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444949&o=json)
