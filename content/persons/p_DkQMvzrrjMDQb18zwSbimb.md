---
schema: wang-person/v1
id: p_DkQMvzrrjMDQb18zwSbimb
status: active
merged_into: null
display_name: 王希德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JPFj67CSm72aA2241WH2y
        subject_person_id: p_DkQMvzrrjMDQb18zwSbimb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hrjfvs5eBzeVu7AACvWX9f
          claim_id: c_1JPFj67CSm72aA2241WH2y
          source_id: s_C6PjfengbT4LCL5k2KCigL
          stance: supports
          locator: CBDB:313619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313619）
          source: &a1
            id: s_C6PjfengbT4LCL5k2KCigL
            source_type: api_record
            title: 中国历代人物传记资料库：王希德（CBDB 313619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313619&o=json
            external_identifier: CBDB:313619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S6sKafFMxHt3h6opAuEtJh
        subject_person_id: p_DkQMvzrrjMDQb18zwSbimb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jqw5OSOMNwH7kQMneRcPgo
          claim_id: c_S6sKafFMxHt3h6opAuEtJh
          source_id: s_C6PjfengbT4LCL5k2KCigL
          stance: supports
          locator: CBDB:313619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_7ie36LY7luo-o4FKTz74zw
        subject_person_id: p_DkQMvzrrjMDQb18zwSbimb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKP-ZFPllPSYyZqN8Q7pJh
          claim_id: c_7ie36LY7luo-o4FKTz74zw
          source_id: s_C6PjfengbT4LCL5k2KCigL
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHmm96wyqH3FThEZbr7NNh
        status: active
        display_name: 王應顯
        merged_into_person_id: null
  other: []
---

# 王希德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希德 | accepted |
| bio.summary | 王希德，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DHmm96wyqH3FThEZbr7NNh | 王應顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希德（CBDB 313619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313619&o=json)
