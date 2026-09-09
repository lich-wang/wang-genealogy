---
schema: wang-person/v1
id: p_jj2hHbTxDTLgPAsQDWnHN2
status: active
merged_into: null
display_name: 王權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJ2xmkMJ5oKupqCKv11kwy
        subject_person_id: p_jj2hHbTxDTLgPAsQDWnHN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WPEaAzYjMT2RCP5M9Mut9A
          claim_id: c_aJ2xmkMJ5oKupqCKv11kwy
          source_id: s_wY6ou98RDAEtQEKtz7YqHj
          stance: supports
          locator: CBDB:573315
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573315）
          source: &a1
            id: s_wY6ou98RDAEtQEKtz7YqHj
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 573315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573315&o=json
            external_identifier: CBDB:573315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYVAae94s4n5oo3bWfiFX8
        subject_person_id: p_jj2hHbTxDTLgPAsQDWnHN2
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
        - id: cs_Unn4hChZJ1tkcL7xjs8Pkt
          claim_id: c_NYVAae94s4n5oo3bWfiFX8
          source_id: s_wY6ou98RDAEtQEKtz7YqHj
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

# 王權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王權 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王權（CBDB 573315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573315&o=json)
