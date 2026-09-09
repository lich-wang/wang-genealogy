---
schema: wang-person/v1
id: p_kmJh2iER8x3d2BkWVvnpCx
status: active
merged_into: null
display_name: 王蘭佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KSJ2CZNn9DtGpKszHLhF9S
        subject_person_id: p_kmJh2iER8x3d2BkWVvnpCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v45dcT1uZASxqLubr3ASMt
          claim_id: c_KSJ2CZNn9DtGpKszHLhF9S
          source_id: s_BHJZaxzuGQXR98WFnB4Cv5
          stance: supports
          locator: CBDB:438389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438389）
          source: &a1
            id: s_BHJZaxzuGQXR98WFnB4Cv5
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭佩（CBDB 438389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438389&o=json
            external_identifier: CBDB:438389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8sKtzTdzJGzDijGJEaThRf
        subject_person_id: p_kmJh2iER8x3d2BkWVvnpCx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XuGyqpovUQYgSJEKgHR9kJ
          claim_id: c_8sKtzTdzJGzDijGJEaThRf
          source_id: s_BHJZaxzuGQXR98WFnB4Cv5
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
        id: c_R1RuHFSAKHM2nygdn6D2Hi
        subject_person_id: p_kmJh2iER8x3d2BkWVvnpCx
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
        - id: cs_QU59zLNAx587aB3Za9toSJ
          claim_id: c_R1RuHFSAKHM2nygdn6D2Hi
          source_id: s_BHJZaxzuGQXR98WFnB4Cv5
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

# 王蘭佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭佩 | accepted |
| death.date | 1833年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭佩（CBDB 438389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438389&o=json)
