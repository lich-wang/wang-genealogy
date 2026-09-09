---
schema: wang-person/v1
id: p_k7j2kTSqw8xmFbcrQ74eeU
status: active
merged_into: null
display_name: 王元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBH4kNotFHJea6suq7UzsZ
        subject_person_id: p_k7j2kTSqw8xmFbcrQ74eeU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lt3mYWLUUtacpTF6CqjPXo
          claim_id: c_kBH4kNotFHJea6suq7UzsZ
          source_id: s_Gu2Mr9W22BFXKHASJTUxgQ
          stance: supports
          locator: CBDB:140864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140864）
          source: &a1
            id: s_Gu2Mr9W22BFXKHASJTUxgQ
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 140864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140864&o=json
            external_identifier: CBDB:140864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2xeyYzAQrL8pAvQggNEYh2
        subject_person_id: p_k7j2kTSqw8xmFbcrQ74eeU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 726年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWYGaP36eSWBndVLaraYZF
          claim_id: c_2xeyYzAQrL8pAvQggNEYh2
          source_id: s_Gu2Mr9W22BFXKHASJTUxgQ
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
        id: c_kVc2H97PAFNh6SFNniwTt9
        subject_person_id: p_k7j2kTSqw8xmFbcrQ74eeU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2a8CZ3jNn8sEMG1jEhZQE
          claim_id: c_kVc2H97PAFNh6SFNniwTt9
          source_id: s_Gu2Mr9W22BFXKHASJTUxgQ
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

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| death.date | 726年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 140864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140864&o=json)
