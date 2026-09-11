---
schema: wang-person/v1
id: p_LWCMWpbbTf5PpB84J2VYoz
status: active
merged_into: null
display_name: 王訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NBCusjtaY8BP9kJ8Uix7hw
        subject_person_id: p_LWCMWpbbTf5PpB84J2VYoz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WuFYjb5962bPNn82JUXQFV
          claim_id: c_NBCusjtaY8BP9kJ8Uix7hw
          source_id: s_EsRYKCvGxgjkXekQ2S8Hjo
          stance: supports
          locator: CBDB:71056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71056）
          source: &a1
            id: s_EsRYKCvGxgjkXekQ2S8Hjo
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 71056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71056&o=json
            external_identifier: CBDB:71056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6rDL6Gps5f2s6nha8YHL6P
        subject_person_id: p_LWCMWpbbTf5PpB84J2VYoz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1614年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_irXmUvS3MxGjoVFmsJjUFj
          claim_id: c_6rDL6Gps5f2s6nha8YHL6P
          source_id: s_EsRYKCvGxgjkXekQ2S8Hjo
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
        id: c_HSpnfydYMwQLPQkLs4dU7i
        subject_person_id: p_LWCMWpbbTf5PpB84J2VYoz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CCGxD3oEiaUJb8wUJg47oQ
          claim_id: c_HSpnfydYMwQLPQkLs4dU7i
          source_id: s_EsRYKCvGxgjkXekQ2S8Hjo
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
        id: c_tVns3E8eGdzVmH96GGMYTS
        subject_person_id: p_LWCMWpbbTf5PpB84J2VYoz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓（1614年—1683年），清人物。籍贯安邱。（中国历代人物传记资料库 CBDB 71056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zn-qvlaINysbr0vVsZo8-_
          claim_id: c_tVns3E8eGdzVmH96GGMYTS
          source_id: s_EsRYKCvGxgjkXekQ2S8Hjo
          stance: supports
          locator: CBDB:71056
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

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| birth.date | 1614年 | accepted |
| death.date | 1683年 | accepted |
| bio.summary | 王訓（1614年—1683年），清人物。籍贯安邱。（中国历代人物传记资料库 CBDB 71056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 71056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71056&o=json)
