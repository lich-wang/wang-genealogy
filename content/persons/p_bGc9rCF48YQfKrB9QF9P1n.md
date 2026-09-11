---
schema: wang-person/v1
id: p_bGc9rCF48YQfKrB9QF9P1n
status: active
merged_into: null
display_name: 王愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CaBdb1M2Z5hXQ8k29RSFYU
        subject_person_id: p_bGc9rCF48YQfKrB9QF9P1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wsQDV4anLgi3GXdagc7En5
          claim_id: c_CaBdb1M2Z5hXQ8k29RSFYU
          source_id: s_zD3dmbKcgLwYxB39yfh2Sd
          stance: supports
          locator: CBDB:497708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497708）
          source: &a1
            id: s_zD3dmbKcgLwYxB39yfh2Sd
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 497708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497708&o=json
            external_identifier: CBDB:497708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TgLQ8TBSj5MPNcuC3DuxMc
        subject_person_id: p_bGc9rCF48YQfKrB9QF9P1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 497708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_esBwwK42eHj2p7rIxiH31H
          claim_id: c_TgLQ8TBSj5MPNcuC3DuxMc
          source_id: s_zD3dmbKcgLwYxB39yfh2Sd
          stance: supports
          locator: CBDB:497708
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

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 497708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 497708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497708&o=json)
