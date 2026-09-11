---
schema: wang-person/v1
id: p_yGpoAgiZMPF1sDB4aDTQDi
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 573293
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3T2SobgpN4Yes9hDV5Qei
        subject_person_id: p_yGpoAgiZMPF1sDB4aDTQDi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6R26gBc09pqayFg8TdJEq
          claim_id: c_z3T2SobgpN4Yes9hDV5Qei
          source_id: s_QcBCtjiB91PUEymT7KfZ8b
          stance: supports
          locator: CBDB:573293
          quotation: null
          interpretation_note: CBDB 明确记录的王世則配偶
          source: &a1
            id: s_QcBCtjiB91PUEymT7KfZ8b
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王世則妻)（CBDB 573293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573293&o=json
            external_identifier: CBDB:573293
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
        id: c_Qr56hOd14I1uM_J45dSWwB
        subject_person_id: p_1NVN54cb73PdWewg6B4EiF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yGpoAgiZMPF1sDB4aDTQDi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRZ7r771FduiePfINQQYyl
          claim_id: c_Qr56hOd14I1uM_J45dSWwB
          source_id: s_QcBCtjiB91PUEymT7KfZ8b
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1NVN54cb73PdWewg6B4EiF
        status: active
        display_name: 王世則
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1NVN54cb73PdWewg6B4EiF | 王世則 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王世則妻)（CBDB 573293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573293&o=json)
