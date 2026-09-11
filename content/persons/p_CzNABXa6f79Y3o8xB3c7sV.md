---
schema: wang-person/v1
id: p_CzNABXa6f79Y3o8xB3c7sV
status: active
merged_into: null
display_name: 王科
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCDsfh6kvDYPtJFguwLS7m
        subject_person_id: p_CzNABXa6f79Y3o8xB3c7sV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DxThf3B4jTxoKWaBbvZbPy
          claim_id: c_LCDsfh6kvDYPtJFguwLS7m
          source_id: s_eZcbT3ADW4pKQRB39SgJYt
          stance: supports
          locator: CBDB:466907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466907）
          source: &a1
            id: s_eZcbT3ADW4pKQRB39SgJYt
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 466907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466907&o=json
            external_identifier: CBDB:466907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vphmM9DpRnqG3zDa4RyLTm
        subject_person_id: p_CzNABXa6f79Y3o8xB3c7sV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科，明人物。籍贯山陽，曾任縣丞。（中国历代人物传记资料库 CBDB 466907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8Hdox4eaxb5-jI5CX3IKU
          claim_id: c_vphmM9DpRnqG3zDa4RyLTm
          source_id: s_eZcbT3ADW4pKQRB39SgJYt
          stance: supports
          locator: CBDB:466907
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

# 王科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王科 | accepted |
| bio.summary | 王科，明人物。籍贯山陽，曾任縣丞。（中国历代人物传记资料库 CBDB 466907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王科（CBDB 466907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466907&o=json)
