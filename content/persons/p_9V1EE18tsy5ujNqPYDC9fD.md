---
schema: wang-person/v1
id: p_9V1EE18tsy5ujNqPYDC9fD
status: active
merged_into: null
display_name: 王正興
cbdb_id: 262559
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_85t4ko1rxCzX15uz9mSMES
        subject_person_id: p_9V1EE18tsy5ujNqPYDC9fD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正興，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 262559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gb4gGSyCjfrm7HNw0nzCsf
          claim_id: c_85t4ko1rxCzX15uz9mSMES
          source_id: s_ddWEeffxitEDpXoEfD2CzC
          stance: supports
          locator: CBDB:262559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ddWEeffxitEDpXoEfD2CzC
            source_type: api_record
            title: 中国历代人物传记资料库：王正興（CBDB 262559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json
            external_identifier: CBDB:262559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dib8LpJkYvJztrBshFUcc7
        subject_person_id: p_9V1EE18tsy5ujNqPYDC9fD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TcipVaQgGtK99r4gdJHDix
          claim_id: c_Dib8LpJkYvJztrBshFUcc7
          source_id: s_ddWEeffxitEDpXoEfD2CzC
          stance: supports
          locator: CBDB:262559
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5pbRqggGAzvMpPfcufWSmm
        subject_person_id: p_9V1EE18tsy5ujNqPYDC9fD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmvSofxcdi7IzOsPY63c_U
          claim_id: c_5pbRqggGAzvMpPfcufWSmm
          source_id: s_ddWEeffxitEDpXoEfD2CzC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ddWEeffxitEDpXoEfD2CzC
            source_type: api_record
            title: 中国历代人物传记资料库：王正興（CBDB 262559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json
            external_identifier: CBDB:262559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cnxHgvNWzCNiTbu6SVUA3o
        status: active
        display_name: 王春
        merged_into_person_id: null
  other: []
---

# 王正興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正興，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 262559） | accepted |
| name.primary | 王正興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cnxHgvNWzCNiTbu6SVUA3o | 王春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正興（CBDB 262559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262559&o=json)
