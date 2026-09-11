---
schema: wang-person/v1
id: p_Ymm6VKEEDKEWM49YbDHkRk
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 252701
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N2_koc-eph9Dgul99H4Akc
        subject_person_id: p_Ymm6VKEEDKEWM49YbDHkRk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bHhp2WxYFhOP4yzCtoewm
          claim_id: c_N2_koc-eph9Dgul99H4Akc
          source_id: s_q7Js1JzSwLmdZn9e5iXDX5
          stance: supports
          locator: CBDB:252701
          quotation: null
          interpretation_note: CBDB 明确记录的王鉉配偶
          source: &a1
            id: s_q7Js1JzSwLmdZn9e5iXDX5
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王鉉妻)（CBDB 252701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252701&o=json
            external_identifier: CBDB:252701
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
        id: c_M30bgJaZ8L4E5lkg7aqxNq
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ymm6VKEEDKEWM49YbDHkRk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FStj57CDBAzUh8IxaupESo
          claim_id: c_M30bgJaZ8L4E5lkg7aqxNq
          source_id: s_q7Js1JzSwLmdZn9e5iXDX5
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2LCs128HMx8dbvsEorc8ou
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2LCs128HMx8dbvsEorc8ou | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王鉉妻)（CBDB 252701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252701&o=json)
