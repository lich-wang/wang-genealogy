---
schema: wang-person/v1
id: p_1cSFNwBVz9Qp2GKW915NZL
status: active
merged_into: null
display_name: 王旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b8GTg43HCoNjJzK81x965V
        subject_person_id: p_1cSFNwBVz9Qp2GKW915NZL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kgv93gKJaiXqZAmXnzV8gq
          claim_id: c_b8GTg43HCoNjJzK81x965V
          source_id: s_nbvj3LLdC4gpkUmwGmjnfr
          stance: supports
          locator: CBDB:471680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471680）
          source: &a1
            id: s_nbvj3LLdC4gpkUmwGmjnfr
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 471680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471680&o=json
            external_identifier: CBDB:471680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1RcHxFH9dDQcwCYUvrmRPT
        subject_person_id: p_1cSFNwBVz9Qp2GKW915NZL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h3v4t86R_lxZ042vFWGdQM
          claim_id: c_1RcHxFH9dDQcwCYUvrmRPT
          source_id: s_nbvj3LLdC4gpkUmwGmjnfr
          stance: supports
          locator: CBDB:471680
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

# 王旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旦 | accepted |
| bio.summary | 王旦，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 471680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旦（CBDB 471680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471680&o=json)
