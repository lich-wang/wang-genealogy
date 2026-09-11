---
schema: wang-person/v1
id: p_TzGM225kmGt2eMV93hV6kC
status: active
merged_into: null
display_name: 王君㚟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DviVMzdkFw5mTwDm865x7L
        subject_person_id: p_TzGM225kmGt2eMV93hV6kC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君㚟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3GQTPBFctfWdsyqtkEh6qv
          claim_id: c_DviVMzdkFw5mTwDm865x7L
          source_id: s_X11o6nmEJ4tkoFHAfZg49M
          stance: supports
          locator: CBDB:378272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（378272）
          source: &a1
            id: s_X11o6nmEJ4tkoFHAfZg49M
            source_type: api_record
            title: 中国历代人物传记资料库：王君㚟（CBDB 378272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378272&o=json
            external_identifier: CBDB:378272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMQWU4dEzRWY1KNvGRbhKU
        subject_person_id: p_TzGM225kmGt2eMV93hV6kC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君㚟，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_20vchoKDUuezjjkXfGdMZY
          claim_id: c_mMQWU4dEzRWY1KNvGRbhKU
          source_id: s_X11o6nmEJ4tkoFHAfZg49M
          stance: supports
          locator: CBDB:378272
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

# 王君㚟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君㚟 | accepted |
| bio.summary | 王君㚟，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 378272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君㚟（CBDB 378272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378272&o=json)
