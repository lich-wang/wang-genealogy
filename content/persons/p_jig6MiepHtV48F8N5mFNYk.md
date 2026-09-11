---
schema: wang-person/v1
id: p_jig6MiepHtV48F8N5mFNYk
status: active
merged_into: null
display_name: 王德璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JhsGysV5ifxfzJRQJjPC6B
        subject_person_id: p_jig6MiepHtV48F8N5mFNYk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_942RFp8uoHsnuaB6RdJfCm
          claim_id: c_JhsGysV5ifxfzJRQJjPC6B
          source_id: s_52xrWAYDJNC6KSdAkFRjF4
          stance: supports
          locator: CBDB:637699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637699）
          source: &a1
            id: s_52xrWAYDJNC6KSdAkFRjF4
            source_type: api_record
            title: 中国历代人物传记资料库：王德璧（CBDB 637699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637699&o=json
            external_identifier: CBDB:637699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5eGzBWdaXSdUpuhNFm7E6
        subject_person_id: p_jig6MiepHtV48F8N5mFNYk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德璧，清人物。籍贯大興，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637699）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hOgMH2hUxDsxG9rQ11VATd
          claim_id: c_T5eGzBWdaXSdUpuhNFm7E6
          source_id: s_52xrWAYDJNC6KSdAkFRjF4
          stance: supports
          locator: CBDB:637699
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

# 王德璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德璧 | accepted |
| bio.summary | 王德璧，清人物。籍贯大興，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德璧（CBDB 637699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637699&o=json)
