---
schema: wang-person/v1
id: p_x7W1bGjysMx89D19ZbvJC7
status: active
merged_into: null
display_name: 王云耒
cbdb_id: 413793
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2ndnKaAHcNbni1eFBnYG9q
        subject_person_id: p_x7W1bGjysMx89D19ZbvJC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云耒，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 413793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_to_vpLeKTMLBm24JZu8w-k
          claim_id: c_2ndnKaAHcNbni1eFBnYG9q
          source_id: s_7JfrBN2NTBNQCWGogrmwBz
          stance: supports
          locator: CBDB:413793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7JfrBN2NTBNQCWGogrmwBz
            source_type: api_record
            title: 中国历代人物传记资料库：王云耒（CBDB 413793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413793&o=json
            external_identifier: CBDB:413793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j41JizbmoUZRpU9Uu3R5wn
        subject_person_id: p_x7W1bGjysMx89D19ZbvJC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云耒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AcAw81eJ5SZdvvMCNczBXD
          claim_id: c_j41JizbmoUZRpU9Uu3R5wn
          source_id: s_7JfrBN2NTBNQCWGogrmwBz
          stance: supports
          locator: CBDB:413793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 明
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

# 王云耒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王云耒，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 413793） | accepted |
| name.primary | 王云耒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王云耒（CBDB 413793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413793&o=json)
