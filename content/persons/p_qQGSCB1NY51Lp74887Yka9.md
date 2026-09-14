---
schema: wang-person/v1
id: p_qQGSCB1NY51Lp74887Yka9
status: active
merged_into: null
display_name: 王佺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_omzPkvLPkDwyRqovPEkMdr
        subject_person_id: p_qQGSCB1NY51Lp74887Yka9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8SUn8nyQKYPNCbEWN8vSJQ
          claim_id: c_omzPkvLPkDwyRqovPEkMdr
          source_id: s_92r4bkcBXvQ7pYbwto4euh
          stance: supports
          locator: CBDB:312750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312750）
          source: &a1
            id: s_92r4bkcBXvQ7pYbwto4euh
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 312750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312750&o=json
            external_identifier: CBDB:312750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eiGYUoveHQPADFAYa85zZ1
        subject_person_id: p_qQGSCB1NY51Lp74887Yka9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SwxE0UDBOI7U0uK3fGTtzG
          claim_id: c_eiGYUoveHQPADFAYa85zZ1
          source_id: s_92r4bkcBXvQ7pYbwto4euh
          stance: supports
          locator: CBDB:312750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h79h6OsuTgMByUCZIfCTt1
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qQGSCB1NY51Lp74887Yka9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFKrEqgmwZV2p_V7eZmAon
          claim_id: c_h79h6OsuTgMByUCZIfCTt1
          source_id: s_wRQ0UvbJjTEoXO12Iv0a8s
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王佺 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王佺 之父／母。
          source:
            id: s_wRQ0UvbJjTEoXO12Iv0a8s
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 312750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312750&o=json
            external_identifier: CBDB:312750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDiqSoKbAEPJ32n4DP82Hn
        status: active
        display_name: 王簡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RZ4EUKdEeQoE-YoCZ2tCTB
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qQGSCB1NY51Lp74887Yka9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JnnWKEGuGkzH1mEpw9xo0
          claim_id: c_RZ4EUKdEeQoE-YoCZ2tCTB
          source_id: s_wRQ0UvbJjTEoXO12Iv0a8s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203975 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wRQ0UvbJjTEoXO12Iv0a8s
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 312750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312750&o=json
            external_identifier: CBDB:312750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hHNa7b5NntK7bPjYqWMP15
        status: active
        display_name: 王价
        merged_into_person_id: null
---

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佺 | accepted |
| bio.summary | 王佺，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dDiqSoKbAEPJ32n4DP82Hn | 王簡 | accepted |
| other | p_hHNa7b5NntK7bPjYqWMP15 | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佺（CBDB 312750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312750&o=json)
