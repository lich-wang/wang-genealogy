---
schema: wang-person/v1
id: p_euwEM6MRM5xpuaBi1NzoJT
status: active
merged_into: null
display_name: 王珍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S3BvNaduoxFhELk5CoKBSS
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fZtGPEBME7dWNqSrdCKCGH
          claim_id: c_S3BvNaduoxFhELk5CoKBSS
          source_id: s_s2AHS7PEGQd23e4zfZDi9L
          stance: supports
          locator: CBDB:146026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146026）
          source: &a1
            id: s_s2AHS7PEGQd23e4zfZDi9L
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 146026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146026&o=json
            external_identifier: CBDB:146026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C3LJVJ9jGmnoDbG8pDJf2N
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 736年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JC9oavPNBg3EdTsB3MNgkK
          claim_id: c_C3LJVJ9jGmnoDbG8pDJf2N
          source_id: s_s2AHS7PEGQd23e4zfZDi9L
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
        id: c_C39WgLFrvboowSF3dkyARi
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EL24snQnhCcFMZAAmQ9Nw9
          claim_id: c_C39WgLFrvboowSF3dkyARi
          source_id: s_s2AHS7PEGQd23e4zfZDi9L
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
        id: c_vA1AqLMfBj7e3edv8GHHDz
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
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
        - id: cs_4FsGLr9xgp3gZd3igjCe7d
          claim_id: c_vA1AqLMfBj7e3edv8GHHDz
          source_id: s_s2AHS7PEGQd23e4zfZDi9L
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
        id: c_p7qiBhJF8rep-5oJN0lJDD
        subject_person_id: p_B7FD4iudbdLWEbnPmCp21w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mn2OoSJo3WwsQ3CjNxr-F
          claim_id: c_p7qiBhJF8rep-5oJN0lJDD
          source_id: s_s2AHS7PEGQd23e4zfZDi9L
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B7FD4iudbdLWEbnPmCp21w
        status: active
        display_name: 王傪
        merged_into_person_id: null
  children:
    - claim:
        id: c_hab5NiPvRCoT80Bai82eLf
        subject_person_id: p_euwEM6MRM5xpuaBi1NzoJT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_249hfeG74f2k4d2rvhHU5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3LpUuyCh_srRYIp9DLs_D
          claim_id: c_hab5NiPvRCoT80Bai82eLf
          source_id: s_QCXfQmMjoNQqKRugr7PKZT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QCXfQmMjoNQqKRugr7PKZT
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 192577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192577&o=json
            external_identifier: CBDB:192577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_249hfeG74f2k4d2rvhHU5d
        status: active
        display_name: 王端
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| birth.date | 736年 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B7FD4iudbdLWEbnPmCp21w | 王傪 | accepted |
| children | p_249hfeG74f2k4d2rvhHU5d | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 192577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192577&o=json)
- [中国历代人物传记资料库：王珍（CBDB 146026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146026&o=json)
