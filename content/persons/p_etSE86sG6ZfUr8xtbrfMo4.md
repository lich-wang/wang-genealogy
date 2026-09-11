---
schema: wang-person/v1
id: p_etSE86sG6ZfUr8xtbrfMo4
status: active
merged_into: null
display_name: 王國瑞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CP7xnwrnLNyhB3WQiPEKBc
        subject_person_id: p_etSE86sG6ZfUr8xtbrfMo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DSbuNdzpc5K3kQ3F75ttDH
          claim_id: c_CP7xnwrnLNyhB3WQiPEKBc
          source_id: s_TGPEzDsCyxHyEwFbfgtGAK
          stance: supports
          locator: CBDB:219646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219646）
          source: &a1
            id: s_TGPEzDsCyxHyEwFbfgtGAK
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 219646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219646&o=json
            external_identifier: CBDB:219646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NEC9ewdTtkpzMb5Mrvda8
        subject_person_id: p_etSE86sG6ZfUr8xtbrfMo4
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
        - id: cs_21sKHYV8mGHvzsN6aA81xb
          claim_id: c_6NEC9ewdTtkpzMb5Mrvda8
          source_id: s_TGPEzDsCyxHyEwFbfgtGAK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_L1GWOMFZ7OBWvmoOeDbge6
        subject_person_id: p_etSE86sG6ZfUr8xtbrfMo4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U1s98XVN7fk14ATdRBVYZw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ILYGKLPd0S721VZJn5Daz
          claim_id: c_L1GWOMFZ7OBWvmoOeDbge6
          source_id: s_TGPEzDsCyxHyEwFbfgtGAK
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U1s98XVN7fk14ATdRBVYZw
        status: active
        display_name: 王希曾
        merged_into_person_id: null
  other: []
---

# 王國瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國瑞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_U1s98XVN7fk14ATdRBVYZw | 王希曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國瑞（CBDB 219646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219646&o=json)
