---
schema: wang-person/v1
id: p_9sEFr79NSE58e3maeFXVCn
status: active
merged_into: null
display_name: 王岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x6P3uUsGc52eT42WhRM77B
        subject_person_id: p_9sEFr79NSE58e3maeFXVCn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tkug7VGkpsyVRtKpjdg3Nf
          claim_id: c_x6P3uUsGc52eT42WhRM77B
          source_id: s_DcMTiEpSA7N4cKwhR41axm
          stance: supports
          locator: CBDB:71105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71105）
          source: &a1
            id: s_DcMTiEpSA7N4cKwhR41axm
            source_type: api_record
            title: 中国历代人物传记资料库：王岱（CBDB 71105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71105&o=json
            external_identifier: CBDB:71105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pooZjCbPDpy8qKND3sLVDM
        subject_person_id: p_9sEFr79NSE58e3maeFXVCn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AK3cKcdarwCuQqvqEJK9z1
          claim_id: c_pooZjCbPDpy8qKND3sLVDM
          source_id: s_DcMTiEpSA7N4cKwhR41axm
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
        id: c_7wkz6DbVC991n4DBMdrM4x
        subject_person_id: p_9sEFr79NSE58e3maeFXVCn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岱（卒于1686年），清人物。籍贯湘潭，身份为畫家。（中国历代人物传记资料库 CBDB 71105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mga2RpXmKlGP2BSeyTNyDe
          claim_id: c_7wkz6DbVC991n4DBMdrM4x
          source_id: s_DcMTiEpSA7N4cKwhR41axm
          stance: supports
          locator: CBDB:71105
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

# 王岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岱 | accepted |
| death.date | 1686年 | accepted |
| bio.summary | 王岱（卒于1686年），清人物。籍贯湘潭，身份为畫家。（中国历代人物传记资料库 CBDB 71105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岱（CBDB 71105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71105&o=json)
