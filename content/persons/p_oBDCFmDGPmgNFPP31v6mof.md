---
schema: wang-person/v1
id: p_oBDCFmDGPmgNFPP31v6mof
status: active
merged_into: null
display_name: 王仲寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JmbDdE5NKP6Nq9cmVMBSAv
        subject_person_id: p_oBDCFmDGPmgNFPP31v6mof
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVmRpVZ7GZCNyFBtFQ6TCV
          claim_id: c_JmbDdE5NKP6Nq9cmVMBSAv
          source_id: s_gGBwN8NaZNnsuf7fY3tagy
          stance: supports
          locator: CBDB:538345
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538345）
          source: &a1
            id: s_gGBwN8NaZNnsuf7fY3tagy
            source_type: api_record
            title: 中国历代人物传记资料库：王仲寅（CBDB 538345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538345&o=json
            external_identifier: CBDB:538345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6eBjREzjH16VGKXQMn68H5
        subject_person_id: p_oBDCFmDGPmgNFPP31v6mof
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲寅，宋人物。籍贯果州，入仕進士。（中国历代人物传记资料库 CBDB 538345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D1KfoWVzjfwpmh40xWPdJJ
          claim_id: c_6eBjREzjH16VGKXQMn68H5
          source_id: s_gGBwN8NaZNnsuf7fY3tagy
          stance: supports
          locator: CBDB:538345
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

# 王仲寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲寅 | accepted |
| bio.summary | 王仲寅，宋人物。籍贯果州，入仕進士。（中国历代人物传记资料库 CBDB 538345） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲寅（CBDB 538345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538345&o=json)
