---
schema: wang-person/v1
id: p_DLG1zgaXP3p4Uge6Aa7xhu
status: active
merged_into: null
display_name: 王慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RiZ3j1HoYxtmw3x1FP95Ck
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V6MCNK6VdmMmMfW84LKE1d
          claim_id: c_RiZ3j1HoYxtmw3x1FP95Ck
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: CBDB:140408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140408）
          source: &a1
            id: s_u5bE1VMMVfzsJ4j4D5A4fr
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json
            external_identifier: CBDB:140408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SMxuhqMsvQMFG11v82A91J
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 640年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cb85ppfAULUBxPru1DBH73
          claim_id: c_SMxuhqMsvQMFG11v82A91J
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JMkxGidboFo88wp32ePLJv
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HL5MwiYAYe4Zq4w5JjmGDc
          claim_id: c_JMkxGidboFo88wp32ePLJv
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
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
        id: c_bCKpXVLuCGMMuByFAGFui7
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6LtNL2kW11GsDhW1mT3zW
          claim_id: c_bCKpXVLuCGMMuByFAGFui7
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
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
        id: c_uKWfO2FRGJam-nbfmqQ0iD
        subject_person_id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pi6KpRJ4K9cMjocoUbP7JV
          claim_id: c_uKWfO2FRGJam-nbfmqQ0iD
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 134：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
        status: active
        display_name: 王遏
        merged_into_person_id: null
  children:
    - claim:
        id: c_NKml_Vt7J_E98vtVN3-iit
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8SbCCMPhrmycTk2h456Vi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGb9pr4ur9hp9fT7hCwdmi
          claim_id: c_NKml_Vt7J_E98vtVN3-iit
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 134：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8SbCCMPhrmycTk2h456Vi5
        status: active
        display_name: 王璬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| birth.date | 640年 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hr5Q4L3jPiTBJ4oWBZVDbR | 王遏 | accepted |
| children | p_8SbCCMPhrmycTk2h456Vi5 | 王璬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 140408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json)
