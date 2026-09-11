---
schema: wang-person/v1
id: p_jRJHKxpoYXwaCNav2RaGQ5
status: active
merged_into: null
display_name: 王士譽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_USRFVtD8QiyeCkodkmcx1W
        subject_person_id: p_jRJHKxpoYXwaCNav2RaGQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MHWGKhx21JCxfqVH45Ltq
          claim_id: c_USRFVtD8QiyeCkodkmcx1W
          source_id: s_EySJ4WxJ4RBbW7J2Z7hVus
          stance: supports
          locator: CBDB:71327
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71327）
          source: &a1
            id: s_EySJ4WxJ4RBbW7J2Z7hVus
            source_type: api_record
            title: 中国历代人物传记资料库：王士譽（CBDB 71327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71327&o=json
            external_identifier: CBDB:71327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nHkG9BGmzH2PWboUfqG3kC
        subject_person_id: p_jRJHKxpoYXwaCNav2RaGQ5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dYstTLuotF5wKxhQ5fR2MQ
          claim_id: c_nHkG9BGmzH2PWboUfqG3kC
          source_id: s_EySJ4WxJ4RBbW7J2Z7hVus
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Kmh75WiL5fNVNXvQZCRdFM
        subject_person_id: p_jRJHKxpoYXwaCNav2RaGQ5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1675年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sbU1Ts3jzBdGL6qgUYKSM9
          claim_id: c_Kmh75WiL5fNVNXvQZCRdFM
          source_id: s_EySJ4WxJ4RBbW7J2Z7hVus
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dhi4rFLSnX3H9VkPTwp2N4
        subject_person_id: p_jRJHKxpoYXwaCNav2RaGQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士譽（1613年—1675年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71327）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MUTcAU8e2gzjma3Ub7qJ_T
          claim_id: c_dhi4rFLSnX3H9VkPTwp2N4
          source_id: s_EySJ4WxJ4RBbW7J2Z7hVus
          stance: supports
          locator: CBDB:71327
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

# 王士譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士譽 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1675年 | accepted |
| bio.summary | 王士譽（1613年—1675年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71327） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士譽（CBDB 71327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71327&o=json)
