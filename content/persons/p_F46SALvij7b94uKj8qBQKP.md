---
schema: wang-person/v1
id: p_F46SALvij7b94uKj8qBQKP
status: active
merged_into: null
display_name: 王思齊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D6U8w9w7gqoHNpaQmABkKA
        subject_person_id: p_F46SALvij7b94uKj8qBQKP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CfVaA73J7rAaxM1ryrrUHQ
          claim_id: c_D6U8w9w7gqoHNpaQmABkKA
          source_id: s_sJKtfd64ucdGnJLK9kx4nU
          stance: supports
          locator: CBDB:101286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101286）
          source: &a1
            id: s_sJKtfd64ucdGnJLK9kx4nU
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 101286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101286&o=json
            external_identifier: CBDB:101286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s8zJtTbHrCibMMjhVATaLG
        subject_person_id: p_F46SALvij7b94uKj8qBQKP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊，元人物。籍贯東平路，曾任南臺察院監察御史。（中国历代人物传记资料库 CBDB 101286）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bvATIk8ILwV2j_7RRpguHB
          claim_id: c_s8zJtTbHrCibMMjhVATaLG
          source_id: s_sJKtfd64ucdGnJLK9kx4nU
          stance: supports
          locator: CBDB:101286
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

# 王思齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思齊 | accepted |
| bio.summary | 王思齊，元人物。籍贯東平路，曾任南臺察院監察御史。（中国历代人物传记资料库 CBDB 101286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思齊（CBDB 101286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101286&o=json)
