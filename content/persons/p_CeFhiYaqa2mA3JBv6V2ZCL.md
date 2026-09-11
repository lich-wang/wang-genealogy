---
schema: wang-person/v1
id: p_CeFhiYaqa2mA3JBv6V2ZCL
status: active
merged_into: null
display_name: 王金䑓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MBPU4ESbmrjQNWgJhwK7hc
        subject_person_id: p_CeFhiYaqa2mA3JBv6V2ZCL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金䑓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s2mGr87TXJ7b3h683JV8Zx
          claim_id: c_MBPU4ESbmrjQNWgJhwK7hc
          source_id: s_hzrFh5Y9kAse29h66siTSj
          stance: supports
          locator: CBDB:640504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640504）
          source: &a1
            id: s_hzrFh5Y9kAse29h66siTSj
            source_type: api_record
            title: 中国历代人物传记资料库：王金䑓（CBDB 640504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640504&o=json
            external_identifier: CBDB:640504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B8A895K48j8HYAJshCwF4F
        subject_person_id: p_CeFhiYaqa2mA3JBv6V2ZCL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金䑓，清人物。籍贯高陽，曾任郎中。（中国历代人物传记资料库 CBDB 640504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d9yY7RUYhdUYsj_SHt0pud
          claim_id: c_B8A895K48j8HYAJshCwF4F
          source_id: s_hzrFh5Y9kAse29h66siTSj
          stance: supports
          locator: CBDB:640504
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

# 王金䑓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金䑓 | accepted |
| bio.summary | 王金䑓，清人物。籍贯高陽，曾任郎中。（中国历代人物传记资料库 CBDB 640504） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金䑓（CBDB 640504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640504&o=json)
