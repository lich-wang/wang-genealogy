---
schema: wang-person/v1
id: p_RuQD7Q7uEZyxvTdu63K1Zy
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1y11dshdaRtEvWFdgE1MRa
        subject_person_id: p_RuQD7Q7uEZyxvTdu63K1Zy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nc8npBrDTvpPQZXV2CUJhZ
          claim_id: c_1y11dshdaRtEvWFdgE1MRa
          source_id: s_WNCK5J9mEhRa6w86GXZjaR
          stance: supports
          locator: CBDB:37280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37280）
          source: &a1
            id: s_WNCK5J9mEhRa6w86GXZjaR
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 37280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37280&o=json
            external_identifier: CBDB:37280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UStuz4h4zs3aE84sAzWo7G
        subject_person_id: p_RuQD7Q7uEZyxvTdu63K1Zy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，宋人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 37280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5Y1xjBLxDkwEorKxaPad2
          claim_id: c_UStuz4h4zs3aE84sAzWo7G
          source_id: s_WNCK5J9mEhRa6w86GXZjaR
          stance: supports
          locator: CBDB:37280
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，宋人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 37280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 37280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37280&o=json)
