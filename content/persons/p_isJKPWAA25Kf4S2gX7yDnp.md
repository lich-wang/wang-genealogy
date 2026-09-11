---
schema: wang-person/v1
id: p_isJKPWAA25Kf4S2gX7yDnp
status: active
merged_into: null
display_name: 王邦重
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wLmi5kYCUGDGMfU2Yabw55
        subject_person_id: p_isJKPWAA25Kf4S2gX7yDnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMDmCBo55D4mv9A2JQieKJ
          claim_id: c_wLmi5kYCUGDGMfU2Yabw55
          source_id: s_bHF2C6B9R9XhFumGNihLui
          stance: supports
          locator: CBDB:578399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578399）
          source: &a1
            id: s_bHF2C6B9R9XhFumGNihLui
            source_type: api_record
            title: 中国历代人物传记资料库：王邦重（CBDB 578399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578399&o=json
            external_identifier: CBDB:578399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_743t96YpV3oQ5MtTGXhP6J
        subject_person_id: p_isJKPWAA25Kf4S2gX7yDnp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BrgL2c7SjXFzBvVTCHL7FN
          claim_id: c_743t96YpV3oQ5MtTGXhP6J
          source_id: s_bHF2C6B9R9XhFumGNihLui
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9cdIg37QI6m4hfIS8IW28R
        subject_person_id: p_isJKPWAA25Kf4S2gX7yDnp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3FEkPW3UtPGDsgVMDNkKYP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QPMO1XAGFJcBQolGnv3APg
          claim_id: c_9cdIg37QI6m4hfIS8IW28R
          source_id: s_tV8QV7DfXws67dFpVrbjAA
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163785：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tV8QV7DfXws67dFpVrbjAA
            source_type: api_record
            title: 中国历代人物传记资料库：王百齡（CBDB 578398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578398&o=json
            external_identifier: CBDB:578398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FEkPW3UtPGDsgVMDNkKYP
        status: active
        display_name: 王百齡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邦重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦重 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3FEkPW3UtPGDsgVMDNkKYP | 王百齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王百齡（CBDB 578398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578398&o=json)
- [中国历代人物传记资料库：王邦重（CBDB 578399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578399&o=json)
