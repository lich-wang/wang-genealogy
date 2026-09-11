---
schema: wang-person/v1
id: p_PfHynJtZqNELCt3PtMmtRw
status: active
merged_into: null
display_name: 王裔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZqzS1HXM7sXFYBwJ5oHEb
        subject_person_id: p_PfHynJtZqNELCt3PtMmtRw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hFqSUFm59W7n4M2W7vgQ4H
          claim_id: c_CZqzS1HXM7sXFYBwJ5oHEb
          source_id: s_zzz9uCJUmBh3DaT7vGPfUd
          stance: supports
          locator: CBDB:71255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71255）
          source: &a1
            id: s_zzz9uCJUmBh3DaT7vGPfUd
            source_type: api_record
            title: 中国历代人物传记资料库：王裔（CBDB 71255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71255&o=json
            external_identifier: CBDB:71255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KnSZF5cB79EwrvezWyMKBm
        subject_person_id: p_PfHynJtZqNELCt3PtMmtRw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rzspubbEhhw9pm1jt2LHw8
          claim_id: c_KnSZF5cB79EwrvezWyMKBm
          source_id: s_zzz9uCJUmBh3DaT7vGPfUd
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
        id: c_KRMD9Qh3LiRFUxRivW62Pr
        subject_person_id: p_PfHynJtZqNELCt3PtMmtRw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裔（生于1598年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 71255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pfK7nbROL5OQpNgfd0CPpX
          claim_id: c_KRMD9Qh3LiRFUxRivW62Pr
          source_id: s_zzz9uCJUmBh3DaT7vGPfUd
          stance: supports
          locator: CBDB:71255
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

# 王裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裔 | accepted |
| birth.date | 1598年 | accepted |
| bio.summary | 王裔（生于1598年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 71255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裔（CBDB 71255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71255&o=json)
