---
schema: wang-person/v1
id: p_jQKKHyhr2CX6y12oBGAA1C
status: active
merged_into: null
display_name: 王仕權
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLRN1bxcf5krKWPiR81tR9
        subject_person_id: p_jQKKHyhr2CX6y12oBGAA1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVkT2EKQ686v1KA4hkbcQk
          claim_id: c_vLRN1bxcf5krKWPiR81tR9
          source_id: s_EqKSJXk9gBdCU1sZoKz1HP
          stance: supports
          locator: CBDB:577896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577896）
          source: &a1
            id: s_EqKSJXk9gBdCU1sZoKz1HP
            source_type: api_record
            title: 中国历代人物传记资料库：王仕權（CBDB 577896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577896&o=json
            external_identifier: CBDB:577896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9tDsx8cWmGFt8WX4R5Ufh6
        subject_person_id: p_jQKKHyhr2CX6y12oBGAA1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕權，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wevhUFb1RNDFmpdJhGtI9h
          claim_id: c_9tDsx8cWmGFt8WX4R5Ufh6
          source_id: s_EqKSJXk9gBdCU1sZoKz1HP
          stance: supports
          locator: CBDB:577896
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

# 王仕權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕權 | accepted |
| bio.summary | 王仕權，清人物。籍贯歙縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 577896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仕權（CBDB 577896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577896&o=json)
