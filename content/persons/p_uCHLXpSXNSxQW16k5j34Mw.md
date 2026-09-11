---
schema: wang-person/v1
id: p_uCHLXpSXNSxQW16k5j34Mw
status: active
merged_into: null
display_name: 王椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4RP8JowFW8zyHpnHcjQCKH
        subject_person_id: p_uCHLXpSXNSxQW16k5j34Mw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XxuTeyVX7dwyFYBSiWp5xT
          claim_id: c_4RP8JowFW8zyHpnHcjQCKH
          source_id: s_uJmqEPg92YRMvJPf2dZGJT
          stance: supports
          locator: CBDB:689140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689140）
          source: &a1
            id: s_uJmqEPg92YRMvJPf2dZGJT
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 689140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689140&o=json
            external_identifier: CBDB:689140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YcSayn2Z8X5KJRcpRBnCc5
        subject_person_id: p_uCHLXpSXNSxQW16k5j34Mw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 689140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ciQvbnlotpzAXNhZsiNiIt
          claim_id: c_YcSayn2Z8X5KJRcpRBnCc5
          source_id: s_uJmqEPg92YRMvJPf2dZGJT
          stance: supports
          locator: CBDB:689140
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

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | 王椿，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 689140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 689140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689140&o=json)
