---
schema: wang-person/v1
id: p_Kxxz7VV26GaAFMtZzQAQE1
status: active
merged_into: null
display_name: 王鑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RM1tj1kE4XXPGQ7SPxekYE
        subject_person_id: p_Kxxz7VV26GaAFMtZzQAQE1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W3jGtDPzFgVsFHxAaX9AdK
          claim_id: c_RM1tj1kE4XXPGQ7SPxekYE
          source_id: s_zLft2PupEJ8yeTGukpbLJT
          stance: supports
          locator: CBDB:71246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71246）
          source: &a1
            id: s_zLft2PupEJ8yeTGukpbLJT
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 71246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71246&o=json
            external_identifier: CBDB:71246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sAwteAD8qPAq13o54WaMDq
        subject_person_id: p_Kxxz7VV26GaAFMtZzQAQE1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PaHVcBiG4B3Kp23haSbH18
          claim_id: c_sAwteAD8qPAq13o54WaMDq
          source_id: s_zLft2PupEJ8yeTGukpbLJT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LLVsi9ASKMcSEnv2UGM3Kz
        subject_person_id: p_Kxxz7VV26GaAFMtZzQAQE1
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
        - id: cs_ZwGft81f5fCR169Uh67qnF
          claim_id: c_LLVsi9ASKMcSEnv2UGM3Kz
          source_id: s_zLft2PupEJ8yeTGukpbLJT
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

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| birth.date | 1847年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 71246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71246&o=json)
