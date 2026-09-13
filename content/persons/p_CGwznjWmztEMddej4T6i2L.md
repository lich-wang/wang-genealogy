---
schema: wang-person/v1
id: p_CGwznjWmztEMddej4T6i2L
status: active
merged_into: null
display_name: 王治鼎
cbdb_id: 414996
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5ChJX397jR2BBoav3AH1k
        subject_person_id: p_CGwznjWmztEMddej4T6i2L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治鼎，明人物。曾任知事。（中国历代人物传记资料库 CBDB 414996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MbKEc1hP1kMAtfLDQ1OR98
          claim_id: c_H5ChJX397jR2BBoav3AH1k
          source_id: s_osjLbdjY9kBxdN13S3WKSy
          stance: supports
          locator: CBDB:414996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_osjLbdjY9kBxdN13S3WKSy
            source_type: api_record
            title: 中国历代人物传记资料库：王治鼎（CBDB 414996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414996&o=json
            external_identifier: CBDB:414996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:42.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyCgykDQPt915yMTHT6azB
        subject_person_id: p_CGwznjWmztEMddej4T6i2L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Wz6qTT7WeJ8vYnG9RR7YWR
          claim_id: c_KyCgykDQPt915yMTHT6azB
          source_id: s_osjLbdjY9kBxdN13S3WKSy
          stance: supports
          locator: CBDB:414996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5901-6000）｜历史性依据：CBDB 朝代 = 明
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

# 王治鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王治鼎，明人物。曾任知事。（中国历代人物传记资料库 CBDB 414996） | accepted |
| name.primary | 王治鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治鼎（CBDB 414996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414996&o=json)
