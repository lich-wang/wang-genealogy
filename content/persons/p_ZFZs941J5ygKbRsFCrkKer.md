---
schema: wang-person/v1
id: p_ZFZs941J5ygKbRsFCrkKer
status: active
merged_into: null
display_name: 王寶善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3A8Hucmq3J6LdZLvbe2sh8
        subject_person_id: p_ZFZs941J5ygKbRsFCrkKer
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1bpAMDh2R6krFGGvuJymP
          claim_id: c_3A8Hucmq3J6LdZLvbe2sh8
          source_id: s_7ZPXEJJJrQvfJLUfZM88Ui
          stance: supports
          locator: CBDB:70231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70231）
          source: &a1
            id: s_7ZPXEJJJrQvfJLUfZM88Ui
            source_type: api_record
            title: 中国历代人物传记资料库：王寶善（CBDB 70231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70231&o=json
            external_identifier: CBDB:70231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nRfuaLREsP49nvXqL8xL54
        subject_person_id: p_ZFZs941J5ygKbRsFCrkKer
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
        - id: cs_HH64UePGYPgHCX4fwYxxLz
          claim_id: c_nRfuaLREsP49nvXqL8xL54
          source_id: s_7ZPXEJJJrQvfJLUfZM88Ui
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
        id: c_qhL0_t4tijBEF5pbNzWcbb
        subject_person_id: p_ZFZs941J5ygKbRsFCrkKer
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_d1i2V242N7njZEcWUCbwPL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCJ_XfR7yzn7iK8bmBHU-G
          claim_id: c_qhL0_t4tijBEF5pbNzWcbb
          source_id: s_cJSosa4CNazDgrTlTgU41F
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1395, HuWenKai #667：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cJSosa4CNazDgrTlTgU41F
            source_type: api_record
            title: 中国历代人物传记资料库：黃靜臨（CBDB 70230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70230&o=json
            external_identifier: CBDB:70230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d1i2V242N7njZEcWUCbwPL
        status: active
        display_name: 黃靜臨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王寶善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶善 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_d1i2V242N7njZEcWUCbwPL | 黃靜臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃靜臨（CBDB 70230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70230&o=json)
- [中国历代人物传记资料库：王寶善（CBDB 70231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70231&o=json)
