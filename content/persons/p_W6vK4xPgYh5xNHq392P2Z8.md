---
schema: wang-person/v1
id: p_W6vK4xPgYh5xNHq392P2Z8
status: active
merged_into: null
display_name: 王丕曾
cbdb_id: 69534
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aZbE5hEoQkgg2kvLfSsfJp
        subject_person_id: p_W6vK4xPgYh5xNHq392P2Z8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕曾，史料所见人物。本项目依据《中国历代人物传记资料库：王丕曾（CBDB 69534）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QzpWglAsBI-e_8iXukBcnj
          claim_id: c_aZbE5hEoQkgg2kvLfSsfJp
          source_id: s_5dcQTRUzVbTMHfJU7wcbTt
          stance: supports
          locator: CBDB:69534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5dcQTRUzVbTMHfJU7wcbTt
            source_type: api_record
            title: 中国历代人物传记资料库：王丕曾（CBDB 69534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69534&o=json
            external_identifier: CBDB:69534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rXBNGRnUbSkKA92SfacC7c
        subject_person_id: p_W6vK4xPgYh5xNHq392P2Z8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7A5P1RW86p995jqEL5CwU8
          claim_id: c_rXBNGRnUbSkKA92SfacC7c
          source_id: s_5dcQTRUzVbTMHfJU7wcbTt
          stance: supports
          locator: CBDB:69534
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XH6_BB-Fz0S24c_J_gStNf
        subject_person_id: p_W6vK4xPgYh5xNHq392P2Z8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3wnfvQx4dgt88psmEK5vyy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tatjVN6YSpKk84s-dMB10l
          claim_id: c_XH6_BB-Fz0S24c_J_gStNf
          source_id: s_fw2tWu444S1HdQvKw9SVGI
          stance: supports
          locator: CBDB 双向互证（妻子 顧文琴）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fw2tWu444S1HdQvKw9SVGI
            source_type: api_record
            title: 中国历代人物传记资料库：顧文琴（CBDB 69532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69532&o=json
            external_identifier: CBDB:69532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3wnfvQx4dgt88psmEK5vyy
        status: active
        display_name: 顧文琴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王丕曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丕曾，史料所见人物。本项目依据《中国历代人物传记资料库：王丕曾（CBDB 69534）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王丕曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3wnfvQx4dgt88psmEK5vyy | 顧文琴 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧文琴（CBDB 69532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69532&o=json)
- [中国历代人物传记资料库：王丕曾（CBDB 69534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69534&o=json)
