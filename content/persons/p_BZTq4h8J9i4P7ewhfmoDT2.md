---
schema: wang-person/v1
id: p_BZTq4h8J9i4P7ewhfmoDT2
status: active
merged_into: null
display_name: 王用善
cbdb_id: 555051
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JZB7shHx4T1n7LMiuGWE9v
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用善（卒于1633年），明人物。中国历代人物传记资料库（CBDB）以人物编号 555051 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ZLfnQETFolOG29skuek541
          claim_id: c_JZB7shHx4T1n7LMiuGWE9v
          source_id: s_LS7fBtvR5H3ZuPAnG44umc
          stance: supports
          locator: CBDB:555051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_LS7fBtvR5H3ZuPAnG44umc
            source_type: api_record
            title: 中国历代人物传记资料库：王用善（CBDB 555051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555051&o=json
            external_identifier: CBDB:555051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_81ztsq4dJTvdw1TgiTKyRw
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1633年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1633-01-01
            latest: 1633-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6bj4LYXJ447oGGZdeCjvE2
          claim_id: c_81ztsq4dJTvdw1TgiTKyRw
          source_id: s_LS7fBtvR5H3ZuPAnG44umc
          stance: supports
          locator: CBDB:555051
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1633
          source:
            id: s_LS7fBtvR5H3ZuPAnG44umc
            source_type: api_record
            title: 中国历代人物传记资料库：王用善（CBDB 555051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555051&o=json
            external_identifier: CBDB:555051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3BrYdM6fxTsGy87JZ9wMLa
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Dh6iQd277nagPJMrjrxCxV
          claim_id: c_3BrYdM6fxTsGy87JZ9wMLa
          source_id: s_LS7fBtvR5H3ZuPAnG44umc
          stance: supports
          locator: CBDB:555051
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 1633
          source:
            id: s_LS7fBtvR5H3ZuPAnG44umc
            source_type: api_record
            title: 中国历代人物传记资料库：王用善（CBDB 555051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555051&o=json
            external_identifier: CBDB:555051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9xmc064xvSyA6rWpKDI4xp
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cyN6q5bJsKD8Leae6zniwf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mfCRgqRUABvXJQOSgx6vuv
          claim_id: c_9xmc064xvSyA6rWpKDI4xp
          source_id: s_y1ZPPJXCLSyDXm6AyRJUao
          stance: supports
          locator: 南陽府志，lgid=878682：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y1ZPPJXCLSyDXm6AyRJUao
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 555058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555058&o=json
            external_identifier: CBDB:555058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cyN6q5bJsKD8Leae6zniwf
        status: active
        display_name: 王炎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GTuqF6HaW0efLDGp0CbsZB
        subject_person_id: p_BZTq4h8J9i4P7ewhfmoDT2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FrM2ZGAKxFkY2nPqoCCHVX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h739q-X3Ua3Rr2DEsiK9kI
          claim_id: c_GTuqF6HaW0efLDGp0CbsZB
          source_id: s_qclRHLY5obJt4ZGPdETV5W
          stance: supports
          locator: 南陽府志，lgid=878686：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qclRHLY5obJt4ZGPdETV5W
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王用善妻)（CBDB 555092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555092&o=json
            external_identifier: CBDB:555092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FrM2ZGAKxFkY2nPqoCCHVX
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王用善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用善（卒于1633年），明人物。中国历代人物传记资料库（CBDB）以人物编号 555051 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1633年 | accepted |
| name.primary | 王用善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cyN6q5bJsKD8Leae6zniwf | 王炎 | accepted |
| spouses | p_FrM2ZGAKxFkY2nPqoCCHVX | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王用善妻)（CBDB 555092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555092&o=json)
- [中国历代人物传记资料库：王炎（CBDB 555058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555058&o=json)
- [中国历代人物传记资料库：王用善（CBDB 555051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555051&o=json)
