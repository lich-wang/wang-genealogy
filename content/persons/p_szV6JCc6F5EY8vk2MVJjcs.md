---
schema: wang-person/v1
id: p_szV6JCc6F5EY8vk2MVJjcs
status: active
merged_into: null
display_name: 王臨元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLDmC835XzkfsJhp4ZNUfi
        subject_person_id: p_szV6JCc6F5EY8vk2MVJjcs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Grtub72ahQG3NebCj85YYD
          claim_id: c_VLDmC835XzkfsJhp4ZNUfi
          source_id: s_1k6pPQGxQvjhiATEngqYqi
          stance: supports
          locator: CBDB:343691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343691）
          source: &a1
            id: s_1k6pPQGxQvjhiATEngqYqi
            source_type: api_record
            title: 中国历代人物传记资料库：王臨元（CBDB 343691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343691&o=json
            external_identifier: CBDB:343691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kF2Z5mjCDKfNDf7FnC54Vd
        subject_person_id: p_szV6JCc6F5EY8vk2MVJjcs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨元，清人物。明清進士進士，籍贯清平，入仕進士。（中国历代人物传记资料库 CBDB 343691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6jlal0U7r2vUnJMYRYF6kx
          claim_id: c_kF2Z5mjCDKfNDf7FnC54Vd
          source_id: s_1k6pPQGxQvjhiATEngqYqi
          stance: supports
          locator: CBDB:343691
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

# 王臨元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨元 | accepted |
| bio.summary | 王臨元，清人物。明清進士進士，籍贯清平，入仕進士。（中国历代人物传记资料库 CBDB 343691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臨元（CBDB 343691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343691&o=json)
