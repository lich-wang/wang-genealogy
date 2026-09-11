---
schema: wang-person/v1
id: p_nJD6ViSc4eE8xJippfCy2z
status: active
merged_into: null
display_name: 王思恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9dkVWDEN6cEk2tkQd7K3Xh
        subject_person_id: p_nJD6ViSc4eE8xJippfCy2z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qNGAGsgD1LEzMpSWvGUFuU
          claim_id: c_9dkVWDEN6cEk2tkQd7K3Xh
          source_id: s_QyWDSE5rshvNBW613C59Tw
          stance: supports
          locator: CBDB:101274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101274）
          source: &a1
            id: s_QyWDSE5rshvNBW613C59Tw
            source_type: api_record
            title: 中国历代人物传记资料库：王思恭（CBDB 101274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101274&o=json
            external_identifier: CBDB:101274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sbB9NBy6N5MMFRyVpAf9cS
        subject_person_id: p_nJD6ViSc4eE8xJippfCy2z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭，元人物。籍贯河內，曾任縣尹。（中国历代人物传记资料库 CBDB 101274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O49vNSb84GLQUb-N1ZgLCt
          claim_id: c_sbB9NBy6N5MMFRyVpAf9cS
          source_id: s_QyWDSE5rshvNBW613C59Tw
          stance: supports
          locator: CBDB:101274
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

# 王思恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思恭 | accepted |
| bio.summary | 王思恭，元人物。籍贯河內，曾任縣尹。（中国历代人物传记资料库 CBDB 101274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思恭（CBDB 101274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101274&o=json)
