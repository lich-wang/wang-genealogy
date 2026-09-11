---
schema: wang-person/v1
id: p_FVqLLxkpzCjws37PFo68fP
status: active
merged_into: null
display_name: 王鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AsWusi1qJiJG42aG8dRSEe
        subject_person_id: p_FVqLLxkpzCjws37PFo68fP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TE65BCFX6qZ3sBtQkc5TqT
          claim_id: c_AsWusi1qJiJG42aG8dRSEe
          source_id: s_hcLoVkCn8PLAeFFrQHXjVF
          stance: supports
          locator: CBDB:71134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71134）
          source: &a1
            id: s_hcLoVkCn8PLAeFFrQHXjVF
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 71134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71134&o=json
            external_identifier: CBDB:71134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.409Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yWoZTMKM1NKByDQt7M6eaG
        subject_person_id: p_FVqLLxkpzCjws37PFo68fP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7srNhbQUBTTGEbeASKtQJW
          claim_id: c_yWoZTMKM1NKByDQt7M6eaG
          source_id: s_hcLoVkCn8PLAeFFrQHXjVF
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
        id: c_upSTr6xnVfKUdD21b4DTq8
        subject_person_id: p_FVqLLxkpzCjws37PFo68fP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾（生于1760年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71134）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oMkhnDChWdkPEoRIOq05Yc
          claim_id: c_upSTr6xnVfKUdD21b4DTq8
          source_id: s_hcLoVkCn8PLAeFFrQHXjVF
          stance: supports
          locator: CBDB:71134
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

# 王鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾 | accepted |
| birth.date | 1760年 | accepted |
| bio.summary | 王鍾（生于1760年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71134） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾（CBDB 71134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71134&o=json)
