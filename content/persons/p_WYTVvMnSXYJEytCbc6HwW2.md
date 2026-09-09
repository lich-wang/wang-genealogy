---
schema: wang-person/v1
id: p_WYTVvMnSXYJEytCbc6HwW2
status: active
merged_into: null
display_name: 王紹基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2DW7QJiwdpwWQ4orrQM8cB
        subject_person_id: p_WYTVvMnSXYJEytCbc6HwW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2pNMf54bU4KTzzz7n2a6E2
          claim_id: c_2DW7QJiwdpwWQ4orrQM8cB
          source_id: s_f29E1BPdwuB26tKo5HBsWo
          stance: supports
          locator: CBDB:71837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71837）
          source: &a1
            id: s_f29E1BPdwuB26tKo5HBsWo
            source_type: api_record
            title: 中国历代人物传记资料库：王紹基（CBDB 71837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71837&o=json
            external_identifier: CBDB:71837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iuU7RAyVmL8CFLWH6BhaLq
        subject_person_id: p_WYTVvMnSXYJEytCbc6HwW2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1805年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBGUeuDCoo63rVLnHhU8Ci
          claim_id: c_iuU7RAyVmL8CFLWH6BhaLq
          source_id: s_f29E1BPdwuB26tKo5HBsWo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GoCVTecUjAeVxjohcGqq3U
        subject_person_id: p_WYTVvMnSXYJEytCbc6HwW2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1871年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rMVvy5YN3PTGxUEPF2iLKS
          claim_id: c_GoCVTecUjAeVxjohcGqq3U
          source_id: s_f29E1BPdwuB26tKo5HBsWo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9QoMqtVQtVnn9G7xWygAq
        subject_person_id: p_WYTVvMnSXYJEytCbc6HwW2
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
        - id: cs_c6c34bMLoHnC1fZwAGM71p
          claim_id: c_j9QoMqtVQtVnn9G7xWygAq
          source_id: s_f29E1BPdwuB26tKo5HBsWo
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

# 王紹基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹基 | accepted |
| birth.date | 1805年 | accepted |
| death.date | 1871年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹基（CBDB 71837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71837&o=json)
