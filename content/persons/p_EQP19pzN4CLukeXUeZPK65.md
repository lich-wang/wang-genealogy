---
schema: wang-person/v1
id: p_EQP19pzN4CLukeXUeZPK65
status: active
merged_into: null
display_name: 和氏
revision: 1
cbdb_id: 157115
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n_PZubHWvmdnXNjBQJhQ4W
        subject_person_id: p_EQP19pzN4CLukeXUeZPK65
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 和氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wf9YE4az6oqm04GyGC1kvv
          claim_id: c_n_PZubHWvmdnXNjBQJhQ4W
          source_id: s_SsenI9BSvrV-S2PD2zIc2u
          stance: supports
          locator: CBDB:157115
          quotation: null
          interpretation_note: CBDB 明确记录的王守廉配偶
          source: &a1
            id: s_SsenI9BSvrV-S2PD2zIc2u
            source_type: api_record
            title: 中国历代人物传记资料库：和氏(王守廉妻)（CBDB 157115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157115&o=json
            external_identifier: CBDB:157115
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
        id: c_ksaKlXnXRZzXMMjnCd8x6j
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EQP19pzN4CLukeXUeZPK65
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OANcbrA2GqqAsBU55a7_aX
          claim_id: c_ksaKlXnXRZzXMMjnCd8x6j
          source_id: s_SsenI9BSvrV-S2PD2zIc2u
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 133：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4MQNbYanr85ZD5eECioUpp
        status: active
        display_name: 王守廉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 和氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 和氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4MQNbYanr85ZD5eECioUpp | 王守廉 | accepted |

## 外部来源

- [中国历代人物传记资料库：和氏(王守廉妻)（CBDB 157115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157115&o=json)
