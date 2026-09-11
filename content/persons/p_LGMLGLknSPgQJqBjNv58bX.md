---
schema: wang-person/v1
id: p_LGMLGLknSPgQJqBjNv58bX
status: active
merged_into: null
display_name: 王春和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QXcPGjQuMy8dBYssLryERf
        subject_person_id: p_LGMLGLknSPgQJqBjNv58bX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eae91PmqpMhXQgAHPuCCL5
          claim_id: c_QXcPGjQuMy8dBYssLryERf
          source_id: s_hNi7CtBjs9UgKuLUCNwmyA
          stance: supports
          locator: CBDB:638407
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638407）
          source: &a1
            id: s_hNi7CtBjs9UgKuLUCNwmyA
            source_type: api_record
            title: 中国历代人物传记资料库：王春和（CBDB 638407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638407&o=json
            external_identifier: CBDB:638407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjydvdMBvp5VBHLGUdG7W8
        subject_person_id: p_LGMLGLknSPgQJqBjNv58bX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春和，清人物。籍贯湘鄉，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 638407）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uLUFE2h15-aYmoVc18j74b
          claim_id: c_KjydvdMBvp5VBHLGUdG7W8
          source_id: s_hNi7CtBjs9UgKuLUCNwmyA
          stance: supports
          locator: CBDB:638407
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

# 王春和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春和 | accepted |
| bio.summary | 王春和，清人物。籍贯湘鄉，入仕行伍，曾任都司。（中国历代人物传记资料库 CBDB 638407） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春和（CBDB 638407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638407&o=json)
