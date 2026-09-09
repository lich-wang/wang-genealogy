---
schema: wang-person/v1
id: p_wWxNV8XtXLFVM5dvRVWR3J
status: active
merged_into: null
display_name: 王撫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t7r2gEZ4NjqxF17rfiH9pW
        subject_person_id: p_wWxNV8XtXLFVM5dvRVWR3J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F1B26YSRDktdZ8DKanJLKt
          claim_id: c_t7r2gEZ4NjqxF17rfiH9pW
          source_id: s_c5TDNK8GC96GCjG3ECtLjd
          stance: supports
          locator: CBDB:377520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377520）
          source: &a1
            id: s_c5TDNK8GC96GCjG3ECtLjd
            source_type: api_record
            title: 中国历代人物传记资料库：王撫（CBDB 377520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377520&o=json
            external_identifier: CBDB:377520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHodbszihfBvrMHDE9VgRm
        subject_person_id: p_wWxNV8XtXLFVM5dvRVWR3J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEpSkCiLxVcZ5FhtAxajEY
          claim_id: c_uHodbszihfBvrMHDE9VgRm
          source_id: s_c5TDNK8GC96GCjG3ECtLjd
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

# 王撫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撫（CBDB 377520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377520&o=json)
