---
schema: wang-person/v1
id: p_CLVogrJsobqnPvkSGHQ8V4
status: active
merged_into: null
display_name: 王尚禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QzHzGnaw9iBMgGQmvtJYEP
        subject_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lo3fdqL11WEojdrkzMwHUs
          claim_id: c_QzHzGnaw9iBMgGQmvtJYEP
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: CBDB:203768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203768）
          source: &a1
            id: s_BPFKQVE7voYxhrah4SdQpz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚禮（CBDB 203768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json
            external_identifier: CBDB:203768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bNX1y5dSZJGHhQQY5qF81u
        subject_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JnhgChheRJPzh5BY4pMyPS
          claim_id: c_bNX1y5dSZJGHhQQY5qF81u
          source_id: s_BPFKQVE7voYxhrah4SdQpz
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
        id: c_k3wbwFg2bZn8gZdBNWEPFD
        subject_person_id: p_CLVogrJsobqnPvkSGHQ8V4
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
        - id: cs_vCC8yruN3u4WoDKqcqCLB3
          claim_id: c_k3wbwFg2bZn8gZdBNWEPFD
          source_id: s_BPFKQVE7voYxhrah4SdQpz
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
        id: c_iQemv0MqUEKLrUIptYearR
        subject_person_id: p_RTvd3XLsMgFXTd276yDpLR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ylcauVJ5B41wSjnqScXPLy
          claim_id: c_iQemv0MqUEKLrUIptYearR
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RTvd3XLsMgFXTd276yDpLR
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_oGO5cQ__JXq2JY8cKfLAAr
        subject_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tjrT93hWumWTWNdxSN6p3J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5S-5sQnKZgIe-F4R8f-v8
          claim_id: c_oGO5cQ__JXq2JY8cKfLAAr
          source_id: s_U4nB63N6M_7RgO3_VMms1X
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U4nB63N6M_7RgO3_VMms1X
            source_type: api_record
            title: 中国历代人物传记资料库：史氏(王尚禮妻)（CBDB 309763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309763&o=json
            external_identifier: CBDB:309763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tjrT93hWumWTWNdxSN6p3J
        status: active
        display_name: 史氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_e9aoJ-djVwKoRx8CfN_Pmt
        subject_person_id: p_jW5JGD1kNBfXr1Yh1yvvaB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_anHp_sfzsSBHp65W4JvacO
          claim_id: c_e9aoJ-djVwKoRx8CfN_Pmt
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jW5JGD1kNBfXr1Yh1yvvaB
        status: active
        display_name: 王秀
        merged_into_person_id: null
    - claim:
        id: c_E84yk5oOv21CsnTpYDp0p_
        subject_person_id: p_qbCS5FPkLgFa4ddZfQZsVG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQ3vS2RBlRQgta0HT9x_xZ
          claim_id: c_E84yk5oOv21CsnTpYDp0p_
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qbCS5FPkLgFa4ddZfQZsVG
        status: active
        display_name: 王孟常
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚禮 | accepted |
| birth.date | 1508年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RTvd3XLsMgFXTd276yDpLR | 王政 | accepted |
| spouses | p_tjrT93hWumWTWNdxSN6p3J | 史氏 | accepted |
| ancestors | p_jW5JGD1kNBfXr1Yh1yvvaB | 王秀 | accepted |
| ancestors | p_qbCS5FPkLgFa4ddZfQZsVG | 王孟常 | accepted |

## 外部来源

- [中国历代人物传记资料库：史氏(王尚禮妻)（CBDB 309763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309763&o=json)
- [中国历代人物传记资料库：王尚禮（CBDB 203768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json)
