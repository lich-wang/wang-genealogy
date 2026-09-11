---
schema: wang-person/v1
id: p_P7ikckJ5t8n6DBz88ErAtZ
status: active
merged_into: null
display_name: 王敬柔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDPpd7oXkPG1CrRJt8M4Ga
        subject_person_id: p_P7ikckJ5t8n6DBz88ErAtZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2VgmNq5nJznMdbrmjw2GCd
          claim_id: c_NDPpd7oXkPG1CrRJt8M4Ga
          source_id: s_SWZkke9voy7vekqhGXs5nr
          stance: supports
          locator: CBDB:380515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380515）
          source: &a1
            id: s_SWZkke9voy7vekqhGXs5nr
            source_type: api_record
            title: 中国历代人物传记资料库：王敬柔（CBDB 380515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380515&o=json
            external_identifier: CBDB:380515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fcMwtWLcGsNYL6KYU8AYPY
        subject_person_id: p_P7ikckJ5t8n6DBz88ErAtZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cW1x-JSQt-izo5CWVJvBKK
          claim_id: c_fcMwtWLcGsNYL6KYU8AYPY
          source_id: s_SWZkke9voy7vekqhGXs5nr
          stance: supports
          locator: CBDB:380515
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

# 王敬柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬柔 | accepted |
| bio.summary | 王敬柔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬柔（CBDB 380515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380515&o=json)
