---
schema: wang-person/v1
id: p_LGX4Q97ARzMWQTKGMRfS3h
status: active
merged_into: null
display_name: 王燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hU4RjVNzctGKCFFK8Jmuoa
        subject_person_id: p_LGX4Q97ARzMWQTKGMRfS3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u3k3ZX6iunQYNRMG95ygsN
          claim_id: c_hU4RjVNzctGKCFFK8Jmuoa
          source_id: s_QwF7EGxXB8Q2MKLhcaJPxt
          stance: supports
          locator: CBDB:57217
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57217）
          source: &a1
            id: s_QwF7EGxXB8Q2MKLhcaJPxt
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 57217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57217&o=json
            external_identifier: CBDB:57217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oZA5CZ9bq6M83S6FQLxdLA
        subject_person_id: p_LGX4Q97ARzMWQTKGMRfS3h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮，清人物。曾任都御史、御史、知縣。（中国历代人物传记资料库 CBDB 57217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k0fy1ePvUmfOASwaOz8ozc
          claim_id: c_oZA5CZ9bq6M83S6FQLxdLA
          source_id: s_QwF7EGxXB8Q2MKLhcaJPxt
          stance: supports
          locator: CBDB:57217
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

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| bio.summary | 王燮，清人物。曾任都御史、御史、知縣。（中国历代人物传记资料库 CBDB 57217） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 57217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57217&o=json)
