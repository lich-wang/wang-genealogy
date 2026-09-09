---
schema: wang-person/v1
id: p_DDPEbEeNqHkBnSYXBLEyv5
status: active
merged_into: null
display_name: 王留生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mx8aYrVRHkL4y8e5r138zB
        subject_person_id: p_DDPEbEeNqHkBnSYXBLEyv5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王留生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UP2ip88skauCcM3fpuTK36
          claim_id: c_Mx8aYrVRHkL4y8e5r138zB
          source_id: s_nBJY4KBXi95EU9KngHtsEa
          stance: supports
          locator: CBDB:139726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139726）
          source: &a1
            id: s_nBJY4KBXi95EU9KngHtsEa
            source_type: api_record
            title: 中国历代人物传记资料库：王留生（CBDB 139726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139726&o=json
            external_identifier: CBDB:139726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1LirYUie7DRjw87DPzevJt
        subject_person_id: p_DDPEbEeNqHkBnSYXBLEyv5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrEKmQGcCLVCfHDjoEUhcR
          claim_id: c_1LirYUie7DRjw87DPzevJt
          source_id: s_nBJY4KBXi95EU9KngHtsEa
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
        id: c_saWRQG54WQsKavLHJS63K7
        subject_person_id: p_DDPEbEeNqHkBnSYXBLEyv5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1F2e4KhnQ9LsfcA9vQZbhc
          claim_id: c_saWRQG54WQsKavLHJS63K7
          source_id: s_nBJY4KBXi95EU9KngHtsEa
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
        id: c_KULzqouf3cN2knNPdX5dnq
        subject_person_id: p_DDPEbEeNqHkBnSYXBLEyv5
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
        - id: cs_CjJdd2sTYEyEMYrukbnRj2
          claim_id: c_KULzqouf3cN2knNPdX5dnq
          source_id: s_nBJY4KBXi95EU9KngHtsEa
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

# 王留生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王留生 | accepted |
| birth.date | 600年 | accepted |
| death.date | 674年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王留生（CBDB 139726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139726&o=json)
