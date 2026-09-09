---
schema: wang-person/v1
id: p_LMy3aEP2d6n2hq41CmDB4A
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_79mPKDiQh2YNPVm6tSdQ6D
        subject_person_id: p_LMy3aEP2d6n2hq41CmDB4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A1aLBXng3K3LEoarBsfNkp
          claim_id: c_79mPKDiQh2YNPVm6tSdQ6D
          source_id: s_jjKihTVEMDSrsEMYuJW6dw
          stance: supports
          locator: CBDB:100863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100863）
          source: &a1
            id: s_jjKihTVEMDSrsEMYuJW6dw
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 100863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100863&o=json
            external_identifier: CBDB:100863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xAu4zK4XPhXQSK7rbTUJqb
        subject_person_id: p_LMy3aEP2d6n2hq41CmDB4A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1277年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGX9Kton1kY4PVdb4z9Gsv
          claim_id: c_xAu4zK4XPhXQSK7rbTUJqb
          source_id: s_jjKihTVEMDSrsEMYuJW6dw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SF1vLaBqcwTdiwuPJGhPBr
        subject_person_id: p_LMy3aEP2d6n2hq41CmDB4A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1349年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qi2KGEh4hFXL4vv8iDv73p
          claim_id: c_SF1vLaBqcwTdiwuPJGhPBr
          source_id: s_jjKihTVEMDSrsEMYuJW6dw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtLeHAKnDJFNaVM1yz39mV
        subject_person_id: p_LMy3aEP2d6n2hq41CmDB4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UUormBw15cdP1vGx91e1ra
          claim_id: c_EtLeHAKnDJFNaVM1yz39mV
          source_id: s_jjKihTVEMDSrsEMYuJW6dw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| birth.date | 1277年 | accepted |
| death.date | 1349年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 100863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100863&o=json)
