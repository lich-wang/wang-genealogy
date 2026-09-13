---
schema: wang-person/v1
id: p_XAZFGAYeQkDJ8m4Kt7zkQf
status: active
merged_into: null
display_name: 王宗曜
cbdb_id: 258050
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZ1Ua1Q2H4JezjDvPPDgW7
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗曜，史料所见人物。本项目依据《中国历代人物传记资料库：王宗曜（CBDB 258050）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1xL4DZqQrblH6K9QlcqbbZ
          claim_id: c_EZ1Ua1Q2H4JezjDvPPDgW7
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: CBDB:258050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zhgfw6B2odi1NVfifFZGeF
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cMD7JeUZQzhsBtzPXwMNWc
          claim_id: c_Zhgfw6B2odi1NVfifFZGeF
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: CBDB:258050
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Op5FC_jf765rWXpgKy6gq0
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKjVL3f5VqnIjQB-_WPe9z
          claim_id: c_Op5FC_jf765rWXpgKy6gq0
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_x8mQMeJnHp1fPict2xPV7L
        status: active
        display_name: 王中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗曜，史料所见人物。本项目依据《中国历代人物传记资料库：王宗曜（CBDB 258050）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王宗曜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x8mQMeJnHp1fPict2xPV7L | 王中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗曜（CBDB 258050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json)
