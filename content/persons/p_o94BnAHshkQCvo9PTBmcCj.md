---
schema: wang-person/v1
id: p_o94BnAHshkQCvo9PTBmcCj
status: active
merged_into: null
display_name: 王蓍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bdvvU6d9xnnwsava65Nzqk
        subject_person_id: p_o94BnAHshkQCvo9PTBmcCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9hMCYxQXGeQS1c8PfMEUC
          claim_id: c_bdvvU6d9xnnwsava65Nzqk
          source_id: s_SPMkD8aFKtUHWikLMi4gEy
          stance: supports
          locator: CBDB:71238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71238）
          source: &a1
            id: s_SPMkD8aFKtUHWikLMi4gEy
            source_type: api_record
            title: 中国历代人物传记资料库：王蓍（CBDB 71238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71238&o=json
            external_identifier: CBDB:71238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HFr2TKP6BPC3C1BE9LR6BC
        subject_person_id: p_o94BnAHshkQCvo9PTBmcCj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1649年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GbF9j1hV9fcpivVQQ5GxCi
          claim_id: c_HFr2TKP6BPC3C1BE9LR6BC
          source_id: s_SPMkD8aFKtUHWikLMi4gEy
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
        id: c_xZ1tK6RkUC9HUj7sMML1eH
        subject_person_id: p_o94BnAHshkQCvo9PTBmcCj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpLTJR8i6Hwwo83W3EoG63
          claim_id: c_xZ1tK6RkUC9HUj7sMML1eH
          source_id: s_SPMkD8aFKtUHWikLMi4gEy
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
        id: c_RhEEjNzhWxWQiHuhQQPmGM
        subject_person_id: p_o94BnAHshkQCvo9PTBmcCj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓍（1649年—1737年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aZFTSVTEyKCnSlPR7EOJaE
          claim_id: c_RhEEjNzhWxWQiHuhQQPmGM
          source_id: s_SPMkD8aFKtUHWikLMi4gEy
          stance: supports
          locator: CBDB:71238
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

# 王蓍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蓍 | accepted |
| birth.date | 1649年 | accepted |
| death.date | 1737年 | accepted |
| bio.summary | 王蓍（1649年—1737年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蓍（CBDB 71238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71238&o=json)
