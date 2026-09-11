---
schema: wang-person/v1
id: p_dfhSf9N5Y2aGRDJUnPFZVz
status: active
merged_into: null
display_name: 王志仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xey7onjfM1CXQKM1E1AWLF
        subject_person_id: p_dfhSf9N5Y2aGRDJUnPFZVz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EpgQyVGfnRq9VNp2LLeCKq
          claim_id: c_Xey7onjfM1CXQKM1E1AWLF
          source_id: s_iAfKcdwpUF6nofwNL6QyJb
          stance: supports
          locator: CBDB:455839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455839）
          source: &a1
            id: s_iAfKcdwpUF6nofwNL6QyJb
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 455839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455839&o=json
            external_identifier: CBDB:455839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U1Q92b2MNxw8LhJkDQg6jC
        subject_person_id: p_dfhSf9N5Y2aGRDJUnPFZVz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志仁，元人物。曾任判官。（中国历代人物传记资料库 CBDB 455839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Kl8wdCm26HLqbe0ai2B21
          claim_id: c_U1Q92b2MNxw8LhJkDQg6jC
          source_id: s_iAfKcdwpUF6nofwNL6QyJb
          stance: supports
          locator: CBDB:455839
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

# 王志仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志仁 | accepted |
| bio.summary | 王志仁，元人物。曾任判官。（中国历代人物传记资料库 CBDB 455839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志仁（CBDB 455839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455839&o=json)
