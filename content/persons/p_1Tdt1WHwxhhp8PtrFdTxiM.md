---
schema: wang-person/v1
id: p_1Tdt1WHwxhhp8PtrFdTxiM
status: active
merged_into: null
display_name: 王棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dkNK6GEx8ws8UPq5i1zbUN
        subject_person_id: p_1Tdt1WHwxhhp8PtrFdTxiM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gNQoMEN6LxMy5G54Nn8neX
          claim_id: c_dkNK6GEx8ws8UPq5i1zbUN
          source_id: s_eBnMLY1z4Fbxh7PjnQdZmd
          stance: supports
          locator: CBDB:274257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274257）
          source: &a1
            id: s_eBnMLY1z4Fbxh7PjnQdZmd
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 274257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274257&o=json
            external_identifier: CBDB:274257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nxGjt9Cx1rxW6BFn8aEf2p
        subject_person_id: p_1Tdt1WHwxhhp8PtrFdTxiM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-uX9_uw_-9cLBfES7BwnPu
          claim_id: c_nxGjt9Cx1rxW6BFn8aEf2p
          source_id: s_eBnMLY1z4Fbxh7PjnQdZmd
          stance: supports
          locator: CBDB:274257
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

# 王棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棠 | accepted |
| bio.summary | 王棠，明人物。弘治十八年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 274257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棠（CBDB 274257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274257&o=json)
