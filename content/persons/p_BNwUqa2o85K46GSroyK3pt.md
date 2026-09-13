---
schema: wang-person/v1
id: p_BNwUqa2o85K46GSroyK3pt
status: active
merged_into: null
display_name: 王鑐
cbdb_id: 22219
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wz4jAEzuc9cfkiKjMTdg5G
        subject_person_id: p_BNwUqa2o85K46GSroyK3pt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑐，史料所见人物。本项目依据《中国历代人物传记资料库：王鑐（CBDB 22219）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_u29MW9oS5KJ1htYsuhX15O
          claim_id: c_wz4jAEzuc9cfkiKjMTdg5G
          source_id: s_w9u7BNFUjFJdVFP17Zwzbe
          stance: supports
          locator: CBDB:22219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_w9u7BNFUjFJdVFP17Zwzbe
            source_type: api_record
            title: 中国历代人物传记资料库：王鑐（CBDB 22219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22219&o=json
            external_identifier: CBDB:22219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNrsC72441JaWYGVbYJayS
        subject_person_id: p_BNwUqa2o85K46GSroyK3pt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZYZVx4sAMmS6JJQPSAeJNW
          claim_id: c_gNrsC72441JaWYGVbYJayS
          source_id: s_w9u7BNFUjFJdVFP17Zwzbe
          stance: supports
          locator: CBDB:22219
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wbx5OgCKw7D2VsdN8k3-El
        subject_person_id: p_iwBVuUwJmW9x68bfe9dwKN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BNwUqa2o85K46GSroyK3pt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qn9cN4Gx_E0A_y5naWOtkB
          claim_id: c_wbx5OgCKw7D2VsdN8k3-El
          source_id: s_o6fwhY8EBNrs3ZN82gocSx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1335：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o6fwhY8EBNrs3ZN82gocSx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯庠（17444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json
            external_identifier: CBDB:17444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.897Z
            metadata_json: null
      object_person:
        id: p_iwBVuUwJmW9x68bfe9dwKN
        status: active
        display_name: 王伯庠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鑐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鑐，史料所见人物。本项目依据《中国历代人物传记资料库：王鑐（CBDB 22219）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鑐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_iwBVuUwJmW9x68bfe9dwKN | 王伯庠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑐（CBDB 22219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22219&o=json)
- [CBDB 中国历代人物传记资料库：王伯庠（17444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json)
