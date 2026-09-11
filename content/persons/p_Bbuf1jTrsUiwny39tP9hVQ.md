---
schema: wang-person/v1
id: p_Bbuf1jTrsUiwny39tP9hVQ
status: active
merged_into: null
display_name: 王辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YL9oXJ9XLR31GXzNENdZ1T
        subject_person_id: p_Bbuf1jTrsUiwny39tP9hVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vt8YW8pY4JNfzhczPJA6d7
          claim_id: c_YL9oXJ9XLR31GXzNENdZ1T
          source_id: s_YLhJ3xJ4c5qzHcJrQxGGeU
          stance: supports
          locator: CBDB:71073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71073）
          source: &a1
            id: s_YLhJ3xJ4c5qzHcJrQxGGeU
            source_type: api_record
            title: 中国历代人物传记资料库：王辰（CBDB 71073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71073&o=json
            external_identifier: CBDB:71073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zJEs9o7MC5oQa4oeY25zRS
        subject_person_id: p_Bbuf1jTrsUiwny39tP9hVQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1789年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxW3LQ1fBr1jcekMGTexaY
          claim_id: c_zJEs9o7MC5oQa4oeY25zRS
          source_id: s_YLhJ3xJ4c5qzHcJrQxGGeU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qrxES7J64fbVMqftKgaLhw
        subject_person_id: p_Bbuf1jTrsUiwny39tP9hVQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXBou9KinKv77ugZaPpida
          claim_id: c_qrxES7J64fbVMqftKgaLhw
          source_id: s_YLhJ3xJ4c5qzHcJrQxGGeU
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
        id: c_cLjHE2RSVe89aES6WMiebn
        subject_person_id: p_Bbuf1jTrsUiwny39tP9hVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辰（1789年—1827年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4M69zLJtcleXbeyjbfVBIQ
          claim_id: c_cLjHE2RSVe89aES6WMiebn
          source_id: s_YLhJ3xJ4c5qzHcJrQxGGeU
          stance: supports
          locator: CBDB:71073
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

# 王辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辰 | accepted |
| birth.date | 1789年 | accepted |
| death.date | 1827年 | accepted |
| bio.summary | 王辰（1789年—1827年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王辰（CBDB 71073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71073&o=json)
