---
schema: wang-person/v1
id: p_PKaYZBKpVoQNs2v9NFH6n6
status: active
merged_into: null
display_name: 王鴻舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dtiLqctWM3m3Y6xetbev5r
        subject_person_id: p_PKaYZBKpVoQNs2v9NFH6n6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6HmB8d1p1qh2WX5AAq457
          claim_id: c_dtiLqctWM3m3Y6xetbev5r
          source_id: s_sh7R6fTtBehM9Bv6Sot4L1
          stance: supports
          locator: CBDB:72015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72015）
          source: &a1
            id: s_sh7R6fTtBehM9Bv6Sot4L1
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻舉（CBDB 72015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72015&o=json
            external_identifier: CBDB:72015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HLVC1MKrMcSabottiA4jp3
        subject_person_id: p_PKaYZBKpVoQNs2v9NFH6n6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2s8P6BVGN1cWPAttQoddk8
          claim_id: c_HLVC1MKrMcSabottiA4jp3
          source_id: s_sh7R6fTtBehM9Bv6Sot4L1
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
        id: c_yxar1ASi85LNy1w55JJsM3
        subject_person_id: p_PKaYZBKpVoQNs2v9NFH6n6
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
        - id: cs_31aTkBGvNFS9E2MpytrY1d
          claim_id: c_yxar1ASi85LNy1w55JJsM3
          source_id: s_sh7R6fTtBehM9Bv6Sot4L1
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

# 王鴻舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻舉 | accepted |
| birth.date | 1825年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻舉（CBDB 72015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72015&o=json)
