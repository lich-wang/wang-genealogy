---
schema: wang-person/v1
id: p_kDd2Hbp5f3x4uuN3e2eK1P
status: active
merged_into: null
display_name: 王儒綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Kv27NUZHyHjZjM3WBx2LC
        subject_person_id: p_kDd2Hbp5f3x4uuN3e2eK1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6pf694tw9tjxma7TEyg2yk
          claim_id: c_4Kv27NUZHyHjZjM3WBx2LC
          source_id: s_JanWc5976sVGN1eRd2Hb2E
          stance: supports
          locator: CBDB:636111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636111）
          source: &a1
            id: s_JanWc5976sVGN1eRd2Hb2E
            source_type: api_record
            title: 中国历代人物传记资料库：王儒綬（CBDB 636111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636111&o=json
            external_identifier: CBDB:636111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gg4XEt4fh6aAZ8nyAishmg
        subject_person_id: p_kDd2Hbp5f3x4uuN3e2eK1P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒綬，清人物。籍贯交城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8Arj3_o2BjbvXagaNKXUH
          claim_id: c_gg4XEt4fh6aAZ8nyAishmg
          source_id: s_JanWc5976sVGN1eRd2Hb2E
          stance: supports
          locator: CBDB:636111
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

# 王儒綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒綬 | accepted |
| bio.summary | 王儒綬，清人物。籍贯交城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儒綬（CBDB 636111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636111&o=json)
