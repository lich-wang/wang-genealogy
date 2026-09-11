---
schema: wang-person/v1
id: p_aLdhxXJzuJThQQY9XaUWEV
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 554865
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UcWOCZuRKOZw0UxutzG_Nd
        subject_person_id: p_aLdhxXJzuJThQQY9XaUWEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sZ1wmrv0-9ZK10tk06mS1S
          claim_id: c_UcWOCZuRKOZw0UxutzG_Nd
          source_id: s_4byKESo2tlSZgIyXIj9YFa
          stance: supports
          locator: CBDB:554865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4byKESo2tlSZgIyXIj9YFa
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王國璽妻)（CBDB 554865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554865&o=json
            external_identifier: CBDB:554865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aKFAfGk7sWeWMBEjPGxXSL
        subject_person_id: p_aLdhxXJzuJThQQY9XaUWEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQiFMtAuv0d6Y4F-fHo_db
          claim_id: c_aKFAfGk7sWeWMBEjPGxXSL
          source_id: s_4byKESo2tlSZgIyXIj9YFa
          stance: supports
          locator: CBDB:554865
          quotation: null
          interpretation_note: CBDB 明确记录的王國璽配偶
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
        id: c_GyUBeRKVYsPM_LXugIZ_l1
        subject_person_id: p_4xMsHqE89uU5wVEfojB45v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aLdhxXJzuJThQQY9XaUWEV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wi7a8e5tszQ5lqG4An1t-w
          claim_id: c_GyUBeRKVYsPM_LXugIZ_l1
          source_id: s_4byKESo2tlSZgIyXIj9YFa
          stance: supports
          locator: 南陽府志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4xMsHqE89uU5wVEfojB45v
        status: active
        display_name: 王國璽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，清人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 554865） | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4xMsHqE89uU5wVEfojB45v | 王國璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(王國璽妻)（CBDB 554865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554865&o=json)
