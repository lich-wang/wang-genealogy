---
schema: wang-person/v1
id: p_zdqhgBQcRuZFJjJq4vVV5M
status: active
merged_into: null
display_name: 王本
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnNHBKtMuzCaDe5PicAALJ
        subject_person_id: p_zdqhgBQcRuZFJjJq4vVV5M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9neT6K7uZcEjwDpW68uRP
          claim_id: c_EnNHBKtMuzCaDe5PicAALJ
          source_id: s_7x6Xmq5yRXsEf53Z6Z6LRV
          stance: supports
          locator: CBDB:10685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10685）
          source: &a1
            id: s_7x6Xmq5yRXsEf53Z6Z6LRV
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 10685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10685&o=json
            external_identifier: CBDB:10685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BtsCLfkPpDSnHGGEisFg9T
        subject_person_id: p_zdqhgBQcRuZFJjJq4vVV5M
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
        - id: cs_UTcXoa39KNWsFNvSDjRtzj
          claim_id: c_BtsCLfkPpDSnHGGEisFg9T
          source_id: s_7x6Xmq5yRXsEf53Z6Z6LRV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_edfkhp9ZoLEYzuJPmDBOa1
        subject_person_id: p_zdqhgBQcRuZFJjJq4vVV5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35wd94gwG3pzokf4a6CedM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLqQnzVKVMuT1_wnkpM2D-
          claim_id: c_edfkhp9ZoLEYzuJPmDBOa1
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（父 王本 ⇄ 子 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 10685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10685&o=json)
- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
