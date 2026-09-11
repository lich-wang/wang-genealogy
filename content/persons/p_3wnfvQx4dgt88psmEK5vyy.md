---
schema: wang-person/v1
id: p_3wnfvQx4dgt88psmEK5vyy
status: active
merged_into: null
display_name: 顧文琴
revision: 1
cbdb_id: 69532
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wD6iT2K5iYX2jdKt0DdOHo
        subject_person_id: p_3wnfvQx4dgt88psmEK5vyy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 顧文琴
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KCmJuR7yNbnytX4sd5KN5
          claim_id: c_wD6iT2K5iYX2jdKt0DdOHo
          source_id: s_fw2tWu444S1HdQvKw9SVGI
          stance: supports
          locator: CBDB:69532
          quotation: null
          interpretation_note: CBDB 明确记录的王丕曾配偶
          source: &a1
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
          source: *a1
      object_person:
        id: p_W6vK4xPgYh5xNHq392P2Z8
        status: active
        display_name: 王丕曾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 顧文琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 顧文琴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_W6vK4xPgYh5xNHq392P2Z8 | 王丕曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧文琴（CBDB 69532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69532&o=json)
