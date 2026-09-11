---
schema: wang-person/v1
id: p_W4c4cQK9DHN1AkS9oTwMLe
status: active
merged_into: null
display_name: 王賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EP4Z38x35dbUNtXA2WZNXH
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3gFLXifzkVgWqdeLpg6Rr
          claim_id: c_EP4Z38x35dbUNtXA2WZNXH
          source_id: s_JsDWcrdechH2XKS9gMda6E
          stance: supports
          locator: CBDB:141086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141086）
          source: &a1
            id: s_JsDWcrdechH2XKS9gMda6E
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 141086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json
            external_identifier: CBDB:141086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mWByBkKWwJDF2XXBvxxxH1
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 685年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNEZQkixwu5wtKm5EXyDke
          claim_id: c_mWByBkKWwJDF2XXBvxxxH1
          source_id: s_JsDWcrdechH2XKS9gMda6E
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
        id: c_D6iVTVexW1R5vPqBc4QnG9
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKLLnFtZjYFGRHYVSN7XbX
          claim_id: c_D6iVTVexW1R5vPqBc4QnG9
          source_id: s_JsDWcrdechH2XKS9gMda6E
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
        id: c_TgK5yW75irbYGCDKs61Zr2
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
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
        - id: cs_MnJPHyD1AJPTewPy9Y2F31
          claim_id: c_TgK5yW75irbYGCDKs61Zr2
          source_id: s_JsDWcrdechH2XKS9gMda6E
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
        id: c_eY__02efDg6cvW9uDK74lF
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cRoBKjPjEZXjWG3ryj94j3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Bmli3JDAiH-HSL23GytpV
          claim_id: c_eY__02efDg6cvW9uDK74lF
          source_id: s_JsDWcrdechH2XKS9gMda6E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengwu 8：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cRoBKjPjEZXjWG3ryj94j3
        status: active
        display_name: 王子昂
        merged_into_person_id: null
    - claim:
        id: c_8X32E0q2TGlx0e-r_eEqqO
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RYJ3dJdN6PTPvLY2XQHXaP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rX3O974vTY_PWgzY40Cj-
          claim_id: c_8X32E0q2TGlx0e-r_eEqqO
          source_id: s_JsDWcrdechH2XKS9gMda6E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengwu 8：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYJ3dJdN6PTPvLY2XQHXaP
        status: active
        display_name: 王從諫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 685年 | accepted |
| death.date | 748年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cRoBKjPjEZXjWG3ryj94j3 | 王子昂 | accepted |
| children | p_RYJ3dJdN6PTPvLY2XQHXaP | 王從諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 141086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json)
