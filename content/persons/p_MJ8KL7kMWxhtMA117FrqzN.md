---
schema: wang-person/v1
id: p_MJ8KL7kMWxhtMA117FrqzN
status: active
merged_into: null
display_name: 王弘毅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JjWGfbPcy7Zp1LKGY7vNMJ
        subject_person_id: p_MJ8KL7kMWxhtMA117FrqzN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HwuyZF88tZB7q5AH4MLtx
          claim_id: c_JjWGfbPcy7Zp1LKGY7vNMJ
          source_id: s_ganaV9KZisTjiCuu94EJb5
          stance: supports
          locator: CBDB:101129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101129）
          source: &a1
            id: s_ganaV9KZisTjiCuu94EJb5
            source_type: api_record
            title: 中国历代人物传记资料库：王弘毅（CBDB 101129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101129&o=json
            external_identifier: CBDB:101129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hB3NfEpGReWmacNNjpKiAx
        subject_person_id: p_MJ8KL7kMWxhtMA117FrqzN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘毅，元人物。籍贯涇陽，曾任海漕萬戶府提控案牘。（中国历代人物传记资料库 CBDB 101129）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W1lYI7vxaUmTHbWCm4I7Ne
          claim_id: c_hB3NfEpGReWmacNNjpKiAx
          source_id: s_ganaV9KZisTjiCuu94EJb5
          stance: supports
          locator: CBDB:101129
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

# 王弘毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘毅 | accepted |
| bio.summary | 王弘毅，元人物。籍贯涇陽，曾任海漕萬戶府提控案牘。（中国历代人物传记资料库 CBDB 101129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘毅（CBDB 101129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101129&o=json)
