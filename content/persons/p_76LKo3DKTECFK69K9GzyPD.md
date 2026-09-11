---
schema: wang-person/v1
id: p_76LKo3DKTECFK69K9GzyPD
status: active
merged_into: null
display_name: 王體乾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XZvbNqV4cT6CQ29G8VJ2g
        subject_person_id: p_76LKo3DKTECFK69K9GzyPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJC57uJYx3oFxiP8BSHLXf
          claim_id: c_7XZvbNqV4cT6CQ29G8VJ2g
          source_id: s_63ukPPZz7jWhCj5g53gECC
          stance: supports
          locator: CBDB:126895
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126895）
          source: &a1
            id: s_63ukPPZz7jWhCj5g53gECC
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 126895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126895&o=json
            external_identifier: CBDB:126895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1FwmV6tr6qgrKdHwLhWCyi
        subject_person_id: p_76LKo3DKTECFK69K9GzyPD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾，明人物。籍贯昌平，身份为宦官。（中国历代人物传记资料库 CBDB 126895）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yykGlCZFyUhg-3pdOuLmdo
          claim_id: c_1FwmV6tr6qgrKdHwLhWCyi
          source_id: s_63ukPPZz7jWhCj5g53gECC
          stance: supports
          locator: CBDB:126895
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

# 王體乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體乾 | accepted |
| bio.summary | 王體乾，明人物。籍贯昌平，身份为宦官。（中国历代人物传记资料库 CBDB 126895） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體乾（CBDB 126895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126895&o=json)
