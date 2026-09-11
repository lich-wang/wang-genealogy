---
schema: wang-person/v1
id: p_dExgzHMR9pXsascQGAS3S8
status: active
merged_into: null
display_name: 王景曜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GW6GuCzBE2SGzbfwa3Q8sg
        subject_person_id: p_dExgzHMR9pXsascQGAS3S8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUCGuS7XtRKmGZfTJr82LW
          claim_id: c_GW6GuCzBE2SGzbfwa3Q8sg
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
          stance: supports
          locator: CBDB:140586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140586）
          source: &a1
            id: s_NsQTQt3aey9qWokCD7Yqqc
            source_type: api_record
            title: 中国历代人物传记资料库：王景曜（CBDB 140586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140586&o=json
            external_identifier: CBDB:140586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AyQdTv96KfyEB5yMgWusuu
        subject_person_id: p_dExgzHMR9pXsascQGAS3S8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 680年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jq2MyFAANKubRXaCQUD9C5
          claim_id: c_AyQdTv96KfyEB5yMgWusuu
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
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
        id: c_cN8is6H4AAC2WzTPvtPtph
        subject_person_id: p_dExgzHMR9pXsascQGAS3S8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 734年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAu2SWhgub2EAKxaKciAA6
          claim_id: c_cN8is6H4AAC2WzTPvtPtph
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
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
        id: c_td5xLGWLCww8vtcYwa8iE1
        subject_person_id: p_dExgzHMR9pXsascQGAS3S8
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
        - id: cs_io1TAQws2KYjVSySRvbbeA
          claim_id: c_td5xLGWLCww8vtcYwa8iE1
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
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
        id: c_qSEUCp_sYoelsOoWcvsnGT
        subject_person_id: p_qSBAn4LkCdEVnmE9AJKKUb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dExgzHMR9pXsascQGAS3S8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iJKB4R3dQWah6-yKDXKfnK
          claim_id: c_qSEUCp_sYoelsOoWcvsnGT
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 413：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qSBAn4LkCdEVnmE9AJKKUb
        status: active
        display_name: 王排須
        merged_into_person_id: null
  children:
    - claim:
        id: c_AvxAaTGm1DPv98vQCBVxp1
        subject_person_id: p_dExgzHMR9pXsascQGAS3S8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJ7K5yC1dfEgFXSMbvj8zT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CvuXOiTziFgkkELKu_hgfL
          claim_id: c_AvxAaTGm1DPv98vQCBVxp1
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 413：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EJ7K5yC1dfEgFXSMbvj8zT
        status: active
        display_name: 王右肱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景曜 | accepted |
| birth.date | 680年 | accepted |
| death.date | 734年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qSBAn4LkCdEVnmE9AJKKUb | 王排須 | accepted |
| children | p_EJ7K5yC1dfEgFXSMbvj8zT | 王右肱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景曜（CBDB 140586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140586&o=json)
