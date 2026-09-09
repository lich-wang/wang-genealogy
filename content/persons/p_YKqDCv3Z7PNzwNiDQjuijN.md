---
schema: wang-person/v1
id: p_YKqDCv3Z7PNzwNiDQjuijN
status: active
merged_into: null
display_name: 王傅薪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PuQcFotDno3dEF46RNo9a
        subject_person_id: p_YKqDCv3Z7PNzwNiDQjuijN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅薪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LghEmcxZkJ4WTFKKFVr91C
          claim_id: c_9PuQcFotDno3dEF46RNo9a
          source_id: s_9ccXaN435rkznmL9ZLZst4
          stance: supports
          locator: CBDB:636089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636089）
          source: &a1
            id: s_9ccXaN435rkznmL9ZLZst4
            source_type: api_record
            title: 中国历代人物传记资料库：王傅薪（CBDB 636089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636089&o=json
            external_identifier: CBDB:636089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xwxHyYE8BVcNs8Wk2gaLsb
        subject_person_id: p_YKqDCv3Z7PNzwNiDQjuijN
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
        - id: cs_jokACp2mJnACxxRs5A6WCi
          claim_id: c_xwxHyYE8BVcNs8Wk2gaLsb
          source_id: s_9ccXaN435rkznmL9ZLZst4
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

# 王傅薪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅薪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傅薪（CBDB 636089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636089&o=json)
