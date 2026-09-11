---
schema: wang-person/v1
id: p_5KXqnGcUb8SEM8grnPHtW7
status: active
merged_into: null
display_name: 王溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxYG2CCVmgjZvCyvJzE9wc
        subject_person_id: p_5KXqnGcUb8SEM8grnPHtW7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cB4vtziSd7qYGevYbwhrsv
          claim_id: c_MxYG2CCVmgjZvCyvJzE9wc
          source_id: s_VXhvcxgsHrJaAdC2nBui3k
          stance: supports
          locator: CBDB:121460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121460）
          source: &a1
            id: s_VXhvcxgsHrJaAdC2nBui3k
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 121460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121460&o=json
            external_identifier: CBDB:121460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zbkZuSZBfGKQ4Dd14fbgdX
        subject_person_id: p_5KXqnGcUb8SEM8grnPHtW7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_56cBzpzfxo1qY67mJhxfzF
          claim_id: c_zbkZuSZBfGKQ4Dd14fbgdX
          source_id: s_VXhvcxgsHrJaAdC2nBui3k
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
        id: c__uezu-YI2L0irVS4z71zBp
        subject_person_id: p_5KXqnGcUb8SEM8grnPHtW7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n18iFte87Ls38E8g6NHVog
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoB_38S5xvkQeRGfumsgyS
          claim_id: c__uezu-YI2L0irVS4z71zBp
          source_id: s_VXhvcxgsHrJaAdC2nBui3k
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n18iFte87Ls38E8g6NHVog
        status: active
        display_name: 王延德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_n18iFte87Ls38E8g6NHVog | 王延德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溫（CBDB 121460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121460&o=json)
