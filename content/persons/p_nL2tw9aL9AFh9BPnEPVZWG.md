---
schema: wang-person/v1
id: p_nL2tw9aL9AFh9BPnEPVZWG
status: active
merged_into: null
display_name: 王洛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E76aR3pdGA225A9BgAB45Z
        subject_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8YNDcK8xW48PczwFGr26xp
          claim_id: c_E76aR3pdGA225A9BgAB45Z
          source_id: s_oBVDBcaeeK1YLD7LaBJhk1
          stance: supports
          locator: CBDB:318700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318700）
          source: &a1
            id: s_oBVDBcaeeK1YLD7LaBJhk1
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 318700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json
            external_identifier: CBDB:318700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kN5J1EZT6F3g51P54VnVHA
        subject_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x-LacRfeZUrHlM2UrRbYsj
          claim_id: c_kN5J1EZT6F3g51P54VnVHA
          source_id: s_oBVDBcaeeK1YLD7LaBJhk1
          stance: supports
          locator: CBDB:318700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s_Bc230DarqYo4Q_dV6myl
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0a5WgDea0UZUWt3MV7PUF
          claim_id: c_s_Bc230DarqYo4Q_dV6myl
          source_id: s_iYGoU3gq42YCxejut12iGb
          stance: supports
          locator: CBDB：兄弟 王治（69158）之父／母 王鎧
          quotation: null
          interpretation_note: 由兄弟关系推断：王洛 与 王治 为同胞（CBDB 记「兄」），王治 之父／母即 王洛 之父／母。
          source:
            id: s_iYGoU3gq42YCxejut12iGb
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 318700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json
            external_identifier: CBDB:318700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UidqakXpG7WU72BqWJwGkC
        status: active
        display_name: 王鎧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_i_Z5WiRIfzkM_Y8VOhY9Cn
        subject_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nL2tw9aL9AFh9BPnEPVZWG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79BboTQrZJeVAIJIALVZ27
          claim_id: c_i_Z5WiRIfzkM_Y8VOhY9Cn
          source_id: s_iYGoU3gq42YCxejut12iGb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69158 王治）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iYGoU3gq42YCxejut12iGb
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 318700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json
            external_identifier: CBDB:318700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YMRfqBqGcb2AtmuSSgfQHF
        status: active
        display_name: 王治
        merged_into_person_id: null
---

# 王洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洛 | accepted |
| bio.summary | 王洛，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UidqakXpG7WU72BqWJwGkC | 王鎧 | accepted |
| other | p_YMRfqBqGcb2AtmuSSgfQHF | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洛（CBDB 318700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318700&o=json)
