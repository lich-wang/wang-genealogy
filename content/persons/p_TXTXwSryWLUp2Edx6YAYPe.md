---
schema: wang-person/v1
id: p_TXTXwSryWLUp2Edx6YAYPe
status: active
merged_into: null
display_name: 王永年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHGqrnyTvdQ75xnY5CqDDb
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNA2ExQwbwVHhqxBhMA7Pu
          claim_id: c_hHGqrnyTvdQ75xnY5CqDDb
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: CBDB:17656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17656）
          source: &a1
            id: s_GzuwDJtuZq25gZiJYdCJcE
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 17656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json
            external_identifier: CBDB:17656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q98ddrzZC4jmhoioWMxKHG
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1055年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeBtMk4Jq29hADbCDrUGnC
          claim_id: c_Q98ddrzZC4jmhoioWMxKHG
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8qJW2EAEbXhx4VMPE3UkXy
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AciBSJFBtxaXuapF6uAecS
          claim_id: c_8qJW2EAEbXhx4VMPE3UkXy
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
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
        id: c_Z3ePr3pbTuxb29UKNe7Sca
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
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
        - id: cs_AEVWhErGWhnJCDdKbJ1QUq
          claim_id: c_Z3ePr3pbTuxb29UKNe7Sca
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
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
        id: c_ERhxkQwfPTP0AsB1mrMiU3
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_25zytug1kFui17eu9pg9ot
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-DbyUYC8vWvB56QLyPbosl
          claim_id: c_ERhxkQwfPTP0AsB1mrMiU3
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eYEQPT2fXEVoBG5zNVBr99
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 386574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json
            external_identifier: CBDB:386574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_25zytug1kFui17eu9pg9ot
        status: active
        display_name: 王寧
        merged_into_person_id: null
  other: []
---

# 王永年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永年 | accepted |
| birth.date | 1055年 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_25zytug1kFui17eu9pg9ot | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 386574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json)
- [中国历代人物传记资料库：王永年（CBDB 17656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json)
