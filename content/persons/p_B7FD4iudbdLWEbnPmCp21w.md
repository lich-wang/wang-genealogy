---
schema: wang-person/v1
id: p_B7FD4iudbdLWEbnPmCp21w
status: active
merged_into: null
display_name: 王傪
cbdb_id: 196350
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JFp5gtVWn6NHnHHJ7GvpDW
        subject_person_id: p_B7FD4iudbdLWEbnPmCp21w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傪，唐人物。中国历代人物传记资料库（CBDB）以人物编号 196350 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PTLkjmG_v3J2BdJe8k695K
          claim_id: c_JFp5gtVWn6NHnHHJ7GvpDW
          source_id: s_Zo8HNsHNRHokoB37FVUVMG
          stance: supports
          locator: CBDB:196350
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Zo8HNsHNRHokoB37FVUVMG
            source_type: api_record
            title: 中国历代人物传记资料库：王傪（CBDB 196350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196350&o=json
            external_identifier: CBDB:196350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzQC74LUUGEKeks2dChAb7
        subject_person_id: p_B7FD4iudbdLWEbnPmCp21w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3ZH5pcMgv314gPiFvmf2gL
          claim_id: c_fzQC74LUUGEKeks2dChAb7
          source_id: s_Zo8HNsHNRHokoB37FVUVMG
          stance: supports
          locator: CBDB:196350
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Zo8HNsHNRHokoB37FVUVMG
            source_type: api_record
            title: 中国历代人物传记资料库：王傪（CBDB 196350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196350&o=json
            external_identifier: CBDB:196350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_euwEM6MRM5xpuaBi1NzoJT
        status: active
        display_name: 王珍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傪，唐人物。中国历代人物传记资料库（CBDB）以人物编号 196350 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王傪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_euwEM6MRM5xpuaBi1NzoJT | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傪（CBDB 196350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196350&o=json)
- [中国历代人物传记资料库：王珍（CBDB 146026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146026&o=json)
