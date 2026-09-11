---
schema: wang-person/v1
id: p_QYBBdnaFtqEL3ZjRBSTg5V
status: active
merged_into: null
display_name: 王址
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oMssoEChhAdWo3D5kA11NL
        subject_person_id: p_QYBBdnaFtqEL3ZjRBSTg5V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王址
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MSX4DMQMMW7G8B6KJeXzes
          claim_id: c_oMssoEChhAdWo3D5kA11NL
          source_id: s_8DrwaHCxTX5wbPcm1RdjQ3
          stance: supports
          locator: CBDB:559977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（559977）
          source: &a1
            id: s_8DrwaHCxTX5wbPcm1RdjQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 559977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559977&o=json
            external_identifier: CBDB:559977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dD29tcFZASRqXhvivpgksB
        subject_person_id: p_QYBBdnaFtqEL3ZjRBSTg5V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王址，明人物。籍贯鄱陽，入仕科舉制舉: 武舉科。（中国历代人物传记资料库 CBDB 559977）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__t6QNeeCPiSlQGI8tJJzRk
          claim_id: c_dD29tcFZASRqXhvivpgksB
          source_id: s_8DrwaHCxTX5wbPcm1RdjQ3
          stance: supports
          locator: CBDB:559977
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

# 王址

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王址 | accepted |
| bio.summary | 王址，明人物。籍贯鄱陽，入仕科舉制舉: 武舉科。（中国历代人物传记资料库 CBDB 559977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王址（CBDB 559977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559977&o=json)
