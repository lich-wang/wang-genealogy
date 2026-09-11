---
schema: wang-person/v1
id: p_HdtNY7KFEHTp6DiZEetbWW
status: active
merged_into: null
display_name: 王膺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q6c8kirsT5Tig7pNnS1ypr
        subject_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PUEj6sx3PTbNSeE67i559M
          claim_id: c_q6c8kirsT5Tig7pNnS1ypr
          source_id: s_MK34MFDSEeVbjumsg12iSE
          stance: supports
          locator: CBDB:143710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143710）
          source: &a1
            id: s_MK34MFDSEeVbjumsg12iSE
            source_type: api_record
            title: 中国历代人物传记资料库：王膺（CBDB 143710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143710&o=json
            external_identifier: CBDB:143710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X3GLjSa1LJ1m4aD777XmNd
        subject_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 647年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Pf7De4DV6SbsqCLNo3s49
          claim_id: c_X3GLjSa1LJ1m4aD777XmNd
          source_id: s_MK34MFDSEeVbjumsg12iSE
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
        id: c_FkC7rcECV1Vtcbv9FCD1vE
        subject_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3T6ztnyQGAFJ7SkvwJ1es
          claim_id: c_FkC7rcECV1Vtcbv9FCD1vE
          source_id: s_MK34MFDSEeVbjumsg12iSE
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
        id: c_yza6PLkW98pWDZTSC5QCJm
        subject_person_id: p_HdtNY7KFEHTp6DiZEetbWW
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
        - id: cs_rWCM9AZMjy65rqrazyVBkE
          claim_id: c_yza6PLkW98pWDZTSC5QCJm
          source_id: s_MK34MFDSEeVbjumsg12iSE
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
        id: c_uPyNbpbR5ju27gQc82lvvg
        subject_person_id: p_uriQVMTvhidGRuwDTVbdJA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dex5dYEMW8nQ0O7O2HJl-w
          claim_id: c_uPyNbpbR5ju27gQc82lvvg
          source_id: s_MK34MFDSEeVbjumsg12iSE
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uriQVMTvhidGRuwDTVbdJA
        status: active
        display_name: 王昉
        merged_into_person_id: null
  children:
    - claim:
        id: c_CIYG-1uu2eTyhV4FfraVKS
        subject_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_obQUFXG2hpbRazKHn4PMeH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZ6lniuArkKVQaytlbRAQu
          claim_id: c_CIYG-1uu2eTyhV4FfraVKS
          source_id: s_MK34MFDSEeVbjumsg12iSE
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan120：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_obQUFXG2hpbRazKHn4PMeH
        status: active
        display_name: 王務光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王膺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王膺 | accepted |
| birth.date | 647年 | accepted |
| death.date | 728年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uriQVMTvhidGRuwDTVbdJA | 王昉 | accepted |
| children | p_obQUFXG2hpbRazKHn4PMeH | 王務光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王膺（CBDB 143710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143710&o=json)
