---
schema: wang-person/v1
id: p_ok9dfyMkfikcpct7fKxMS3
status: active
merged_into: null
display_name: 王璜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rBAxz6ofHMtyLnfVxfBxNe
        subject_person_id: p_ok9dfyMkfikcpct7fKxMS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hj3H5dgu9osd2UK39JJQF9
          claim_id: c_rBAxz6ofHMtyLnfVxfBxNe
          source_id: s_ATQ2zruoDM9cTa6qHMqj9g
          stance: supports
          locator: CBDB:202300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202300）
          source: &a1
            id: s_ATQ2zruoDM9cTa6qHMqj9g
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 202300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202300&o=json
            external_identifier: CBDB:202300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fsnXVfMGRTzF9aaWQiJ7p5
        subject_person_id: p_ok9dfyMkfikcpct7fKxMS3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMPJgZMAVBU5cT7BCUtix9
          claim_id: c_fsnXVfMGRTzF9aaWQiJ7p5
          source_id: s_ATQ2zruoDM9cTa6qHMqj9g
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
        id: c_F1iKZEccz78bouWFoT6nZF
        subject_person_id: p_ok9dfyMkfikcpct7fKxMS3
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
        - id: cs_cV9RaQBmyjndsHLh1XyJAA
          claim_id: c_F1iKZEccz78bouWFoT6nZF
          source_id: s_ATQ2zruoDM9cTa6qHMqj9g
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
        id: c_ZpqOEd-Y4KTwuVy0AA0mno
        subject_person_id: p_cPXdoy79boNQ9rL32YEHK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ok9dfyMkfikcpct7fKxMS3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m-oGsbfq7exCCmiCWf9hc1
          claim_id: c_ZpqOEd-Y4KTwuVy0AA0mno
          source_id: s_vEQE2HqKNGeHhBjAyxXHXN
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第二百零五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vEQE2HqKNGeHhBjAyxXHXN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲禮（CBDB 286303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286303&o=json
            external_identifier: CBDB:286303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cPXdoy79boNQ9rL32YEHK7
        status: active
        display_name: 王仲禮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璜 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_cPXdoy79boNQ9rL32YEHK7 | 王仲禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璜（CBDB 202300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202300&o=json)
- [中国历代人物传记资料库：王仲禮（CBDB 286303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286303&o=json)
