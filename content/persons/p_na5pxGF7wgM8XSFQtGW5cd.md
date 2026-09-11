---
schema: wang-person/v1
id: p_na5pxGF7wgM8XSFQtGW5cd
status: active
merged_into: null
display_name: 王紹虞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LTJuNFQ2DLRxGbWcpW6GaW
        subject_person_id: p_na5pxGF7wgM8XSFQtGW5cd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹虞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgkKYLsbKJx4oLGGrEjPAN
          claim_id: c_LTJuNFQ2DLRxGbWcpW6GaW
          source_id: s_v8yHeMnfPcqH1f3rtTtxcB
          stance: supports
          locator: CBDB:639777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639777）
          source: &a1
            id: s_v8yHeMnfPcqH1f3rtTtxcB
            source_type: api_record
            title: 中国历代人物传记资料库：王紹虞（CBDB 639777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639777&o=json
            external_identifier: CBDB:639777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bGZN7d7iBBQJ5P8Nr9fEdS
        subject_person_id: p_na5pxGF7wgM8XSFQtGW5cd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹虞，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639777）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zsQkYSTFr9gtF0ByMYycY2
          claim_id: c_bGZN7d7iBBQJ5P8Nr9fEdS
          source_id: s_v8yHeMnfPcqH1f3rtTtxcB
          stance: supports
          locator: CBDB:639777
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

# 王紹虞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹虞 | accepted |
| bio.summary | 王紹虞，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹虞（CBDB 639777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639777&o=json)
