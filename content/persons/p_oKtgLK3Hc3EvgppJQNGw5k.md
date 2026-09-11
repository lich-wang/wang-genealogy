---
schema: wang-person/v1
id: p_oKtgLK3Hc3EvgppJQNGw5k
status: active
merged_into: null
display_name: 王堦
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ekw69Px2Xxkbx8JmtBRJhE
        subject_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pyydbPzgzt2yeW1hx5NmpB
          claim_id: c_Ekw69Px2Xxkbx8JmtBRJhE
          source_id: s_JcAAMAqdNHDQnd5iqcYH9D
          stance: supports
          locator: CBDB:206978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206978）
          source: &a1
            id: s_JcAAMAqdNHDQnd5iqcYH9D
            source_type: api_record
            title: 中国历代人物传记资料库：王堦（CBDB 206978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206978&o=json
            external_identifier: CBDB:206978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UDaqMZAoeucv2CyMXssb4V
        subject_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kecKHWjMhx2btGLaS9JwMk
          claim_id: c_UDaqMZAoeucv2CyMXssb4V
          source_id: s_JcAAMAqdNHDQnd5iqcYH9D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6R7TvetcAVGR6KCbMzPAL9
        subject_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
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
        - id: cs_JJ3fDBu6A5gTMz43j3n79R
          claim_id: c_6R7TvetcAVGR6KCbMzPAL9
          source_id: s_JcAAMAqdNHDQnd5iqcYH9D
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
        id: c_2G0R0kP4oQTnHg8amLI7Cm
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QeyTyninIaSTQ-55oOaqB8
          claim_id: c_2G0R0kP4oQTnHg8amLI7Cm
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w1YnkyRZphMzkRJWxURuiC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗靖（CBDB 225727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json
            external_identifier: CBDB:225727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7mmFEyZWywonqa5VSZtBkH
        status: active
        display_name: 王宗靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_q3OwJ2qNB2kJvmTHY2ge-l
        subject_person_id: p_H9c4uhZm81aBYx1zvk8rrU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXtSKP_3VVmmJSFuIoVMC6
          claim_id: c_q3OwJ2qNB2kJvmTHY2ge-l
          source_id: s_V3JGCkLLfQ3S7VkbajixJh
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V3JGCkLLfQ3S7VkbajixJh
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 225726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225726&o=json
            external_identifier: CBDB:225726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H9c4uhZm81aBYx1zvk8rrU
        status: active
        display_name: 王寀
        merged_into_person_id: null
    - claim:
        id: c_h0GIPx_jDwcWugOxOMtGUa
        subject_person_id: p_iHyxvVSLCLLevmA84oLG2M
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZ18R4pJzdZwvlDJam0i5s
          claim_id: c_h0GIPx_jDwcWugOxOMtGUa
          source_id: s_rkBFS7b7s6ZKy1a1N6E1LK
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rkBFS7b7s6ZKy1a1N6E1LK
            source_type: api_record
            title: 中国历代人物传记资料库：王大受（CBDB 225724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225724&o=json
            external_identifier: CBDB:225724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iHyxvVSLCLLevmA84oLG2M
        status: active
        display_name: 王大受
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王堦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堦 | accepted |
| birth.date | 1556年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7mmFEyZWywonqa5VSZtBkH | 王宗靖 | accepted |
| ancestors | p_H9c4uhZm81aBYx1zvk8rrU | 王寀 | accepted |
| ancestors | p_iHyxvVSLCLLevmA84oLG2M | 王大受 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寀（CBDB 225726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225726&o=json)
- [中国历代人物传记资料库：王大受（CBDB 225724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225724&o=json)
- [中国历代人物传记资料库：王堦（CBDB 206978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206978&o=json)
- [中国历代人物传记资料库：王宗靖（CBDB 225727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json)
