---
schema: wang-person/v1
id: p_nFbB2TJS3RUehW9HQ21FPR
status: active
merged_into: null
display_name: 王蘊章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qcbnSZW8umLoMBFuPv3MNa
        subject_person_id: p_nFbB2TJS3RUehW9HQ21FPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CpQ1Kr8hzgVckMujWg3cJz
          claim_id: c_qcbnSZW8umLoMBFuPv3MNa
          source_id: s_xt1uyF9P4Cx2bMRnr9FK6E
          stance: supports
          locator: CBDB:72180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72180）
          source: &a1
            id: s_xt1uyF9P4Cx2bMRnr9FK6E
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊章（CBDB 72180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72180&o=json
            external_identifier: CBDB:72180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nehh5xCFfLTQAW9HFFYVV6
        subject_person_id: p_nFbB2TJS3RUehW9HQ21FPR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Y6Sw38WDULX7qLmnqfbio
          claim_id: c_Nehh5xCFfLTQAW9HFFYVV6
          source_id: s_xt1uyF9P4Cx2bMRnr9FK6E
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
        id: c_vZbFS89K7cQqQoumsf8Kxh
        subject_person_id: p_nFbB2TJS3RUehW9HQ21FPR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1942年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ca9FJQc8FB4ihTSLhChJ4N
          claim_id: c_vZbFS89K7cQqQoumsf8Kxh
          source_id: s_xt1uyF9P4Cx2bMRnr9FK6E
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
        id: c_9abTdNyiWAMFkEuFNN474n
        subject_person_id: p_nFbB2TJS3RUehW9HQ21FPR
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
        - id: cs_V4tH3VYCbD1AYMrMXY47BA
          claim_id: c_9abTdNyiWAMFkEuFNN474n
          source_id: s_xt1uyF9P4Cx2bMRnr9FK6E
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

# 王蘊章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊章 | accepted |
| birth.date | 1884年 | accepted |
| death.date | 1942年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊章（CBDB 72180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72180&o=json)
