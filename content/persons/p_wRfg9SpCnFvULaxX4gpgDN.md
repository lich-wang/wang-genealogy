---
schema: wang-person/v1
id: p_wRfg9SpCnFvULaxX4gpgDN
status: active
merged_into: null
display_name: 王應元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ve2GAEnE7dz54HFFP4273v
        subject_person_id: p_wRfg9SpCnFvULaxX4gpgDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zrvv5KP9RtMS1zgb51aLcw
          claim_id: c_Ve2GAEnE7dz54HFFP4273v
          source_id: s_W8fffC8L1NbAdUe9XZnBxC
          stance: supports
          locator: CBDB:126846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126846）
          source: &a1
            id: s_W8fffC8L1NbAdUe9XZnBxC
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 126846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126846&o=json
            external_identifier: CBDB:126846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQyXhu7JV4ZxhUxJz9u4rn
        subject_person_id: p_wRfg9SpCnFvULaxX4gpgDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元，明人物。籍贯武隆。（中国历代人物传记资料库 CBDB 126846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ifJLg8lwoAGgfrqZU0cO-d
          claim_id: c_bQyXhu7JV4ZxhUxJz9u4rn
          source_id: s_W8fffC8L1NbAdUe9XZnBxC
          stance: supports
          locator: CBDB:126846
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

# 王應元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應元 | accepted |
| bio.summary | 王應元，明人物。籍贯武隆。（中国历代人物传记资料库 CBDB 126846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應元（CBDB 126846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126846&o=json)
