---
schema: wang-person/v1
id: p_nxMwu4MtHgeffKFM36x8Lc
status: active
merged_into: null
display_name: 王世潔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQx1uEV65xRiNGBssZUnn4
        subject_person_id: p_nxMwu4MtHgeffKFM36x8Lc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世潔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yNGakBGCKyA1U17PP61FMd
          claim_id: c_NQx1uEV65xRiNGBssZUnn4
          source_id: s_cVUYfj3vpuGHyQDJUUzHCC
          stance: supports
          locator: CBDB:635691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635691）
          source: &a1
            id: s_cVUYfj3vpuGHyQDJUUzHCC
            source_type: api_record
            title: 中国历代人物传记资料库：王世潔（CBDB 635691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635691&o=json
            external_identifier: CBDB:635691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_teD5DS97YcH83XuxdxxdvA
        subject_person_id: p_nxMwu4MtHgeffKFM36x8Lc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世潔，清人物。籍贯四川省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 635691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ziYAZ2IT1lXYsSTTWJCYbZ
          claim_id: c_teD5DS97YcH83XuxdxxdvA
          source_id: s_cVUYfj3vpuGHyQDJUUzHCC
          stance: supports
          locator: CBDB:635691
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

# 王世潔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世潔 | accepted |
| bio.summary | 王世潔，清人物。籍贯四川省，入仕行伍，曾任中軍守備。（中国历代人物传记资料库 CBDB 635691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世潔（CBDB 635691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635691&o=json)
