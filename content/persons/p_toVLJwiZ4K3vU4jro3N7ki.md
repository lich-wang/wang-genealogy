---
schema: wang-person/v1
id: p_toVLJwiZ4K3vU4jro3N7ki
status: active
merged_into: null
display_name: 楊紹文
revision: 1
cbdb_id: 56787
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8D_Lv2e-4tRS8BWxAj19O
        subject_person_id: p_toVLJwiZ4K3vU4jro3N7ki
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊紹文，史料所见人物。本项目依据《中国历代人物传记资料库：楊紹文（CBDB 56787）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVzMqHZNE96exZ15XxYam9
          claim_id: c_Q8D_Lv2e-4tRS8BWxAj19O
          source_id: s_PpI04Sd1NRzFCTUp55cPbr
          stance: supports
          locator: CBDB:56787
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PpI04Sd1NRzFCTUp55cPbr
            source_type: api_record
            title: 中国历代人物传记资料库：楊紹文（CBDB 56787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56787&o=json
            external_identifier: CBDB:56787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mHOQUaWA78iUXso8v-D_OI
        subject_person_id: p_toVLJwiZ4K3vU4jro3N7ki
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊紹文
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v_QqnlpBiy8PiYtIL7Obv7
          claim_id: c_mHOQUaWA78iUXso8v-D_OI
          source_id: s_PpI04Sd1NRzFCTUp55cPbr
          stance: supports
          locator: CBDB:56787
          quotation: null
          interpretation_note: CBDB 明确记录的王蘊徽配偶
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
        id: c_s4e6A6jtRU-taVzAlaZo50
        subject_person_id: p_Lc2gCDF5BzW25Fdhb8evAr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_toVLJwiZ4K3vU4jro3N7ki
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5jLAdw5SUUdLCJcRsj9xh
          claim_id: c_s4e6A6jtRU-taVzAlaZo50
          source_id: s_PpI04Sd1NRzFCTUp55cPbr
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1138, HuWenKai #258：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lc2gCDF5BzW25Fdhb8evAr
        status: active
        display_name: 王蘊徽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊紹文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊紹文，史料所见人物。本项目依据《中国历代人物传记资料库：楊紹文（CBDB 56787）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 楊紹文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Lc2gCDF5BzW25Fdhb8evAr | 王蘊徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊紹文（CBDB 56787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56787&o=json)
