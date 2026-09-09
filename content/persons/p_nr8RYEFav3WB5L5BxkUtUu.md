---
schema: wang-person/v1
id: p_nr8RYEFav3WB5L5BxkUtUu
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4Bi5ZDz27Dd93w4v9A7iB
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Zs2vGdCqZSLQuQhHffaBJ
          claim_id: c_b4Bi5ZDz27Dd93w4v9A7iB
          source_id: s_M7d1968NKBe5CNziSSwnCd
          stance: supports
          locator: CBDB:198425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198425）
          source: &a1
            id: s_M7d1968NKBe5CNziSSwnCd
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 198425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198425&o=json
            external_identifier: CBDB:198425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Z8YzFC4brSCktWYFCECEWn
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJfJWgsGZFWG5QQYdzmftb
          claim_id: c_Z8YzFC4brSCktWYFCECEWn
          source_id: s_M7d1968NKBe5CNziSSwnCd
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
        id: c_5YfHUsJyuCowvLRL7UayxQ
        subject_person_id: p_nr8RYEFav3WB5L5BxkUtUu
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
        - id: cs_NsCdUUv9rNf28cnCq23w2P
          claim_id: c_5YfHUsJyuCowvLRL7UayxQ
          source_id: s_M7d1968NKBe5CNziSSwnCd
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| birth.date | 1433年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 198425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198425&o=json)
