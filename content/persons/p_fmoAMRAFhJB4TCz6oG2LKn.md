---
schema: wang-person/v1
id: p_fmoAMRAFhJB4TCz6oG2LKn
status: active
merged_into: null
display_name: 王休復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUq9JP7RMcJ2HZKtafsZN2
        subject_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1DW4Vtx3HPxD3nqmfsDEp
          claim_id: c_HUq9JP7RMcJ2HZKtafsZN2
          source_id: s_ViEhLnhkxFwNPzsFm1KWQt
          stance: supports
          locator: CBDB:300358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300358）
          source: &a1
            id: s_ViEhLnhkxFwNPzsFm1KWQt
            source_type: api_record
            title: 中国历代人物传记资料库：王休復（CBDB 300358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json
            external_identifier: CBDB:300358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S8u7Hqkr9gch4dr3xXooQu
        subject_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300358）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RO5RjEswvT4_VgNrKSSIAR
          claim_id: c_S8u7Hqkr9gch4dr3xXooQu
          source_id: s_ViEhLnhkxFwNPzsFm1KWQt
          stance: supports
          locator: CBDB:300358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZkJ6W4qxZ5_9ClWRoMdpMK
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68NvIsVPVPFz-e-vCW-11h
          claim_id: c_ZkJ6W4qxZ5_9ClWRoMdpMK
          source_id: s_fuUWAKUI2rxazA99vrJgAZ
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王休復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王休復 之父／母。
          source:
            id: s_fuUWAKUI2rxazA99vrJgAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王休復（CBDB 300358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json
            external_identifier: CBDB:300358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_djPzJATqP8N3fAgZuiGdme
        status: active
        display_name: 王琥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sFLjxI7ufb4f_jtWucm3ry
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fmoAMRAFhJB4TCz6oG2LKn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KQgI0W2i2Peq3JioyQRS9F
          claim_id: c_sFLjxI7ufb4f_jtWucm3ry
          source_id: s_fuUWAKUI2rxazA99vrJgAZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fuUWAKUI2rxazA99vrJgAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王休復（CBDB 300358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json
            external_identifier: CBDB:300358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
---

# 王休復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休復 | accepted |
| bio.summary | 王休復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300358） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_djPzJATqP8N3fAgZuiGdme | 王琥 | accepted |
| other | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王休復（CBDB 300358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300358&o=json)
