---
schema: wang-person/v1
id: p_Zh6i8e12j7jyq7C43FgLdP
status: active
merged_into: null
display_name: 王玄同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MV8NQq7nyHZ27uim5UwVmb
        subject_person_id: p_Zh6i8e12j7jyq7C43FgLdP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ePNN7JL4y87xFb94iTkiq
          claim_id: c_MV8NQq7nyHZ27uim5UwVmb
          source_id: s_As1rV2gjbRuH58Ctv1jUDy
          stance: supports
          locator: CBDB:382869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382869）
          source: &a1
            id: s_As1rV2gjbRuH58Ctv1jUDy
            source_type: api_record
            title: 中国历代人物传记资料库：王玄同（CBDB 382869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382869&o=json
            external_identifier: CBDB:382869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d1GgbBP4rZCUsUQMQSXMMd
        subject_person_id: p_Zh6i8e12j7jyq7C43FgLdP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKRCt4dDKkq2Y3YB6kjQWG
          claim_id: c_d1GgbBP4rZCUsUQMQSXMMd
          source_id: s_As1rV2gjbRuH58Ctv1jUDy
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

# 王玄同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄同 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄同（CBDB 382869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382869&o=json)
