---
schema: wang-person/v1
id: p_1VuPPni4ycbcynctu4Q31C
status: active
merged_into: null
display_name: 王伯貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUEV3oWtQj3u2FKrJnjMZF
        subject_person_id: p_1VuPPni4ycbcynctu4Q31C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5zNG8tm3kzmU95VR6HFuFJ
          claim_id: c_iUEV3oWtQj3u2FKrJnjMZF
          source_id: s_w17DnE5148C4KUKFcHaQpM
          stance: supports
          locator: CBDB:126550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126550）
          source: &a1
            id: s_w17DnE5148C4KUKFcHaQpM
            source_type: api_record
            title: 中国历代人物传记资料库：王伯貞（CBDB 126550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126550&o=json
            external_identifier: CBDB:126550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NsynGujk3ih1Q4ERUGvwQe
        subject_person_id: p_1VuPPni4ycbcynctu4Q31C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1342年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkFx59cosLK5ZoN9WQ2D4V
          claim_id: c_NsynGujk3ih1Q4ERUGvwQe
          source_id: s_w17DnE5148C4KUKFcHaQpM
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
        id: c_s6M4P1842CtUnuGdCct3Pb
        subject_person_id: p_1VuPPni4ycbcynctu4Q31C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kt3q6JmxxUzGdt8pRpjJkK
          claim_id: c_s6M4P1842CtUnuGdCct3Pb
          source_id: s_w17DnE5148C4KUKFcHaQpM
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
        id: c_754F5yNY8PeGjWbA4YMGQ3
        subject_person_id: p_1VuPPni4ycbcynctu4Q31C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATsNKnm3ZU2rszx4nk48zG
          claim_id: c_754F5yNY8PeGjWbA4YMGQ3
          source_id: s_w17DnE5148C4KUKFcHaQpM
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

# 王伯貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯貞 | accepted |
| birth.date | 1342年 | accepted |
| death.date | 1416年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯貞（CBDB 126550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126550&o=json)
