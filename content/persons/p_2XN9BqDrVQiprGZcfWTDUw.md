---
schema: wang-person/v1
id: p_2XN9BqDrVQiprGZcfWTDUw
status: active
merged_into: null
display_name: 王晏實
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oeAFK7PDqS5cY3YKL3fLzA
        subject_person_id: p_2XN9BqDrVQiprGZcfWTDUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6h18e3m5M8Xn6zH86Y442
          claim_id: c_oeAFK7PDqS5cY3YKL3fLzA
          source_id: s_PJ9wWa8YGPNSchtVVnjL7w
          stance: supports
          locator: CBDB:384488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384488）
          source: &a1
            id: s_PJ9wWa8YGPNSchtVVnjL7w
            source_type: api_record
            title: 中国历代人物传记资料库：王晏實（CBDB 384488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384488&o=json
            external_identifier: CBDB:384488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s2Txm47jwCxBZn6cWdjvs6
        subject_person_id: p_2XN9BqDrVQiprGZcfWTDUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏實，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UQV4Dw4u-Rs-JJ6N62tD8o
          claim_id: c_s2Txm47jwCxBZn6cWdjvs6
          source_id: s_PJ9wWa8YGPNSchtVVnjL7w
          stance: supports
          locator: CBDB:384488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王晏實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏實 | accepted |
| bio.summary | 王晏實，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 384488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏實（CBDB 384488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384488&o=json)
