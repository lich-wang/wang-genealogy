---
schema: wang-person/v1
id: p_rj597A434g3oGr3CMXf786
status: active
merged_into: null
display_name: 王伍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFa5tEmQA9RLusEPkdJTwB
        subject_person_id: p_rj597A434g3oGr3CMXf786
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qcPcNvPWgKa72T3ytDVEvo
          claim_id: c_zFa5tEmQA9RLusEPkdJTwB
          source_id: s_RjgKeCqHcGF2Gi7ZP6P4ho
          stance: supports
          locator: CBDB:302567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302567）
          source: &a1
            id: s_RjgKeCqHcGF2Gi7ZP6P4ho
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 302567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302567&o=json
            external_identifier: CBDB:302567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kYrt9LKx2EXYo19tNHkCGU
        subject_person_id: p_rj597A434g3oGr3CMXf786
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
        - id: cs_PxzLBk48vQGmtX3rnqLu3c
          claim_id: c_kYrt9LKx2EXYo19tNHkCGU
          source_id: s_RjgKeCqHcGF2Gi7ZP6P4ho
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
        id: c__CaclHSql_OfByQExdf2p2
        subject_person_id: p_rj597A434g3oGr3CMXf786
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdS8bHeknsJ1xgQzRdWnm9
          claim_id: c__CaclHSql_OfByQExdf2p2
          source_id: s_RjgKeCqHcGF2Gi7ZP6P4ho
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MQQyuFRHwHza48Rxy8cmUZ
        status: active
        display_name: 王重光
        merged_into_person_id: null
  other: []
---

# 王伍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_MQQyuFRHwHza48Rxy8cmUZ | 王重光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伍（CBDB 302567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302567&o=json)
