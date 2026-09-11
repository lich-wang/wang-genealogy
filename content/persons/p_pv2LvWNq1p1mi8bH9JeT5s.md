---
schema: wang-person/v1
id: p_pv2LvWNq1p1mi8bH9JeT5s
status: active
merged_into: null
display_name: 王初
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQDcErYALDP6RrSq2W5hkg
        subject_person_id: p_pv2LvWNq1p1mi8bH9JeT5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJVywu6KP9vwzkvkEbfxF4
          claim_id: c_QQDcErYALDP6RrSq2W5hkg
          source_id: s_h2NtPWJxBQD5p35drqVN7W
          stance: supports
          locator: CBDB:28105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28105）
          source: &a1
            id: s_h2NtPWJxBQD5p35drqVN7W
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 28105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28105&o=json
            external_identifier: CBDB:28105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xttu6xsF7JBkRGHayKJGA2
        subject_person_id: p_pv2LvWNq1p1mi8bH9JeT5s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初，明人物。籍贯義烏，身份为行醫。（中国历代人物传记资料库 CBDB 28105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CuUiWEjqWczjh-fB3Yof6X
          claim_id: c_xttu6xsF7JBkRGHayKJGA2
          source_id: s_h2NtPWJxBQD5p35drqVN7W
          stance: supports
          locator: CBDB:28105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x32jGgVfs7OisFdwZiS37I
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pv2LvWNq1p1mi8bH9JeT5s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rq3OLYQLPrwGezZO1fy2Js
          claim_id: c_x32jGgVfs7OisFdwZiS37I
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（子 王初 ⇄ 父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王初 | accepted |
| bio.summary | 王初，明人物。籍贯義烏，身份为行醫。（中国历代人物传记资料库 CBDB 28105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王初（CBDB 28105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28105&o=json)
- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
