---
schema: wang-person/v1
id: p_3qwLeSJZP2cuuKSxPhu8Hp
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 292462
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j8aKapLbmknBgx1yniLuW8
        subject_person_id: p_3qwLeSJZP2cuuKSxPhu8Hp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pBq9dwhfWdi-QzaNEtH6k
          claim_id: c_j8aKapLbmknBgx1yniLuW8
          source_id: s_-J0S0CgZrTuTuwmA-GeWpV
          stance: supports
          locator: CBDB:292462
          quotation: null
          interpretation_note: CBDB 明确记录的王預配偶
          source: &a1
            id: s_-J0S0CgZrTuTuwmA-GeWpV
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王預妻)（CBDB 292462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292462&o=json
            external_identifier: CBDB:292462
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
        id: c_ER1EkM6L2nkw4IzFrzmjnJ
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3qwLeSJZP2cuuKSxPhu8Hp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPmK_dWWyGpHVdLIVM5irf
          claim_id: c_ER1EkM6L2nkw4IzFrzmjnJ
          source_id: s_-J0S0CgZrTuTuwmA-GeWpV
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MB31qtyXiP7DGzQ9oxGxHs
        status: active
        display_name: 王預
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MB31qtyXiP7DGzQ9oxGxHs | 王預 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王預妻)（CBDB 292462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292462&o=json)
