---
schema: wang-person/v1
id: p_rMD7fcdsHtcbRUCp343sZb
status: active
merged_into: null
display_name: 王欽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DjUukanEY1jYoA3mgWJdKC
        subject_person_id: p_rMD7fcdsHtcbRUCp343sZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqMzkgqrrRCwx2xB92ZnGk
          claim_id: c_DjUukanEY1jYoA3mgWJdKC
          source_id: s_FyU5MZjtoeisVMzQQWg6S4
          stance: supports
          locator: CBDB:314771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314771）
          source: &a1
            id: s_FyU5MZjtoeisVMzQQWg6S4
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 314771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314771&o=json
            external_identifier: CBDB:314771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eUp2VMBNajosPtviWEyDMj
        subject_person_id: p_rMD7fcdsHtcbRUCp343sZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVeo8GDSb8snCASNBH9ot4
          claim_id: c_eUp2VMBNajosPtviWEyDMj
          source_id: s_FyU5MZjtoeisVMzQQWg6S4
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
  descendants:
    - claim:
        id: c_S7vd2e3SwNXVlw_muQPqu5
        subject_person_id: p_rMD7fcdsHtcbRUCp343sZb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hF6A39v3Avh3nveVqg9t_6
          claim_id: c_S7vd2e3SwNXVlw_muQPqu5
          source_id: s_QiMNfcwzqPvvJ5n4NeW8JC
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QiMNfcwzqPvvJ5n4NeW8JC
            source_type: api_record
            title: 中国历代人物传记资料库：王好問（CBDB 126519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126519&o=json
            external_identifier: CBDB:126519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9qD8oY8HFNMMPkFU7baFfu
        status: active
        display_name: 王好問
        merged_into_person_id: null
  other: []
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9qD8oY8HFNMMPkFU7baFfu | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好問（CBDB 126519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126519&o=json)
- [中国历代人物传记资料库：王欽（CBDB 314771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314771&o=json)
