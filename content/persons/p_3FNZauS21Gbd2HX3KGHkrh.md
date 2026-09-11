---
schema: wang-person/v1
id: p_3FNZauS21Gbd2HX3KGHkrh
status: active
merged_into: null
display_name: 王五哥之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDDhHadwtJP6bPMrVA35rw
        subject_person_id: p_3FNZauS21Gbd2HX3KGHkrh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王五哥之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7RVQXXf74NhveYHHTyySs
          claim_id: c_SDDhHadwtJP6bPMrVA35rw
          source_id: s_9rzfoFvGmXcVEnQ7KAo1mx
          stance: supports
          locator: CBDB:194709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194709）
          source: &a1
            id: s_9rzfoFvGmXcVEnQ7KAo1mx
            source_type: api_record
            title: 中国历代人物传记资料库：王五哥之（CBDB 194709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194709&o=json
            external_identifier: CBDB:194709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UBducAdgauaK9HN3aESFob
        subject_person_id: p_3FNZauS21Gbd2HX3KGHkrh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 723年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRySFbj1gNBzitwXcULA8E
          claim_id: c_UBducAdgauaK9HN3aESFob
          source_id: s_9rzfoFvGmXcVEnQ7KAo1mx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_me2e2VBKWL7hEExfRPsC5u
        subject_person_id: p_3FNZauS21Gbd2HX3KGHkrh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王五哥之（卒于723年），唐人物。籍贯晉陽，曾任將軍。（中国历代人物传记资料库 CBDB 194709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eKYnzMX5RzgXQlR8YGRGpr
          claim_id: c_me2e2VBKWL7hEExfRPsC5u
          source_id: s_9rzfoFvGmXcVEnQ7KAo1mx
          stance: supports
          locator: CBDB:194709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gBwBGvoDVDvg8FzFMtypzY
        subject_person_id: p_3FNZauS21Gbd2HX3KGHkrh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGHv9UWGy531BMCqeAusnO
          claim_id: c_gBwBGvoDVDvg8FzFMtypzY
          source_id: s_9rzfoFvGmXcVEnQ7KAo1mx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GvNvKVT9ToHtsKcM7N1gcY
        status: active
        display_name: 王末怛活
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王五哥之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王五哥之 | accepted |
| death.date | 723年 | accepted |
| bio.summary | 王五哥之（卒于723年），唐人物。籍贯晉陽，曾任將軍。（中国历代人物传记资料库 CBDB 194709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GvNvKVT9ToHtsKcM7N1gcY | 王末怛活 | accepted |

## 外部来源

- [中国历代人物传记资料库：王五哥之（CBDB 194709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194709&o=json)
