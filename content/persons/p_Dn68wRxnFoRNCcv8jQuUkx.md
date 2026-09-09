---
schema: wang-person/v1
id: p_Dn68wRxnFoRNCcv8jQuUkx
status: active
merged_into: null
display_name: 王相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RN5cPKZzEC1kAMMNvvyx5D
        subject_person_id: p_Dn68wRxnFoRNCcv8jQuUkx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKgS88L4jeUL7hrx8mQarp
          claim_id: c_RN5cPKZzEC1kAMMNvvyx5D
          source_id: s_e9cwCbYfbLR34v5fsLEXFH
          stance: supports
          locator: CBDB:490687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490687）
          source: &a1
            id: s_e9cwCbYfbLR34v5fsLEXFH
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 490687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490687&o=json
            external_identifier: CBDB:490687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9rPMD55GiMNg4ewU4ketY2
        subject_person_id: p_Dn68wRxnFoRNCcv8jQuUkx
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
        - id: cs_vkNxF953E4KKDpveDBmQ65
          claim_id: c_9rPMD55GiMNg4ewU4ketY2
          source_id: s_e9cwCbYfbLR34v5fsLEXFH
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

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 490687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490687&o=json)
