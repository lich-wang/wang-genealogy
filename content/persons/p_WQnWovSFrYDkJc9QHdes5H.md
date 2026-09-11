---
schema: wang-person/v1
id: p_WQnWovSFrYDkJc9QHdes5H
status: active
merged_into: null
display_name: 沈氏
revision: 1
cbdb_id: 311221
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_11gX538JAhXR22fgY7DhnP
        subject_person_id: p_WQnWovSFrYDkJc9QHdes5H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UFRAWuFlh1XqHsF1jyIlBn
          claim_id: c_11gX538JAhXR22fgY7DhnP
          source_id: s_gOvKE5pPQU6BCvmROwC3Ps
          stance: supports
          locator: CBDB:311221
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gOvKE5pPQU6BCvmROwC3Ps
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王大猷母)（CBDB 311221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311221&o=json
            external_identifier: CBDB:311221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfINE9SJZYOiRkUSDCTkbl
        subject_person_id: p_WQnWovSFrYDkJc9QHdes5H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Cr6IyWVcQ1ag9Z2GzgD9v
          claim_id: c_NfINE9SJZYOiRkUSDCTkbl
          source_id: s_gOvKE5pPQU6BCvmROwC3Ps
          stance: supports
          locator: CBDB:311221
          quotation: null
          interpretation_note: CBDB 明确记录的王勇配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_znfMa__4FhCGiQ0s2XTnwK
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WQnWovSFrYDkJc9QHdes5H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpksXVnH_TRLVaHyFsvfwC
          claim_id: c_znfMa__4FhCGiQ0s2XTnwK
          source_id: s_gOvKE5pPQU6BCvmROwC3Ps
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294156：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ddWY4cKu36BYCB9sUmQGQH
        status: active
        display_name: 王勇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈氏，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311221） | accepted |
| name.primary | 沈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ddWY4cKu36BYCB9sUmQGQH | 王勇 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王大猷母)（CBDB 311221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311221&o=json)
