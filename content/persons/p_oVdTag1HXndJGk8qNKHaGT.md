---
schema: wang-person/v1
id: p_oVdTag1HXndJGk8qNKHaGT
status: active
merged_into: null
display_name: 王純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cm4ApAFdx42RjscQqhLLg4
        subject_person_id: p_oVdTag1HXndJGk8qNKHaGT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YpnjRVMzFiuz6aQF5LbNyx
          claim_id: c_Cm4ApAFdx42RjscQqhLLg4
          source_id: s_sJTN7h4cpWKZEAyRDHCNpE
          stance: supports
          locator: CBDB:693012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693012）
          source: &a1
            id: s_sJTN7h4cpWKZEAyRDHCNpE
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 693012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693012&o=json
            external_identifier: CBDB:693012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z14Aey6YuFFoxUEDoPkrgr
        subject_person_id: p_oVdTag1HXndJGk8qNKHaGT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，清人物。籍贯海鹽，身份为為善鄉里、鄉先生，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 693012）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N1XKEgle7ma-2isSEZC9Iz
          claim_id: c_Z14Aey6YuFFoxUEDoPkrgr
          source_id: s_sJTN7h4cpWKZEAyRDHCNpE
          stance: supports
          locator: CBDB:693012
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

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，清人物。籍贯海鹽，身份为為善鄉里、鄉先生，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 693012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 693012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693012&o=json)
