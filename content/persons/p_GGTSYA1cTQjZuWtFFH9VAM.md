---
schema: wang-person/v1
id: p_GGTSYA1cTQjZuWtFFH9VAM
status: active
merged_into: null
display_name: 王埰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M4czKYHX6t7UjFwQPhxVWL
        subject_person_id: p_GGTSYA1cTQjZuWtFFH9VAM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZHsjiCqB2EAd6R7d2TT5nd
          claim_id: c_M4czKYHX6t7UjFwQPhxVWL
          source_id: s_K9wp3ZLDS4EdNpENA8BR3b
          stance: supports
          locator: CBDB:476616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476616）
          source: &a1
            id: s_K9wp3ZLDS4EdNpENA8BR3b
            source_type: api_record
            title: 中国历代人物传记资料库：王埰（CBDB 476616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476616&o=json
            external_identifier: CBDB:476616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ra5UBpnVhfpMrLQrN5im1Z
        subject_person_id: p_GGTSYA1cTQjZuWtFFH9VAM
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
        - id: cs_kZCobLxZoDSUgiiFxYEKk7
          claim_id: c_Ra5UBpnVhfpMrLQrN5im1Z
          source_id: s_K9wp3ZLDS4EdNpENA8BR3b
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

# 王埰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埰（CBDB 476616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476616&o=json)
