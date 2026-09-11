---
schema: wang-person/v1
id: p_G8NXeGARDdckpF6V4YVK8D
status: active
merged_into: null
display_name: 何氏
revision: 1
cbdb_id: 239473
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CqxBBYjmc4X7TJb03O2L3D
        subject_person_id: p_G8NXeGARDdckpF6V4YVK8D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AfiG70bkQQPV7q1n88Zahi
          claim_id: c_CqxBBYjmc4X7TJb03O2L3D
          source_id: s__13fiHaGO3aR6IzZ_Lt8B3
          stance: supports
          locator: CBDB:239473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s__13fiHaGO3aR6IzZ_Lt8B3
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王鉉妻)（CBDB 239473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239473&o=json
            external_identifier: CBDB:239473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXvy52-GYjhzFSsv-OsfAu
        subject_person_id: p_G8NXeGARDdckpF6V4YVK8D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_si3I6JtihkqvXmH1UnDULI
          claim_id: c_fXvy52-GYjhzFSsv-OsfAu
          source_id: s__13fiHaGO3aR6IzZ_Lt8B3
          stance: supports
          locator: CBDB:239473
          quotation: null
          interpretation_note: CBDB 明确记录的王鉉配偶
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
        id: c_zwa5jElKnAfV0ilkxSYhTa
        subject_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_G8NXeGARDdckpF6V4YVK8D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DueAZpffmiF_bEhzxhvx5F
          claim_id: c_zwa5jElKnAfV0ilkxSYhTa
          source_id: s__13fiHaGO3aR6IzZ_Lt8B3
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_a2MgxrEcSzhbMSTAx75fb8
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239473） | accepted |
| name.primary | 何氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_a2MgxrEcSzhbMSTAx75fb8 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王鉉妻)（CBDB 239473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239473&o=json)
