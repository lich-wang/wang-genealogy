---
schema: wang-person/v1
id: p_jBhHK9ZvdStwR6we27kdf6
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 257395
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_arpwDZRQs65tIZpDKt5vJV
        subject_person_id: p_jBhHK9ZvdStwR6we27kdf6
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
        - id: cs_yDCvjXgx4q8SfeOhKOShEf
          claim_id: c_arpwDZRQs65tIZpDKt5vJV
          source_id: s_gNnzVJrR76PQgS83M-cDIH
          stance: supports
          locator: CBDB:257395
          quotation: null
          interpretation_note: CBDB 明确记录的王純配偶
          source: &a1
            id: s_gNnzVJrR76PQgS83M-cDIH
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王純妻)（CBDB 257395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257395&o=json
            external_identifier: CBDB:257395
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
        id: c_wsZdkPcDC38txZ_xF1RQ4t
        subject_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jBhHK9ZvdStwR6we27kdf6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJ1r_vSt6TbArcIRQ9mnoD
          claim_id: c_wsZdkPcDC38txZ_xF1RQ4t
          source_id: s_gNnzVJrR76PQgS83M-cDIH
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mQ1J7fd25Z6UXRPAETHXDi
        status: active
        display_name: 王純
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
| spouses | p_mQ1J7fd25Z6UXRPAETHXDi | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王純妻)（CBDB 257395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257395&o=json)
