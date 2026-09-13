---
schema: wang-person/v1
id: p_RBEo71kRbE8kErjSrTc5Qb
status: active
merged_into: null
display_name: 王宗智
cbdb_id: 286126
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SAQRtEJXDKiYAvBX8TkCaB
        subject_person_id: p_RBEo71kRbE8kErjSrTc5Qb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗智，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 286126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wihcTPmkmMwWGVLJ7DUT-Z
          claim_id: c_SAQRtEJXDKiYAvBX8TkCaB
          source_id: s_7j7yNMtPWAQUWPCeW7LqTj
          stance: supports
          locator: CBDB:286126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7j7yNMtPWAQUWPCeW7LqTj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗智（CBDB 286126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json
            external_identifier: CBDB:286126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLyXrDMSirGMUhW2Zj954Z
        subject_person_id: p_RBEo71kRbE8kErjSrTc5Qb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Fowm1pqz1i38RXopYryBKH
          claim_id: c_HLyXrDMSirGMUhW2Zj954Z
          source_id: s_7j7yNMtPWAQUWPCeW7LqTj
          stance: supports
          locator: CBDB:286126
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PExiPM6HjQHXprmZmF5DSU
        subject_person_id: p_RBEo71kRbE8kErjSrTc5Qb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSfzquvdwYj71uqMdGnqtQ
          claim_id: c_PExiPM6HjQHXprmZmF5DSU
          source_id: s_7j7yNMtPWAQUWPCeW7LqTj
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7j7yNMtPWAQUWPCeW7LqTj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗智（CBDB 286126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json
            external_identifier: CBDB:286126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
  other: []
---

# 王宗智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗智，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 286126） | accepted |
| name.primary | 王宗智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗智（CBDB 286126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286126&o=json)
