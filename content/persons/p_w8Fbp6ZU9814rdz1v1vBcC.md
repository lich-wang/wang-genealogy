---
schema: wang-person/v1
id: p_w8Fbp6ZU9814rdz1v1vBcC
status: active
merged_into: null
display_name: 王寰清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NhihCTQSwZwVBrQ6E5623s
        subject_person_id: p_w8Fbp6ZU9814rdz1v1vBcC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QJGZMc7gHzqGVjMNSQR3MZ
          claim_id: c_NhihCTQSwZwVBrQ6E5623s
          source_id: s_Gx6AgRN6femSBqutqib2Cq
          stance: supports
          locator: CBDB:72213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72213）
          source: &a1
            id: s_Gx6AgRN6femSBqutqib2Cq
            source_type: api_record
            title: 中国历代人物传记资料库：王寰清（CBDB 72213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72213&o=json
            external_identifier: CBDB:72213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e7jXggz9Gy2ZkS43U37dqK
        subject_person_id: p_w8Fbp6ZU9814rdz1v1vBcC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1838年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtfnbtT1ptNjSKsjz81HRf
          claim_id: c_e7jXggz9Gy2ZkS43U37dqK
          source_id: s_Gx6AgRN6femSBqutqib2Cq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kvRsB8tv8QrxLpJqyWy8W5
        subject_person_id: p_w8Fbp6ZU9814rdz1v1vBcC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰清（生于1838年），清人物。籍贯萊陽。（中国历代人物传记资料库 CBDB 72213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UynASeLDmvpe_Mp5FsCpu0
          claim_id: c_kvRsB8tv8QrxLpJqyWy8W5
          source_id: s_Gx6AgRN6femSBqutqib2Cq
          stance: supports
          locator: CBDB:72213
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

# 王寰清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰清 | accepted |
| birth.date | 1838年 | accepted |
| bio.summary | 王寰清（生于1838年），清人物。籍贯萊陽。（中国历代人物传记资料库 CBDB 72213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寰清（CBDB 72213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72213&o=json)
