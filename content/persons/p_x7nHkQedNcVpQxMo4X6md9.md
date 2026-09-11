---
schema: wang-person/v1
id: p_x7nHkQedNcVpQxMo4X6md9
status: active
merged_into: null
display_name: 王謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3x93mYxF9Qv4iViMQ8pX7V
        subject_person_id: p_x7nHkQedNcVpQxMo4X6md9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZeM6Hhqg7XptJyzqUHUgCi
          claim_id: c_3x93mYxF9Qv4iViMQ8pX7V
          source_id: s_u8LLaY1onPa57tsZxLGvQT
          stance: supports
          locator: CBDB:200085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200085）
          source: &a1
            id: s_u8LLaY1onPa57tsZxLGvQT
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 200085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200085&o=json
            external_identifier: CBDB:200085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_67iz7pWEej2JPe1rmXUsi6
        subject_person_id: p_x7nHkQedNcVpQxMo4X6md9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSCQ5NtgMDV8RBE2pR47fB
          claim_id: c_67iz7pWEej2JPe1rmXUsi6
          source_id: s_u8LLaY1onPa57tsZxLGvQT
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
        id: c_xawcrRpawvX3ah79Vd9HZf
        subject_person_id: p_x7nHkQedNcVpQxMo4X6md9
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
        - id: cs_7GwB14TgsBsxiZ5h6EmFH1
          claim_id: c_xawcrRpawvX3ah79Vd9HZf
          source_id: s_u8LLaY1onPa57tsZxLGvQT
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
  ancestors:
    - claim:
        id: c_AAqiRop8xkiFJ1Odx8d5uY
        subject_person_id: p_4v2LXAEJV5JBL6unrk4WXN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x7nHkQedNcVpQxMo4X6md9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcr2QKgKKrVdXNAgv3YIaE
          claim_id: c_AAqiRop8xkiFJ1Odx8d5uY
          source_id: s_N7z1kGkhhraeGuNF2XSzgA
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N7z1kGkhhraeGuNF2XSzgA
            source_type: api_record
            title: 中国历代人物传记资料库：王士能（CBDB 253538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253538&o=json
            external_identifier: CBDB:253538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4v2LXAEJV5JBL6unrk4WXN
        status: active
        display_name: 王士能
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4v2LXAEJV5JBL6unrk4WXN | 王士能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 200085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200085&o=json)
- [中国历代人物传记资料库：王士能（CBDB 253538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253538&o=json)
