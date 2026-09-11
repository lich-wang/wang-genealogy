---
schema: wang-person/v1
id: p_ELj7af6FP9ng738M3GQvto
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B26M5ACweUUTFA6nvVGdAp
        subject_person_id: p_ELj7af6FP9ng738M3GQvto
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntAZ8BQQkxCtVp5umWrVi6
          claim_id: c_B26M5ACweUUTFA6nvVGdAp
          source_id: s_o7b2XSrAFHSQbt8is31wgR
          stance: supports
          locator: CBDB:221737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221737）
          source: &a1
            id: s_o7b2XSrAFHSQbt8is31wgR
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 221737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221737&o=json
            external_identifier: CBDB:221737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7ASFLZPwmuE98L76A9wtK
        subject_person_id: p_ELj7af6FP9ng738M3GQvto
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221737）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fUbq4yuPSzAsVSgspvtAcR
          claim_id: c_Q7ASFLZPwmuE98L76A9wtK
          source_id: s_o7b2XSrAFHSQbt8is31wgR
          stance: supports
          locator: CBDB:221737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_6OdT6V_rURy2G7bdCK_KPm
        subject_person_id: p_ELj7af6FP9ng738M3GQvto
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwtZPgZ23pP0wi_c_fbAPh
          claim_id: c_6OdT6V_rURy2G7bdCK_KPm
          source_id: s_o7b2XSrAFHSQbt8is31wgR
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7F2eLtMppfYhb1rX2t5C3R
        status: active
        display_name: 王九德
        merged_into_person_id: null
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7F2eLtMppfYhb1rX2t5C3R | 王九德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 221737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221737&o=json)
