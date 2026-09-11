---
schema: wang-person/v1
id: p_eLHxR5sP16ezUtG9RnpE1E
status: active
merged_into: null
display_name: 王深源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNiXS2MYKZ7Q9rAX8zVsEf
        subject_person_id: p_eLHxR5sP16ezUtG9RnpE1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZ7G9WyGxkWxmuxGQn2js3
          claim_id: c_xNiXS2MYKZ7Q9rAX8zVsEf
          source_id: s_gvDrNS9CXMDtdYXRfHDmkL
          stance: supports
          locator: CBDB:415023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415023）
          source: &a1
            id: s_gvDrNS9CXMDtdYXRfHDmkL
            source_type: api_record
            title: 中国历代人物传记资料库：王深源（CBDB 415023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415023&o=json
            external_identifier: CBDB:415023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tBdcNbpTqPvYkQMEPYR8uZ
        subject_person_id: p_eLHxR5sP16ezUtG9RnpE1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深源，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 415023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qpj5mNI_nqNorijwZoBEyc
          claim_id: c_tBdcNbpTqPvYkQMEPYR8uZ
          source_id: s_gvDrNS9CXMDtdYXRfHDmkL
          stance: supports
          locator: CBDB:415023
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

# 王深源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深源 | accepted |
| bio.summary | 王深源，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 415023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深源（CBDB 415023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415023&o=json)
