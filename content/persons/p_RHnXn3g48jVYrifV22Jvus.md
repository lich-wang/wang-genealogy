---
schema: wang-person/v1
id: p_RHnXn3g48jVYrifV22Jvus
status: active
merged_into: null
display_name: 王會漷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujUyJbKvi3khyVpE9o6d3K
        subject_person_id: p_RHnXn3g48jVYrifV22Jvus
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會漷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uM4AQf3S8MUuLVLa6f9vYZ
          claim_id: c_ujUyJbKvi3khyVpE9o6d3K
          source_id: s_NQqFqrYt8H56P8thC1YGkb
          stance: supports
          locator: CBDB:638574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638574）
          source: &a1
            id: s_NQqFqrYt8H56P8thC1YGkb
            source_type: api_record
            title: 中国历代人物传记资料库：王會漷（CBDB 638574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638574&o=json
            external_identifier: CBDB:638574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q6d8SCpjeDJjsQBT8snYct
        subject_person_id: p_RHnXn3g48jVYrifV22Jvus
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會漷，清人物。籍贯虞鄉，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P9kh9LkGDcxmRO3vm9wHE_
          claim_id: c_q6d8SCpjeDJjsQBT8snYct
          source_id: s_NQqFqrYt8H56P8thC1YGkb
          stance: supports
          locator: CBDB:638574
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

# 王會漷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會漷 | accepted |
| bio.summary | 王會漷，清人物。籍贯虞鄉，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會漷（CBDB 638574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638574&o=json)
