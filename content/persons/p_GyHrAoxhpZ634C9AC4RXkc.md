---
schema: wang-person/v1
id: p_GyHrAoxhpZ634C9AC4RXkc
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_712Kpe32kseNN4k4GbVuV8
        subject_person_id: p_GyHrAoxhpZ634C9AC4RXkc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6yALJG5ZPmd5ef24KG7k8Z
          claim_id: c_712Kpe32kseNN4k4GbVuV8
          source_id: s_LTotmTDPQrSLyEZBMD13Um
          stance: supports
          locator: CBDB:213994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213994）
          source: &a1
            id: s_LTotmTDPQrSLyEZBMD13Um
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 213994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json
            external_identifier: CBDB:213994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nMgRQih1pzMWBgkYGf44x8
        subject_person_id: p_GyHrAoxhpZ634C9AC4RXkc
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
        - id: cs_JkLBcxixEC1qsPXLSeVQeP
          claim_id: c_nMgRQih1pzMWBgkYGf44x8
          source_id: s_LTotmTDPQrSLyEZBMD13Um
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
        id: c_qmSAUrVYuRzwYVw4tJRDCy
        subject_person_id: p_GyHrAoxhpZ634C9AC4RXkc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jyUHIZULuEDBXApBDBzNr
          claim_id: c_qmSAUrVYuRzwYVw4tJRDCy
          source_id: s_LTotmTDPQrSLyEZBMD13Um
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oXDRfETnLuW3oEE7nvKJYF
        status: active
        display_name: 王國賓
        merged_into_person_id: null
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oXDRfETnLuW3oEE7nvKJYF | 王國賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 213994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json)
