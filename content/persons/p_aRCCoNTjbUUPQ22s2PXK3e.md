---
schema: wang-person/v1
id: p_aRCCoNTjbUUPQ22s2PXK3e
status: active
merged_into: null
display_name: 王汝礪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15ksuhnuwTz5dbZGfT4V3c
        subject_person_id: p_aRCCoNTjbUUPQ22s2PXK3e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3PZcJf5rE5qkr35gGGiQA
          claim_id: c_15ksuhnuwTz5dbZGfT4V3c
          source_id: s_QqLeTC2oQFjMjQyZ5ryrrd
          stance: supports
          locator: CBDB:101179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101179）
          source: &a1
            id: s_QqLeTC2oQFjMjQyZ5ryrrd
            source_type: api_record
            title: 中国历代人物传记资料库：王汝礪（CBDB 101179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101179&o=json
            external_identifier: CBDB:101179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wfn4Q1FLRGF5onEBJFP8SJ
        subject_person_id: p_aRCCoNTjbUUPQ22s2PXK3e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝礪，元人物。曾任宣文閣鑒書博士、憲司知事。（中国历代人物传记资料库 CBDB 101179）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hwe8f47nScAXef1p1mThtg
          claim_id: c_Wfn4Q1FLRGF5onEBJFP8SJ
          source_id: s_QqLeTC2oQFjMjQyZ5ryrrd
          stance: supports
          locator: CBDB:101179
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

# 王汝礪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝礪 | accepted |
| bio.summary | 王汝礪，元人物。曾任宣文閣鑒書博士、憲司知事。（中国历代人物传记资料库 CBDB 101179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝礪（CBDB 101179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101179&o=json)
