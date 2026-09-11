---
schema: wang-person/v1
id: p_Yhu8gbvgfcQiqdtV9GDa87
status: active
merged_into: null
display_name: 王四
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gk58kNf6M459Cs17iH7FL6
        subject_person_id: p_Yhu8gbvgfcQiqdtV9GDa87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王四
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sfhGTzqp8x1x6u4scrmV2J
          claim_id: c_Gk58kNf6M459Cs17iH7FL6
          source_id: s_RNsK7NP56xANkbW7YrULxr
          stance: supports
          locator: CBDB:259406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259406）
          source: &a1
            id: s_RNsK7NP56xANkbW7YrULxr
            source_type: api_record
            title: 中国历代人物传记资料库：王四（CBDB 259406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259406&o=json
            external_identifier: CBDB:259406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RzruCpXC6BCCfLr1NARugn
        subject_person_id: p_Yhu8gbvgfcQiqdtV9GDa87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王四，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_71ldqsk-uY7xQbgX6dXdKp
          claim_id: c_RzruCpXC6BCCfLr1NARugn
          source_id: s_RNsK7NP56xANkbW7YrULxr
          stance: supports
          locator: CBDB:259406
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
        id: c_ocBmle-yy6M9fd2nW4DQVj
        subject_person_id: p_Yhu8gbvgfcQiqdtV9GDa87
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-8nedRq_sikQfZt7Ue6PHP
          claim_id: c_ocBmle-yy6M9fd2nW4DQVj
          source_id: s_RNsK7NP56xANkbW7YrULxr
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uwC7U2dhe6Kyw5xBECanBE
        status: active
        display_name: 王珍
        merged_into_person_id: null
  other: []
---

# 王四

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王四 | accepted |
| bio.summary | 王四，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uwC7U2dhe6Kyw5xBECanBE | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王四（CBDB 259406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259406&o=json)
