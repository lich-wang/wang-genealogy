---
schema: wang-person/v1
id: p_NdGJWAK3hdP7LhN9j8ZCgn
status: active
merged_into: null
display_name: 王峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uFryEhNFybWPDCigeHeu32
        subject_person_id: p_NdGJWAK3hdP7LhN9j8ZCgn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzBgXqE7jGUQZrTcFXfkXB
          claim_id: c_uFryEhNFybWPDCigeHeu32
          source_id: s_cGEZaW6FkACiMZYehQL9dJ
          stance: supports
          locator: CBDB:533646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（533646）
          source: &a1
            id: s_cGEZaW6FkACiMZYehQL9dJ
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 533646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533646&o=json
            external_identifier: CBDB:533646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DVNSEPXCTpC3C4aj2S1R1y
        subject_person_id: p_NdGJWAK3hdP7LhN9j8ZCgn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻，宋人物。籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 533646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9KWIX7K5S-E1j3ZHRP5zqR
          claim_id: c_DVNSEPXCTpC3C4aj2S1R1y
          source_id: s_cGEZaW6FkACiMZYehQL9dJ
          stance: supports
          locator: CBDB:533646
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

# 王峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峻 | accepted |
| bio.summary | 王峻，宋人物。籍贯餘姚，入仕進士。（中国历代人物传记资料库 CBDB 533646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 533646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=533646&o=json)
