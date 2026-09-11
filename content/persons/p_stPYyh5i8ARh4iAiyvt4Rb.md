---
schema: wang-person/v1
id: p_stPYyh5i8ARh4iAiyvt4Rb
status: active
merged_into: null
display_name: 裴氏
revision: 1
cbdb_id: 244423
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nvrf-0Apthlv-LCYp7N1DZ
        subject_person_id: p_stPYyh5i8ARh4iAiyvt4Rb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 裴氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jT6rNe_jRdkcK5Zhhc5w1f
          claim_id: c_nvrf-0Apthlv-LCYp7N1DZ
          source_id: s_-3gV1HcK2jEHXZjRlkQTjs
          stance: supports
          locator: CBDB:244423
          quotation: null
          interpretation_note: CBDB 明确记录的王坦配偶
          source: &a1
            id: s_-3gV1HcK2jEHXZjRlkQTjs
            source_type: api_record
            title: 中国历代人物传记资料库：裴氏(王坦妻)（CBDB 244423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244423&o=json
            external_identifier: CBDB:244423
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
        id: c_iosLSW9TRT75cBl-SFr-0m
        subject_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_stPYyh5i8ARh4iAiyvt4Rb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGUKci4gC-WQ4_VYgtTjYT
          claim_id: c_iosLSW9TRT75cBl-SFr-0m
          source_id: s_-3gV1HcK2jEHXZjRlkQTjs
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 裴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 裴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |

## 外部来源

- [中国历代人物传记资料库：裴氏(王坦妻)（CBDB 244423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244423&o=json)
