---
schema: wang-person/v1
id: p_62yAfFa7x1bkXH2H49HQ3h
status: active
merged_into: null
display_name: 王德成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cjcG45dce7kfeoPuh83bV2
        subject_person_id: p_62yAfFa7x1bkXH2H49HQ3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jqGEar2SmaCLRXBbnSKYhT
          claim_id: c_cjcG45dce7kfeoPuh83bV2
          source_id: s_G26ZSRmXT1DJJfPhQMQwFT
          stance: supports
          locator: CBDB:69435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69435）
          source: &a1
            id: s_G26ZSRmXT1DJJfPhQMQwFT
            source_type: api_record
            title: 中国历代人物传记资料库：王德成（CBDB 69435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69435&o=json
            external_identifier: CBDB:69435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GC3HZTwfadvLwQ7yMNsD61
        subject_person_id: p_62yAfFa7x1bkXH2H49HQ3h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jn2C8u1cfq77qsaGjqzdMe
          claim_id: c_GC3HZTwfadvLwQ7yMNsD61
          source_id: s_G26ZSRmXT1DJJfPhQMQwFT
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
        id: c_nMVFXHz8D26SLmfabmkzb1
        subject_person_id: p_62yAfFa7x1bkXH2H49HQ3h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成（卒于1875年），清人物。籍贯合肥，入仕軍功補授(軍功)。（中国历代人物传记资料库 CBDB 69435）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z8Jhl-1CH8VfyMkrNuez1-
          claim_id: c_nMVFXHz8D26SLmfabmkzb1
          source_id: s_G26ZSRmXT1DJJfPhQMQwFT
          stance: supports
          locator: CBDB:69435
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

# 王德成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德成 | accepted |
| death.date | 1875年 | accepted |
| bio.summary | 王德成（卒于1875年），清人物。籍贯合肥，入仕軍功補授(軍功)。（中国历代人物传记资料库 CBDB 69435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德成（CBDB 69435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69435&o=json)
