---
schema: wang-person/v1
id: p_Hm88vtsWxAYMZN9Z3CQWWH
status: active
merged_into: null
display_name: 王功成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5URpuXQjJ6jD46W36L46yP
        subject_person_id: p_Hm88vtsWxAYMZN9Z3CQWWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王功成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rvvzK8o9PMjEWmLBQ5LPBp
          claim_id: c_5URpuXQjJ6jD46W36L46yP
          source_id: s_57M7fD3cZaWqf7fs1cjUeK
          stance: supports
          locator: CBDB:59986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59986）
          source: &a1
            id: s_57M7fD3cZaWqf7fs1cjUeK
            source_type: api_record
            title: 中国历代人物传记资料库：王功成（CBDB 59986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59986&o=json
            external_identifier: CBDB:59986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NMg2fR8m9Sb8VhQmvzh9fW
        subject_person_id: p_Hm88vtsWxAYMZN9Z3CQWWH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kwKkbJJF6upy2gnNCFpfkw
          claim_id: c_NMg2fR8m9Sb8VhQmvzh9fW
          source_id: s_57M7fD3cZaWqf7fs1cjUeK
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
        id: c_dj8zbQhd7aNUX8sSPXwDiA
        subject_person_id: p_Hm88vtsWxAYMZN9Z3CQWWH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王功成（生于1594年），清人物。明清進士進士，籍贯博平，入仕進士，曾任僉事、縣知縣、學政。（中国历代人物传记资料库 CBDB 59986）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V-6Kw81dWq1vAJiSWlom4Q
          claim_id: c_dj8zbQhd7aNUX8sSPXwDiA
          source_id: s_57M7fD3cZaWqf7fs1cjUeK
          stance: supports
          locator: CBDB:59986
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

# 王功成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王功成 | accepted |
| birth.date | 1594年 | accepted |
| bio.summary | 王功成（生于1594年），清人物。明清進士進士，籍贯博平，入仕進士，曾任僉事、縣知縣、學政。（中国历代人物传记资料库 CBDB 59986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王功成（CBDB 59986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59986&o=json)
