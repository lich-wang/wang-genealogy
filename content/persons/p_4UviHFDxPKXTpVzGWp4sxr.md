---
schema: wang-person/v1
id: p_4UviHFDxPKXTpVzGWp4sxr
status: active
merged_into: null
display_name: 王摶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zZdWyxEX4GCw1CUa9V1x1W
        subject_person_id: p_4UviHFDxPKXTpVzGWp4sxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王摶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yaHpeKGi7ZQbWeLwF2zyo6
          claim_id: c_zZdWyxEX4GCw1CUa9V1x1W
          source_id: s_VyA5faMaMt4N1Maff59UZL
          stance: supports
          locator: CBDB:382232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382232）
          source: &a1
            id: s_VyA5faMaMt4N1Maff59UZL
            source_type: api_record
            title: 中国历代人物传记资料库：王摶（CBDB 382232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382232&o=json
            external_identifier: CBDB:382232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LUgEvbKM8jH8nbUo1XXaFT
        subject_person_id: p_4UviHFDxPKXTpVzGWp4sxr
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
        - id: cs_meJ5jNtXVjJ6UZarjoupny
          claim_id: c_LUgEvbKM8jH8nbUo1XXaFT
          source_id: s_VyA5faMaMt4N1Maff59UZL
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

# 王摶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王摶 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王摶（CBDB 382232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382232&o=json)
