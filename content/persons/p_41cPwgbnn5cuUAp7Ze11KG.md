---
schema: wang-person/v1
id: p_41cPwgbnn5cuUAp7Ze11KG
status: active
merged_into: null
display_name: 王猷定
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vaiXFuMoh2WyvZMAUW8Wo5
        subject_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aFzBdCX5gzWvinTw5gdPRQ
          claim_id: c_vaiXFuMoh2WyvZMAUW8Wo5
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: CBDB:69402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69402）
          source: &a1
            id: s_zrq62YGGayCQXGMmSub9RY
            source_type: api_record
            title: 中国历代人物传记资料库：王猷定（CBDB 69402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69402&o=json
            external_identifier: CBDB:69402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fzkavN6TiwSjbVFJrGXMLJ
        subject_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucf1aaGYDX7PugjGi4ho67
          claim_id: c_fzkavN6TiwSjbVFJrGXMLJ
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TfjJbDSJMN9mi8ePg2JBi1
        subject_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ojUXLUWw3K8tztALkZS5jG
          claim_id: c_TfjJbDSJMN9mi8ePg2JBi1
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9WyqGgxq8BRLb4j8Nf5GTZ
        subject_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zegQeMPhEGMEC8FujFzwuw
          claim_id: c_9WyqGgxq8BRLb4j8Nf5GTZ
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KstbcDcYHAaU4DdQCRqygA
        subject_person_id: p_9p45qRD8U1NYJ8Phf9QUi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2g_2J5qXdz9xftArZEeRO-
          claim_id: c_KstbcDcYHAaU4DdQCRqygA
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: 小腆紀傳:六十五卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9p45qRD8U1NYJ8Phf9QUi2
        status: active
        display_name: 王時熙
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_jXJP2aNoJDuQZWxLqKt9gN
        status: active
        display_name: 丁豫貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王猷定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷定 | accepted |
| birth.date | 1598年 | accepted |
| death.date | 1662年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9p45qRD8U1NYJ8Phf9QUi2 | 王時熙 | accepted |
| spouses | p_jXJP2aNoJDuQZWxLqKt9gN | 丁豫貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：丁豫貞（CBDB 118280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118280&o=json)
- [中国历代人物传记资料库：王猷定（CBDB 69402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69402&o=json)
