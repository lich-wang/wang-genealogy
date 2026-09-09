---
schema: wang-person/v1
id: p_6FyUrJ8ieL7NoYoAn7rw3R
status: active
merged_into: null
display_name: 王定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x3pSQtvHEAtBEAe4p4EC3d
        subject_person_id: p_6FyUrJ8ieL7NoYoAn7rw3R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yrkca9xwdTc8Deyx1k8u6Q
          claim_id: c_x3pSQtvHEAtBEAe4p4EC3d
          source_id: s_MzrVKJbbpZAVssQFVFTKPX
          stance: supports
          locator: CBDB:97864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97864）
          source: &a1
            id: s_MzrVKJbbpZAVssQFVFTKPX
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 97864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97864&o=json
            external_identifier: CBDB:97864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hsW74yGcZ3CfD9LkpoBEz8
        subject_person_id: p_6FyUrJ8ieL7NoYoAn7rw3R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DT5Ww4SrFMx6JntopPWXvU
          claim_id: c_hsW74yGcZ3CfD9LkpoBEz8
          source_id: s_MzrVKJbbpZAVssQFVFTKPX
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

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 97864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97864&o=json)
