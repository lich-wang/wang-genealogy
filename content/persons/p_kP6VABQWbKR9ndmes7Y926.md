---
schema: wang-person/v1
id: p_kP6VABQWbKR9ndmes7Y926
status: active
merged_into: null
display_name: 王武烈
cbdb_id: 214071
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mWPG4wD9cBBew7kbd7ovW6
        subject_person_id: p_kP6VABQWbKR9ndmes7Y926
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武烈，史料所见人物。本项目依据《中国历代人物传记资料库：王武烈（CBDB 214071）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_h3BEKRaDMoY3bf-pWb-D1b
          claim_id: c_mWPG4wD9cBBew7kbd7ovW6
          source_id: s_tttGX989H6pEcjmXv5X1kQ
          stance: supports
          locator: CBDB:214071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tttGX989H6pEcjmXv5X1kQ
            source_type: api_record
            title: 中国历代人物传记资料库：王武烈（CBDB 214071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214071&o=json
            external_identifier: CBDB:214071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBe5QQiiY7SrNtxrPFcHWo
        subject_person_id: p_kP6VABQWbKR9ndmes7Y926
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EQ4tB7FePShsRcc458u125
          claim_id: c_zBe5QQiiY7SrNtxrPFcHWo
          source_id: s_tttGX989H6pEcjmXv5X1kQ
          stance: supports
          locator: CBDB:214071
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uM_2HgI3HjR9BwECy_QqOv
        subject_person_id: p_kP6VABQWbKR9ndmes7Y926
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GaxaL368Sw3VJAGUZoHG3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GgicICsHzrljsRjnlpZTT
          claim_id: c_uM_2HgI3HjR9BwECy_QqOv
          source_id: s_7u9pDH7qaGQstC7Dpwtt7B
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7u9pDH7qaGQstC7Dpwtt7B
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 206153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json
            external_identifier: CBDB:206153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GaxaL368Sw3VJAGUZoHG3
        status: active
        display_name: 王景星
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王武烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王武烈，史料所见人物。本项目依据《中国历代人物传记资料库：王武烈（CBDB 214071）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王武烈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5GaxaL368Sw3VJAGUZoHG3 | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景星（CBDB 206153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206153&o=json)
- [中国历代人物传记资料库：王武烈（CBDB 214071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214071&o=json)
