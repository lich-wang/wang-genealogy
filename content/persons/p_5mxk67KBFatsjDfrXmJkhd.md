---
schema: wang-person/v1
id: p_5mxk67KBFatsjDfrXmJkhd
status: active
merged_into: null
display_name: 王瑮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTzPuihFinAECqXsYbJ74b
        subject_person_id: p_5mxk67KBFatsjDfrXmJkhd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95CunpYL97BjuBKqEwEN79
          claim_id: c_zTzPuihFinAECqXsYbJ74b
          source_id: s_HZPQ77xoQMo5uCT5zA6CD5
          stance: supports
          locator: CBDB:100910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100910）
          source: &a1
            id: s_HZPQ77xoQMo5uCT5zA6CD5
            source_type: api_record
            title: 中国历代人物传记资料库：王瑮（CBDB 100910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100910&o=json
            external_identifier: CBDB:100910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8A8EuD7pRhpaHFUpJWGYp
        subject_person_id: p_5mxk67KBFatsjDfrXmJkhd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑮，元人物。籍贯吳縣，身份为隱居不仕、精於某種樂器。（中国历代人物传记资料库 CBDB 100910）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DXstbAl-TGVUUx8XgNv0C9
          claim_id: c_F8A8EuD7pRhpaHFUpJWGYp
          source_id: s_HZPQ77xoQMo5uCT5zA6CD5
          stance: supports
          locator: CBDB:100910
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

# 王瑮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑮 | accepted |
| bio.summary | 王瑮，元人物。籍贯吳縣，身份为隱居不仕、精於某種樂器。（中国历代人物传记资料库 CBDB 100910） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑮（CBDB 100910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100910&o=json)
