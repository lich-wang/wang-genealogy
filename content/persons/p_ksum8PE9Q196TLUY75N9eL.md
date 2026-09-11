---
schema: wang-person/v1
id: p_ksum8PE9Q196TLUY75N9eL
status: active
merged_into: null
display_name: 王綰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zEJqGDUg4a6svq7h39UWLi
        subject_person_id: p_ksum8PE9Q196TLUY75N9eL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LD5fpdw8UXBmzUUDYRsCW6
          claim_id: c_zEJqGDUg4a6svq7h39UWLi
          source_id: s_EFczwN4YW6MrER3DEi4Ffz
          stance: supports
          locator: CBDB:377270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377270）
          source: &a1
            id: s_EFczwN4YW6MrER3DEi4Ffz
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 377270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377270&o=json
            external_identifier: CBDB:377270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hq5sa1sByQD2Z8CpJGSLqM
        subject_person_id: p_ksum8PE9Q196TLUY75N9eL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377270）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dZ3ct9OA7wIvjCnLeYHxv8
          claim_id: c_Hq5sa1sByQD2Z8CpJGSLqM
          source_id: s_EFczwN4YW6MrER3DEi4Ffz
          stance: supports
          locator: CBDB:377270
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

# 王綰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綰 | accepted |
| bio.summary | 王綰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377270） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綰（CBDB 377270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377270&o=json)
