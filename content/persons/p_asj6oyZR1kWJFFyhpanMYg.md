---
schema: wang-person/v1
id: p_asj6oyZR1kWJFFyhpanMYg
status: active
merged_into: null
display_name: 王譚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FxAyp2Hje6ESEticR2wgx
        subject_person_id: p_asj6oyZR1kWJFFyhpanMYg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iNd6bE8Uq62FDsdHyKNiVp
          claim_id: c_1FxAyp2Hje6ESEticR2wgx
          source_id: s_r7sPPn1fL6gB6c8U4b48fy
          stance: supports
          locator: CBDB:27698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27698）
          source: &a1
            id: s_r7sPPn1fL6gB6c8U4b48fy
            source_type: api_record
            title: 中国历代人物传记资料库：王譚（CBDB 27698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27698&o=json
            external_identifier: CBDB:27698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5qxYjCkcZaYMCHLgDNNaNo
        subject_person_id: p_asj6oyZR1kWJFFyhpanMYg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譚，宋人物。籍贯如皋。（中国历代人物传记资料库 CBDB 27698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dGfv6S7PfUlU9EM3C9S01R
          claim_id: c_5qxYjCkcZaYMCHLgDNNaNo
          source_id: s_r7sPPn1fL6gB6c8U4b48fy
          stance: supports
          locator: CBDB:27698
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

# 王譚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譚 | accepted |
| bio.summary | 王譚，宋人物。籍贯如皋。（中国历代人物传记资料库 CBDB 27698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王譚（CBDB 27698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27698&o=json)
