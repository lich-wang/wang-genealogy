---
schema: wang-person/v1
id: p_FdQANGZ8Ga1RmHrMXTBEbk
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVG9Sx3efPKH5LVmqCDRUe
        subject_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AzUPW23QcBP8z1monQfy7X
          claim_id: c_KVG9Sx3efPKH5LVmqCDRUe
          source_id: s_xMLw5agxxXRHGwy7z15w7P
          stance: supports
          locator: CBDB:280455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280455）
          source: &a1
            id: s_xMLw5agxxXRHGwy7z15w7P
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 280455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json
            external_identifier: CBDB:280455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TBstrbjXPfs98pPYLE8ZkW
        subject_person_id: p_FdQANGZ8Ga1RmHrMXTBEbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。正德十二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 280455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__DVIq_r5Ui2CyGNra5ehAn
          claim_id: c_TBstrbjXPfs98pPYLE8ZkW
          source_id: s_xMLw5agxxXRHGwy7z15w7P
          stance: supports
          locator: CBDB:280455
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。正德十二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 280455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 280455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280455&o=json)
