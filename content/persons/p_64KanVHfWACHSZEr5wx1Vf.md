---
schema: wang-person/v1
id: p_64KanVHfWACHSZEr5wx1Vf
status: active
merged_into: null
display_name: 王士捷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEF29zZDR4J28EgM9vhC32
        subject_person_id: p_64KanVHfWACHSZEr5wx1Vf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士捷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yW3dxKSXdHJdYFdyBZ32QD
          claim_id: c_kEF29zZDR4J28EgM9vhC32
          source_id: s_F2MoWF7pDVQZjRLANPUF9B
          stance: supports
          locator: CBDB:71325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71325）
          source: &a1
            id: s_F2MoWF7pDVQZjRLANPUF9B
            source_type: api_record
            title: 中国历代人物传记资料库：王士捷（CBDB 71325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71325&o=json
            external_identifier: CBDB:71325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nNnC9FbMJpDEsSb8NohMCz
        subject_person_id: p_64KanVHfWACHSZEr5wx1Vf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCQ7nbvivDpuoK3wBMdp54
          claim_id: c_nNnC9FbMJpDEsSb8NohMCz
          source_id: s_F2MoWF7pDVQZjRLANPUF9B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x4SsLAmdpqSopdBtDRQ61k
        subject_person_id: p_64KanVHfWACHSZEr5wx1Vf
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
        - id: cs_XfT4PDVkNM2wQ7MDsJ26HN
          claim_id: c_x4SsLAmdpqSopdBtDRQ61k
          source_id: s_F2MoWF7pDVQZjRLANPUF9B
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

# 王士捷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士捷 | accepted |
| birth.date | 1621年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士捷（CBDB 71325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71325&o=json)
