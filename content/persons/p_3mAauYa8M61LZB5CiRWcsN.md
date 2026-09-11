---
schema: wang-person/v1
id: p_3mAauYa8M61LZB5CiRWcsN
status: active
merged_into: null
display_name: 王崇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pEjFgkRgmhhHr4ZFm8LLKJ
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zbSoMMEHEs5CRmHA5yk8WG
          claim_id: c_pEjFgkRgmhhHr4ZFm8LLKJ
          source_id: s_igwudz9aT2smGBUd49MDRf
          stance: supports
          locator: CBDB:198899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198899）
          source: &a1
            id: s_igwudz9aT2smGBUd49MDRf
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 198899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198899&o=json
            external_identifier: CBDB:198899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NQvG3F3oQptFzyX21ZqhpT
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odjM4Ex3uNrz7Lh2uWuVCk
          claim_id: c_NQvG3F3oQptFzyX21ZqhpT
          source_id: s_igwudz9aT2smGBUd49MDRf
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
        id: c_ALjwi8Y12p6zdB7h1uG8QQ
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXfQCXuPb3wxZqTj6wJrNf
          claim_id: c_ALjwi8Y12p6zdB7h1uG8QQ
          source_id: s_igwudz9aT2smGBUd49MDRf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yZC-wx0xvdiWDsIhDArEw-
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnA3xB0dWd-_vY-E-tf5Sn
          claim_id: c_yZC-wx0xvdiWDsIhDArEw-
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1bhXJAXaVpf689XsatKT86
        status: active
        display_name: 王公冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aAUm54laWpKo7kIQekINfd
        subject_person_id: p_32HrxL1829R9R83frFBagU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfWohBLq6t5Um-i_YKiZWX
          claim_id: c_aAUm54laWpKo7kIQekINfd
          source_id: s_fdv118UJ2LwvQFq3opAdUM
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fdv118UJ2LwvQFq3opAdUM
            source_type: api_record
            title: 中国历代人物传记资料库：王伯脩（CBDB 332811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332811&o=json
            external_identifier: CBDB:332811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32HrxL1829R9R83frFBagU
        status: active
        display_name: 王伯脩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| birth.date | 1428年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1bhXJAXaVpf689XsatKT86 | 王公冕 | accepted |
| ancestors | p_32HrxL1829R9R83frFBagU | 王伯脩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯脩（CBDB 332811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332811&o=json)
- [中国历代人物传记资料库：王崇（CBDB 198899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198899&o=json)
- [中国历代人物传记资料库：王公冕（CBDB 332833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json)
