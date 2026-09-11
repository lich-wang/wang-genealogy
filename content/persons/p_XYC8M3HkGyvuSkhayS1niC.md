---
schema: wang-person/v1
id: p_XYC8M3HkGyvuSkhayS1niC
status: active
merged_into: null
display_name: 王坤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MBP6jHWMWZLyuDovPB4e97
        subject_person_id: p_XYC8M3HkGyvuSkhayS1niC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iYXSsQvAkaktoBexLVziBR
          claim_id: c_MBP6jHWMWZLyuDovPB4e97
          source_id: s_67pUHa8kpiFG6AdtGdpsg9
          stance: supports
          locator: CBDB:60602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60602）
          source: &a1
            id: s_67pUHa8kpiFG6AdtGdpsg9
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 60602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60602&o=json
            external_identifier: CBDB:60602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5TZa55SCucUBaMJHXA1yC
        subject_person_id: p_XYC8M3HkGyvuSkhayS1niC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤，清人物。曾任乾清宮管事、御馬監太監。（中国历代人物传记资料库 CBDB 60602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w6p6LTbo8Hx_kC8vbsbli4
          claim_id: c_B5TZa55SCucUBaMJHXA1yC
          source_id: s_67pUHa8kpiFG6AdtGdpsg9
          stance: supports
          locator: CBDB:60602
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

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | 王坤，清人物。曾任乾清宮管事、御馬監太監。（中国历代人物传记资料库 CBDB 60602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 60602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60602&o=json)
