---
schema: wang-person/v1
id: p_GJDNJ46NK83DAgMBcrR5Nc
status: active
merged_into: null
display_name: 王克明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFpFJAYpgE69mHzK95zz3U
        subject_person_id: p_GJDNJ46NK83DAgMBcrR5Nc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iErzzUP7TBmbXQy8FCPeYW
          claim_id: c_LFpFJAYpgE69mHzK95zz3U
          source_id: s_UoeQB9jGbdiNH3V7pXLGB4
          stance: supports
          locator: CBDB:571309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571309）
          source: &a1
            id: s_UoeQB9jGbdiNH3V7pXLGB4
            source_type: api_record
            title: 中国历代人物传记资料库：王克明（CBDB 571309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571309&o=json
            external_identifier: CBDB:571309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hwc1DkBjAHx9XoS5fw3U5F
        subject_person_id: p_GJDNJ46NK83DAgMBcrR5Nc
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
        - id: cs_8erFUCCELaZKLAmUuE1ou6
          claim_id: c_hwc1DkBjAHx9XoS5fw3U5F
          source_id: s_UoeQB9jGbdiNH3V7pXLGB4
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

# 王克明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克明 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克明（CBDB 571309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571309&o=json)
