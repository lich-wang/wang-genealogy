---
schema: wang-person/v1
id: p_RV2Sqgm1uXEGoW8rEAG3gK
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 683880
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3H2whr-NXYVSKC4qm3Vov7
        subject_person_id: p_RV2Sqgm1uXEGoW8rEAG3gK
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
        - id: cs_k5HzYs-_i45lqu8Gxt2ybo
          claim_id: c_3H2whr-NXYVSKC4qm3Vov7
          source_id: s_UYB4zagTxQTgUz7jpmbPvI
          stance: supports
          locator: CBDB:683880
          quotation: null
          interpretation_note: CBDB 明确记录的王章配偶
          source: &a1
            id: s_UYB4zagTxQTgUz7jpmbPvI
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王章妻)（CBDB 683880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683880&o=json
            external_identifier: CBDB:683880
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
        id: c_W8E3RoqQMPm5Gr4k9kjV8-
        subject_person_id: p_481kQQwAFrYze548qXRkp6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RV2Sqgm1uXEGoW8rEAG3gK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uKUcfhmchTG5ydhL-wHpP
          claim_id: c_W8E3RoqQMPm5Gr4k9kjV8-
          source_id: s_UYB4zagTxQTgUz7jpmbPvI
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王章、王虔、王珣墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_481kQQwAFrYze548qXRkp6
        status: active
        display_name: 王章
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
| spouses | p_481kQQwAFrYze548qXRkp6 | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王章妻)（CBDB 683880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683880&o=json)
