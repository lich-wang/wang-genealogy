---
schema: wang-person/v1
id: p_d3NCtZk3Gsavn2pC1x34da
status: active
merged_into: null
display_name: 王彪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yyPNXUM9JnAgPooGfePziL
        subject_person_id: p_d3NCtZk3Gsavn2pC1x34da
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_brganyfDYC4RQSXpPPNX6C
          claim_id: c_yyPNXUM9JnAgPooGfePziL
          source_id: s_CHYc5rbRtNMcxZrn14nwt5
          stance: supports
          locator: CBDB:318561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318561）
          source: &a1
            id: s_CHYc5rbRtNMcxZrn14nwt5
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 318561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318561&o=json
            external_identifier: CBDB:318561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZBqJaDUENAik2V9HPiA4nD
        subject_person_id: p_d3NCtZk3Gsavn2pC1x34da
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彪，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0qJ8Y0qqREyG4hg_3UNyq
          claim_id: c_ZBqJaDUENAik2V9HPiA4nD
          source_id: s_CHYc5rbRtNMcxZrn14nwt5
          stance: supports
          locator: CBDB:318561
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
        id: c_xBgkuQIsKgY22x1rbxgO2j
        subject_person_id: p_d3NCtZk3Gsavn2pC1x34da
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-HOK7l6pxyh8PFlKpeUHJU
          claim_id: c_xBgkuQIsKgY22x1rbxgO2j
          source_id: s_CHYc5rbRtNMcxZrn14nwt5
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
  other: []
---

# 王彪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彪 | accepted |
| bio.summary | 王彪，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 318561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318561&o=json)
