---
schema: wang-person/v1
id: p_cXapt6YrP7pHR4sQc89jrR
status: active
merged_into: null
display_name: 王廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vdpRFY29vavQWCyBc5LTb2
        subject_person_id: p_cXapt6YrP7pHR4sQc89jrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qs7sLyeH4mjzaUgG87ByKe
          claim_id: c_vdpRFY29vavQWCyBc5LTb2
          source_id: s_cu14v2AmRKzV6W16kWDa1F
          stance: supports
          locator: CBDB:483318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483318）
          source: &a1
            id: s_cu14v2AmRKzV6W16kWDa1F
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 483318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483318&o=json
            external_identifier: CBDB:483318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8TF2rNjxGFLLqE3pPEadN
        subject_person_id: p_cXapt6YrP7pHR4sQc89jrR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉，明人物。曾任知事。（中国历代人物传记资料库 CBDB 483318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N2MqNBIyAcX4ndTQP12aJr
          claim_id: c_v8TF2rNjxGFLLqE3pPEadN
          source_id: s_cu14v2AmRKzV6W16kWDa1F
          stance: supports
          locator: CBDB:483318
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

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | 王廉，明人物。曾任知事。（中国历代人物传记资料库 CBDB 483318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 483318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483318&o=json)
