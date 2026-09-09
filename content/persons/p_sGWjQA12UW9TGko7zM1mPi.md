---
schema: wang-person/v1
id: p_sGWjQA12UW9TGko7zM1mPi
status: active
merged_into: null
display_name: 王之鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7nU93J933EGmjgnN1CGnf3
        subject_person_id: p_sGWjQA12UW9TGko7zM1mPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rau32MHPmPfVoQr8JiYG8n
          claim_id: c_7nU93J933EGmjgnN1CGnf3
          source_id: s_7frZU4gGCeE6fGahPKnPrA
          stance: supports
          locator: CBDB:216058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216058）
          source: &a1
            id: s_7frZU4gGCeE6fGahPKnPrA
            source_type: api_record
            title: 中国历代人物传记资料库：王之鳳（CBDB 216058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216058&o=json
            external_identifier: CBDB:216058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WAmyyWn5nHq8A7fJMd8LT
        subject_person_id: p_sGWjQA12UW9TGko7zM1mPi
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
        - id: cs_ZAtHRMDZoR1BrLJ22TNWYd
          claim_id: c_5WAmyyWn5nHq8A7fJMd8LT
          source_id: s_7frZU4gGCeE6fGahPKnPrA
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

# 王之鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鳳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鳳（CBDB 216058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216058&o=json)
