---
schema: wang-person/v1
id: p_uvmhMuE79aBNYhw1VEDmkJ
status: active
merged_into: null
display_name: 王粲仁
cbdb_id: 148099
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cNN8Lgr3kiUEDN9XChAzkY
        subject_person_id: p_uvmhMuE79aBNYhw1VEDmkJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲仁，史料所见人物。本项目依据《中国历代人物传记资料库：王粲仁（CBDB 148099）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tjc8ivVPJNghzTMXQCB7sP
          claim_id: c_cNN8Lgr3kiUEDN9XChAzkY
          source_id: s_PE4UzCFHxZ6LUNHEeqcsz4
          stance: supports
          locator: CBDB:148099
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PE4UzCFHxZ6LUNHEeqcsz4
            source_type: api_record
            title: 中国历代人物传记资料库：王粲仁（CBDB 148099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148099&o=json
            external_identifier: CBDB:148099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLADr6ouRWZN29z3KXj6pc
        subject_person_id: p_uvmhMuE79aBNYhw1VEDmkJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nAU2BnuBsxPJafQGBGrRER
          claim_id: c_fLADr6ouRWZN29z3KXj6pc
          source_id: s_PE4UzCFHxZ6LUNHEeqcsz4
          stance: supports
          locator: CBDB:148099
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G9tUaWHS9ONKVfpoTfnPuy
        subject_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uvmhMuE79aBNYhw1VEDmkJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzahoLOs1rV3-lif_Mfm75
          claim_id: c_G9tUaWHS9ONKVfpoTfnPuy
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BjJN7NVQgmcfXMSrwk8heN
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 139473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json
            external_identifier: CBDB:139473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32HaAuTnPzTfj2DWDnSPK8
        status: active
        display_name: 王宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王粲仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王粲仁，史料所见人物。本项目依据《中国历代人物传记资料库：王粲仁（CBDB 148099）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王粲仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_32HaAuTnPzTfj2DWDnSPK8 | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王粲仁（CBDB 148099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148099&o=json)
- [中国历代人物传记资料库：王宣（CBDB 139473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json)
