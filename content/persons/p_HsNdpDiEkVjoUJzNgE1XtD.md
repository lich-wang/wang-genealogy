---
schema: wang-person/v1
id: p_HsNdpDiEkVjoUJzNgE1XtD
status: active
merged_into: null
display_name: 王文秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MCKokrCa5QNESxsfv1V6Jg
        subject_person_id: p_HsNdpDiEkVjoUJzNgE1XtD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L3cPCWdS9v7n6nQCNYSRHq
          claim_id: c_MCKokrCa5QNESxsfv1V6Jg
          source_id: s_ANauBqEW5ZaEPvLc3LSfnW
          stance: supports
          locator: CBDB:557543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557543）
          source: &a1
            id: s_ANauBqEW5ZaEPvLc3LSfnW
            source_type: api_record
            title: 中国历代人物传记资料库：王文秀（CBDB 557543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557543&o=json
            external_identifier: CBDB:557543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XM7YX3PvA5sav3stRrGNL3
        subject_person_id: p_HsNdpDiEkVjoUJzNgE1XtD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xd3kVdwsVNGDEaHmGXAEVp
          claim_id: c_XM7YX3PvA5sav3stRrGNL3
          source_id: s_ANauBqEW5ZaEPvLc3LSfnW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王文秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文秀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文秀（CBDB 557543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557543&o=json)
