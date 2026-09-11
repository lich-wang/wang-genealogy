---
schema: wang-person/v1
id: p_Rr4bv1V37AF4D9WqPU9Bu4
status: active
merged_into: null
display_name: 王公道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m8hKLyZi4L7MEci5BMZthV
        subject_person_id: p_Rr4bv1V37AF4D9WqPU9Bu4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6U8WgbAH6QVzxw3DXLom6e
          claim_id: c_m8hKLyZi4L7MEci5BMZthV
          source_id: s_fSRGsiEHGT4RrsRzeDrGN2
          stance: supports
          locator: CBDB:193083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193083）
          source: &a1
            id: s_fSRGsiEHGT4RrsRzeDrGN2
            source_type: api_record
            title: 中国历代人物传记资料库：王公道（CBDB 193083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193083&o=json
            external_identifier: CBDB:193083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_v2mbQQzXeZGhYLqrTvANoo
        subject_person_id: p_Rr4bv1V37AF4D9WqPU9Bu4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCHtbFcKgiL7i84BY5ucMm
          claim_id: c_v2mbQQzXeZGhYLqrTvANoo
          source_id: s_fSRGsiEHGT4RrsRzeDrGN2
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
        id: c_1WonYcgaSLxaSMDhHS7U67
        subject_person_id: p_Rr4bv1V37AF4D9WqPU9Bu4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公道（卒于731年），唐人物。籍贯夏州。（中国历代人物传记资料库 CBDB 193083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gURN10M7rPr0GIlV3UAO6d
          claim_id: c_1WonYcgaSLxaSMDhHS7U67
          source_id: s_fSRGsiEHGT4RrsRzeDrGN2
          stance: supports
          locator: CBDB:193083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4YUNsFJMZ1-9UetPtQ2LGH
        subject_person_id: p_Rr4bv1V37AF4D9WqPU9Bu4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GbFhoA8v7vVvmKQN13YDAr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NukYHAIED86xa9nKYDpPMo
          claim_id: c_4YUNsFJMZ1-9UetPtQ2LGH
          source_id: s_9eYF13d24wCMAxXnY2oL5q
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9eYF13d24wCMAxXnY2oL5q
            source_type: api_record
            title: 中国历代人物传记资料库：王惟汶（CBDB 193082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json
            external_identifier: CBDB:193082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GbFhoA8v7vVvmKQN13YDAr
        status: active
        display_name: 王惟汶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公道 | accepted |
| death.date | 731年 | accepted |
| bio.summary | 王公道（卒于731年），唐人物。籍贯夏州。（中国历代人物传记资料库 CBDB 193083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GbFhoA8v7vVvmKQN13YDAr | 王惟汶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公道（CBDB 193083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193083&o=json)
- [中国历代人物传记资料库：王惟汶（CBDB 193082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json)
