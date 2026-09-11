---
schema: wang-person/v1
id: p_ZXBwAnQ7Q47mXyt4ncDe2m
status: active
merged_into: null
display_name: 王桂祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeidWYVntXmR49TQuks9F5
        subject_person_id: p_ZXBwAnQ7Q47mXyt4ncDe2m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v9rBMHu1K8CJSvE8R7bPk9
          claim_id: c_NeidWYVntXmR49TQuks9F5
          source_id: s_2fG2k7dEU8S2hGQevqqB7x
          stance: supports
          locator: CBDB:638713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638713）
          source: &a1
            id: s_2fG2k7dEU8S2hGQevqqB7x
            source_type: api_record
            title: 中国历代人物传记资料库：王桂祚（CBDB 638713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638713&o=json
            external_identifier: CBDB:638713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HE5bJ4MqgvxQ5C14Kj1wGX
        subject_person_id: p_ZXBwAnQ7Q47mXyt4ncDe2m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂祚，清人物。籍贯青陽，曾任典史。（中国历代人物传记资料库 CBDB 638713）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jv_wZb9GeCw_IpqMKqljoM
          claim_id: c_HE5bJ4MqgvxQ5C14Kj1wGX
          source_id: s_2fG2k7dEU8S2hGQevqqB7x
          stance: supports
          locator: CBDB:638713
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

# 王桂祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂祚 | accepted |
| bio.summary | 王桂祚，清人物。籍贯青陽，曾任典史。（中国历代人物传记资料库 CBDB 638713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂祚（CBDB 638713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638713&o=json)
