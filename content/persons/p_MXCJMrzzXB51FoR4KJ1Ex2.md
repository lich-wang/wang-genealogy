---
schema: wang-person/v1
id: p_MXCJMrzzXB51FoR4KJ1Ex2
status: active
merged_into: null
display_name: 王德顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cMJE6PMdhczABWmGLABU4S
        subject_person_id: p_MXCJMrzzXB51FoR4KJ1Ex2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9NGnNmL12efmonKa5ZVhig
          claim_id: c_cMJE6PMdhczABWmGLABU4S
          source_id: s_E7ixcR3hz8g9oNreweJ9Qt
          stance: supports
          locator: CBDB:97892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97892）
          source: &a1
            id: s_E7ixcR3hz8g9oNreweJ9Qt
            source_type: api_record
            title: 中国历代人物传记资料库：王德顯（CBDB 97892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97892&o=json
            external_identifier: CBDB:97892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pyopy9Cn5UH1EEWB52845G
        subject_person_id: p_MXCJMrzzXB51FoR4KJ1Ex2
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
        - id: cs_A7ev4MpUi2iNVFTK3UhB5U
          claim_id: c_Pyopy9Cn5UH1EEWB52845G
          source_id: s_E7ixcR3hz8g9oNreweJ9Qt
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

# 王德顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德顯 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德顯（CBDB 97892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97892&o=json)
