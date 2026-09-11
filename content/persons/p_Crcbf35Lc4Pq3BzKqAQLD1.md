---
schema: wang-person/v1
id: p_Crcbf35Lc4Pq3BzKqAQLD1
status: active
merged_into: null
display_name: 王賡煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RoCZERL6wpVGSCPuTz6ib6
        subject_person_id: p_Crcbf35Lc4Pq3BzKqAQLD1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3uCc8UAQn5GtkHdBCPNh1A
          claim_id: c_RoCZERL6wpVGSCPuTz6ib6
          source_id: s_zGHAgzu6cjTzssQrEZ3MwB
          stance: supports
          locator: CBDB:640338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640338）
          source: &a1
            id: s_zGHAgzu6cjTzssQrEZ3MwB
            source_type: api_record
            title: 中国历代人物传记资料库：王賡煒（CBDB 640338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640338&o=json
            external_identifier: CBDB:640338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w4dK8wQ9zLMrVMjR61kbhG
        subject_person_id: p_Crcbf35Lc4Pq3BzKqAQLD1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡煒，清人物。籍贯銅仁，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xtDqHHmJhiRso4V__iLy-j
          claim_id: c_w4dK8wQ9zLMrVMjR61kbhG
          source_id: s_zGHAgzu6cjTzssQrEZ3MwB
          stance: supports
          locator: CBDB:640338
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

# 王賡煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡煒 | accepted |
| bio.summary | 王賡煒，清人物。籍贯銅仁，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡煒（CBDB 640338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640338&o=json)
