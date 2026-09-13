---
schema: wang-person/v1
id: p_P6hcRX2Gd1uzZMvGBhoe1g
status: active
merged_into: null
display_name: 王靜明
cbdb_id: 5062
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3GG6VWicWL2Nr1wG4jNrws
        subject_person_id: p_P6hcRX2Gd1uzZMvGBhoe1g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜明，史料所见人物。本项目依据《中国历代人物传记资料库：王靜明（CBDB 5062）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_kcMWhT39ibhc2iQBELdO7K
          claim_id: c_3GG6VWicWL2Nr1wG4jNrws
          source_id: s_KU6Q936Li4ALk6ZWXYuXFV
          stance: supports
          locator: CBDB:5062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KU6Q936Li4ALk6ZWXYuXFV
            source_type: api_record
            title: 中国历代人物传记资料库：王靜明（CBDB 5062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5062&o=json
            external_identifier: CBDB:5062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X39vCoRLCNH9udQrpGEpzk
        subject_person_id: p_P6hcRX2Gd1uzZMvGBhoe1g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mx5cRL1QCd9ouz5a9D51Rc
          claim_id: c_X39vCoRLCNH9udQrpGEpzk
          source_id: s_KU6Q936Li4ALk6ZWXYuXFV
          stance: supports
          locator: CBDB:5062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_0crnZfqiCDi3NXwZch7pDE
        subject_person_id: p_P6hcRX2Gd1uzZMvGBhoe1g
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rj9QfHX94BBCyPEvADMEik
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMzFGi0uS0wj4Ij197IdeR
          claim_id: c_0crnZfqiCDi3NXwZch7pDE
          source_id: s_lYItvkCXVKGfQf70JJBRDP
          stance: supports
          locator: 宋人傳記資料索引(電子版)，9568;9569：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lYItvkCXVKGfQf70JJBRDP
            source_type: api_record
            title: 中国历代人物传记资料库：高衛（CBDB 928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=928&o=json
            external_identifier: CBDB:928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rj9QfHX94BBCyPEvADMEik
        status: active
        display_name: 高衛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王靜明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靜明，史料所见人物。本项目依据《中国历代人物传记资料库：王靜明（CBDB 5062）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王靜明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Rj9QfHX94BBCyPEvADMEik | 高衛 | accepted |

## 外部来源

- [中国历代人物传记资料库：高衛（CBDB 928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=928&o=json)
- [中国历代人物传记资料库：王靜明（CBDB 5062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5062&o=json)
