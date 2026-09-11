---
schema: wang-person/v1
id: p_izGjXHCYy2Qx3beCREBzHH
status: active
merged_into: null
display_name: 王光選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EN1aHqH3B8oDJ8CZEUBEMv
        subject_person_id: p_izGjXHCYy2Qx3beCREBzHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FJwdcJv8cznwiy1EtVa5xB
          claim_id: c_EN1aHqH3B8oDJ8CZEUBEMv
          source_id: s_oBZsT5rAR5LGiRYgovV2y1
          stance: supports
          locator: CBDB:636283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636283）
          source: &a1
            id: s_oBZsT5rAR5LGiRYgovV2y1
            source_type: api_record
            title: 中国历代人物传记资料库：王光選（CBDB 636283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636283&o=json
            external_identifier: CBDB:636283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WqCh1LnQ4Sr4QNjKEXZsb7
        subject_person_id: p_izGjXHCYy2Qx3beCREBzHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光選，清人物。籍贯鄞縣，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I8-JGDceJiv282Yp4UITvE
          claim_id: c_WqCh1LnQ4Sr4QNjKEXZsb7
          source_id: s_oBZsT5rAR5LGiRYgovV2y1
          stance: supports
          locator: CBDB:636283
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

# 王光選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光選 | accepted |
| bio.summary | 王光選，清人物。籍贯鄞縣，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 636283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光選（CBDB 636283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636283&o=json)
