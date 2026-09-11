---
schema: wang-person/v1
id: p_xLBBxan8EMhbJ5o8e772bQ
status: active
merged_into: null
display_name: 王嘉楏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxHHjEzMX4Wd6zkqkPvJ1P
        subject_person_id: p_xLBBxan8EMhbJ5o8e772bQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉楏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o49HPwwJMbwqiERDpzD6gh
          claim_id: c_jxHHjEzMX4Wd6zkqkPvJ1P
          source_id: s_QBR1erNs7ZSm2MG89398Fm
          stance: supports
          locator: CBDB:636615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636615）
          source: &a1
            id: s_QBR1erNs7ZSm2MG89398Fm
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉楏（CBDB 636615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636615&o=json
            external_identifier: CBDB:636615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCEDJ1xnxuqSt5JHfF7q8p
        subject_person_id: p_xLBBxan8EMhbJ5o8e772bQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉楏，清人物。籍贯吳縣，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eGgpdFz29iyO71EDo8qaBR
          claim_id: c_SCEDJ1xnxuqSt5JHfF7q8p
          source_id: s_QBR1erNs7ZSm2MG89398Fm
          stance: supports
          locator: CBDB:636615
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

# 王嘉楏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉楏 | accepted |
| bio.summary | 王嘉楏，清人物。籍贯吳縣，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉楏（CBDB 636615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636615&o=json)
