---
schema: wang-person/v1
id: p_Xt6Q2EqBP13zZH2Sf4zwkz
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 322401
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2oiRQjqZu3hVVK_k63M92v
        subject_person_id: p_Xt6Q2EqBP13zZH2Sf4zwkz
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
        - id: cs_5DQhuPuo8noG0gftQjtKY3
          claim_id: c_2oiRQjqZu3hVVK_k63M92v
          source_id: s_QB3vsaDxmTKtaCD5h0cSJp
          stance: supports
          locator: CBDB:322401
          quotation: null
          interpretation_note: CBDB 明确记录的王復配偶
          source: &a1
            id: s_QB3vsaDxmTKtaCD5h0cSJp
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王復妻)（CBDB 322401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322401&o=json
            external_identifier: CBDB:322401
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
        id: c_W1neF7u8xNrUefhU6Ow1nN
        subject_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xt6Q2EqBP13zZH2Sf4zwkz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ytZAmYiberCPDpb_AJVF9
          claim_id: c_W1neF7u8xNrUefhU6Ow1nN
          source_id: s_QB3vsaDxmTKtaCD5h0cSJp
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2aMd4JjZAnRDvAWGEDvPYQ
        status: active
        display_name: 王復
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
| spouses | p_2aMd4JjZAnRDvAWGEDvPYQ | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王復妻)（CBDB 322401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322401&o=json)
