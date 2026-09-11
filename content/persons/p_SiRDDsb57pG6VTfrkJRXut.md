---
schema: wang-person/v1
id: p_SiRDDsb57pG6VTfrkJRXut
status: active
merged_into: null
display_name: 王紳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jCLArA7B7uSqhcX3hnjNVq
        subject_person_id: p_SiRDDsb57pG6VTfrkJRXut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_foCBu5tirAiEhKrT6GK1zV
          claim_id: c_jCLArA7B7uSqhcX3hnjNVq
          source_id: s_iZKXphvQUkErCMTR28US4Q
          stance: supports
          locator: CBDB:199607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199607）
          source: &a1
            id: s_iZKXphvQUkErCMTR28US4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 199607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199607&o=json
            external_identifier: CBDB:199607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7WjsVPqJexRJ3Ps516Wedn
        subject_person_id: p_SiRDDsb57pG6VTfrkJRXut
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yYTKGcKKAdxQw5UnC7DmNq
          claim_id: c_7WjsVPqJexRJ3Ps516Wedn
          source_id: s_iZKXphvQUkErCMTR28US4Q
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
        id: c_63E73D4osx3vPCM31kw5yY
        subject_person_id: p_SiRDDsb57pG6VTfrkJRXut
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
        - id: cs_Rne93N5cpz5GyPjW7q2UY1
          claim_id: c_63E73D4osx3vPCM31kw5yY
          source_id: s_iZKXphvQUkErCMTR28US4Q
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
        id: c_WJCJIidsX6ZepoVuuAKbcN
        subject_person_id: p_9BthKoJ2tXgHihN1qNXn5B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SiRDDsb57pG6VTfrkJRXut
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UXgjcYaPBylgle14AJL4n
          claim_id: c_WJCJIidsX6ZepoVuuAKbcN
          source_id: s_7Q7RHxEPfJrSMt8XURZiJ5
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Q7RHxEPfJrSMt8XURZiJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 247202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247202&o=json
            external_identifier: CBDB:247202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9BthKoJ2tXgHihN1qNXn5B
        status: active
        display_name: 王盛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9BthKoJ2tXgHihN1qNXn5B | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 199607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199607&o=json)
- [中国历代人物传记资料库：王盛（CBDB 247202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247202&o=json)
