---
schema: wang-person/v1
id: p_8SGMh3o9oBKDBr13emKYyE
status: active
merged_into: null
display_name: 王田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jvp5KvJcFwd7dTC4Ho3CJL
        subject_person_id: p_8SGMh3o9oBKDBr13emKYyE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_75Jh7z427SFxCukWCCaV4L
          claim_id: c_Jvp5KvJcFwd7dTC4Ho3CJL
          source_id: s_z5epAF8sXSroJDyaax8ZEv
          stance: supports
          locator: CBDB:97973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97973）
          source: &a1
            id: s_z5epAF8sXSroJDyaax8ZEv
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 97973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97973&o=json
            external_identifier: CBDB:97973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5pfW42tzhQQ3ZYkL4fPccX
        subject_person_id: p_8SGMh3o9oBKDBr13emKYyE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PkmrYmEei1L6BvB7jCL7u6
          claim_id: c_5pfW42tzhQQ3ZYkL4fPccX
          source_id: s_z5epAF8sXSroJDyaax8ZEv
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

# 王田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王田 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王田（CBDB 97973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97973&o=json)
