---
schema: wang-person/v1
id: p_uyvMmQbdeV3E3Qrpzvkroi
status: active
merged_into: null
display_name: 王希綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dtYFT3WyamuwWxCJR19biH
        subject_person_id: p_uyvMmQbdeV3E3Qrpzvkroi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xRekiXqvJLe1so4bBdLH9B
          claim_id: c_dtYFT3WyamuwWxCJR19biH
          source_id: s_tQQxBgDjFzDsacfDisGfxU
          stance: supports
          locator: CBDB:637394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637394）
          source: &a1
            id: s_tQQxBgDjFzDsacfDisGfxU
            source_type: api_record
            title: 中国历代人物传记资料库：王希綬（CBDB 637394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637394&o=json
            external_identifier: CBDB:637394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4aziMiYTcGFv9zxHUngXt3
        subject_person_id: p_uyvMmQbdeV3E3Qrpzvkroi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王希綬，清人物。籍贯陝州直隸州直轄地方，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637394）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XvbvSBX6Rc0Tzd5dcsp7Cm
          claim_id: c_4aziMiYTcGFv9zxHUngXt3
          source_id: s_tQQxBgDjFzDsacfDisGfxU
          stance: supports
          locator: CBDB:637394
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

# 王希綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希綬 | accepted |
| bio.summary | 王希綬，清人物。籍贯陝州直隸州直轄地方，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希綬（CBDB 637394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637394&o=json)
