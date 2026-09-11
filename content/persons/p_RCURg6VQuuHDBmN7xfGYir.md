---
schema: wang-person/v1
id: p_RCURg6VQuuHDBmN7xfGYir
status: active
merged_into: null
display_name: 王守正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hz8ZnvZcCaFC8G9gqya2Na
        subject_person_id: p_RCURg6VQuuHDBmN7xfGYir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QZNSMwqgJJjKh8q87zqus9
          claim_id: c_Hz8ZnvZcCaFC8G9gqya2Na
          source_id: s_Hti5HPLCHVPTEiuGoQjgev
          stance: supports
          locator: CBDB:496425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496425）
          source: &a1
            id: s_Hti5HPLCHVPTEiuGoQjgev
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 496425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496425&o=json
            external_identifier: CBDB:496425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GzhGEidRk8cT6dNgMU1QAL
        subject_person_id: p_RCURg6VQuuHDBmN7xfGYir
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王守正，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 496425）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tDbC5I5PPAtWBI79WSCW48
          claim_id: c_GzhGEidRk8cT6dNgMU1QAL
          source_id: s_Hti5HPLCHVPTEiuGoQjgev
          stance: supports
          locator: CBDB:496425
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

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| bio.summary | 王守正，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 496425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 496425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496425&o=json)
