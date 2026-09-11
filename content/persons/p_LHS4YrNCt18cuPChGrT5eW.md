---
schema: wang-person/v1
id: p_LHS4YrNCt18cuPChGrT5eW
status: active
merged_into: null
display_name: 王傅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gnmHRB9qohABMHrk5CdrK1
        subject_person_id: p_LHS4YrNCt18cuPChGrT5eW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxarAHcc1yoVw7jAT9yHU7
          claim_id: c_gnmHRB9qohABMHrk5CdrK1
          source_id: s_7LvCG86ZXuUqfDrvPTBPBA
          stance: supports
          locator: CBDB:327866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327866）
          source: &a1
            id: s_7LvCG86ZXuUqfDrvPTBPBA
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 327866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327866&o=json
            external_identifier: CBDB:327866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_op4Jo8T9iVa4Kh5HjnqqKp
        subject_person_id: p_LHS4YrNCt18cuPChGrT5eW
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
        - id: cs_xE5CQTn2HcUNDUNF83mFtb
          claim_id: c_op4Jo8T9iVa4Kh5HjnqqKp
          source_id: s_7LvCG86ZXuUqfDrvPTBPBA
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
        id: c_rBlRcq4bHtO_LQYzi-gVTR
        subject_person_id: p_LHS4YrNCt18cuPChGrT5eW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nNDhOOiu2BPr8Oz0o8CnmT
          claim_id: c_rBlRcq4bHtO_LQYzi-gVTR
          source_id: s_7LvCG86ZXuUqfDrvPTBPBA
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        status: active
        display_name: 王原相
        merged_into_person_id: null
  other: []
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ghyYDQ5eZ8uxN8ip6BX7KC | 王原相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傅（CBDB 327866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327866&o=json)
