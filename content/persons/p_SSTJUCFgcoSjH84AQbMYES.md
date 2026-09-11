---
schema: wang-person/v1
id: p_SSTJUCFgcoSjH84AQbMYES
status: active
merged_into: null
display_name: 王之豫
cbdb_id: 149916
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xFRMD1rEBtrd4KE97aKums
        subject_person_id: p_SSTJUCFgcoSjH84AQbMYES
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之豫，唐人物。中国历代人物传记资料库（CBDB）以人物编号 149916 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mE_aKs_8zosdHdDQSGXFtz
          claim_id: c_xFRMD1rEBtrd4KE97aKums
          source_id: s_s1BpvJd4Mrwb22gPAse4dh
          stance: supports
          locator: CBDB:149916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s1BpvJd4Mrwb22gPAse4dh
            source_type: api_record
            title: 中国历代人物传记资料库：王之豫（CBDB 149916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149916&o=json
            external_identifier: CBDB:149916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RrXkMJgkP5hRxD474YGKZf
        subject_person_id: p_SSTJUCFgcoSjH84AQbMYES
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QXd2xf8991QuST1Pqx13Ub
          claim_id: c_RrXkMJgkP5hRxD474YGKZf
          source_id: s_s1BpvJd4Mrwb22gPAse4dh
          stance: supports
          locator: CBDB:149916
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_s1BpvJd4Mrwb22gPAse4dh
            source_type: api_record
            title: 中国历代人物传记资料库：王之豫（CBDB 149916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149916&o=json
            external_identifier: CBDB:149916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ldQ9FtrejRip95KD4M7_q1
        subject_person_id: p_r944Nj55R6LMbB2CMXdjC7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SSTJUCFgcoSjH84AQbMYES
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oL3Ao2WO0HP0coLhahbFlV
          claim_id: c_ldQ9FtrejRip95KD4M7_q1
          source_id: s_D2uq9qPZEDYPyXqkZuCFjL
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 14：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D2uq9qPZEDYPyXqkZuCFjL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：薛氏（140005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140005&o=json
            external_identifier: CBDB:140005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.644Z
            metadata_json: null
      object_person:
        id: p_r944Nj55R6LMbB2CMXdjC7
        status: active
        display_name: 薛氏
        merged_into_person_id: null
    - claim:
        id: c_vqwJrlvnI4z1srCPBWgUnI
        subject_person_id: p_GMCTq5KrktL4A6wV97QsyN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SSTJUCFgcoSjH84AQbMYES
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i5chNrDKsASLdiDHx1AOml
          claim_id: c_vqwJrlvnI4z1srCPBWgUnI
          source_id: s_s1BpvJd4Mrwb22gPAse4dh
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 28：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GMCTq5KrktL4A6wV97QsyN
        status: active
        display_name: 王德表
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之豫，唐人物。中国历代人物传记资料库（CBDB）以人物编号 149916 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王之豫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_r944Nj55R6LMbB2CMXdjC7 | 薛氏 | accepted |
| ancestors | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之豫（CBDB 149916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149916&o=json)
- [CBDB 中国历代人物传记资料库：薛氏（140005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140005&o=json)
