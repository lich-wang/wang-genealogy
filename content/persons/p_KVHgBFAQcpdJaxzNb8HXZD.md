---
schema: wang-person/v1
id: p_KVHgBFAQcpdJaxzNb8HXZD
status: active
merged_into: null
display_name: 王孜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2itnEGfQuGDKLoyBXxb9dV
        subject_person_id: p_KVHgBFAQcpdJaxzNb8HXZD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x626GHgQb4bM1ZM46EVqGF
          claim_id: c_2itnEGfQuGDKLoyBXxb9dV
          source_id: s_4xxZ5rnog3JHNpZkV9b1Bm
          stance: supports
          locator: CBDB:241089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241089）
          source: &a1
            id: s_4xxZ5rnog3JHNpZkV9b1Bm
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 241089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json
            external_identifier: CBDB:241089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nwv68rxgPZQpZ26EhnYakL
        subject_person_id: p_KVHgBFAQcpdJaxzNb8HXZD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜，明人物。正統十三年進士，籍贯安州。（中国历代人物传记资料库 CBDB 241089）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rxGxW4nCzSQRWWtdmI9PKU
          claim_id: c_Nwv68rxgPZQpZ26EhnYakL
          source_id: s_4xxZ5rnog3JHNpZkV9b1Bm
          stance: supports
          locator: CBDB:241089
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QqrKydLG5b9wi_DSnDsNZ0
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KVHgBFAQcpdJaxzNb8HXZD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I_-G4FdlDOSRm1oBm1Zk_A
          claim_id: c_QqrKydLG5b9wi_DSnDsNZ0
          source_id: s_AmvPMv3DquA1C6A9LVmYW6
          stance: supports
          locator: CBDB：兄弟 王育（208149）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王孜 与 王育 为同胞（CBDB 记「弟」），王育 之父／母即 王孜 之父／母。
          source:
            id: s_AmvPMv3DquA1C6A9LVmYW6
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 241089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json
            external_identifier: CBDB:241089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HJQdCKF1NWQxF4BJ2ijpLL
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WGNJHApafBSjpApWM2-sVO
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KVHgBFAQcpdJaxzNb8HXZD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iO_VBE3vyiU5143D9FVvyW
          claim_id: c_WGNJHApafBSjpApWM2-sVO
          source_id: s_AmvPMv3DquA1C6A9LVmYW6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208149 王育）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AmvPMv3DquA1C6A9LVmYW6
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 241089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json
            external_identifier: CBDB:241089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HYHpKaJa17iu8Upo6wdU7W
        status: active
        display_name: 王育
        merged_into_person_id: null
---

# 王孜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孜 | accepted |
| bio.summary | 王孜，明人物。正統十三年進士，籍贯安州。（中国历代人物传记资料库 CBDB 241089） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HJQdCKF1NWQxF4BJ2ijpLL | 王珪 | accepted |
| other | p_HYHpKaJa17iu8Upo6wdU7W | 王育 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孜（CBDB 241089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json)
