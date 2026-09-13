---
schema: wang-person/v1
id: p_FhKBEjrFYva77LtJdwoQ5q
status: active
merged_into: null
display_name: 王念詒
cbdb_id: 526742
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qey9Ah6u15J9JqLoFz5PvZ
        subject_person_id: p_FhKBEjrFYva77LtJdwoQ5q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念詒，史料所见人物。本项目依据《中国历代人物传记资料库：王念詒（CBDB 526742）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fnDaiTTgguFlKQNp0_Rilo
          claim_id: c_Qey9Ah6u15J9JqLoFz5PvZ
          source_id: s_Cey6a1VdXDN1qbkktDH7Qy
          stance: supports
          locator: CBDB:526742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Cey6a1VdXDN1qbkktDH7Qy
            source_type: api_record
            title: 中国历代人物传记资料库：王念詒（CBDB 526742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526742&o=json
            external_identifier: CBDB:526742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fb2dUVDABhXHdHCzW5Tc8F
        subject_person_id: p_FhKBEjrFYva77LtJdwoQ5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念詒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gKXV6USPcDY8iFCQjBS33E
          claim_id: c_Fb2dUVDABhXHdHCzW5Tc8F
          source_id: s_Cey6a1VdXDN1qbkktDH7Qy
          stance: supports
          locator: CBDB:526742
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_kOzAMmPcoHB6z16aXkhNpQ
        subject_person_id: p_bdBg1E6ZDUGtDs96L6kMgo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FhKBEjrFYva77LtJdwoQ5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onziiNIMusE2cAdHZpIQMx
          claim_id: c_kOzAMmPcoHB6z16aXkhNpQ
          source_id: s_DMBn8xGP7ZCv2YPCy1RuG1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12859：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMBn8xGP7ZCv2YPCy1RuG1
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 69161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json
            external_identifier: CBDB:69161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdBg1E6ZDUGtDs96L6kMgo
        status: active
        display_name: 王汝揆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王念詒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王念詒，史料所见人物。本项目依据《中国历代人物传记资料库：王念詒（CBDB 526742）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王念詒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bdBg1E6ZDUGtDs96L6kMgo | 王汝揆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王念詒（CBDB 526742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526742&o=json)
- [中国历代人物传记资料库：王汝揆（CBDB 69161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69161&o=json)
