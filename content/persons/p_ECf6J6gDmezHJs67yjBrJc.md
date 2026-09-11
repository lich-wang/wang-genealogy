---
schema: wang-person/v1
id: p_ECf6J6gDmezHJs67yjBrJc
status: active
merged_into: null
display_name: 王恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fwi89zgjJk49s9UBVuTDk5
        subject_person_id: p_ECf6J6gDmezHJs67yjBrJc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r1FEemiwLQLQMWg1vZa2Fa
          claim_id: c_Fwi89zgjJk49s9UBVuTDk5
          source_id: s_rZ9Fo2tbPRARyJjQCHzkuz
          stance: supports
          locator: CBDB:100756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100756）
          source: &a1
            id: s_rZ9Fo2tbPRARyJjQCHzkuz
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 100756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100756&o=json
            external_identifier: CBDB:100756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gYALUK1hKaqTSVGmirRcm2
        subject_person_id: p_ECf6J6gDmezHJs67yjBrJc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩，元人物。籍贯河中府，曾任都元帥。（中国历代人物传记资料库 CBDB 100756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2l1i8cvyFdxTnoQOKSs9JY
          claim_id: c_gYALUK1hKaqTSVGmirRcm2
          source_id: s_rZ9Fo2tbPRARyJjQCHzkuz
          stance: supports
          locator: CBDB:100756
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

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| bio.summary | 王恩，元人物。籍贯河中府，曾任都元帥。（中国历代人物传记资料库 CBDB 100756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 100756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100756&o=json)
