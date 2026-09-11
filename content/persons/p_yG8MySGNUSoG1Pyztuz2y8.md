---
schema: wang-person/v1
id: p_yG8MySGNUSoG1Pyztuz2y8
status: active
merged_into: null
display_name: 王直餋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MJRDP77ea39YDh8ATFCVYY
        subject_person_id: p_yG8MySGNUSoG1Pyztuz2y8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直餋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42G2JTRWEFt1HiVMwm6Uyg
          claim_id: c_MJRDP77ea39YDh8ATFCVYY
          source_id: s_DL7r5ai37psAFxwNv3rfHF
          stance: supports
          locator: CBDB:639538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639538）
          source: &a1
            id: s_DL7r5ai37psAFxwNv3rfHF
            source_type: api_record
            title: 中国历代人物传记资料库：王直餋（CBDB 639538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639538&o=json
            external_identifier: CBDB:639538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6G5NJJgKCEaaFhaFiPv9oU
        subject_person_id: p_yG8MySGNUSoG1Pyztuz2y8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直餋，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ydzrubi-SmokKESbj2Rsyh
          claim_id: c_6G5NJJgKCEaaFhaFiPv9oU
          source_id: s_DL7r5ai37psAFxwNv3rfHF
          stance: supports
          locator: CBDB:639538
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

# 王直餋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直餋 | accepted |
| bio.summary | 王直餋，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639538） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直餋（CBDB 639538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639538&o=json)
