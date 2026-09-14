---
schema: wang-person/v1
id: p_w4ezLJLy4hfFp7fG4YLjAJ
status: active
merged_into: null
display_name: 王曜昇
cbdb_id: 526803
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hh5K3sZmugazcNxB4B1wNo
        subject_person_id: p_w4ezLJLy4hfFp7fG4YLjAJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜昇，史料所见人物。本项目依据《中国历代人物传记资料库：王曜昇（CBDB 526803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_cigFt_7-XMHkHQ2cW7iRDU
          claim_id: c_Hh5K3sZmugazcNxB4B1wNo
          source_id: s_88ekKHZ5xd9FTxQ3Dq87eW
          stance: supports
          locator: CBDB:526803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_88ekKHZ5xd9FTxQ3Dq87eW
            source_type: api_record
            title: 中国历代人物传记资料库：王曜昇（CBDB 526803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526803&o=json
            external_identifier: CBDB:526803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x57F1QkGePQ83ch7HL7pzL
        subject_person_id: p_w4ezLJLy4hfFp7fG4YLjAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6F6VGgxJXMH28GsEtfMjey
          claim_id: c_x57F1QkGePQ83ch7HL7pzL
          source_id: s_88ekKHZ5xd9FTxQ3Dq87eW
          stance: supports
          locator: CBDB:526803
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4ZJVcqy1yEX4Oxxl9Ra_YD
        subject_person_id: p_4EGWjzekM8nQB2yr2oCRfT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w4ezLJLy4hfFp7fG4YLjAJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FkYqlYoPywpB9YBn8asu4G
          claim_id: c_4ZJVcqy1yEX4Oxxl9Ra_YD
          source_id: s_QJrWJrNX28P6PdAnCqVrBW
          stance: supports
          locator: CBDB：兄弟 王昊（69262）之父／母 王瑞璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王曜昇 与 王昊 为同胞（CBDB 记「兄」），王昊 之父／母即 王曜昇 之父／母。
          source:
            id: s_QJrWJrNX28P6PdAnCqVrBW
            source_type: api_record
            title: 中国历代人物传记资料库：王曜昇（CBDB 526803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526803&o=json
            external_identifier: CBDB:526803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4EGWjzekM8nQB2yr2oCRfT
        status: active
        display_name: 王瑞璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QZ8eUY7DQvJuCQi0Xn74o2
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w4ezLJLy4hfFp7fG4YLjAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-TmPYvlEWNPS2M6rrQj9x
          claim_id: c_QZ8eUY7DQvJuCQi0Xn74o2
          source_id: s_QJrWJrNX28P6PdAnCqVrBW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69262 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QJrWJrNX28P6PdAnCqVrBW
            source_type: api_record
            title: 中国历代人物传记资料库：王曜昇（CBDB 526803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526803&o=json
            external_identifier: CBDB:526803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_afPNNs5ZnKkGi8uzmbG1Wn
        status: active
        display_name: 王昊
        merged_into_person_id: null
---

# 王曜昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曜昇，史料所见人物。本项目依据《中国历代人物传记资料库：王曜昇（CBDB 526803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王曜昇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EGWjzekM8nQB2yr2oCRfT | 王瑞璋 | accepted |
| other | p_afPNNs5ZnKkGi8uzmbG1Wn | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曜昇（CBDB 526803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526803&o=json)
