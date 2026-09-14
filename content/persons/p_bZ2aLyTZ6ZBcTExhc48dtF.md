---
schema: wang-person/v1
id: p_bZ2aLyTZ6ZBcTExhc48dtF
status: active
merged_into: null
display_name: 王景琚
cbdb_id: 25088
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUntEyAzaUQuLnfbeu6LbU
        subject_person_id: p_bZ2aLyTZ6ZBcTExhc48dtF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景琚，宋人物。籍贯開封，曾任皇城使。（中国历代人物传记资料库 CBDB 25088）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rVhP2ENJQYbF7ChERFeeCV
          claim_id: c_DUntEyAzaUQuLnfbeu6LbU
          source_id: s_i374nkjTPNsMjNXFxRJFuK
          stance: supports
          locator: CBDB:25088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_i374nkjTPNsMjNXFxRJFuK
            source_type: api_record
            title: 中国历代人物传记资料库：王景琚（CBDB 25088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25088&o=json
            external_identifier: CBDB:25088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lpmygh49oQRbDdxLThBDL4
        subject_person_id: p_bZ2aLyTZ6ZBcTExhc48dtF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gbFLvdwyW1YJ9e2kvmQ6oc
          claim_id: c_Lpmygh49oQRbDdxLThBDL4
          source_id: s_i374nkjTPNsMjNXFxRJFuK
          stance: supports
          locator: CBDB:25088
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xfzaGT9LWddJ1UkAIwrNQG
        subject_person_id: p_bZ2aLyTZ6ZBcTExhc48dtF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q1HFE8oSn85haUzRcMpjwN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kY9nr2-lPasKEz5UF8_Gj
          claim_id: c_xfzaGT9LWddJ1UkAIwrNQG
          source_id: s_nKF1DQTUOe1tbWHtgU2hCe
          stance: supports
          locator: CBDB 亲属：父（KinPerson 25088）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_nKF1DQTUOe1tbWHtgU2hCe
            source_type: api_record
            title: 中国历代人物传记资料库：王履（CBDB 25089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25089&o=json
            external_identifier: CBDB:25089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q1HFE8oSn85haUzRcMpjwN
        status: active
        display_name: 王履
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景琚，宋人物。籍贯開封，曾任皇城使。（中国历代人物传记资料库 CBDB 25088） | accepted |
| name.primary | 王景琚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_q1HFE8oSn85haUzRcMpjwN | 王履 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景琚（CBDB 25088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25088&o=json)
- [中国历代人物传记资料库：王履（CBDB 25089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25089&o=json)
