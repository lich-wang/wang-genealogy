---
schema: wang-person/v1
id: p_KyaJgKbr7m7ZomXsAe9kEk
status: active
merged_into: null
display_name: 王廣年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xjFwK6EFG8cM4e8P9sJ7NE
        subject_person_id: p_KyaJgKbr7m7ZomXsAe9kEk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k1Na9pe34kcaEGZusDX7CA
          claim_id: c_xjFwK6EFG8cM4e8P9sJ7NE
          source_id: s_tYfkDFfEbnJfbste5ATn6N
          stance: supports
          locator: CBDB:637452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637452）
          source: &a1
            id: s_tYfkDFfEbnJfbste5ATn6N
            source_type: api_record
            title: 中国历代人物传记资料库：王廣年（CBDB 637452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637452&o=json
            external_identifier: CBDB:637452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4kd6jPJS8FYQqVdGVpvD1t
        subject_person_id: p_KyaJgKbr7m7ZomXsAe9kEk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣年，清人物。籍贯清澗，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pXiAP3MXOIO55XkwPiPo7P
          claim_id: c_4kd6jPJS8FYQqVdGVpvD1t
          source_id: s_tYfkDFfEbnJfbste5ATn6N
          stance: supports
          locator: CBDB:637452
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

# 王廣年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣年 | accepted |
| bio.summary | 王廣年，清人物。籍贯清澗，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 637452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣年（CBDB 637452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637452&o=json)
