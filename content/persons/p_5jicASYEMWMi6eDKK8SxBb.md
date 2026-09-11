---
schema: wang-person/v1
id: p_5jicASYEMWMi6eDKK8SxBb
status: active
merged_into: null
display_name: 王鼐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHE5NvxCcJLgofhDHf33zv
        subject_person_id: p_5jicASYEMWMi6eDKK8SxBb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YTEYA2yzz5PEYJaTzg4fDU
          claim_id: c_AHE5NvxCcJLgofhDHf33zv
          source_id: s_EgLWADGTueKPdKDsBAptUH
          stance: supports
          locator: CBDB:61201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61201）
          source: &a1
            id: s_EgLWADGTueKPdKDsBAptUH
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 61201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61201&o=json
            external_identifier: CBDB:61201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iST3dqDt3Y4mrV9VKysP8Y
        subject_person_id: p_5jicASYEMWMi6eDKK8SxBb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pS1yZL2vEsFcFXcB48vRqA
          claim_id: c_iST3dqDt3Y4mrV9VKysP8Y
          source_id: s_EgLWADGTueKPdKDsBAptUH
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
        id: c_iZCCe66SuAScxCJbPf7PEw
        subject_person_id: p_5jicASYEMWMi6eDKK8SxBb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐（生于1630年），清人物。籍贯林縣，曾任府推官。（中国历代人物传记资料库 CBDB 61201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6mHXocBXgXpAuTAKmYkk6_
          claim_id: c_iZCCe66SuAScxCJbPf7PEw
          source_id: s_EgLWADGTueKPdKDsBAptUH
          stance: supports
          locator: CBDB:61201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| birth.date | 1630年 | accepted |
| bio.summary | 王鼐（生于1630年），清人物。籍贯林縣，曾任府推官。（中国历代人物传记资料库 CBDB 61201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 61201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61201&o=json)
