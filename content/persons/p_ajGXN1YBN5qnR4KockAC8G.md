---
schema: wang-person/v1
id: p_ajGXN1YBN5qnR4KockAC8G
status: active
merged_into: null
display_name: 王機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p67PaLCHM2xTX2uj4bgGGA
        subject_person_id: p_ajGXN1YBN5qnR4KockAC8G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t3U96zXPkjgGEz1LE4zM5f
          claim_id: c_p67PaLCHM2xTX2uj4bgGGA
          source_id: s_wcsV4s4jUJPD6QVwsFmto7
          stance: supports
          locator: CBDB:688654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688654）
          source: &a1
            id: s_wcsV4s4jUJPD6QVwsFmto7
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 688654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688654&o=json
            external_identifier: CBDB:688654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zexy7LWpyAWyEW8Fh3RTGw
        subject_person_id: p_ajGXN1YBN5qnR4KockAC8G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王機，宋人物。籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 688654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ueCErK9HfU0MTWOFLAMaRU
          claim_id: c_Zexy7LWpyAWyEW8Fh3RTGw
          source_id: s_wcsV4s4jUJPD6QVwsFmto7
          stance: supports
          locator: CBDB:688654
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

# 王機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王機 | accepted |
| bio.summary | 王機，宋人物。籍贯龍溪，入仕進士。（中国历代人物传记资料库 CBDB 688654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 688654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688654&o=json)
