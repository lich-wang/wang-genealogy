---
schema: wang-person/v1
id: p_3VLxF8MJR5mpJh2S4AzoMr
status: active
merged_into: null
display_name: 王宗濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RumaFc4RbmDpQ1a9dNMBt1
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RwAUm9VdXApqZwy6eSMDCN
          claim_id: c_RumaFc4RbmDpQ1a9dNMBt1
          source_id: s_1BZ3dGu1iWJ7qg4sdB9CqP
          stance: supports
          locator: CBDB:278551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278551）
          source: &a1
            id: s_1BZ3dGu1iWJ7qg4sdB9CqP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濬（CBDB 278551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json
            external_identifier: CBDB:278551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bmeTgCExpGgw8uuj21ZReg
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濬，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZjOxHPna2EUzXkQzPUiSVc
          claim_id: c_bmeTgCExpGgw8uuj21ZReg
          source_id: s_1BZ3dGu1iWJ7qg4sdB9CqP
          stance: supports
          locator: CBDB:278551
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

# 王宗濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗濬 | accepted |
| bio.summary | 王宗濬，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗濬（CBDB 278551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json)
