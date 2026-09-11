---
schema: wang-person/v1
id: p_yw7CrJMEYwwK6KkQ5fRJQG
status: active
merged_into: null
display_name: 王式徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpN4JzLNDW7gKV4vr7u4NV
        subject_person_id: p_yw7CrJMEYwwK6KkQ5fRJQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7K6eX5vHuhq9H7TYU8weVE
          claim_id: c_wpN4JzLNDW7gKV4vr7u4NV
          source_id: s_S1EWQb1MnErtNko9ytMMzF
          stance: supports
          locator: CBDB:637605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637605）
          source: &a1
            id: s_S1EWQb1MnErtNko9ytMMzF
            source_type: api_record
            title: 中国历代人物传记资料库：王式徵（CBDB 637605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637605&o=json
            external_identifier: CBDB:637605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsrcLKRDpHBXPYK3K9V1Yw
        subject_person_id: p_yw7CrJMEYwwK6KkQ5fRJQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式徵，清人物。籍贯巴縣，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_edU-belZ7TvF4fYP_KcdpO
          claim_id: c_GsrcLKRDpHBXPYK3K9V1Yw
          source_id: s_S1EWQb1MnErtNko9ytMMzF
          stance: supports
          locator: CBDB:637605
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

# 王式徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式徵 | accepted |
| bio.summary | 王式徵，清人物。籍贯巴縣，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式徵（CBDB 637605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637605&o=json)
