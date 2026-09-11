---
schema: wang-person/v1
id: p_CbnHZ1Zez4QoEkHpTBMrAK
status: active
merged_into: null
display_name: 王毓玫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DPV7Ldcfiqbtm6r7LwzmN1
        subject_person_id: p_CbnHZ1Zez4QoEkHpTBMrAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓玫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bJYkPQFNNNKqwpK7Z7quT
          claim_id: c_DPV7Ldcfiqbtm6r7LwzmN1
          source_id: s_UcN3B1415gPyMxW5FGZHea
          stance: supports
          locator: CBDB:638956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638956）
          source: &a1
            id: s_UcN3B1415gPyMxW5FGZHea
            source_type: api_record
            title: 中国历代人物传记资料库：王毓玫（CBDB 638956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638956&o=json
            external_identifier: CBDB:638956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efNFfMunMx6iHnx4d4iS2k
        subject_person_id: p_CbnHZ1Zez4QoEkHpTBMrAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓玫，清人物。籍贯大興，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__5qXr-nyoh6hvo8npqNb9s
          claim_id: c_efNFfMunMx6iHnx4d4iS2k
          source_id: s_UcN3B1415gPyMxW5FGZHea
          stance: supports
          locator: CBDB:638956
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

# 王毓玫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓玫 | accepted |
| bio.summary | 王毓玫，清人物。籍贯大興，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓玫（CBDB 638956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638956&o=json)
