---
schema: wang-person/v1
id: p_UHyuFiNJ8n617D7P4wMsNq
status: active
merged_into: null
display_name: 王亞卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LN5oqQ8v33SE5wQC7LhVQ9
        subject_person_id: p_UHyuFiNJ8n617D7P4wMsNq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亞卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SGNpBN8KeBey1hKqEeGP83
          claim_id: c_LN5oqQ8v33SE5wQC7LhVQ9
          source_id: s_P7QRP3oFDxZZdiowyGVCGX
          stance: supports
          locator: CBDB:169730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169730）
          source: &a1
            id: s_P7QRP3oFDxZZdiowyGVCGX
            source_type: api_record
            title: 中国历代人物传记资料库：王亞卿（CBDB 169730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169730&o=json
            external_identifier: CBDB:169730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BSXYTVbf7WZNKaVR7mcC5K
        subject_person_id: p_UHyuFiNJ8n617D7P4wMsNq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFRi6XAeCBttqtc9MJvyP5
          claim_id: c_BSXYTVbf7WZNKaVR7mcC5K
          source_id: s_P7QRP3oFDxZZdiowyGVCGX
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
        id: c_vBh67GoVGV53BWaCcEtFzN
        subject_person_id: p_UHyuFiNJ8n617D7P4wMsNq
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
        - id: cs_2xdx9aLC3P8PMt2BQQDKxa
          claim_id: c_vBh67GoVGV53BWaCcEtFzN
          source_id: s_P7QRP3oFDxZZdiowyGVCGX
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

# 王亞卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亞卿 | accepted |
| death.date | 727年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亞卿（CBDB 169730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169730&o=json)
