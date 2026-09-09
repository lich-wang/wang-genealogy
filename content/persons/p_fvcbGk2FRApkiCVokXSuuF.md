---
schema: wang-person/v1
id: p_fvcbGk2FRApkiCVokXSuuF
status: active
merged_into: null
display_name: 王景某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ujXmkPXdDuDqbdiTw4vcH
        subject_person_id: p_fvcbGk2FRApkiCVokXSuuF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzRSJPcn6Pu2fKaVVBEQfD
          claim_id: c_7ujXmkPXdDuDqbdiTw4vcH
          source_id: s_3p4J5M3D8chP5FsK7pnwPF
          stance: supports
          locator: CBDB:186321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186321）
          source: &a1
            id: s_3p4J5M3D8chP5FsK7pnwPF
            source_type: api_record
            title: 中国历代人物传记资料库：王景某（CBDB 186321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186321&o=json
            external_identifier: CBDB:186321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_az9sdFgzLxFxciVQfKLhjK
        subject_person_id: p_fvcbGk2FRApkiCVokXSuuF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 872年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UGDc4hhWHYNsw9N4LyFm5
          claim_id: c_az9sdFgzLxFxciVQfKLhjK
          source_id: s_3p4J5M3D8chP5FsK7pnwPF
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
        id: c_3MuGb5hYdf2XzY5V52p7YD
        subject_person_id: p_fvcbGk2FRApkiCVokXSuuF
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
        - id: cs_rGb9o7tG1qL8CKVBbH3rui
          claim_id: c_3MuGb5hYdf2XzY5V52p7YD
          source_id: s_3p4J5M3D8chP5FsK7pnwPF
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

# 王景某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景某 | accepted |
| death.date | 872年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景某（CBDB 186321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186321&o=json)
