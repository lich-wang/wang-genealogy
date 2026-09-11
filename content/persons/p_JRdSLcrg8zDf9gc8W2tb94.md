---
schema: wang-person/v1
id: p_JRdSLcrg8zDf9gc8W2tb94
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXwUqHAR4DdZagvi6GHLwV
        subject_person_id: p_JRdSLcrg8zDf9gc8W2tb94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qFSsSz9tD1bWDjJEvmHyhy
          claim_id: c_aXwUqHAR4DdZagvi6GHLwV
          source_id: s_FM1dM5hebFApgsBhwstHfV
          stance: supports
          locator: CBDB:298836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298836）
          source: &a1
            id: s_FM1dM5hebFApgsBhwstHfV
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 298836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298836&o=json
            external_identifier: CBDB:298836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rxLtnQDkNjfkKzSSbs2X2T
        subject_person_id: p_JRdSLcrg8zDf9gc8W2tb94
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
        - id: cs_v2359UJ9soo9W3yZ1YANQf
          claim_id: c_rxLtnQDkNjfkKzSSbs2X2T
          source_id: s_FM1dM5hebFApgsBhwstHfV
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
        id: c_XPCvgE6Pmrx6sW8z095W-t
        subject_person_id: p_JRdSLcrg8zDf9gc8W2tb94
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2xFyhKbCPMFDzc5X9Cbuw
          claim_id: c_XPCvgE6Pmrx6sW8z095W-t
          source_id: s_FM1dM5hebFApgsBhwstHfV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 298836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298836&o=json)
