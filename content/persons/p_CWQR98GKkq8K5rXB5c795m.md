---
schema: wang-person/v1
id: p_CWQR98GKkq8K5rXB5c795m
status: active
merged_into: null
display_name: 王厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sg43NXjkziEVik7ejwu7rq
        subject_person_id: p_CWQR98GKkq8K5rXB5c795m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nn2KimkyvvJJHSaCssCfy3
          claim_id: c_sg43NXjkziEVik7ejwu7rq
          source_id: s_iKeQFJpxtV536q6TKz3pQ4
          stance: supports
          locator: CBDB:636443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636443）
          source: &a1
            id: s_iKeQFJpxtV536q6TKz3pQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 636443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636443&o=json
            external_identifier: CBDB:636443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oHkrUVuDXWNbzLJ2LsE9zP
        subject_person_id: p_CWQR98GKkq8K5rXB5c795m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚，清人物。籍贯丹徒，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XmOZHmV-AXVcX3hbe12NrH
          claim_id: c_oHkrUVuDXWNbzLJ2LsE9zP
          source_id: s_iKeQFJpxtV536q6TKz3pQ4
          stance: supports
          locator: CBDB:636443
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

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚 | accepted |
| bio.summary | 王厚，清人物。籍贯丹徒，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王厚（CBDB 636443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636443&o=json)
