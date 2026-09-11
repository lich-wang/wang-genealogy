---
schema: wang-person/v1
id: p_rgVM34AhoiLib36Ag9rXAh
status: active
merged_into: null
display_name: 王友道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2LM8RU9Ubt1Z992yZD5WdY
        subject_person_id: p_rgVM34AhoiLib36Ag9rXAh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LMa4TC69wduPCPiwSQNZWZ
          claim_id: c_2LM8RU9Ubt1Z992yZD5WdY
          source_id: s_3x9a552BsjBct4KLwm4mVq
          stance: supports
          locator: CBDB:261849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261849）
          source: &a1
            id: s_3x9a552BsjBct4KLwm4mVq
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 261849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261849&o=json
            external_identifier: CBDB:261849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mDibKK6ELFQqMvrJkvmZnL
        subject_person_id: p_rgVM34AhoiLib36Ag9rXAh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友道，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4r1buMDu84yxYksy-LW7Bb
          claim_id: c_mDibKK6ELFQqMvrJkvmZnL
          source_id: s_3x9a552BsjBct4KLwm4mVq
          stance: supports
          locator: CBDB:261849
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
        id: c_JQ5wItFUsY1hBhwo15pM4O
        subject_person_id: p_rgVM34AhoiLib36Ag9rXAh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nQdqDRU7gCLFFCzrrRkDE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-dmB0hn6d6IfhmbCnPKpR
          claim_id: c_JQ5wItFUsY1hBhwo15pM4O
          source_id: s_3x9a552BsjBct4KLwm4mVq
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7nQdqDRU7gCLFFCzrrRkDE
        status: active
        display_name: 王錦
        merged_into_person_id: null
  other: []
---

# 王友道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友道 | accepted |
| bio.summary | 王友道，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 261849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7nQdqDRU7gCLFFCzrrRkDE | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友道（CBDB 261849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261849&o=json)
