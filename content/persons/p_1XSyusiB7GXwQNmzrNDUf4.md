---
schema: wang-person/v1
id: p_1XSyusiB7GXwQNmzrNDUf4
status: active
merged_into: null
display_name: 王謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epJaX9C7MzVEfecYrko47q
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jbuk7mz6WF7q4DTsUe1zpV
          claim_id: c_epJaX9C7MzVEfecYrko47q
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: CBDB:212637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212637）
          source: &a1
            id: s_pBmMW6zjhQ8EDiVE2Ntyp1
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 212637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json
            external_identifier: CBDB:212637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7GKN1LHvY896wT19BpEKt
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
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
        - id: cs_y4hANZQ5QM6wKesbAMP6aV
          claim_id: c_Q7GKN1LHvY896wT19BpEKt
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lpVixqSmnBZrlfl_Al7np1
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KOoT1wCBm2JI4CVV7FYh8Z
          claim_id: c_lpVixqSmnBZrlfl_Al7np1
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 212637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json)
