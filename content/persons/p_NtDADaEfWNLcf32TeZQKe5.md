---
schema: wang-person/v1
id: p_NtDADaEfWNLcf32TeZQKe5
status: active
merged_into: null
display_name: 王師會
cbdb_id: 185229
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qU26XvCkUJ5BNtJg57u3JY
        subject_person_id: p_NtDADaEfWNLcf32TeZQKe5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師會（卒于860年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185229 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mlc6GJP4m3AfuB6nG1vmPn
          claim_id: c_qU26XvCkUJ5BNtJg57u3JY
          source_id: s_tJUCp1UwxP2oQYJEGFw9Dx
          stance: supports
          locator: CBDB:185229
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_tJUCp1UwxP2oQYJEGFw9Dx
            source_type: api_record
            title: 中国历代人物传记资料库：王師會（CBDB 185229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185229&o=json
            external_identifier: CBDB:185229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WYqPWi3o5YqqMMT2aF5nvR
        subject_person_id: p_NtDADaEfWNLcf32TeZQKe5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0860-01-01
            latest: 0860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VDvsAVF3hnYHv8dFphNCr9
          claim_id: c_WYqPWi3o5YqqMMT2aF5nvR
          source_id: s_tJUCp1UwxP2oQYJEGFw9Dx
          stance: supports
          locator: CBDB:185229
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source:
            id: s_tJUCp1UwxP2oQYJEGFw9Dx
            source_type: api_record
            title: 中国历代人物传记资料库：王師會（CBDB 185229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185229&o=json
            external_identifier: CBDB:185229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f4LnF8dGy2Biz1XpijaHPK
        subject_person_id: p_NtDADaEfWNLcf32TeZQKe5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4XVFXnaxcAFk5LHeQE83Wd
          claim_id: c_f4LnF8dGy2Biz1XpijaHPK
          source_id: s_tJUCp1UwxP2oQYJEGFw9Dx
          stance: supports
          locator: CBDB:185229
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source:
            id: s_tJUCp1UwxP2oQYJEGFw9Dx
            source_type: api_record
            title: 中国历代人物传记资料库：王師會（CBDB 185229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185229&o=json
            external_identifier: CBDB:185229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5sHKsEi0DdErPqZBF9wo_B
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NtDADaEfWNLcf32TeZQKe5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SB0aQjxrnjo1xXaX5te6za
          claim_id: c_5sHKsEi0DdErPqZBF9wo_B
          source_id: s_zYViESyVpLrCKNm51Gzdyz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zYViESyVpLrCKNm51Gzdyz
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 146321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json
            external_identifier: CBDB:146321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tWWc2id3awt5aEbJgL5cQv
        status: active
        display_name: 王清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師會（卒于860年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185229 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 860年 | accepted |
| name.primary | 王師會 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tWWc2id3awt5aEbJgL5cQv | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 146321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json)
- [中国历代人物传记资料库：王師會（CBDB 185229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185229&o=json)
