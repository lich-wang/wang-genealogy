---
schema: wang-person/v1
id: p_U6Tn61JNfz3YNN1NnAUb5v
status: active
merged_into: null
display_name: 王經仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgZGvadfJXn1Bqjzhpqddv
        subject_person_id: p_U6Tn61JNfz3YNN1NnAUb5v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HV5AvktLrJS8iTQgE6EiAd
          claim_id: c_AgZGvadfJXn1Bqjzhpqddv
          source_id: s_FZXwD6XVbJPnSfLqCmfEzJ
          stance: supports
          locator: CBDB:542601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542601）
          source: &a1
            id: s_FZXwD6XVbJPnSfLqCmfEzJ
            source_type: api_record
            title: 中国历代人物传记资料库：王經仲（CBDB 542601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542601&o=json
            external_identifier: CBDB:542601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SHpZCP6kQ6MLBaZrRdNpDi
        subject_person_id: p_U6Tn61JNfz3YNN1NnAUb5v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經仲，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 542601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZTYecqs7tnWqeKzlpVA-dn
          claim_id: c_SHpZCP6kQ6MLBaZrRdNpDi
          source_id: s_FZXwD6XVbJPnSfLqCmfEzJ
          stance: supports
          locator: CBDB:542601
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

# 王經仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經仲 | accepted |
| bio.summary | 王經仲，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 542601） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經仲（CBDB 542601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542601&o=json)
