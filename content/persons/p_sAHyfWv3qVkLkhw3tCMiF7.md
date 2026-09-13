---
schema: wang-person/v1
id: p_sAHyfWv3qVkLkhw3tCMiF7
status: active
merged_into: null
display_name: 王端禮
cbdb_id: 27284
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5uge5S12GqLrFW2XrR19u
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端禮，史料所见人物。本项目依据《中国历代人物传记资料库：王端禮（CBDB 27284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_JocPdWowzoznxYNUCZ2QTa
          claim_id: c_N5uge5S12GqLrFW2XrR19u
          source_id: s_Fc85A5ip7bXxeuNbE5XAQq
          stance: supports
          locator: CBDB:27284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Fc85A5ip7bXxeuNbE5XAQq
            source_type: api_record
            title: 中国历代人物传记资料库：王端禮（CBDB 27284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27284&o=json
            external_identifier: CBDB:27284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Weg7wRL9H4WS7x8bqQf8L5
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vjbcPezPhd6T23cKp2EEeH
          claim_id: c_Weg7wRL9H4WS7x8bqQf8L5
          source_id: s_Fc85A5ip7bXxeuNbE5XAQq
          stance: supports
          locator: CBDB:27284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gystWZCysz-vUW49rKGN5P
        subject_person_id: p_LWPxZv8gZ5dg5wcbAkJh1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ompiKVyzkjrpVJD2xaNp4
          claim_id: c_gystWZCysz-vUW49rKGN5P
          source_id: s_kt7zu8Mjq9Quim8mRSNxcb
          stance: supports
          locator: CBDB 双向互证（子 王端禮 ⇄ 父 王景視）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_kt7zu8Mjq9Quim8mRSNxcb
            source_type: api_record
            title: 中国历代人物传记资料库：王景視（CBDB 27283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27283&o=json
            external_identifier: CBDB:27283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LWPxZv8gZ5dg5wcbAkJh1g
        status: active
        display_name: 王景視
        merged_into_person_id: null
  children:
    - claim:
        id: c_OboDh79Zl36r-YPsSxk5a-
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSQsMJN57yesJR4aT7KBj8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9-jWpb-xWXzM1EB2w8g6J
          claim_id: c_OboDh79Zl36r-YPsSxk5a-
          source_id: s_Fc85A5ip7bXxeuNbE5XAQq
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2053：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fc85A5ip7bXxeuNbE5XAQq
            source_type: api_record
            title: 中国历代人物传记资料库：王端禮（CBDB 27284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27284&o=json
            external_identifier: CBDB:27284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MSQsMJN57yesJR4aT7KBj8
        status: active
        display_name: 王鴻舉
        merged_into_person_id: null
    - claim:
        id: c_GTwWojLVq7QLAKFls-gdW2
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J2sm2QjBDXQ9KbXi2v7H6H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ho0aiUt4csqBVzhyvWuIUw
          claim_id: c_GTwWojLVq7QLAKFls-gdW2
          source_id: s_BYQ23wCKNMuK3tkW16x4gc
          stance: supports
          locator: CBDB 双向互证（父 王端禮 ⇄ 子 王鶚舉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BYQ23wCKNMuK3tkW16x4gc
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚舉（CBDB 27286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27286&o=json
            external_identifier: CBDB:27286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_J2sm2QjBDXQ9KbXi2v7H6H
        status: active
        display_name: 王鶚舉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王端禮，史料所见人物。本项目依据《中国历代人物传记资料库：王端禮（CBDB 27284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王端禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LWPxZv8gZ5dg5wcbAkJh1g | 王景視 | accepted |
| children | p_MSQsMJN57yesJR4aT7KBj8 | 王鴻舉 | accepted |
| children | p_J2sm2QjBDXQ9KbXi2v7H6H | 王鶚舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端禮（CBDB 27284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27284&o=json)
- [中国历代人物传记资料库：王鶚舉（CBDB 27286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27286&o=json)
- [中国历代人物传记资料库：王景視（CBDB 27283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27283&o=json)
