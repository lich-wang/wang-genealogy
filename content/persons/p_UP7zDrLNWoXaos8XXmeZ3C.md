---
schema: wang-person/v1
id: p_UP7zDrLNWoXaos8XXmeZ3C
status: active
merged_into: null
display_name: 王仕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9v1F8BBkRdNWiKi8iQBxo8
        subject_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6LZ8TiVzbG5Qu2CueYt1mx
          claim_id: c_9v1F8BBkRdNWiKi8iQBxo8
          source_id: s_PXRwBKePCgzUCJeG12EiEx
          stance: supports
          locator: CBDB:275667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275667）
          source: &a1
            id: s_PXRwBKePCgzUCJeG12EiEx
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEg5pwy7yKasqD41CCf6yw
        subject_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R9RLwOWtaaCw1JC9mBBKB4
          claim_id: c_vEg5pwy7yKasqD41CCf6yw
          source_id: s_PXRwBKePCgzUCJeG12EiEx
          stance: supports
          locator: CBDB:275667
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

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，明人物。弘治十八年進士，籍贯即墨。（中国历代人物传记资料库 CBDB 275667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 275667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json)
