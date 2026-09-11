---
schema: wang-person/v1
id: p_wp45Z82RyLW5GxR9USnEDd
status: active
merged_into: null
display_name: 王紞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CWRKUcnSJLBCJH7Mwn7hCH
        subject_person_id: p_wp45Z82RyLW5GxR9USnEDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DnS86L7r6Jp6xfBnuviE5u
          claim_id: c_CWRKUcnSJLBCJH7Mwn7hCH
          source_id: s_DCGwR2sjNtLFwFA639nPBN
          stance: supports
          locator: CBDB:551471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551471）
          source: &a1
            id: s_DCGwR2sjNtLFwFA639nPBN
            source_type: api_record
            title: 中国历代人物传记资料库：王紞（CBDB 551471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551471&o=json
            external_identifier: CBDB:551471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dMV1zJ8EA4sKzohvUPaRf
        subject_person_id: p_wp45Z82RyLW5GxR9USnEDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41A1of38rHq6YFnCfBKYRu
          claim_id: c_3dMV1zJ8EA4sKzohvUPaRf
          source_id: s_DCGwR2sjNtLFwFA639nPBN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
          source:
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
      object_person:
        id: p_kH4QikTTavwW8nd63c5xSQ
        status: active
        display_name: 熊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王紞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kH4QikTTavwW8nd63c5xSQ | 熊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紞（CBDB 551471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551471&o=json)
- [中国历代人物传记资料库：熊氏(王紞妻)（CBDB 551472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551472&o=json)
