---
schema: wang-person/v1
id: p_qbMsKJz49VxDT7JG8FhSHx
status: active
merged_into: null
display_name: 王牟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJivUmpd4U3U7Qo5GPByhZ
        subject_person_id: p_qbMsKJz49VxDT7JG8FhSHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zAmWKfzgmG4MHG7Z2zMB7y
          claim_id: c_GJivUmpd4U3U7Qo5GPByhZ
          source_id: s_1yHAnK9dzukEa9rkvcYW9G
          stance: supports
          locator: CBDB:186145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186145）
          source: &a1
            id: s_1yHAnK9dzukEa9rkvcYW9G
            source_type: api_record
            title: 中国历代人物传记资料库：王牟（CBDB 186145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186145&o=json
            external_identifier: CBDB:186145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LLi4J713NkZgRVJ5rspR1W
        subject_person_id: p_qbMsKJz49VxDT7JG8FhSHx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 910年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cXz8mV5GEAvrRpeLhaBKzp
          claim_id: c_LLi4J713NkZgRVJ5rspR1W
          source_id: s_1yHAnK9dzukEa9rkvcYW9G
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
        id: c_6FcTeHDeQrLDiiFJDQdNEm
        subject_person_id: p_qbMsKJz49VxDT7JG8FhSHx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1j8CdbNY8uedMXL9p3t9g
          claim_id: c_6FcTeHDeQrLDiiFJDQdNEm
          source_id: s_1yHAnK9dzukEa9rkvcYW9G
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
        id: c_3XPiotZaktaU9nP23_Tdt4
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qbMsKJz49VxDT7JG8FhSHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rdGx-J4d2H1On94eLlUUX
          claim_id: c_3XPiotZaktaU9nP23_Tdt4
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4y5Ah8FMs1dAAQC1d3wNR
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 185654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json
            external_identifier: CBDB:185654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5UAth4rJCPGaoG71WcGgsp
        status: active
        display_name: 王權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王牟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牟 | accepted |
| death.date | 910年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5UAth4rJCPGaoG71WcGgsp | 王權 | accepted |

## 外部来源

- [中国历代人物传记资料库：王牟（CBDB 186145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186145&o=json)
- [中国历代人物传记资料库：王權（CBDB 185654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json)
