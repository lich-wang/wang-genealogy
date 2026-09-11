---
schema: wang-person/v1
id: p_BbWngpSB9EAqEnSXLPWm75
status: active
merged_into: null
display_name: 王之鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GtN5kJcTdNKvVP5zADvoGJ
        subject_person_id: p_BbWngpSB9EAqEnSXLPWm75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z9u1acaMCr8zMWY8PS993t
          claim_id: c_GtN5kJcTdNKvVP5zADvoGJ
          source_id: s_P9hGFcC7kH1jNGYhLb9EvY
          stance: supports
          locator: CBDB:342554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342554）
          source: &a1
            id: s_P9hGFcC7kH1jNGYhLb9EvY
            source_type: api_record
            title: 中国历代人物传记资料库：王之鼎（CBDB 342554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342554&o=json
            external_identifier: CBDB:342554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HX7BB3R5vEstJvgXVcDw8N
        subject_person_id: p_BbWngpSB9EAqEnSXLPWm75
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1649年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KWA5ssWtQjrZfu6o3PaDJL
          claim_id: c_HX7BB3R5vEstJvgXVcDw8N
          source_id: s_P9hGFcC7kH1jNGYhLb9EvY
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
        id: c_wHo8gurEzc268oGBkNMGNn
        subject_person_id: p_BbWngpSB9EAqEnSXLPWm75
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
        - id: cs_VXwmwBFH7FycrE9CfhTinN
          claim_id: c_wHo8gurEzc268oGBkNMGNn
          source_id: s_P9hGFcC7kH1jNGYhLb9EvY
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
        id: c_tb3oO6KBvlg_Rvq6hvEyo9
        subject_person_id: p_BbWngpSB9EAqEnSXLPWm75
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AA9qTqwgfnAAmUDeinZnPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnYVgcdSGlUpQSj5ByVR6L
          claim_id: c_tb3oO6KBvlg_Rvq6hvEyo9
          source_id: s_GUSoYgcmdyNNMFz11TFrQZ
          stance: supports
          locator: 紹興府志:八十卷，Igid=316436：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GUSoYgcmdyNNMFz11TFrQZ
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 561539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561539&o=json
            external_identifier: CBDB:561539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AA9qTqwgfnAAmUDeinZnPH
        status: active
        display_name: 王紀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鼎 | accepted |
| death.date | 1649年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AA9qTqwgfnAAmUDeinZnPH | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 561539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561539&o=json)
- [中国历代人物传记资料库：王之鼎（CBDB 342554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342554&o=json)
