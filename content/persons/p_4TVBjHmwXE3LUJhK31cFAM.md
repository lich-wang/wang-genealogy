---
schema: wang-person/v1
id: p_4TVBjHmwXE3LUJhK31cFAM
status: active
merged_into: null
display_name: 王儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XvGrXDJecncn2Cr4xwEZuy
        subject_person_id: p_4TVBjHmwXE3LUJhK31cFAM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JdYTDshr5mGc6s3wDwWVyt
          claim_id: c_XvGrXDJecncn2Cr4xwEZuy
          source_id: s_ptJFbW7Gh8Eog1DyoEA1L5
          stance: supports
          locator: CBDB:19900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19900）
          source: &a1
            id: s_ptJFbW7Gh8Eog1DyoEA1L5
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 19900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19900&o=json
            external_identifier: CBDB:19900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vDpfJcc12gnSZEDxSYHFay
        subject_person_id: p_4TVBjHmwXE3LUJhK31cFAM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉，吳越人物。籍贯奉化。（中国历代人物传记资料库 CBDB 19900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JovoOgTuqcS4Xd--Z-DVW4
          claim_id: c_vDpfJcc12gnSZEDxSYHFay
          source_id: s_ptJFbW7Gh8Eog1DyoEA1L5
          stance: supports
          locator: CBDB:19900
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

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| bio.summary | 王儉，吳越人物。籍贯奉化。（中国历代人物传记资料库 CBDB 19900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 19900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19900&o=json)
