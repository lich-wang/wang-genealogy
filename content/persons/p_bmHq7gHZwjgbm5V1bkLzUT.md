---
schema: wang-person/v1
id: p_bmHq7gHZwjgbm5V1bkLzUT
status: active
merged_into: null
display_name: 王韶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YkwXNLpSAeRtsocjfPssYA
        subject_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uiR1JhB98hLhcDxBv134HV
          claim_id: c_YkwXNLpSAeRtsocjfPssYA
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
          stance: supports
          locator: CBDB:140516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140516）
          source: &a1
            id: s_DfjD8YeEYBuuUopsxMmVRn
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 140516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140516&o=json
            external_identifier: CBDB:140516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_31CdpAPWNHf6on2XQ5ohf2
        subject_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 677年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuXRCNGLGf3F5o1gECzV9V
          claim_id: c_31CdpAPWNHf6on2XQ5ohf2
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
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
        id: c_P7Z8rQ8ALkJxhE9K59t1H9
        subject_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFKpcJh22Bk8U694na83Dx
          claim_id: c_P7Z8rQ8ALkJxhE9K59t1H9
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
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
        id: c_jEpaALLgsQbjPPzBLPoWAG
        subject_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
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
        - id: cs_VLDr988LxDv8YBki6i365Z
          claim_id: c_jEpaALLgsQbjPPzBLPoWAG
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
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
        id: c_lYWiQleXzdoVBlsUusxYF_
        subject_person_id: p_owBpexPyewiSvBD2Bv9rND
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1rHN3-2mLCa_7ZV_8nezI
          claim_id: c_lYWiQleXzdoVBlsUusxYF_
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 342：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_owBpexPyewiSvBD2Bv9rND
        status: active
        display_name: 王懷信
        merged_into_person_id: null
  children:
    - claim:
        id: c_K6XLYqxFGDfDthtQcsYi1E
        subject_person_id: p_bmHq7gHZwjgbm5V1bkLzUT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CSJUv2Qs6nLFQCNo6BweDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QyhGbu0vh7fOlajqFD9CTa
          claim_id: c_K6XLYqxFGDfDthtQcsYi1E
          source_id: s_DfjD8YeEYBuuUopsxMmVRn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 342：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CSJUv2Qs6nLFQCNo6BweDp
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶 | accepted |
| birth.date | 677年 | accepted |
| death.date | 732年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_owBpexPyewiSvBD2Bv9rND | 王懷信 | accepted |
| children | p_CSJUv2Qs6nLFQCNo6BweDp | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 140516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140516&o=json)
