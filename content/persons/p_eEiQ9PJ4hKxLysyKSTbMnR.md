---
schema: wang-person/v1
id: p_eEiQ9PJ4hKxLysyKSTbMnR
status: active
merged_into: null
display_name: 王居白
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dwVNHhBNhiZcC6AA6EM9cf
        subject_person_id: p_eEiQ9PJ4hKxLysyKSTbMnR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居白
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ijEnEjN86BER72jAx4G9Co
          claim_id: c_dwVNHhBNhiZcC6AA6EM9cf
          source_id: s_3bBiy6zsG1TDCL8eadq3Ka
          stance: supports
          locator: CBDB:37665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37665）
          source: &a1
            id: s_3bBiy6zsG1TDCL8eadq3Ka
            source_type: api_record
            title: 中国历代人物传记资料库：王居白（CBDB 37665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37665&o=json
            external_identifier: CBDB:37665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i64gU6EBr8kWW3UGmS7eh4
        subject_person_id: p_eEiQ9PJ4hKxLysyKSTbMnR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居白，宋人物。曾任待制、天章閣待制、尚書省禮部祠部司郎中。（中国历代人物传记资料库 CBDB 37665）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-C1_l5Yh5udH4sMlQcxRgm
          claim_id: c_i64gU6EBr8kWW3UGmS7eh4
          source_id: s_3bBiy6zsG1TDCL8eadq3Ka
          stance: supports
          locator: CBDB:37665
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

# 王居白

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居白 | accepted |
| bio.summary | 王居白，宋人物。曾任待制、天章閣待制、尚書省禮部祠部司郎中。（中国历代人物传记资料库 CBDB 37665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居白（CBDB 37665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37665&o=json)
