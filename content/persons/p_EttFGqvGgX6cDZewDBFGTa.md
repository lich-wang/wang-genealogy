---
schema: wang-person/v1
id: p_EttFGqvGgX6cDZewDBFGTa
status: active
merged_into: null
display_name: 王臣霖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRFS6Q2tJCNsZmbJ4aSeQJ
        subject_person_id: p_EttFGqvGgX6cDZewDBFGTa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w2PQHn4gH9VUpBSagVAWQB
          claim_id: c_oRFS6Q2tJCNsZmbJ4aSeQJ
          source_id: s_GiUcCvX1aonW1gXKYkaJpQ
          stance: supports
          locator: CBDB:692035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692035）
          source: &a1
            id: s_GiUcCvX1aonW1gXKYkaJpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王臣霖（CBDB 692035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692035&o=json
            external_identifier: CBDB:692035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qHJUWmMaEonkjonXB3cocg
        subject_person_id: p_EttFGqvGgX6cDZewDBFGTa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣霖，清人物。籍贯海鹽，入仕廩生。（中国历代人物传记资料库 CBDB 692035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vjxKGvZuYz6RJc-f6hG2KE
          claim_id: c_qHJUWmMaEonkjonXB3cocg
          source_id: s_GiUcCvX1aonW1gXKYkaJpQ
          stance: supports
          locator: CBDB:692035
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__s7Tiv7-DfTYlwtWNzFVoc
        subject_person_id: p_CL9yKhz8KQ9TFTGGVXiGwR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EttFGqvGgX6cDZewDBFGTa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRl2ntZSjzpvP4efR6cXTa
          claim_id: c__s7Tiv7-DfTYlwtWNzFVoc
          source_id: s_GiUcCvX1aonW1gXKYkaJpQ
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293849：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CL9yKhz8KQ9TFTGGVXiGwR
        status: active
        display_name: 王大任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臣霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣霖 | accepted |
| bio.summary | 王臣霖，清人物。籍贯海鹽，入仕廩生。（中国历代人物传记资料库 CBDB 692035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CL9yKhz8KQ9TFTGGVXiGwR | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣霖（CBDB 692035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692035&o=json)
