---
schema: wang-person/v1
id: p_kH4QikTTavwW8nd63c5xSQ
status: active
merged_into: null
display_name: 熊氏
revision: 1
cbdb_id: 551472
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_03HTVG_QOL9XZDM9o-GWJB
        subject_person_id: p_kH4QikTTavwW8nd63c5xSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 熊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PryA_RFADgvYNkdEokqjuL
          claim_id: c_03HTVG_QOL9XZDM9o-GWJB
          source_id: s_yGnamnJOcvVWCO-5e__TBw
          stance: supports
          locator: CBDB:551472
          quotation: null
          interpretation_note: CBDB 明确记录的王紞配偶
          source: &a1
            id: s_yGnamnJOcvVWCO-5e__TBw
            source_type: api_record
            title: 中国历代人物传记资料库：熊氏(王紞妻)（CBDB 551472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551472&o=json
            external_identifier: CBDB:551472
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
        id: c_-tA1sbQEPw6VqatMMT_DQV
        subject_person_id: p_wp45Z82RyLW5GxR9USnEDd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kH4QikTTavwW8nd63c5xSQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUMEJhYpI6wwbz3-A7gp3p
          claim_id: c_-tA1sbQEPw6VqatMMT_DQV
          source_id: s_yGnamnJOcvVWCO-5e__TBw
          stance: supports
          locator: 南陽府志，lgid=878669：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wp45Z82RyLW5GxR9USnEDd
        status: active
        display_name: 王紞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 熊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 熊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wp45Z82RyLW5GxR9USnEDd | 王紞 | accepted |

## 外部来源

- [中国历代人物传记资料库：熊氏(王紞妻)（CBDB 551472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551472&o=json)
