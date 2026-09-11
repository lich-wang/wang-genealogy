---
schema: wang-person/v1
id: p_mAQBjdU1yf5FwgKZ3j5HfL
status: active
merged_into: null
display_name: 王亶望
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3BADLzj7w3cRHeK2N4KJB9
        subject_person_id: p_mAQBjdU1yf5FwgKZ3j5HfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dLwig8SgamitYxfNG22Nuw
          claim_id: c_3BADLzj7w3cRHeK2N4KJB9
          source_id: s_7am2G77rUNPvcNGCf48HPm
          stance: supports
          locator: CBDB:57209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57209）
          source: &a1
            id: s_7am2G77rUNPvcNGCf48HPm
            source_type: api_record
            title: 中国历代人物传记资料库：王亶望（CBDB 57209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57209&o=json
            external_identifier: CBDB:57209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1XjHzVKSFouEj359D1U4ca
        subject_person_id: p_mAQBjdU1yf5FwgKZ3j5HfL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H7ChR5nv96WGwethuK43ww
          claim_id: c_1XjHzVKSFouEj359D1U4ca
          source_id: s_7am2G77rUNPvcNGCf48HPm
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
        id: c_Pg4JPJUDWhLojju6t6y7Eu
        subject_person_id: p_mAQBjdU1yf5FwgKZ3j5HfL
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
        - id: cs_k5995kXhW7WTP9eK5vz4Aj
          claim_id: c_Pg4JPJUDWhLojju6t6y7Eu
          source_id: s_7am2G77rUNPvcNGCf48HPm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mBG-oOEptmcSzKRhHeCtZ-
        subject_person_id: p_mAQBjdU1yf5FwgKZ3j5HfL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y9xi5GPdWUoNBPYmwpa5vm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7xvmK4192gULhQRhkwYBF
          claim_id: c_mBG-oOEptmcSzKRhHeCtZ-
          source_id: s_7am2G77rUNPvcNGCf48HPm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），428：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y9xi5GPdWUoNBPYmwpa5vm
        status: active
        display_name: 王庚官
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亶望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亶望 | accepted |
| death.date | 1781年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Y9xi5GPdWUoNBPYmwpa5vm | 王庚官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶望（CBDB 57209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57209&o=json)
