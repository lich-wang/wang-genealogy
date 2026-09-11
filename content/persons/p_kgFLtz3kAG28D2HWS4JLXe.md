---
schema: wang-person/v1
id: p_kgFLtz3kAG28D2HWS4JLXe
status: active
merged_into: null
display_name: 王用
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ph2up6153k27mJP9SrubDh
        subject_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n64Fvm2qqPcDaf6AvzczoC
          claim_id: c_Ph2up6153k27mJP9SrubDh
          source_id: s_nEiDfdrEGfX5rwdGQkFz5r
          stance: supports
          locator: CBDB:198396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198396）
          source: &a1
            id: s_nEiDfdrEGfX5rwdGQkFz5r
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 198396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198396&o=json
            external_identifier: CBDB:198396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HM8sUVhoVReC6YucF8hxk7
        subject_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用，明人物。明清進士進士，籍贯泰和，入仕進士，曾任布政使。（中国历代人物传记资料库 CBDB 198396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7EIO8AIiRCmeVUf0Izfg-Q
          claim_id: c_HM8sUVhoVReC6YucF8hxk7
          source_id: s_nEiDfdrEGfX5rwdGQkFz5r
          stance: supports
          locator: CBDB:198396
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
  spouses:
    - claim:
        id: c_2QIpeXwBHHK-wle35XfMG2
        subject_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_X1kutY1C1XkJfDQKfYUARE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oI1gykELMoyuteJWU0qfZC
          claim_id: c_2QIpeXwBHHK-wle35XfMG2
          source_id: s_5CvKK00Tld51ReiCUPq3MN
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5CvKK00Tld51ReiCUPq3MN
            source_type: api_record
            title: 中国历代人物传记资料库：易氏(王用妻)（CBDB 266793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266793&o=json
            external_identifier: CBDB:266793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_X1kutY1C1XkJfDQKfYUARE
        status: active
        display_name: 易氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HdahzAJqtKBNBhBgd5lj1j
        subject_person_id: p_9jcDJtKf8NUzuAuUCv1226
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kgFLtz3kAG28D2HWS4JLXe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5jNXT66IU4uBQSMxQcuiRT
          claim_id: c_HdahzAJqtKBNBhBgd5lj1j
          source_id: s_nEiDfdrEGfX5rwdGQkFz5r
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9jcDJtKf8NUzuAuUCv1226
        status: active
        display_name: 王以文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | 王用，明人物。明清進士進士，籍贯泰和，入仕進士，曾任布政使。（中国历代人物传记资料库 CBDB 198396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_X1kutY1C1XkJfDQKfYUARE | 易氏 | accepted |
| ancestors | p_9jcDJtKf8NUzuAuUCv1226 | 王以文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 198396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198396&o=json)
- [中国历代人物传记资料库：易氏(王用妻)（CBDB 266793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266793&o=json)
