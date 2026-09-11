---
schema: wang-person/v1
id: p_P7dC12JpCdNvQVgMYNSN8H
status: active
merged_into: null
display_name: 王應期
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_awvNJJ1JV3Q28ADA8TkpAC
        subject_person_id: p_P7dC12JpCdNvQVgMYNSN8H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_meg6xFRv6GgBsMmBJtqY8D
          claim_id: c_awvNJJ1JV3Q28ADA8TkpAC
          source_id: s_gEY9ptxbp9PDXUsmPfyHCA
          stance: supports
          locator: CBDB:221975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221975）
          source: &a1
            id: s_gEY9ptxbp9PDXUsmPfyHCA
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 221975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221975&o=json
            external_identifier: CBDB:221975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FMvSK1v1yCcG5nKLbPPfAb
        subject_person_id: p_P7dC12JpCdNvQVgMYNSN8H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期，明人物。萬曆八年進士，籍贯文安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221975）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WOm2ZzUYT7dyFCWKy6nRZt
          claim_id: c_FMvSK1v1yCcG5nKLbPPfAb
          source_id: s_gEY9ptxbp9PDXUsmPfyHCA
          stance: supports
          locator: CBDB:221975
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

# 王應期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應期 | accepted |
| bio.summary | 王應期，明人物。萬曆八年進士，籍贯文安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應期（CBDB 221975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221975&o=json)
