---
schema: wang-person/v1
id: p_dgnerANTQrZiG8M2CgJso2
status: active
merged_into: null
display_name: 王馨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2j7F74DWmB9QLEj9MGHBFk
        subject_person_id: p_dgnerANTQrZiG8M2CgJso2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ceov8ZwRYd8SnQ9RHoJ6VT
          claim_id: c_2j7F74DWmB9QLEj9MGHBFk
          source_id: s_MZ2PnnDMu85ATARGbsr6Hw
          stance: supports
          locator: CBDB:71303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71303）
          source: &a1
            id: s_MZ2PnnDMu85ATARGbsr6Hw
            source_type: api_record
            title: 中国历代人物传记资料库：王馨（CBDB 71303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71303&o=json
            external_identifier: CBDB:71303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_78wbfqQx9s7b5DAE4eS2Wx
        subject_person_id: p_dgnerANTQrZiG8M2CgJso2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1764年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nNzKSoCL1ok7J3dM2xbjn2
          claim_id: c_78wbfqQx9s7b5DAE4eS2Wx
          source_id: s_MZ2PnnDMu85ATARGbsr6Hw
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
        id: c_mTQThSU3nPJBGSn9q2M7zb
        subject_person_id: p_dgnerANTQrZiG8M2CgJso2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1TEoNmHP5TF89qFoJ3cbq
          claim_id: c_mTQThSU3nPJBGSn9q2M7zb
          source_id: s_MZ2PnnDMu85ATARGbsr6Hw
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
        id: c_orVgVmhkvNTX2vDn2diPLt
        subject_person_id: p_dgnerANTQrZiG8M2CgJso2
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
        - id: cs_HvmhmA9gwekSqvANKBRXwF
          claim_id: c_orVgVmhkvNTX2vDn2diPLt
          source_id: s_MZ2PnnDMu85ATARGbsr6Hw
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

# 王馨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王馨 | accepted |
| birth.date | 1764年 | accepted |
| death.date | 1824年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王馨（CBDB 71303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71303&o=json)
