---
schema: wang-person/v1
id: p_7qZrzQjNKGGH3z5hE2fUj7
status: active
merged_into: null
display_name: 王兆魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vuEq3nrEsXFFQNWvkHLcSQ
        subject_person_id: p_7qZrzQjNKGGH3z5hE2fUj7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hio4Cqv4UN6FTXAzikGmmn
          claim_id: c_vuEq3nrEsXFFQNWvkHLcSQ
          source_id: s_JjVo193qL5gnQQVzqqNS6E
          stance: supports
          locator: CBDB:636222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636222）
          source: &a1
            id: s_JjVo193qL5gnQQVzqqNS6E
            source_type: api_record
            title: 中国历代人物传记资料库：王兆魁（CBDB 636222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636222&o=json
            external_identifier: CBDB:636222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6dNaiJqCyW6Z1C8E9KXi7G
        subject_person_id: p_7qZrzQjNKGGH3z5hE2fUj7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆魁，清人物。籍贯冀州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N6yKZ7nSfeljaLO5K0m9mz
          claim_id: c_6dNaiJqCyW6Z1C8E9KXi7G
          source_id: s_JjVo193qL5gnQQVzqqNS6E
          stance: supports
          locator: CBDB:636222
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

# 王兆魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆魁 | accepted |
| bio.summary | 王兆魁，清人物。籍贯冀州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆魁（CBDB 636222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636222&o=json)
