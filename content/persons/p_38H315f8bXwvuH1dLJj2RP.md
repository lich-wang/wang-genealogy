---
schema: wang-person/v1
id: p_38H315f8bXwvuH1dLJj2RP
status: active
merged_into: null
display_name: 王文鬱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PwmW7Q8ENa2Yp76i8adXGh
        subject_person_id: p_38H315f8bXwvuH1dLJj2RP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鬱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UcmMa7qxrVSPQnSiV2LLMf
          claim_id: c_PwmW7Q8ENa2Yp76i8adXGh
          source_id: s_USF7AcVXdxHinmQ6TQfjQ9
          stance: supports
          locator: CBDB:558093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558093）
          source: &a1
            id: s_USF7AcVXdxHinmQ6TQfjQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王文鬱（CBDB 558093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558093&o=json
            external_identifier: CBDB:558093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHynZ9YfVGUzrtQ6g9HMxR
        subject_person_id: p_38H315f8bXwvuH1dLJj2RP
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
        - id: cs_A2Aesk3G8ieFPkEtnB8VH1
          claim_id: c_CHynZ9YfVGUzrtQ6g9HMxR
          source_id: s_USF7AcVXdxHinmQ6TQfjQ9
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

# 王文鬱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文鬱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文鬱（CBDB 558093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558093&o=json)
