---
schema: wang-person/v1
id: p_NeQhGNSxxDjAd4s7HJrHtJ
status: active
merged_into: null
display_name: 孫孝楨
revision: 1
cbdb_id: 120352
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_URxZGbwyKYVYnKhwjdzGcK
        subject_person_id: p_NeQhGNSxxDjAd4s7HJrHtJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫孝楨，清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 120352）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KljUKcM_GffqWnifLWLsqV
          claim_id: c_URxZGbwyKYVYnKhwjdzGcK
          source_id: s_NgBRcB8HDlwGFrfDSsfSP-
          stance: supports
          locator: CBDB:120352
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NgBRcB8HDlwGFrfDSsfSP-
            source_type: api_record
            title: 中国历代人物传记资料库：孫孝楨（CBDB 120352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120352&o=json
            external_identifier: CBDB:120352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UyC4upc1IKIcLCkgxTROU-
        subject_person_id: p_NeQhGNSxxDjAd4s7HJrHtJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫孝楨
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SyBDXYEtrhI9Dvhp3m4Puf
          claim_id: c_UyC4upc1IKIcLCkgxTROU-
          source_id: s_NgBRcB8HDlwGFrfDSsfSP-
          stance: supports
          locator: CBDB:120352
          quotation: null
          interpretation_note: CBDB 明确记录的王璋配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CnJNkUvoocWZmjDSShtezk
        subject_person_id: p_mVChwaqHjpkM6iD5JMHNQ8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NeQhGNSxxDjAd4s7HJrHtJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tmbhGWO9vX4RsjHnNpWMyV
          claim_id: c_CnJNkUvoocWZmjDSShtezk
          source_id: s_NgBRcB8HDlwGFrfDSsfSP-
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3531, HuWenKai #253：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mVChwaqHjpkM6iD5JMHNQ8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫孝楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫孝楨，清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 120352） | accepted |
| name.primary | 孫孝楨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mVChwaqHjpkM6iD5JMHNQ8 | 王璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫孝楨（CBDB 120352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120352&o=json)
