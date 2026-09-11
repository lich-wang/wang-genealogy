---
schema: wang-person/v1
id: p_4PnAK18yMVhretuMaEBnNQ
status: active
merged_into: null
display_name: 王迎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D7bzqxN42vDGry23rVdfVz
        subject_person_id: p_4PnAK18yMVhretuMaEBnNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PTMMYsmEjpkPPRWEJ1EQkr
          claim_id: c_D7bzqxN42vDGry23rVdfVz
          source_id: s_27VB6wXq35XUVShmTYJDR4
          stance: supports
          locator: CBDB:39524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39524）
          source: &a1
            id: s_27VB6wXq35XUVShmTYJDR4
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 39524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39524&o=json
            external_identifier: CBDB:39524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kv72ePu4jbaBDgP9mvWq4V
        subject_person_id: p_4PnAK18yMVhretuMaEBnNQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迎，宋人物。籍贯單州，身份为工於作賦，入仕進士，曾任國子監丞。（中国历代人物传记资料库 CBDB 39524）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPk5LOSLIgc1zBt1F7F7EW
          claim_id: c_Kv72ePu4jbaBDgP9mvWq4V
          source_id: s_27VB6wXq35XUVShmTYJDR4
          stance: supports
          locator: CBDB:39524
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

# 王迎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迎 | accepted |
| bio.summary | 王迎，宋人物。籍贯單州，身份为工於作賦，入仕進士，曾任國子監丞。（中国历代人物传记资料库 CBDB 39524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迎（CBDB 39524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39524&o=json)
