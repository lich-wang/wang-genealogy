---
schema: wang-person/v1
id: p_ikbCC8MsJXPVyBkRJmpPq8
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 247648
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRSvNdEwVDNOxhU2B_neK1
        subject_person_id: p_ikbCC8MsJXPVyBkRJmpPq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XqvP3noiHUCZbu8Wk_S8s
          claim_id: c_GRSvNdEwVDNOxhU2B_neK1
          source_id: s_3PHH7BnT8eZ2mrUwVGHHMg
          stance: supports
          locator: CBDB:247648
          quotation: null
          interpretation_note: CBDB 明确记录的王沂配偶
          source: &a1
            id: s_3PHH7BnT8eZ2mrUwVGHHMg
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王沂妻)（CBDB 247648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247648&o=json
            external_identifier: CBDB:247648
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
        id: c_gNzMA10zqM3mWLE9G1sZwf
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ikbCC8MsJXPVyBkRJmpPq8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uobKjj1Jmf1oxVGH8tTMXr
          claim_id: c_gNzMA10zqM3mWLE9G1sZwf
          source_id: s_3PHH7BnT8eZ2mrUwVGHHMg
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王沂妻)（CBDB 247648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247648&o=json)
