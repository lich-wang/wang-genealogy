---
schema: wang-person/v1
id: p_FE8t8Dn971x75CQEEDT7i9
status: active
merged_into: null
display_name: 王舜臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wr7EqF7iBg5xN9DhzAfiPD
        subject_person_id: p_FE8t8Dn971x75CQEEDT7i9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u8wTR9m1uALc5dDMUMKMBZ
          claim_id: c_wr7EqF7iBg5xN9DhzAfiPD
          source_id: s_2wj8uLLip4rgpUg3SCsqxk
          stance: supports
          locator: CBDB:98005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98005）
          source: &a1
            id: s_2wj8uLLip4rgpUg3SCsqxk
            source_type: api_record
            title: 中国历代人物传记资料库：王舜臣（CBDB 98005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98005&o=json
            external_identifier: CBDB:98005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KS2LKoGkwgCCrmNsAtiejd
        subject_person_id: p_FE8t8Dn971x75CQEEDT7i9
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
        - id: cs_kMhnBTcSE9WM45GDdV1PJf
          claim_id: c_KS2LKoGkwgCCrmNsAtiejd
          source_id: s_2wj8uLLip4rgpUg3SCsqxk
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

# 王舜臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜臣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜臣（CBDB 98005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98005&o=json)
