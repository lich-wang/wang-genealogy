---
schema: wang-person/v1
id: p_oHVpJHwZcPTLpwTbemBhEp
status: active
merged_into: null
display_name: 王居易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_doCq5C7f6nH1DpsS5PMR3T
        subject_person_id: p_oHVpJHwZcPTLpwTbemBhEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4yF2Vh6dXQLYPdrQYRvEC
          claim_id: c_doCq5C7f6nH1DpsS5PMR3T
          source_id: s_PM3Mjb5XtRBo3SL2Nvbee8
          stance: supports
          locator: CBDB:637306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637306）
          source: &a1
            id: s_PM3Mjb5XtRBo3SL2Nvbee8
            source_type: api_record
            title: 中国历代人物传记资料库：王居易（CBDB 637306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637306&o=json
            external_identifier: CBDB:637306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9kebK8RHkSfA7jAHUC8zA
        subject_person_id: p_oHVpJHwZcPTLpwTbemBhEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居易，清人物。籍贯汝寧府，曾任訓導。（中国历代人物传记资料库 CBDB 637306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C7c3tTH4ClbWwJT2Z_lppF
          claim_id: c_F9kebK8RHkSfA7jAHUC8zA
          source_id: s_PM3Mjb5XtRBo3SL2Nvbee8
          stance: supports
          locator: CBDB:637306
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

# 王居易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居易 | accepted |
| bio.summary | 王居易，清人物。籍贯汝寧府，曾任訓導。（中国历代人物传记资料库 CBDB 637306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居易（CBDB 637306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637306&o=json)
