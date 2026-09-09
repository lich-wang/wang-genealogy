---
schema: wang-person/v1
id: p_yNjKUL6B5EUw2JDHWUsyYW
status: active
merged_into: null
display_name: 王仲英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wH7gScEVRNmQtdU9KX361L
        subject_person_id: p_yNjKUL6B5EUw2JDHWUsyYW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_52Ggjkw1ors94siN5pHfm5
          claim_id: c_wH7gScEVRNmQtdU9KX361L
          source_id: s_Hha2qcx5vtQRuCSHCsDxoG
          stance: supports
          locator: CBDB:635959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635959）
          source: &a1
            id: s_Hha2qcx5vtQRuCSHCsDxoG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲英（CBDB 635959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635959&o=json
            external_identifier: CBDB:635959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GRw7jBWTRwCrmEb4PGFBXT
        subject_person_id: p_yNjKUL6B5EUw2JDHWUsyYW
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
        - id: cs_VV27cAVGzNm55NhQyXRE2g
          claim_id: c_GRw7jBWTRwCrmEb4PGFBXT
          source_id: s_Hha2qcx5vtQRuCSHCsDxoG
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
  descendants: []
  other: []
---

# 王仲英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲英 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲英（CBDB 635959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635959&o=json)
