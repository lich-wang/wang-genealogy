---
schema: wang-person/v1
id: p_dQ1sDfXNogRpbAJzcsg5My
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SG4E9oeNqNwox6P7pLGDtg
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZwspHD1UWGGT3myU5PjKF
          claim_id: c_SG4E9oeNqNwox6P7pLGDtg
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
          stance: supports
          locator: CBDB:198493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198493）
          source: &a1
            id: s_NBFB9Qn36bPn2hky8xfVPo
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 198493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198493&o=json
            external_identifier: CBDB:198493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u84ykmXRVkoedRk2NHSeCD
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ua7ZoREY3F3AnVTwK7U4Qx
          claim_id: c_u84ykmXRVkoedRk2NHSeCD
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
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
        id: c_CfKGc7w13fw8hC2bZpw658
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
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
        - id: cs_QGHrMqXtbpRWGmtCJfRdQK
          claim_id: c_CfKGc7w13fw8hC2bZpw658
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| birth.date | 1418年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 198493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198493&o=json)
