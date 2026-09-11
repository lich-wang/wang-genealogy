---
schema: wang-person/v1
id: p_AfM613VuoTjLwxT9aPY9vw
status: active
merged_into: null
display_name: 王昂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a7b7X5oeSC11q2iSPAtpiP
        subject_person_id: p_AfM613VuoTjLwxT9aPY9vw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UmM7i2KBEwZw9UHdMV56kG
          claim_id: c_a7b7X5oeSC11q2iSPAtpiP
          source_id: s_69WJEcj15DB6H1esyojSbb
          stance: supports
          locator: CBDB:1763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1763）
          source: &a1
            id: s_69WJEcj15DB6H1esyojSbb
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 1763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1763&o=json
            external_identifier: CBDB:1763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1p1P33DMVZC4Dg8AFfP23t
        subject_person_id: p_AfM613VuoTjLwxT9aPY9vw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1089年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3FL7JwHiizKidBMLPNwQPy
          claim_id: c_1p1P33DMVZC4Dg8AFfP23t
          source_id: s_69WJEcj15DB6H1esyojSbb
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
        id: c_scjN74RCwq5yQP3c119BGJ
        subject_person_id: p_AfM613VuoTjLwxT9aPY9vw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂（生于1089年），宋人物。籍贯成都，入仕進士，曾任尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 1763）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qxPG7cpQNCOoy5Fh3Rx_nH
          claim_id: c_scjN74RCwq5yQP3c119BGJ
          source_id: s_69WJEcj15DB6H1esyojSbb
          stance: supports
          locator: CBDB:1763
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

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| birth.date | 1089年 | accepted |
| bio.summary | 王昂（生于1089年），宋人物。籍贯成都，入仕進士，曾任尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 1763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 1763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1763&o=json)
