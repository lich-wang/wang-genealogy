---
schema: wang-person/v1
id: p_3eMzNTKWApjHRaRR4vfDyz
status: active
merged_into: null
display_name: 王景哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rst3WrEyNeZTDoUL48sVhe
        subject_person_id: p_3eMzNTKWApjHRaRR4vfDyz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7YCfo7MpJbyqZs4cCpAm4G
          claim_id: c_rst3WrEyNeZTDoUL48sVhe
          source_id: s_ELpj2fJNbTmFjR7D7VoKgz
          stance: supports
          locator: CBDB:474523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474523）
          source: &a1
            id: s_ELpj2fJNbTmFjR7D7VoKgz
            source_type: api_record
            title: 中国历代人物传记资料库：王景哲（CBDB 474523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474523&o=json
            external_identifier: CBDB:474523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHzp4LYeuUBM54iQ57wEWw
        subject_person_id: p_3eMzNTKWApjHRaRR4vfDyz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景哲，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 474523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ChhWyIPWDOXzpIchBeTNCq
          claim_id: c_zHzp4LYeuUBM54iQ57wEWw
          source_id: s_ELpj2fJNbTmFjR7D7VoKgz
          stance: supports
          locator: CBDB:474523
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

# 王景哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景哲 | accepted |
| bio.summary | 王景哲，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 474523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景哲（CBDB 474523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474523&o=json)
