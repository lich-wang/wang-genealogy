---
schema: wang-person/v1
id: p_4H2YNA1JDoTsV3qi3rmg7T
status: active
merged_into: null
display_name: 王宋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CH4JyVp2cbkQ6J5U1c7EBH
        subject_person_id: p_4H2YNA1JDoTsV3qi3rmg7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fG5Z3Q7hHw2cCtuiVHdNDF
          claim_id: c_CH4JyVp2cbkQ6J5U1c7EBH
          source_id: s_rtftyDC8143vh25W8EANY8
          stance: supports
          locator: CBDB:135016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135016）
          source: &a1
            id: s_rtftyDC8143vh25W8EANY8
            source_type: api_record
            title: 中国历代人物传记资料库：王宋（CBDB 135016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135016&o=json
            external_identifier: CBDB:135016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HshGeVQ7kj8Z11ZmoJBkCi
        subject_person_id: p_4H2YNA1JDoTsV3qi3rmg7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宋，史料所见人物。本项目依据《中国历代人物传记资料库：王宋（CBDB 135016）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_11BrwBNO7idZEDCDuuZXia
          claim_id: c_HshGeVQ7kj8Z11ZmoJBkCi
          source_id: s_rtftyDC8143vh25W8EANY8
          stance: supports
          locator: CBDB:135016
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_7cc6k7gOb97aC4GVSAtI67
        subject_person_id: p_4H2YNA1JDoTsV3qi3rmg7T
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VPWdbry71Noo1k8UTZecJi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sKgb1mH7TDQP1qNgCJsPfy
          claim_id: c_7cc6k7gOb97aC4GVSAtI67
          source_id: s_6YX8_6gkgfygdoC6tXx6a8
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1998：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6YX8_6gkgfygdoC6tXx6a8
            source_type: api_record
            title: 中国历代人物传记资料库：劉勳（CBDB 135018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135018&o=json
            external_identifier: CBDB:135018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VPWdbry71Noo1k8UTZecJi
        status: active
        display_name: 劉勳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宋 | accepted |
| bio.summary | 王宋，史料所见人物。本项目依据《中国历代人物传记资料库：王宋（CBDB 135016）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VPWdbry71Noo1k8UTZecJi | 劉勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉勳（CBDB 135018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135018&o=json)
- [中国历代人物传记资料库：王宋（CBDB 135016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135016&o=json)
