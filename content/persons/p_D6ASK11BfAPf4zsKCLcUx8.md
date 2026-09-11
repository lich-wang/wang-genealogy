---
schema: wang-person/v1
id: p_D6ASK11BfAPf4zsKCLcUx8
status: active
merged_into: null
display_name: 王蔭森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7rUKXBKho8MKV3HQEsaSg5
        subject_person_id: p_D6ASK11BfAPf4zsKCLcUx8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yAWaSLb2WymR1DTmHt5A43
          claim_id: c_7rUKXBKho8MKV3HQEsaSg5
          source_id: s_2CPGtCxceLZ34hgMx5f9bY
          stance: supports
          locator: CBDB:640160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640160）
          source: &a1
            id: s_2CPGtCxceLZ34hgMx5f9bY
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭森（CBDB 640160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640160&o=json
            external_identifier: CBDB:640160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uk9odQJJ3pDXigCuvpAM2R
        subject_person_id: p_D6ASK11BfAPf4zsKCLcUx8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭森，清人物。籍贯錢塘，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BKSyFwsasYX7Bwi6MAJOQ_
          claim_id: c_uk9odQJJ3pDXigCuvpAM2R
          source_id: s_2CPGtCxceLZ34hgMx5f9bY
          stance: supports
          locator: CBDB:640160
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

# 王蔭森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭森 | accepted |
| bio.summary | 王蔭森，清人物。籍贯錢塘，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640160） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭森（CBDB 640160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640160&o=json)
