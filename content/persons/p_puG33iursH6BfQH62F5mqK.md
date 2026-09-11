---
schema: wang-person/v1
id: p_puG33iursH6BfQH62F5mqK
status: active
merged_into: null
display_name: 王天覺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLLBqBQys7EoYRzJJZ2ius
        subject_person_id: p_puG33iursH6BfQH62F5mqK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4b6QDN8sBAxLH7ntQEsMtE
          claim_id: c_RLLBqBQys7EoYRzJJZ2ius
          source_id: s_jRd5YnRqV4GFLyw2PFCWfj
          stance: supports
          locator: CBDB:101087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101087）
          source: &a1
            id: s_jRd5YnRqV4GFLyw2PFCWfj
            source_type: api_record
            title: 中国历代人物传记资料库：王天覺（CBDB 101087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101087&o=json
            external_identifier: CBDB:101087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5HoNTJuC7CGym31nekV8p
        subject_person_id: p_puG33iursH6BfQH62F5mqK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天覺，元人物。籍贯宜興州，身份为書院山長，入仕薦舉 (保任,保舉)，曾任諸路總管府儒學教授、州判官、書院山長。（中国历代人物传记资料库 CBDB 101087）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mzch8Mbe4TlsmQCD0-4Fk9
          claim_id: c_B5HoNTJuC7CGym31nekV8p
          source_id: s_jRd5YnRqV4GFLyw2PFCWfj
          stance: supports
          locator: CBDB:101087
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

# 王天覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天覺 | accepted |
| bio.summary | 王天覺，元人物。籍贯宜興州，身份为書院山長，入仕薦舉 (保任,保舉)，曾任諸路總管府儒學教授、州判官、書院山長。（中国历代人物传记资料库 CBDB 101087） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天覺（CBDB 101087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101087&o=json)
