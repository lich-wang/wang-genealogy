---
schema: wang-person/v1
id: p_Y2PXwrEpdeY3sAPNAZYqM3
status: active
merged_into: null
display_name: 王集
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zpKqgz7WqhXPnqYgvm8nmP
        subject_person_id: p_Y2PXwrEpdeY3sAPNAZYqM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王集
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUrogXiYrR1KGCFFnJWesQ
          claim_id: c_zpKqgz7WqhXPnqYgvm8nmP
          source_id: s_2xZsKYDieNdeBQ9zxTbw7a
          stance: supports
          locator: CBDB:57195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57195）
          source: &a1
            id: s_2xZsKYDieNdeBQ9zxTbw7a
            source_type: api_record
            title: 中国历代人物传记资料库：王集（CBDB 57195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57195&o=json
            external_identifier: CBDB:57195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nBfT5WQa6sMJCKrbqZ9YNV
        subject_person_id: p_Y2PXwrEpdeY3sAPNAZYqM3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1uDU31Gay3X9A8pnv4hwrD
          claim_id: c_nBfT5WQa6sMJCKrbqZ9YNV
          source_id: s_2xZsKYDieNdeBQ9zxTbw7a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4C3KNpTSEEvfMRLVJFphLj
        subject_person_id: p_Y2PXwrEpdeY3sAPNAZYqM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王集（卒于1818年），清人物。籍贯漢軍正紅旗，入仕官學生，曾任冠軍使、旗漢軍副都統、旗蒙古都統。（中国历代人物传记资料库 CBDB 57195）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G6mlRRXe0ssxsEVYafpN6T
          claim_id: c_4C3KNpTSEEvfMRLVJFphLj
          source_id: s_2xZsKYDieNdeBQ9zxTbw7a
          stance: supports
          locator: CBDB:57195
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

# 王集

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王集 | accepted |
| death.date | 1818年 | accepted |
| bio.summary | 王集（卒于1818年），清人物。籍贯漢軍正紅旗，入仕官學生，曾任冠軍使、旗漢軍副都統、旗蒙古都統。（中国历代人物传记资料库 CBDB 57195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王集（CBDB 57195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57195&o=json)
