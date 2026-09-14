---
schema: wang-person/v1
id: p_dDiqSoKbAEPJ32n4DP82Hn
status: active
merged_into: null
display_name: 王簡
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48hBEBqkALBgCJD4V1dAGa
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eZ7LYNDuRqPKaEUCWFzfCF
          claim_id: c_48hBEBqkALBgCJD4V1dAGa
          source_id: s_nCeqdEAj5sfgy96bLC2rYW
          stance: supports
          locator: CBDB:312743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312743）
          source: &a1
            id: s_nCeqdEAj5sfgy96bLC2rYW
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 312743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312743&o=json
            external_identifier: CBDB:312743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KF7kVC5q1J4mg23AeVvtKi
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lfdfWkLxwVKTv-iQ4WZhX4
          claim_id: c_KF7kVC5q1J4mg23AeVvtKi
          source_id: s_nCeqdEAj5sfgy96bLC2rYW
          stance: supports
          locator: CBDB:312743
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6PHghHQFn_5q76AiSeKUjI
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hHNa7b5NntK7bPjYqWMP15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaYLACXOAQIYKORsWdB52O
          claim_id: c_6PHghHQFn_5q76AiSeKUjI
          source_id: s_nCeqdEAj5sfgy96bLC2rYW
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hHNa7b5NntK7bPjYqWMP15
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_hQhOmdHeKaumDCWNdE6DuQ
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gWp2XZziZnyLLYcjV6TPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqUxbDy306EUSQdrqlbSiP
          claim_id: c_hQhOmdHeKaumDCWNdE6DuQ
          source_id: s_lkDvRn_m2UO6juUH9KvTaN
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王仲 之父／母。
          source:
            id: s_lkDvRn_m2UO6juUH9KvTaN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 312746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json
            external_identifier: CBDB:312746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3gWp2XZziZnyLLYcjV6TPT
        status: active
        display_name: 王仲
        merged_into_person_id: null
    - claim:
        id: c_rLGordCrmovkj6S56QUujk
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5pEgPkeTerZW15qTz6jA48
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_aYF_iTJXMqOv6KI7caBs
          claim_id: c_rLGordCrmovkj6S56QUujk
          source_id: s_ptSEdRS6APnJB5B3xtuNJ6
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王攸 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王攸 之父／母。
          source:
            id: s_ptSEdRS6APnJB5B3xtuNJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王攸（CBDB 312749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312749&o=json
            external_identifier: CBDB:312749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5pEgPkeTerZW15qTz6jA48
        status: active
        display_name: 王攸
        merged_into_person_id: null
    - claim:
        id: c_TCBK__jKPBwCvsOfOxo7PO
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PNA6t17EZLCthbKBFGpjue
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpMURaYp5ru0xJ3xjfATxk
          claim_id: c_TCBK__jKPBwCvsOfOxo7PO
          source_id: s_ZehkvrpIMYJDLQIVUiCb0R
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王何 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王何 之父／母。
          source:
            id: s_ZehkvrpIMYJDLQIVUiCb0R
            source_type: api_record
            title: 中国历代人物传记资料库：王何（CBDB 312748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312748&o=json
            external_identifier: CBDB:312748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PNA6t17EZLCthbKBFGpjue
        status: active
        display_name: 王何
        merged_into_person_id: null
    - claim:
        id: c_OKKkCblLXa1GCf3rtbozKd
        subject_person_id: p_dDiqSoKbAEPJ32n4DP82Hn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WNYi8uBrUTae135DEEWfw6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vO4ldAvYrbYIUwcFSZqMLd
          claim_id: c_OKKkCblLXa1GCf3rtbozKd
          source_id: s_1lnyd14es6yBr57o4lrNFr
          stance: supports
          locator: CBDB：兄弟 王价（203975）之父／母 王簡
          quotation: null
          interpretation_note: 由兄弟关系推断：王佃 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王佃 之父／母。
          source:
            id: s_1lnyd14es6yBr57o4lrNFr
            source_type: api_record
            title: 中国历代人物传记资料库：王佃（CBDB 312747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312747&o=json
            external_identifier: CBDB:312747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WNYi8uBrUTae135DEEWfw6
        status: active
        display_name: 王佃
        merged_into_person_id: null
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
        id: p_qQGSCB1NY51Lp74887Yka9
        status: active
        display_name: 王佺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，明人物。嘉靖二十九年進士，籍贯膠州。（中国历代人物传记资料库 CBDB 312743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hHNa7b5NntK7bPjYqWMP15 | 王价 | accepted |
| children | p_3gWp2XZziZnyLLYcjV6TPT | 王仲 | accepted |
| children | p_5pEgPkeTerZW15qTz6jA48 | 王攸 | accepted |
| children | p_PNA6t17EZLCthbKBFGpjue | 王何 | accepted |
| children | p_WNYi8uBrUTae135DEEWfw6 | 王佃 | accepted |
| children | p_qQGSCB1NY51Lp74887Yka9 | 王佺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佃（CBDB 312747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312747&o=json)
- [中国历代人物传记资料库：王何（CBDB 312748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312748&o=json)
- [中国历代人物传记资料库：王簡（CBDB 312743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312743&o=json)
- [中国历代人物传记资料库：王佺（CBDB 312750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312750&o=json)
- [中国历代人物传记资料库：王攸（CBDB 312749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312749&o=json)
- [中国历代人物传记资料库：王仲（CBDB 312746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312746&o=json)
