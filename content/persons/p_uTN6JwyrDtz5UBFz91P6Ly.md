---
schema: wang-person/v1
id: p_uTN6JwyrDtz5UBFz91P6Ly
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ba6KEBq5pzm7UwkndHx5GV
        subject_person_id: p_uTN6JwyrDtz5UBFz91P6Ly
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_45oZcWUwGxrotCVMFGPMym
          claim_id: c_Ba6KEBq5pzm7UwkndHx5GV
          source_id: s_xw7M5hiEL2rkSf7RHcxe7G
          stance: supports
          locator: CBDB:465492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465492）
          source: &a1
            id: s_xw7M5hiEL2rkSf7RHcxe7G
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 465492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465492&o=json
            external_identifier: CBDB:465492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WyGMksBmPPa37orDp8EQei
        subject_person_id: p_uTN6JwyrDtz5UBFz91P6Ly
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王宏，明人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知府。（中国历代人物传记资料库 CBDB 465492）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fd_yE2Q1w0uN7RqzzlSaDF
          claim_id: c_WyGMksBmPPa37orDp8EQei
          source_id: s_xw7M5hiEL2rkSf7RHcxe7G
          stance: supports
          locator: CBDB:465492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知府。（中国历代人物传记资料库 CBDB 465492） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 465492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465492&o=json)
