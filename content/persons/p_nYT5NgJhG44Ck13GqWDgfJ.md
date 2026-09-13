---
schema: wang-person/v1
id: p_nYT5NgJhG44Ck13GqWDgfJ
status: active
merged_into: null
display_name: 王庚吉
cbdb_id: 331763
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ub24Dq9nEDTT7rYV4Z1ey6
        subject_person_id: p_nYT5NgJhG44Ck13GqWDgfJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚吉，史料所见人物。本项目依据《中国历代人物传记资料库：王庚吉（CBDB 331763）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_aNWATu21nRd51W10KQTqZe
          claim_id: c_Ub24Dq9nEDTT7rYV4Z1ey6
          source_id: s_RXBP1MrWSapGjZFgZoAPgj
          stance: supports
          locator: CBDB:331763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RXBP1MrWSapGjZFgZoAPgj
            source_type: api_record
            title: 中国历代人物传记资料库：王庚吉（CBDB 331763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331763&o=json
            external_identifier: CBDB:331763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBt8cvxHu5pMf832BehoFf
        subject_person_id: p_nYT5NgJhG44Ck13GqWDgfJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fuswAs4xxSKnhLXvftKmue
          claim_id: c_SBt8cvxHu5pMf832BehoFf
          source_id: s_RXBP1MrWSapGjZFgZoAPgj
          stance: supports
          locator: CBDB:331763
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_SDJ91AtSIET1dIlEiiNu82
        subject_person_id: p_nYT5NgJhG44Ck13GqWDgfJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5joJqoMyociS4kycpuaY9i
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tyzwmda4DSb76jLUc59oE_
          claim_id: c_SDJ91AtSIET1dIlEiiNu82
          source_id: s_2GHNV9LUGW5GXzQXYQpJ6F
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2GHNV9LUGW5GXzQXYQpJ6F
            source_type: api_record
            title: 中国历代人物传记资料库：王以修（CBDB 126492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126492&o=json
            external_identifier: CBDB:126492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
  other: []
---

# 王庚吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庚吉，史料所见人物。本项目依据《中国历代人物传记资料库：王庚吉（CBDB 331763）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庚吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庚吉（CBDB 331763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331763&o=json)
- [中国历代人物传记资料库：王以修（CBDB 126492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126492&o=json)
