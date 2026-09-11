---
schema: wang-person/v1
id: p_ZgyZoznnAJrPag6d8FS83S
status: active
merged_into: null
display_name: 王天敘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tKNeeTjx62hn5XLbULJ88M
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_419MkoSkxqbH8gg4Fqptw3
          claim_id: c_tKNeeTjx62hn5XLbULJ88M
          source_id: s_pt8As57WMxXZiWgRwLRxXL
          stance: supports
          locator: CBDB:331575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331575）
          source: &a1
            id: s_pt8As57WMxXZiWgRwLRxXL
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 331575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331575&o=json
            external_identifier: CBDB:331575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4LfSyeHhyEwqJmSQgeDJNo
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKZe4H4FKbAeuXgARMSZgo
          claim_id: c_4LfSyeHhyEwqJmSQgeDJNo
          source_id: s_pt8As57WMxXZiWgRwLRxXL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_x4NFrRUemdBQa-7MxHmJvG
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pYyDajENDy1dF3e8jTTE6c
          claim_id: c_x4NFrRUemdBQa-7MxHmJvG
          source_id: s_pt8As57WMxXZiWgRwLRxXL
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8FE6kbWmNCoQTRuebayd8Y
        status: active
        display_name: 王元賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王天敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天敘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8FE6kbWmNCoQTRuebayd8Y | 王元賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 331575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331575&o=json)
