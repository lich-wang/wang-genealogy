---
schema: wang-person/v1
id: p_LmKuR6QP5HXTQ7tPNudqsU
status: active
merged_into: null
display_name: 王顗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLmLkncVPGycxRYTP1ZNoV
        subject_person_id: p_LmKuR6QP5HXTQ7tPNudqsU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V1QRyZtMhq39TNQDFmtaXK
          claim_id: c_fLmLkncVPGycxRYTP1ZNoV
          source_id: s_JAPGL3kEFm7fDv6MxjRKow
          stance: supports
          locator: CBDB:20452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20452）
          source: &a1
            id: s_JAPGL3kEFm7fDv6MxjRKow
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 20452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json
            external_identifier: CBDB:20452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9tCjtp5k5aMKo21w6oTpB1
        subject_person_id: p_LmKuR6QP5HXTQ7tPNudqsU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顗，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 20452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8AxK6x0ToVKKV3zJGpNU0W
          claim_id: c_9tCjtp5k5aMKo21w6oTpB1
          source_id: s_JAPGL3kEFm7fDv6MxjRKow
          stance: supports
          locator: CBDB:20452
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q_aVARaT1NnUAOSDtPdx6d
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmKuR6QP5HXTQ7tPNudqsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoBbyOEUAjDuToiwIUXjze
          claim_id: c_Q_aVARaT1NnUAOSDtPdx6d
          source_id: s_S_BpGd26BxRrWczB0CwZi7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12167）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_S_BpGd26BxRrWczB0CwZi7
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 20452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json
            external_identifier: CBDB:20452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M19oFx28z6UHMwn5fL36T6
        status: active
        display_name: 王庭璋
        merged_into_person_id: null
    - claim:
        id: c_SiMyoo-GMTx_E6sWdVjanQ
        subject_person_id: p_Vtipw6MPXDsx7m64K8GKg4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmKuR6QP5HXTQ7tPNudqsU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aryAN9Zr463WALFg-iPXB8
          claim_id: c_SiMyoo-GMTx_E6sWdVjanQ
          source_id: s_S_BpGd26BxRrWczB0CwZi7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37941）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_S_BpGd26BxRrWczB0CwZi7
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 20452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json
            external_identifier: CBDB:20452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vtipw6MPXDsx7m64K8GKg4
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顗 | accepted |
| bio.summary | 王顗，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 20452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M19oFx28z6UHMwn5fL36T6 | 王庭璋 | accepted |
| parents | p_Vtipw6MPXDsx7m64K8GKg4 | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顗（CBDB 20452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20452&o=json)
