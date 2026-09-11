---
schema: wang-person/v1
id: p_LijN82ZsHaKsm2H3n7xChY
status: active
merged_into: null
display_name: 王震生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MF1rt2m45cqoyCNxkqecu6
        subject_person_id: p_LijN82ZsHaKsm2H3n7xChY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jLp4N5a6uCUaKupai58vaR
          claim_id: c_MF1rt2m45cqoyCNxkqecu6
          source_id: s_bU52qMaj58zF58CoofQEsP
          stance: supports
          locator: CBDB:341815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341815）
          source: &a1
            id: s_bU52qMaj58zF58CoofQEsP
            source_type: api_record
            title: 中国历代人物传记资料库：王震生（CBDB 341815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341815&o=json
            external_identifier: CBDB:341815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Y7eDEAB1JWcfjXxDW8YyA
        subject_person_id: p_LijN82ZsHaKsm2H3n7xChY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震生，清人物。明清進士進士，籍贯杞縣，入仕進士，曾任鄉試考官、刑部郎中。（中国历代人物传记资料库 CBDB 341815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hutY_B_Y5ApJ80O-JnRO1l
          claim_id: c_3Y7eDEAB1JWcfjXxDW8YyA
          source_id: s_bU52qMaj58zF58CoofQEsP
          stance: supports
          locator: CBDB:341815
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

# 王震生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震生 | accepted |
| bio.summary | 王震生，清人物。明清進士進士，籍贯杞縣，入仕進士，曾任鄉試考官、刑部郎中。（中国历代人物传记资料库 CBDB 341815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震生（CBDB 341815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341815&o=json)
