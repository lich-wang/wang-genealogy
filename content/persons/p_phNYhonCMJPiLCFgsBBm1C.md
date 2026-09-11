---
schema: wang-person/v1
id: p_phNYhonCMJPiLCFgsBBm1C
status: active
merged_into: null
display_name: 王績熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BE7toZxeFP1XQXyEQ7h5Ga
        subject_person_id: p_phNYhonCMJPiLCFgsBBm1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hE9EpPXcLKPcZ9QxYrVDBR
          claim_id: c_BE7toZxeFP1XQXyEQ7h5Ga
          source_id: s_SQQLaBNs5akkf83YaKxygp
          stance: supports
          locator: CBDB:639855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639855）
          source: &a1
            id: s_SQQLaBNs5akkf83YaKxygp
            source_type: api_record
            title: 中国历代人物传记资料库：王績熙（CBDB 639855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639855&o=json
            external_identifier: CBDB:639855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F7a6t962msDXSWL8VCsGLS
        subject_person_id: p_phNYhonCMJPiLCFgsBBm1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績熙，清人物。籍贯陽曲，入仕縣學附生，曾任縣丞。（中国历代人物传记资料库 CBDB 639855）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_THEqLC0H1b74RrJL2eBCJ9
          claim_id: c_F7a6t962msDXSWL8VCsGLS
          source_id: s_SQQLaBNs5akkf83YaKxygp
          stance: supports
          locator: CBDB:639855
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

# 王績熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績熙 | accepted |
| bio.summary | 王績熙，清人物。籍贯陽曲，入仕縣學附生，曾任縣丞。（中国历代人物传记资料库 CBDB 639855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王績熙（CBDB 639855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639855&o=json)
