---
schema: wang-person/v1
id: p_dNr4XFTTy78y2EhV7FdyrB
status: active
merged_into: null
display_name: 王金聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m6KUbEWgs4gy9Au52mvux9
        subject_person_id: p_dNr4XFTTy78y2EhV7FdyrB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ySKDRunxUc2rGEBQZNHq26
          claim_id: c_m6KUbEWgs4gy9Au52mvux9
          source_id: s_3e9GpPgc9nLAseKQMXpfFg
          stance: supports
          locator: CBDB:69225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69225）
          source: &a1
            id: s_3e9GpPgc9nLAseKQMXpfFg
            source_type: api_record
            title: 中国历代人物传记资料库：王金聲（CBDB 69225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69225&o=json
            external_identifier: CBDB:69225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_L7KD7vFTJLv7PWFqK8Tx7C
        subject_person_id: p_dNr4XFTTy78y2EhV7FdyrB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GS27nqPE6rCe5YNJoPJPeN
          claim_id: c_L7KD7vFTJLv7PWFqK8Tx7C
          source_id: s_3e9GpPgc9nLAseKQMXpfFg
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
        id: c_r6wiYPWGRReLBfQKHiKBjB
        subject_person_id: p_dNr4XFTTy78y2EhV7FdyrB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nL24ddPR2EsPV55YP8WwEe
          claim_id: c_r6wiYPWGRReLBfQKHiKBjB
          source_id: s_3e9GpPgc9nLAseKQMXpfFg
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

# 王金聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金聲 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金聲（CBDB 69225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69225&o=json)
