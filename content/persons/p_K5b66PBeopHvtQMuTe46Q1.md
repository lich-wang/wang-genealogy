---
schema: wang-person/v1
id: p_K5b66PBeopHvtQMuTe46Q1
status: active
merged_into: null
display_name: 王僉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQSUb3eaPbCKYyikvviUUq
        subject_person_id: p_K5b66PBeopHvtQMuTe46Q1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d1kYFP7NP5zV7yWALVNTKP
          claim_id: c_wQSUb3eaPbCKYyikvviUUq
          source_id: s_n1vatMJPESbdBLfHAFtGCi
          stance: supports
          locator: CBDB:306009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306009）
          source: &a1
            id: s_n1vatMJPESbdBLfHAFtGCi
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 306009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json
            external_identifier: CBDB:306009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kBKvdMZd4SYhkJJJ8EHx9T
        subject_person_id: p_K5b66PBeopHvtQMuTe46Q1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僉，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dyzZMbx_THCbbO58S3w3FR
          claim_id: c_kBKvdMZd4SYhkJJJ8EHx9T
          source_id: s_n1vatMJPESbdBLfHAFtGCi
          stance: supports
          locator: CBDB:306009
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

# 王僉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僉 | accepted |
| bio.summary | 王僉，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僉（CBDB 306009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json)
