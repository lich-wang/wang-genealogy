---
schema: wang-person/v1
id: p_GqXdixiMXrUodSbD5Ca64R
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 257377
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k-Aj1bEmbreVi8CIOrOWU-
        subject_person_id: p_GqXdixiMXrUodSbD5Ca64R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqqQFbJLBfnUWJQb3R5nzD
          claim_id: c_k-Aj1bEmbreVi8CIOrOWU-
          source_id: s_qWfdh-0Enxv4t4CVgNumKn
          stance: supports
          locator: CBDB:257377
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qWfdh-0Enxv4t4CVgNumKn
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王佑妻)（CBDB 257377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257377&o=json
            external_identifier: CBDB:257377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_lcrE2XMgQ1sJeOgYnV8es4
        subject_person_id: p_GqXdixiMXrUodSbD5Ca64R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bt9Sn0xeB6b8YOFL-71ZFs
          claim_id: c_lcrE2XMgQ1sJeOgYnV8es4
          source_id: s_qWfdh-0Enxv4t4CVgNumKn
          stance: supports
          locator: CBDB:257377
          quotation: null
          interpretation_note: CBDB 明确记录的王佑配偶
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
        id: c_UV6cwvovPm6YJLNPg-jvqr
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GqXdixiMXrUodSbD5Ca64R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2nnnEEX2s4AxMQKlOqUyd
          claim_id: c_UV6cwvovPm6YJLNPg-jvqr
          source_id: s_qWfdh-0Enxv4t4CVgNumKn
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cABDg4AGMJS98TZaoLa2HU
        status: active
        display_name: 王佑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257377） | accepted |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cABDg4AGMJS98TZaoLa2HU | 王佑 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王佑妻)（CBDB 257377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257377&o=json)
