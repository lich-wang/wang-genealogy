---
schema: wang-person/v1
id: p_uWARgTHwHotCqXAXAieGV4
status: active
merged_into: null
display_name: 王世芳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNqdkWSv2ZzLsSqpo5a6Pn
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ogpM1rN1pXPVPMyf9HZjSZ
          claim_id: c_ZNqdkWSv2ZzLsSqpo5a6Pn
          source_id: s_PWDQtsgvbp39hk2uRjqnJW
          stance: supports
          locator: CBDB:337555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337555）
          source: &a1
            id: s_PWDQtsgvbp39hk2uRjqnJW
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 337555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337555&o=json
            external_identifier: CBDB:337555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9WnEfuTtLmBnXze46opvae
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
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
        - id: cs_bU3gRxLoHWQE5yQ8XYunig
          claim_id: c_9WnEfuTtLmBnXze46opvae
          source_id: s_PWDQtsgvbp39hk2uRjqnJW
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
        id: c_tYVldj5CN8a6NJq0grvyel
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PeOvEniz9I1kRrDrARp_2
          claim_id: c_tYVldj5CN8a6NJq0grvyel
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3huwJDws72HMTYCFK3FEtU
            source_type: api_record
            title: 中国历代人物传记资料库：王一誠（CBDB 205728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json
            external_identifier: CBDB:205728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 337555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337555&o=json)
- [中国历代人物传记资料库：王一誠（CBDB 205728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json)
