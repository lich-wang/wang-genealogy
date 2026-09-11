---
schema: wang-person/v1
id: p_5iEZQi2CY6zZCLhNB26wYg
status: active
merged_into: null
display_name: 戚繼裳
revision: 1
cbdb_id: 121014
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fsKCEmm_g5j9kvIy2v30_s
        subject_person_id: p_5iEZQi2CY6zZCLhNB26wYg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 戚繼裳
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GIw6RVK7xbxU8dNg0IMpzn
          claim_id: c_fsKCEmm_g5j9kvIy2v30_s
          source_id: s_5qm359Iyvu2AcvH1JvpUtQ
          stance: supports
          locator: CBDB:121014
          quotation: null
          interpretation_note: CBDB 明确记录的王維哲配偶
          source: &a1
            id: s_5qm359Iyvu2AcvH1JvpUtQ
            source_type: api_record
            title: 中国历代人物传记资料库：戚繼裳（CBDB 121014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121014&o=json
            external_identifier: CBDB:121014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LEl3m81R7KodR65WZt6bOs
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5iEZQi2CY6zZCLhNB26wYg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NV9h1OqlB_h6ozeOnpIL3C
          claim_id: c_LEl3m81R7KodR65WZt6bOs
          source_id: s_5qm359Iyvu2AcvH1JvpUtQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3926, HuWenKai #535：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rEY9B1tQdA5YY3oMLZzUw7
        status: active
        display_name: 王維哲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 戚繼裳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 戚繼裳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rEY9B1tQdA5YY3oMLZzUw7 | 王維哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：戚繼裳（CBDB 121014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121014&o=json)
