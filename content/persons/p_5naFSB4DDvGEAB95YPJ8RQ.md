---
schema: wang-person/v1
id: p_5naFSB4DDvGEAB95YPJ8RQ
status: active
merged_into: null
display_name: 王廷佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yic1241w1Tk88f5EXrs5Zn
        subject_person_id: p_5naFSB4DDvGEAB95YPJ8RQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x3Ka4M7KvR5GHctGZmboaA
          claim_id: c_Yic1241w1Tk88f5EXrs5Zn
          source_id: s_6iBA4J9CCEvH5H3xQMiKTk
          stance: supports
          locator: CBDB:576137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576137）
          source: &a1
            id: s_6iBA4J9CCEvH5H3xQMiKTk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷佐（CBDB 576137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576137&o=json
            external_identifier: CBDB:576137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83jRz4EZ9XcYrR24FXwJPJ
        subject_person_id: p_5naFSB4DDvGEAB95YPJ8RQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷佐，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fTesPx_o246EsQHI2HEkVZ
          claim_id: c_83jRz4EZ9XcYrR24FXwJPJ
          source_id: s_6iBA4J9CCEvH5H3xQMiKTk
          stance: supports
          locator: CBDB:576137
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

# 王廷佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷佐 | accepted |
| bio.summary | 王廷佐，清人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷佐（CBDB 576137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576137&o=json)
