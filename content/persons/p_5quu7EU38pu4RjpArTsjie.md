---
schema: wang-person/v1
id: p_5quu7EU38pu4RjpArTsjie
status: active
merged_into: null
display_name: 王肱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k8af2emfQW4Ud8AhGAhpmQ
        subject_person_id: p_5quu7EU38pu4RjpArTsjie
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fvgHuSmoaoMyB2cn5vDEig
          claim_id: c_k8af2emfQW4Ud8AhGAhpmQ
          source_id: s_zV5qmeSoj8qH6xVzPMvj8z
          stance: supports
          locator: CBDB:190099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190099）
          source: &a1
            id: s_zV5qmeSoj8qH6xVzPMvj8z
            source_type: api_record
            title: 中国历代人物传记资料库：王肱（CBDB 190099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190099&o=json
            external_identifier: CBDB:190099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XT4BAzPU3Qm85LCC7iVsJs
        subject_person_id: p_5quu7EU38pu4RjpArTsjie
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 905年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CoyEfQ8X3wo3VsabxcrE3N
          claim_id: c_XT4BAzPU3Qm85LCC7iVsJs
          source_id: s_zV5qmeSoj8qH6xVzPMvj8z
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
        id: c_48maM3ZK65jrPi16wprP6K
        subject_person_id: p_5quu7EU38pu4RjpArTsjie
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8bNQZT8d6LxTJ2XUBj4E1
          claim_id: c_48maM3ZK65jrPi16wprP6K
          source_id: s_zV5qmeSoj8qH6xVzPMvj8z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gp8iwf9RGyXmnn34efAHXE
        subject_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5quu7EU38pu4RjpArTsjie
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXaZEjly_gzdm3vj8D8ouL
          claim_id: c_gp8iwf9RGyXmnn34efAHXE
          source_id: s_zV5qmeSoj8qH6xVzPMvj8z
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        status: active
        display_name: 王融
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肱 | accepted |
| death.date | 905年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B4g9ZTU3Y9aTiDR5uH3rn2 | 王融 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肱（CBDB 190099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190099&o=json)
