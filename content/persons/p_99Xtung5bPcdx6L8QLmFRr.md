---
schema: wang-person/v1
id: p_99Xtung5bPcdx6L8QLmFRr
status: active
merged_into: null
display_name: 王員生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HCtJAUyp2wNyk3Zo22YJPq
        subject_person_id: p_99Xtung5bPcdx6L8QLmFRr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王員生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2BaVFHNTS2AfvgNTHArQb
          claim_id: c_HCtJAUyp2wNyk3Zo22YJPq
          source_id: s_KMALDgo2N3q2jQAtzqL7f7
          stance: supports
          locator: CBDB:691977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691977）
          source: &a1
            id: s_KMALDgo2N3q2jQAtzqL7f7
            source_type: api_record
            title: 中国历代人物传记资料库：王員生（CBDB 691977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691977&o=json
            external_identifier: CBDB:691977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QswxMsi7ABhUKxncb9dTo
        subject_person_id: p_99Xtung5bPcdx6L8QLmFRr
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
        - id: cs_9n23cq2EY9AcW5ApPntDjN
          claim_id: c_7QswxMsi7ABhUKxncb9dTo
          source_id: s_KMALDgo2N3q2jQAtzqL7f7
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

# 王員生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王員生 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王員生（CBDB 691977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691977&o=json)
