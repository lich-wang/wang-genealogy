---
schema: wang-person/v1
id: p_C2b9dckqiCvCSJCiWqLBZo
status: active
merged_into: null
display_name: 王器成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8Cqd8Brzmkd7LepA4p5YE
        subject_person_id: p_C2b9dckqiCvCSJCiWqLBZo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DEHzijYHZC2u33s8e9VJjD
          claim_id: c_t8Cqd8Brzmkd7LepA4p5YE
          source_id: s_HJkF9Cqph3RNCKV9Hb74WB
          stance: supports
          locator: CBDB:72211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72211）
          source: &a1
            id: s_HJkF9Cqph3RNCKV9Hb74WB
            source_type: api_record
            title: 中国历代人物传记资料库：王器成（CBDB 72211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72211&o=json
            external_identifier: CBDB:72211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xH48ou7m3mb5X6aWorKPqk
        subject_person_id: p_C2b9dckqiCvCSJCiWqLBZo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgGzEnnPnEKf36FJtetA62
          claim_id: c_xH48ou7m3mb5X6aWorKPqk
          source_id: s_HJkF9Cqph3RNCKV9Hb74WB
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
        id: c_sBFhumnUxE3ysKhTki7t2t
        subject_person_id: p_C2b9dckqiCvCSJCiWqLBZo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器成（生于1836年），清人物。籍贯定安。（中国历代人物传记资料库 CBDB 72211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w61p8Ajzs49ku9LI3UCbkf
          claim_id: c_sBFhumnUxE3ysKhTki7t2t
          source_id: s_HJkF9Cqph3RNCKV9Hb74WB
          stance: supports
          locator: CBDB:72211
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

# 王器成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王器成 | accepted |
| birth.date | 1836年 | accepted |
| bio.summary | 王器成（生于1836年），清人物。籍贯定安。（中国历代人物传记资料库 CBDB 72211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王器成（CBDB 72211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72211&o=json)
