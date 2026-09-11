---
schema: wang-person/v1
id: p_xGAJDTiHoTYx2rfQPURJ8V
status: active
merged_into: null
display_name: 鄭氏
revision: 1
cbdb_id: 327154
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r25dT8_PVyXjoRybLn7caQ
        subject_person_id: p_xGAJDTiHoTYx2rfQPURJ8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327154）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTfcGISaos32MWehzGsvCb
          claim_id: c_r25dT8_PVyXjoRybLn7caQ
          source_id: s_w7cUdMAY02Ss5zECq-g3RX
          stance: supports
          locator: CBDB:327154
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w7cUdMAY02Ss5zECq-g3RX
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王乾章妻)（CBDB 327154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327154&o=json
            external_identifier: CBDB:327154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SttunHDrgSSpMgYhCQQBBc
        subject_person_id: p_xGAJDTiHoTYx2rfQPURJ8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yixW8fbZ68Ms_KzJJDaN8Q
          claim_id: c_SttunHDrgSSpMgYhCQQBBc
          source_id: s_w7cUdMAY02Ss5zECq-g3RX
          stance: supports
          locator: CBDB:327154
          quotation: null
          interpretation_note: CBDB 明确记录的王乾章配偶
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
        id: c_VqfeFZPwgypD6x9NjS4_b2
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xGAJDTiHoTYx2rfQPURJ8V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8a8Vvz9mgfpajWow2SdbA
          claim_id: c_VqfeFZPwgypD6x9NjS4_b2
          source_id: s_w7cUdMAY02Ss5zECq-g3RX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄭氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327154） | accepted |
| name.primary | 鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭氏(王乾章妻)（CBDB 327154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327154&o=json)
