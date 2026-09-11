---
schema: wang-person/v1
id: p_gpVPZGNm8783F5pKdFshSK
status: active
merged_into: null
display_name: 王繼彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d5ggvTYnXLmgM3WZM3iUEJ
        subject_person_id: p_gpVPZGNm8783F5pKdFshSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_159G3i7ubRXXH1LsHH2TSg
          claim_id: c_d5ggvTYnXLmgM3WZM3iUEJ
          source_id: s_3chS4n4WATiRa99d1kbTcS
          stance: supports
          locator: CBDB:639870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639870）
          source: &a1
            id: s_3chS4n4WATiRa99d1kbTcS
            source_type: api_record
            title: 中国历代人物传记资料库：王繼彬（CBDB 639870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639870&o=json
            external_identifier: CBDB:639870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZSp5SLH9PnMackwKLiBsZ
        subject_person_id: p_gpVPZGNm8783F5pKdFshSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼彬，清人物。籍贯會稽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639870）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0zOsLcwvnvsTao-9zdw92k
          claim_id: c_8ZSp5SLH9PnMackwKLiBsZ
          source_id: s_3chS4n4WATiRa99d1kbTcS
          stance: supports
          locator: CBDB:639870
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

# 王繼彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼彬 | accepted |
| bio.summary | 王繼彬，清人物。籍贯會稽，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼彬（CBDB 639870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639870&o=json)
