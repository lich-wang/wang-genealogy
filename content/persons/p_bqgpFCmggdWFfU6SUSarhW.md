---
schema: wang-person/v1
id: p_bqgpFCmggdWFfU6SUSarhW
status: active
merged_into: null
display_name: 王庶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNmWEwfd63cDGS6NqrcaUZ
        subject_person_id: p_bqgpFCmggdWFfU6SUSarhW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNEMJVwrsewq7Vm52tGJRy
          claim_id: c_GNmWEwfd63cDGS6NqrcaUZ
          source_id: s_LxDLE7jE3D22juDcbyd77J
          stance: supports
          locator: CBDB:238299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238299）
          source: &a1
            id: s_LxDLE7jE3D22juDcbyd77J
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 238299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238299&o=json
            external_identifier: CBDB:238299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55rCMH1gqi6BiCADPKknsf
        subject_person_id: p_bqgpFCmggdWFfU6SUSarhW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶，明人物。正统七年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 238299）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ngOjOkd36_WTA1-KgLbXL
          claim_id: c_55rCMH1gqi6BiCADPKknsf
          source_id: s_LxDLE7jE3D22juDcbyd77J
          stance: supports
          locator: CBDB:238299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IwtUXT2GeU-mqtY-7Ep-pr
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqgpFCmggdWFfU6SUSarhW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aoMtmGNX-AapNHjfLzXgbs
          claim_id: c_IwtUXT2GeU-mqtY-7Ep-pr
          source_id: s_vGfRWNOIvf95t1QEyVzmFb
          stance: supports
          locator: CBDB：兄弟 王庾（126670）之父／母 王文貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王庶 与 王庾 为同胞（CBDB 记「兄」），王庾 之父／母即 王庶 之父／母。
          source:
            id: s_vGfRWNOIvf95t1QEyVzmFb
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 238299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238299&o=json
            external_identifier: CBDB:238299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gjG6yS82eJN4fARf6aE7Hv
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_28q_tBtRiF3Su0v8kBen3L
        subject_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bqgpFCmggdWFfU6SUSarhW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRbEBx4-glvyLyuV7kB2z2
          claim_id: c_28q_tBtRiF3Su0v8kBen3L
          source_id: s_vGfRWNOIvf95t1QEyVzmFb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126670 王庾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vGfRWNOIvf95t1QEyVzmFb
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 238299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238299&o=json
            external_identifier: CBDB:238299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6e5ELnuv2E5KGPsNrAysQX
        status: active
        display_name: 王庾
        merged_into_person_id: null
---

# 王庶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庶 | accepted |
| bio.summary | 王庶，明人物。正统七年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 238299） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gjG6yS82eJN4fARf6aE7Hv | 王文貴 | accepted |
| other | p_6e5ELnuv2E5KGPsNrAysQX | 王庾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庶（CBDB 238299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238299&o=json)
