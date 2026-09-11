---
schema: wang-person/v1
id: p_u1i8c5uPpms6NYX3Z6YbP6
status: active
merged_into: null
display_name: 王叔嚮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJbmGEqrT5N25e29jZvXiP
        subject_person_id: p_u1i8c5uPpms6NYX3Z6YbP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔嚮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBRwkGwM7zMeLmqEuA3C6c
          claim_id: c_QJbmGEqrT5N25e29jZvXiP
          source_id: s_DL7dp5Dj62GVu8dQPvUvWy
          stance: supports
          locator: CBDB:192146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192146）
          source: &a1
            id: s_DL7dp5Dj62GVu8dQPvUvWy
            source_type: api_record
            title: 中国历代人物传记资料库：王叔嚮（CBDB 192146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192146&o=json
            external_identifier: CBDB:192146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hVmGQzZBw8tcYkvQsc8H7z
        subject_person_id: p_u1i8c5uPpms6NYX3Z6YbP6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ibGzEb15AYzK57gqUvANPJ
          claim_id: c_hVmGQzZBw8tcYkvQsc8H7z
          source_id: s_DL7dp5Dj62GVu8dQPvUvWy
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
        id: c_WMxpjw8qQYNtbr4tCFgvgt
        subject_person_id: p_u1i8c5uPpms6NYX3Z6YbP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔嚮（卒于850年），唐人物。曾任參軍。（中国历代人物传记资料库 CBDB 192146）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gN45dbqPVVk-xeilmBR_oT
          claim_id: c_WMxpjw8qQYNtbr4tCFgvgt
          source_id: s_DL7dp5Dj62GVu8dQPvUvWy
          stance: supports
          locator: CBDB:192146
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

# 王叔嚮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔嚮 | accepted |
| death.date | 850年 | accepted |
| bio.summary | 王叔嚮（卒于850年），唐人物。曾任參軍。（中国历代人物传记资料库 CBDB 192146） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔嚮（CBDB 192146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192146&o=json)
