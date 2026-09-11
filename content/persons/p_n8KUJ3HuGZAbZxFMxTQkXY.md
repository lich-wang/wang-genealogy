---
schema: wang-person/v1
id: p_n8KUJ3HuGZAbZxFMxTQkXY
status: active
merged_into: null
display_name: 王柦濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GfigLyAA8HLakLLGKJ2oTm
        subject_person_id: p_n8KUJ3HuGZAbZxFMxTQkXY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柦濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6taoPiw6E59q2dDE7uBv6j
          claim_id: c_GfigLyAA8HLakLLGKJ2oTm
          source_id: s_9YK93nWKtJ8y1Rn56ERh2Y
          stance: supports
          locator: CBDB:638700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638700）
          source: &a1
            id: s_9YK93nWKtJ8y1Rn56ERh2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王柦濟（CBDB 638700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638700&o=json
            external_identifier: CBDB:638700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBbNgAMHggP4AeAiJFF4hn
        subject_person_id: p_n8KUJ3HuGZAbZxFMxTQkXY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柦濟，清人物。籍贯錢塘，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ITPI_65m9XEqxxKwVI4jlU
          claim_id: c_NBbNgAMHggP4AeAiJFF4hn
          source_id: s_9YK93nWKtJ8y1Rn56ERh2Y
          stance: supports
          locator: CBDB:638700
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

# 王柦濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柦濟 | accepted |
| bio.summary | 王柦濟，清人物。籍贯錢塘，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王柦濟（CBDB 638700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638700&o=json)
