---
schema: wang-person/v1
id: p_7VtVn2P2atR33u6A8tLqwk
status: active
merged_into: null
display_name: 王諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4EiiEQZ24SjBXGt5FzeZ5
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nv7A33fb6SBqpqzoN3p3Lv
          claim_id: c_p4EiiEQZ24SjBXGt5FzeZ5
          source_id: s_ySTBPaG87sVmqDwANNnyuC
          stance: supports
          locator: CBDB:169123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169123）
          source: &a1
            id: s_ySTBPaG87sVmqDwANNnyuC
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 169123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169123&o=json
            external_identifier: CBDB:169123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8otFfKjx2w3RnmCGGrwFwj
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 795年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKjyvJF5pmpE31axVWS2Wp
          claim_id: c_8otFfKjx2w3RnmCGGrwFwj
          source_id: s_ySTBPaG87sVmqDwANNnyuC
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
        id: c_PZWbXvGtCWZFdv1FGmTp14
        subject_person_id: p_7VtVn2P2atR33u6A8tLqwk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJ55GPg3PhJ9m8QjfLqPcW
          claim_id: c_PZWbXvGtCWZFdv1FGmTp14
          source_id: s_ySTBPaG87sVmqDwANNnyuC
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

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| death.date | 795年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 169123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169123&o=json)
