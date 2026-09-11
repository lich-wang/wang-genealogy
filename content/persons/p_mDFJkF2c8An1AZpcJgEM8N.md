---
schema: wang-person/v1
id: p_mDFJkF2c8An1AZpcJgEM8N
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 138301
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZMOPvdHsmEji_k2PSqpBf
        subject_person_id: p_mDFJkF2c8An1AZpcJgEM8N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdvC-XX3V5AqhTnd_2cH38
          claim_id: c_1ZMOPvdHsmEji_k2PSqpBf
          source_id: s_eV15F0TNvqszllQZxvZVmN
          stance: supports
          locator: CBDB:138301
          quotation: null
          interpretation_note: CBDB 明确记录的王錫之配偶
          source: &a1
            id: s_eV15F0TNvqszllQZxvZVmN
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王錫之妻)（CBDB 138301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138301&o=json
            external_identifier: CBDB:138301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qRFxZnHwtdu7cSWL221H5J
        subject_person_id: p_5A4S7L1Jx9xxrAHuLA5JAa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mDFJkF2c8An1AZpcJgEM8N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emvTTIxmbTGvx3boI-Xaof
          claim_id: c_qRFxZnHwtdu7cSWL221H5J
          source_id: s_eV15F0TNvqszllQZxvZVmN
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5A4S7L1Jx9xxrAHuLA5JAa
        status: active
        display_name: 王錫之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5A4S7L1Jx9xxrAHuLA5JAa | 王錫之 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王錫之妻)（CBDB 138301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138301&o=json)
