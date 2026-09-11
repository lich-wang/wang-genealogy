---
schema: wang-person/v1
id: p_2V235uMnnMF5MkN6RoQUB6
status: active
merged_into: null
display_name: 王希賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C21NEnK5g8CeBSW1VsAhSU
        subject_person_id: p_2V235uMnnMF5MkN6RoQUB6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_88mxEfbJtXv7Vtq7YjSVCK
          claim_id: c_C21NEnK5g8CeBSW1VsAhSU
          source_id: s_QwFt3PUC7cb9iAStnhyNRw
          stance: supports
          locator: CBDB:101215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101215）
          source: &a1
            id: s_QwFt3PUC7cb9iAStnhyNRw
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 101215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101215&o=json
            external_identifier: CBDB:101215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wNVb4tiEuUdaxWCKXEUs2
        subject_person_id: p_2V235uMnnMF5MkN6RoQUB6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢，元人物。籍贯餘姚州，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101215）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GJ023nr2eH9CGeoqfFs27H
          claim_id: c_8wNVb4tiEuUdaxWCKXEUs2
          source_id: s_QwFt3PUC7cb9iAStnhyNRw
          stance: supports
          locator: CBDB:101215
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

# 王希賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希賢 | accepted |
| bio.summary | 王希賢，元人物。籍贯餘姚州，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希賢（CBDB 101215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101215&o=json)
