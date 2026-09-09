---
schema: wang-person/v1
id: p_MGCCJ439zXDspjC5jauTe5
status: active
merged_into: null
display_name: 王一鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeLwXJcLpP7zhQjEHPozJz
        subject_person_id: p_MGCCJ439zXDspjC5jauTe5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9E5gBM7gFXARhAUGpN28vH
          claim_id: c_NeLwXJcLpP7zhQjEHPozJz
          source_id: s_WKZG8KwrGWYRTX2Xs6ueVm
          stance: supports
          locator: CBDB:57812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57812）
          source: &a1
            id: s_WKZG8KwrGWYRTX2Xs6ueVm
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 57812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57812&o=json
            external_identifier: CBDB:57812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1iEKcXp84sPEP7cptbyw9b
        subject_person_id: p_MGCCJ439zXDspjC5jauTe5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mA9irjw8jaELmiDkLgzXcu
          claim_id: c_1iEKcXp84sPEP7cptbyw9b
          source_id: s_WKZG8KwrGWYRTX2Xs6ueVm
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
        id: c_qNHEzRS4ozwoxC5MDaRXyD
        subject_person_id: p_MGCCJ439zXDspjC5jauTe5
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
        - id: cs_QYG6tAL4osbMGyvSXCHDGu
          claim_id: c_qNHEzRS4ozwoxC5MDaRXyD
          source_id: s_WKZG8KwrGWYRTX2Xs6ueVm
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

# 王一鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳳 | accepted |
| death.date | 1848年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鳳（CBDB 57812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57812&o=json)
