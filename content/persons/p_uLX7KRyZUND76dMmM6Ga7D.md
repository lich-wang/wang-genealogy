---
schema: wang-person/v1
id: p_uLX7KRyZUND76dMmM6Ga7D
status: active
merged_into: null
display_name: 王意通
cbdb_id: 159085
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ztQPt6U7NAG4h2ZFH2L5uT
        subject_person_id: p_uLX7KRyZUND76dMmM6Ga7D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意通，唐人物。中国历代人物传记资料库（CBDB）以人物编号 159085 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lxVLuRr6ShFHDL35p_ikCD
          claim_id: c_ztQPt6U7NAG4h2ZFH2L5uT
          source_id: s_wJiixYBnZ6LmrCXNpAqRJp
          stance: supports
          locator: CBDB:159085
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_wJiixYBnZ6LmrCXNpAqRJp
            source_type: api_record
            title: 中国历代人物传记资料库：王意通（CBDB 159085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159085&o=json
            external_identifier: CBDB:159085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JaZG9NDD5EYpTn6DEMCQpS
        subject_person_id: p_uLX7KRyZUND76dMmM6Ga7D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2v3WgvLm9BEtoVFLBaHxDA
          claim_id: c_JaZG9NDD5EYpTn6DEMCQpS
          source_id: s_wJiixYBnZ6LmrCXNpAqRJp
          stance: supports
          locator: CBDB:159085
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_wJiixYBnZ6LmrCXNpAqRJp
            source_type: api_record
            title: 中国历代人物传记资料库：王意通（CBDB 159085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159085&o=json
            external_identifier: CBDB:159085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B03rh5qkv_bO4pxh7WiYmi
        subject_person_id: p_uLX7KRyZUND76dMmM6Ga7D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PPiNhlsQIVPeD5U4Xc151
          claim_id: c_B03rh5qkv_bO4pxh7WiYmi
          source_id: s_97EYxJPEnRvhgya9nsk7Fp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_97EYxJPEnRvhgya9nsk7Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王守琦（CBDB 141873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json
            external_identifier: CBDB:141873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TSiXhGd4sf6hYFPw8EvWsp
        status: active
        display_name: 王守琦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王意通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王意通，唐人物。中国历代人物传记资料库（CBDB）以人物编号 159085 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王意通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TSiXhGd4sf6hYFPw8EvWsp | 王守琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守琦（CBDB 141873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141873&o=json)
- [中国历代人物传记资料库：王意通（CBDB 159085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159085&o=json)
