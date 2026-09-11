---
schema: wang-person/v1
id: p_pPVPAQ64z2pMakzS1jBmbo
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TE4yTDCKQuw6a1Pa2ZuUiV
        subject_person_id: p_pPVPAQ64z2pMakzS1jBmbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YMLrKB9pzmV589mqnYCUNv
          claim_id: c_TE4yTDCKQuw6a1Pa2ZuUiV
          source_id: s_w9JYSeYmzSco5n3DSuJ68e
          stance: supports
          locator: CBDB:453377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453377）
          source: &a1
            id: s_w9JYSeYmzSco5n3DSuJ68e
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 453377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453377&o=json
            external_identifier: CBDB:453377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qUE9z2DKQmwtrYSJ4XrM8V
        subject_person_id: p_pPVPAQ64z2pMakzS1jBmbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，清人物。曾任知州。（中国历代人物传记资料库 CBDB 453377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AnxKym88CAw3PEQTaqx4gx
          claim_id: c_qUE9z2DKQmwtrYSJ4XrM8V
          source_id: s_w9JYSeYmzSco5n3DSuJ68e
          stance: supports
          locator: CBDB:453377
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，清人物。曾任知州。（中国历代人物传记资料库 CBDB 453377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 453377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453377&o=json)
