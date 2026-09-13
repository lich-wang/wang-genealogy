---
schema: wang-person/v1
id: p_5kBeiGPTh9zzzB99spZLjF
status: active
merged_into: null
display_name: 王序禮
cbdb_id: 118493
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2eCoYDEt6pWoLfrsnfQTrS
        subject_person_id: p_5kBeiGPTh9zzzB99spZLjF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序禮，史料所见人物。本项目依据《中国历代人物传记资料库：王序禮（CBDB 118493）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_iW1nD3-N3wOYmKEq94WPef
          claim_id: c_2eCoYDEt6pWoLfrsnfQTrS
          source_id: s_gu2iv1XgFJPsD4oEWDU8jN
          stance: supports
          locator: CBDB:118493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gu2iv1XgFJPsD4oEWDU8jN
            source_type: api_record
            title: 中国历代人物传记资料库：王序禮（CBDB 118493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118493&o=json
            external_identifier: CBDB:118493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R64SPji8r22PKPyBSz3GAv
        subject_person_id: p_5kBeiGPTh9zzzB99spZLjF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z45xkRny2DhMppLVyKQAbw
          claim_id: c_R64SPji8r22PKPyBSz3GAv
          source_id: s_gu2iv1XgFJPsD4oEWDU8jN
          stance: supports
          locator: CBDB:118493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CVcfk7G-hFNJp7GXMu58NE
        subject_person_id: p_5kBeiGPTh9zzzB99spZLjF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_M6t3VGVgg5ybTnKDVmKNSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c0w8MDsigtxoWvJPoFYeqt
          claim_id: c_CVcfk7G-hFNJp7GXMu58NE
          source_id: s_ea8vnisD_dQHhQKRWBgzTs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2597：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ea8vnisD_dQHhQKRWBgzTs
            source_type: api_record
            title: 中国历代人物传记资料库：丁氏(王序禮妻)（CBDB 118492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118492&o=json
            external_identifier: CBDB:118492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M6t3VGVgg5ybTnKDVmKNSX
        status: active
        display_name: 丁氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王序禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王序禮，史料所见人物。本项目依据《中国历代人物传记资料库：王序禮（CBDB 118493）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王序禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_M6t3VGVgg5ybTnKDVmKNSX | 丁氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁氏(王序禮妻)（CBDB 118492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118492&o=json)
- [中国历代人物传记资料库：王序禮（CBDB 118493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118493&o=json)
