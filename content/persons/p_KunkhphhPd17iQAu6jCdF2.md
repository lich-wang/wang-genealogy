---
schema: wang-person/v1
id: p_KunkhphhPd17iQAu6jCdF2
status: active
merged_into: null
display_name: 王木
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kdXJCuBHYqwqfA29jejkGr
        subject_person_id: p_KunkhphhPd17iQAu6jCdF2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王木
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oBC8afVR86FGpuzY6EoKhv
          claim_id: c_kdXJCuBHYqwqfA29jejkGr
          source_id: s_qVPmCqB55FZzqjLAzwC7SQ
          stance: supports
          locator: CBDB:38495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38495）
          source: &a1
            id: s_qVPmCqB55FZzqjLAzwC7SQ
            source_type: api_record
            title: 中国历代人物传记资料库：王木（CBDB 38495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38495&o=json
            external_identifier: CBDB:38495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GidjZYN1uGT3DrvCs9JSRA
        subject_person_id: p_KunkhphhPd17iQAu6jCdF2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1167年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4C8mqKkmsC7ZMLPJJZQM4D
          claim_id: c_GidjZYN1uGT3DrvCs9JSRA
          source_id: s_qVPmCqB55FZzqjLAzwC7SQ
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
        id: c_yLqLs47BzC4q8bHPQn2Fkj
        subject_person_id: p_KunkhphhPd17iQAu6jCdF2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1227年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GMWceXTwAqqbA5Gpz8MCfz
          claim_id: c_yLqLs47BzC4q8bHPQn2Fkj
          source_id: s_qVPmCqB55FZzqjLAzwC7SQ
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
        id: c_SJ6brDTMJ92US7nYu14Cw1
        subject_person_id: p_KunkhphhPd17iQAu6jCdF2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王木（1167年—1227年），宋人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 38495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d5J-61wn3oJPyBGfnnkE2o
          claim_id: c_SJ6brDTMJ92US7nYu14Cw1
          source_id: s_qVPmCqB55FZzqjLAzwC7SQ
          stance: supports
          locator: CBDB:38495
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

# 王木

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王木 | accepted |
| birth.date | 1167年 | accepted |
| death.date | 1227年 | accepted |
| bio.summary | 王木（1167年—1227年），宋人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 38495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王木（CBDB 38495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38495&o=json)
