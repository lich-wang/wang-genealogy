---
schema: wang-person/v1
id: p_HRC6KSo3qWxMBvfanDfHjV
status: active
merged_into: null
display_name: 王鳴珂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nd8w8CKjRsB2mMALw4BnUf
        subject_person_id: p_HRC6KSo3qWxMBvfanDfHjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴珂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QQ5xV9GEXrSW1aGAeT1Hf
          claim_id: c_Nd8w8CKjRsB2mMALw4BnUf
          source_id: s_ggWsVMBdTLU5XPFAxYEsaZ
          stance: supports
          locator: CBDB:71768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71768）
          source: &a1
            id: s_ggWsVMBdTLU5XPFAxYEsaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴珂（CBDB 71768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71768&o=json
            external_identifier: CBDB:71768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PxiwJtsCZnjeoCU3iwYaM2
        subject_person_id: p_HRC6KSo3qWxMBvfanDfHjV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1615年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WD9yMHE9mFT9KAJ4PQZC9h
          claim_id: c_PxiwJtsCZnjeoCU3iwYaM2
          source_id: s_ggWsVMBdTLU5XPFAxYEsaZ
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
        id: c_PQGVjT1gQmqqLL6wt77UeM
        subject_person_id: p_HRC6KSo3qWxMBvfanDfHjV
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
        - id: cs_BXBLHCCeM5NWq4mQkxoemY
          claim_id: c_PQGVjT1gQmqqLL6wt77UeM
          source_id: s_ggWsVMBdTLU5XPFAxYEsaZ
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

# 王鳴珂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴珂 | accepted |
| birth.date | 1615年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴珂（CBDB 71768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71768&o=json)
