---
schema: wang-person/v1
id: p_e2Cfp6r33mC2CLnv3Cuoiq
status: active
merged_into: null
display_name: 王福宜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QEfz6hE7WVdHPqmE624cke
        subject_person_id: p_e2Cfp6r33mC2CLnv3Cuoiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6KYtPQhyJx1QP4XaUyWpK
          claim_id: c_QEfz6hE7WVdHPqmE624cke
          source_id: s_JV3gWejEPVv2BGfiX4HtUM
          stance: supports
          locator: CBDB:639605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639605）
          source: &a1
            id: s_JV3gWejEPVv2BGfiX4HtUM
            source_type: api_record
            title: 中国历代人物传记资料库：王福宜（CBDB 639605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639605&o=json
            external_identifier: CBDB:639605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ww9Dc29o8WxUMhxeNJFGAs
        subject_person_id: p_e2Cfp6r33mC2CLnv3Cuoiq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福宜，清人物。籍贯潁州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_86cZ4fpeaHC6yDkNgcfY6_
          claim_id: c_Ww9Dc29o8WxUMhxeNJFGAs
          source_id: s_JV3gWejEPVv2BGfiX4HtUM
          stance: supports
          locator: CBDB:639605
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

# 王福宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福宜 | accepted |
| bio.summary | 王福宜，清人物。籍贯潁州府，曾任復設訓導。（中国历代人物传记资料库 CBDB 639605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福宜（CBDB 639605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639605&o=json)
