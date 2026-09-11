---
schema: wang-person/v1
id: p_ziGh7Y3yNsdwXF3hvyL9a3
status: active
merged_into: null
display_name: 王樂綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mVBRB6AosR8aVejUNXYMbk
        subject_person_id: p_ziGh7Y3yNsdwXF3hvyL9a3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w4nedYCNu6cHJfRLDFKcU3
          claim_id: c_mVBRB6AosR8aVejUNXYMbk
          source_id: s_HKU1nEQKc6HU7Jhe7Ra9J1
          stance: supports
          locator: CBDB:638830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638830）
          source: &a1
            id: s_HKU1nEQKc6HU7Jhe7Ra9J1
            source_type: api_record
            title: 中国历代人物传记资料库：王樂綬（CBDB 638830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638830&o=json
            external_identifier: CBDB:638830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5m5wjct9YDazwd9dckodWh
        subject_person_id: p_ziGh7Y3yNsdwXF3hvyL9a3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂綬，清人物。籍贯善化，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hwl9LHuzXb4tQc49H3FTE6
          claim_id: c_5m5wjct9YDazwd9dckodWh
          source_id: s_HKU1nEQKc6HU7Jhe7Ra9J1
          stance: supports
          locator: CBDB:638830
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

# 王樂綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂綬 | accepted |
| bio.summary | 王樂綬，清人物。籍贯善化，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂綬（CBDB 638830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638830&o=json)
