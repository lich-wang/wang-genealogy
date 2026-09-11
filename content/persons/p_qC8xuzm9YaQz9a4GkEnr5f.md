---
schema: wang-person/v1
id: p_qC8xuzm9YaQz9a4GkEnr5f
status: active
merged_into: null
display_name: 王作梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cRFJX6RU68bcPYdrh3myTm
        subject_person_id: p_qC8xuzm9YaQz9a4GkEnr5f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L1tzPoW3C1ZrmRysNNKPpf
          claim_id: c_cRFJX6RU68bcPYdrh3myTm
          source_id: s_hV5D4zDcjVBZTb5NEh1kAy
          stance: supports
          locator: CBDB:71682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71682）
          source: &a1
            id: s_hV5D4zDcjVBZTb5NEh1kAy
            source_type: api_record
            title: 中国历代人物传记资料库：王作梅（CBDB 71682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71682&o=json
            external_identifier: CBDB:71682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YmCFf13FLs2PXJpvzro4QT
        subject_person_id: p_qC8xuzm9YaQz9a4GkEnr5f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYoGa2AN1Xw6tt7viCqk9T
          claim_id: c_YmCFf13FLs2PXJpvzro4QT
          source_id: s_hV5D4zDcjVBZTb5NEh1kAy
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
        id: c_2ZhCfMGrkNDNdBw12dPJh3
        subject_person_id: p_qC8xuzm9YaQz9a4GkEnr5f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作梅（生于1679年），清人物。籍贯河內。（中国历代人物传记资料库 CBDB 71682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__GMwPIGDcjdWrUTUA2f-vQ
          claim_id: c_2ZhCfMGrkNDNdBw12dPJh3
          source_id: s_hV5D4zDcjVBZTb5NEh1kAy
          stance: supports
          locator: CBDB:71682
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

# 王作梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作梅 | accepted |
| birth.date | 1679年 | accepted |
| bio.summary | 王作梅（生于1679年），清人物。籍贯河內。（中国历代人物传记资料库 CBDB 71682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作梅（CBDB 71682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71682&o=json)
