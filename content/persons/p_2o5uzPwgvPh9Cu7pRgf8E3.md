---
schema: wang-person/v1
id: p_2o5uzPwgvPh9Cu7pRgf8E3
status: active
merged_into: null
display_name: 王禹偁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vhHz9dp7T14nvdn3g4b6MX
        subject_person_id: p_2o5uzPwgvPh9Cu7pRgf8E3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹偁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gBjTejVxB2Ec7EiRr8JEjh
          claim_id: c_vhHz9dp7T14nvdn3g4b6MX
          source_id: s_2KEZmgJYA7vsg66LVPH3xF
          stance: supports
          locator: CBDB:3997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3997）
          source: &a1
            id: s_2KEZmgJYA7vsg66LVPH3xF
            source_type: api_record
            title: 中国历代人物传记资料库：王禹偁（CBDB 3997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3997&o=json
            external_identifier: CBDB:3997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Lbqyypbt3nbi6hBLJAPt74
        subject_person_id: p_2o5uzPwgvPh9Cu7pRgf8E3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 954年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUghLnauaVnsMt61mqpTAG
          claim_id: c_Lbqyypbt3nbi6hBLJAPt74
          source_id: s_2KEZmgJYA7vsg66LVPH3xF
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
        id: c_1T9xLYxyA7AN5iK9jhQ3MZ
        subject_person_id: p_2o5uzPwgvPh9Cu7pRgf8E3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1001年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmvYjNgw6MT862HXjNHTKv
          claim_id: c_1T9xLYxyA7AN5iK9jhQ3MZ
          source_id: s_2KEZmgJYA7vsg66LVPH3xF
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
        id: c_kWYGPDZzJceE4azoTxe3rZ
        subject_person_id: p_2o5uzPwgvPh9Cu7pRgf8E3
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
        - id: cs_x51uMX6qUrPKfwn3fc5PEB
          claim_id: c_kWYGPDZzJceE4azoTxe3rZ
          source_id: s_2KEZmgJYA7vsg66LVPH3xF
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
  descendants:
    - claim:
        id: c_LZpAiLbCvFi788ZDWlaNWo
        subject_person_id: p_2o5uzPwgvPh9Cu7pRgf8E3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwAgcpRjLxjLJ7tEedLAQp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nnr1LxqZ4OhWi7i9HTar-A
          claim_id: c_LZpAiLbCvFi788ZDWlaNWo
          source_id: s_2KEZmgJYA7vsg66LVPH3xF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，640：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hwAgcpRjLxjLJ7tEedLAQp
        status: active
        display_name: 王汾
        merged_into_person_id: null
  other: []
---

# 王禹偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹偁 | accepted |
| birth.date | 954年 | accepted |
| death.date | 1001年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hwAgcpRjLxjLJ7tEedLAQp | 王汾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禹偁（CBDB 3997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3997&o=json)
