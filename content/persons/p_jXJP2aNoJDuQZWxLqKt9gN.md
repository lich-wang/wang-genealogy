---
schema: wang-person/v1
id: p_jXJP2aNoJDuQZWxLqKt9gN
status: active
merged_into: null
display_name: 丁豫貞
revision: 1
cbdb_id: 118280
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XT-Y7N9swCrOM6wlhfr7SG
        subject_person_id: p_jXJP2aNoJDuQZWxLqKt9gN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丁豫貞
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72_SuaYSlDaJdWvRsOFmTf
          claim_id: c_XT-Y7N9swCrOM6wlhfr7SG
          source_id: s_CpnYuNDogwOxCBRj0wu-Hs
          stance: supports
          locator: CBDB:118280
          quotation: null
          interpretation_note: CBDB 明确记录的王猷定配偶
          source: &a1
            id: s_CpnYuNDogwOxCBRj0wu-Hs
            source_type: api_record
            title: 中国历代人物传记资料库：丁豫貞（CBDB 118280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118280&o=json
            external_identifier: CBDB:118280
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
        id: c_3lbmodwstdpC7MYUQ2Osqq
        subject_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jXJP2aNoJDuQZWxLqKt9gN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxqgWOqG10-vV2EwTVIKgr
          claim_id: c_3lbmodwstdpC7MYUQ2Osqq
          source_id: s_CpnYuNDogwOxCBRj0wu-Hs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5409：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_41cPwgbnn5cuUAp7Ze11KG
        status: active
        display_name: 王猷定
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丁豫貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 丁豫貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_41cPwgbnn5cuUAp7Ze11KG | 王猷定 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁豫貞（CBDB 118280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118280&o=json)
