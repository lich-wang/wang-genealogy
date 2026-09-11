---
schema: wang-person/v1
id: p_uagHYmSR1zus6Jfxsio5hd
status: active
merged_into: null
display_name: 王琪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cnpmj7wZjHLDG5CzLhJ1LR
        subject_person_id: p_uagHYmSR1zus6Jfxsio5hd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MG4XJfADZrUTHTBM13LbT9
          claim_id: c_cnpmj7wZjHLDG5CzLhJ1LR
          source_id: s_GvyTa6yWK6NenkNHQGVdhX
          stance: supports
          locator: CBDB:488238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488238）
          source: &a1
            id: s_GvyTa6yWK6NenkNHQGVdhX
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 488238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488238&o=json
            external_identifier: CBDB:488238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zVFAR1GYVZQjZBMvzpJB8E
        subject_person_id: p_uagHYmSR1zus6Jfxsio5hd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪，明人物。曾任通判。（中国历代人物传记资料库 CBDB 488238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BVMSCGAxf1q5qyuzQfdeDM
          claim_id: c_zVFAR1GYVZQjZBMvzpJB8E
          source_id: s_GvyTa6yWK6NenkNHQGVdhX
          stance: supports
          locator: CBDB:488238
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

# 王琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琪 | accepted |
| bio.summary | 王琪，明人物。曾任通判。（中国历代人物传记资料库 CBDB 488238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琪（CBDB 488238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488238&o=json)
