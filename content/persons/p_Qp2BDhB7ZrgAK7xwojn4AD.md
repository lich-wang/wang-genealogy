---
schema: wang-person/v1
id: p_Qp2BDhB7ZrgAK7xwojn4AD
status: active
merged_into: null
display_name: 王美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Xo8nLBRUfAbCfGJYTtEKM
        subject_person_id: p_Qp2BDhB7ZrgAK7xwojn4AD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MbfAv2nSSQV2UG5xdSZiP7
          claim_id: c_2Xo8nLBRUfAbCfGJYTtEKM
          source_id: s_c23HBaGj8SNdvHxdrn3Dot
          stance: supports
          locator: CBDB:476288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476288）
          source: &a1
            id: s_c23HBaGj8SNdvHxdrn3Dot
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 476288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476288&o=json
            external_identifier: CBDB:476288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xZ1FxG87W51nCQG28pVtv2
        subject_person_id: p_Qp2BDhB7ZrgAK7xwojn4AD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 476288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tRxfToa1TzYxv2nMg7UVlP
          claim_id: c_xZ1FxG87W51nCQG28pVtv2
          source_id: s_c23HBaGj8SNdvHxdrn3Dot
          stance: supports
          locator: CBDB:476288
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

# 王美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美 | accepted |
| bio.summary | 王美，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 476288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王美（CBDB 476288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476288&o=json)
