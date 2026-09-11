---
schema: wang-person/v1
id: p_ekUUUcSyzN6WhRbt4eNPox
status: active
merged_into: null
display_name: 王重光
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ars38bmB5FbxFC7AtznyUH
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PRnSXDToX1u9Q7oPGzBuZ
          claim_id: c_ars38bmB5FbxFC7AtznyUH
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: CBDB:220262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220262）
          source: &a1
            id: s_UPbhN87m2i3NV2QMsCPaZa
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 220262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json
            external_identifier: CBDB:220262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mVWQ4DAzaRFNMQxnQwQwYh
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
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
        - id: cs_9ME2HFXHejRnj1sRYpfFcJ
          claim_id: c_mVWQ4DAzaRFNMQxnQwQwYh
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_dacegnjVI6qa-9JLNXbQ-4
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McT5s5_9gR4hp74QaBvI49
          claim_id: c_dacegnjVI6qa-9JLNXbQ-4
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F188zxtPQfzqFJEz9WJ3M7
        status: active
        display_name: 王象乾
        merged_into_person_id: null
    - claim:
        id: c_i-WvnRcfGXrVBbrUgfFtW2
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jFhTktNvldb06Tc4dSgPi
          claim_id: c_i-WvnRcfGXrVBbrUgfFtW2
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
    - claim:
        id: c_KClhAyMfn6pNFK52zPT7mr
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7SOF5ieNwyF3pF04fibWr
          claim_id: c_KClhAyMfn6pNFK52zPT7mr
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
  other: []
---

# 王重光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重光 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_F188zxtPQfzqFJEz9WJ3M7 | 王象乾 | accepted |
| descendants | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |
| descendants | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重光（CBDB 220262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json)
