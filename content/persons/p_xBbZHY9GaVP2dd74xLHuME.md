---
schema: wang-person/v1
id: p_xBbZHY9GaVP2dd74xLHuME
status: active
merged_into: null
display_name: 王滿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vK4PgHyNaCGAsf7hH8BNJF
        subject_person_id: p_xBbZHY9GaVP2dd74xLHuME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSrB1goobwVPXMBexgefEb
          claim_id: c_vK4PgHyNaCGAsf7hH8BNJF
          source_id: s_4xfBKzefdK9wV2iCnysiqk
          stance: supports
          locator: CBDB:191816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191816）
          source: &a1
            id: s_4xfBKzefdK9wV2iCnysiqk
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 191816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191816&o=json
            external_identifier: CBDB:191816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cwZP1APzDHMLVdMPyk6zYg
        subject_person_id: p_xBbZHY9GaVP2dd74xLHuME
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M7EgZHK6K9dY9XKSRvFAee
          claim_id: c_cwZP1APzDHMLVdMPyk6zYg
          source_id: s_4xfBKzefdK9wV2iCnysiqk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4PCwVYx8uz8ebwMJR6eBV9
        subject_person_id: p_xBbZHY9GaVP2dd74xLHuME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tNprh4eqGeJpkgvArqgRmE
          claim_id: c_4PCwVYx8uz8ebwMJR6eBV9
          source_id: s_4xfBKzefdK9wV2iCnysiqk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bB7_t1bpQL3etFxceIwsHN
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xBbZHY9GaVP2dd74xLHuME
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4t090bq1T0OTRmSYBaNPKS
          claim_id: c_bB7_t1bpQL3etFxceIwsHN
          source_id: s_idVqaUxQv9h9182j1mi7EL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_idVqaUxQv9h9182j1mi7EL
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 191809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json
            external_identifier: CBDB:191809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hpkb5p14cGd4ZGWstBx7hV
        status: active
        display_name: 王晤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滿 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hpkb5p14cGd4ZGWstBx7hV | 王晤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滿（CBDB 191816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191816&o=json)
- [中国历代人物传记资料库：王晤（CBDB 191809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json)
