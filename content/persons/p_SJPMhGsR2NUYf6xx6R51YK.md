---
schema: wang-person/v1
id: p_SJPMhGsR2NUYf6xx6R51YK
status: active
merged_into: null
display_name: 王運新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rc1Awcw4gbR4PW62UaGh6e
        subject_person_id: p_SJPMhGsR2NUYf6xx6R51YK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHuo98aKE6hCR4s5pvrhoc
          claim_id: c_rc1Awcw4gbR4PW62UaGh6e
          source_id: s_nPVX4GcGF8bez6jer7mjL9
          stance: supports
          locator: CBDB:71651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71651）
          source: &a1
            id: s_nPVX4GcGF8bez6jer7mjL9
            source_type: api_record
            title: 中国历代人物传记资料库：王運新（CBDB 71651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71651&o=json
            external_identifier: CBDB:71651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pGsQYCAD6Q7jVMRKkm8pLj
        subject_person_id: p_SJPMhGsR2NUYf6xx6R51YK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wyVsJh421zM4PhacbQxsTf
          claim_id: c_pGsQYCAD6Q7jVMRKkm8pLj
          source_id: s_nPVX4GcGF8bez6jer7mjL9
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
        id: c_r5Ju8V6CHxA158Kd5RXQeC
        subject_person_id: p_SJPMhGsR2NUYf6xx6R51YK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1916年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUX7XRFCQmUEzYBd152wnU
          claim_id: c_r5Ju8V6CHxA158Kd5RXQeC
          source_id: s_nPVX4GcGF8bez6jer7mjL9
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
        id: c_gTcZ2WS1UTyHHqi1VBHTfs
        subject_person_id: p_SJPMhGsR2NUYf6xx6R51YK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DwQQYDiSCxgLc9E1VfDWm
          claim_id: c_gTcZ2WS1UTyHHqi1VBHTfs
          source_id: s_nPVX4GcGF8bez6jer7mjL9
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

# 王運新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運新 | accepted |
| birth.date | 1840年 | accepted |
| death.date | 1916年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運新（CBDB 71651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71651&o=json)
