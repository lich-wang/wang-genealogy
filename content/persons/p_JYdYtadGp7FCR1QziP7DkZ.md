---
schema: wang-person/v1
id: p_JYdYtadGp7FCR1QziP7DkZ
status: active
merged_into: null
display_name: 王平
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E21qRrBcE7itBrSaGJDwpd
        subject_person_id: p_JYdYtadGp7FCR1QziP7DkZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JLyqpMdUP7DfXp6iHoYmmw
          claim_id: c_E21qRrBcE7itBrSaGJDwpd
          source_id: s_5T2YLe3LJARuNTqTr7Y5QU
          stance: supports
          locator: CBDB:230376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230376）
          source: &a1
            id: s_5T2YLe3LJARuNTqTr7Y5QU
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 230376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230376&o=json
            external_identifier: CBDB:230376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZJVY6qScj79UneKa2PtybB
        subject_person_id: p_JYdYtadGp7FCR1QziP7DkZ
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
        - id: cs_8qs7cD77srxLneQFPv7Qmp
          claim_id: c_ZJVY6qScj79UneKa2PtybB
          source_id: s_5T2YLe3LJARuNTqTr7Y5QU
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
        id: c_8U8YoT1tQAIRFiN4IgVZFn
        subject_person_id: p_JYdYtadGp7FCR1QziP7DkZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kboA1JoHwYs2qxhbf5KF6d
          claim_id: c_8U8YoT1tQAIRFiN4IgVZFn
          source_id: s_5T2YLe3LJARuNTqTr7Y5QU
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第二百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVJuaQ4fqcXMz2HJX35bCQ
        status: active
        display_name: 王一魁
        merged_into_person_id: null
  other: []
---

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DVJuaQ4fqcXMz2HJX35bCQ | 王一魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 230376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230376&o=json)
