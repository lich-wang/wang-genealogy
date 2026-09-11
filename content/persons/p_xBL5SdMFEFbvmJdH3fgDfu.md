---
schema: wang-person/v1
id: p_xBL5SdMFEFbvmJdH3fgDfu
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 302720
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qNDbU3coXQCjTisasw9YAb
        subject_person_id: p_xBL5SdMFEFbvmJdH3fgDfu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTfwgp6dCP5pdotAHXKGdm
          claim_id: c_qNDbU3coXQCjTisasw9YAb
          source_id: s_zVPusWBC8WbgS028hSJatK
          stance: supports
          locator: CBDB:302720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zVPusWBC8WbgS028hSJatK
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王言妻)（CBDB 302720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302720&o=json
            external_identifier: CBDB:302720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMEMAUh__Y-6unce4hQ9Gx
        subject_person_id: p_xBL5SdMFEFbvmJdH3fgDfu
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
        - id: cs_sqhNYau-8-5t4cKR7fxKzi
          claim_id: c_PMEMAUh__Y-6unce4hQ9Gx
          source_id: s_zVPusWBC8WbgS028hSJatK
          stance: supports
          locator: CBDB:302720
          quotation: null
          interpretation_note: CBDB 明确记录的王言配偶
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
        id: c_BmlbX5a6ztbR-7g633x01f
        subject_person_id: p_6DErnJ465hB4EQ6obzhoFP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xBL5SdMFEFbvmJdH3fgDfu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJ4szyQWC3lByzO6YgZGHw
          claim_id: c_BmlbX5a6ztbR-7g633x01f
          source_id: s_zVPusWBC8WbgS028hSJatK
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6DErnJ465hB4EQ6obzhoFP
        status: active
        display_name: 王言
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
| bio.summary | 孫氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302720） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6DErnJ465hB4EQ6obzhoFP | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王言妻)（CBDB 302720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302720&o=json)
