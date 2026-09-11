---
schema: wang-person/v1
id: p_42NtovSLn7f49SLV2LMVU8
status: active
merged_into: null
display_name: 王介福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LwpscA5HhKKM4Uxo97BHVC
        subject_person_id: p_42NtovSLn7f49SLV2LMVU8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CzSQRs2a5386K74aRGCM3N
          claim_id: c_LwpscA5HhKKM4Uxo97BHVC
          source_id: s_kmu4XpxYH5Mq738qN9ExYM
          stance: supports
          locator: CBDB:343721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343721）
          source: &a1
            id: s_kmu4XpxYH5Mq738qN9ExYM
            source_type: api_record
            title: 中国历代人物传记资料库：王介福（CBDB 343721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343721&o=json
            external_identifier: CBDB:343721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vVAbWnqdrKBXwMhCgKpkyY
        subject_person_id: p_42NtovSLn7f49SLV2LMVU8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介福，清人物。明清進士進士，籍贯費縣，入仕進士。（中国历代人物传记资料库 CBDB 343721）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fBtKtl3TMXBGmZ8X1uqucP
          claim_id: c_vVAbWnqdrKBXwMhCgKpkyY
          source_id: s_kmu4XpxYH5Mq738qN9ExYM
          stance: supports
          locator: CBDB:343721
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

# 王介福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介福 | accepted |
| bio.summary | 王介福，清人物。明清進士進士，籍贯費縣，入仕進士。（中国历代人物传记资料库 CBDB 343721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介福（CBDB 343721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343721&o=json)
