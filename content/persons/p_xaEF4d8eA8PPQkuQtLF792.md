---
schema: wang-person/v1
id: p_xaEF4d8eA8PPQkuQtLF792
status: active
merged_into: null
display_name: 王饒
cbdb_id: 37907
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zr3Lpdbw8oirXr7VNheWZ8
        subject_person_id: p_xaEF4d8eA8PPQkuQtLF792
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王饒，宋人物。籍贯新平，身份为外戚，曾任節度使。（中国历代人物传记资料库 CBDB 37907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KOaV5X5rpl2jL4W8Tlp4fI
          claim_id: c_Zr3Lpdbw8oirXr7VNheWZ8
          source_id: s_BAASfUcAyxfWJ9kkVCM97Z
          stance: supports
          locator: CBDB:37907
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BAASfUcAyxfWJ9kkVCM97Z
            source_type: api_record
            title: 中国历代人物传记资料库：王饒（CBDB 37907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37907&o=json
            external_identifier: CBDB:37907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8jBjYS825t1RdjkwPjs2Yy
        subject_person_id: p_xaEF4d8eA8PPQkuQtLF792
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王饒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DwhH6bqSA9WiBGmsAv9RCJ
          claim_id: c_8jBjYS825t1RdjkwPjs2Yy
          source_id: s_BAASfUcAyxfWJ9kkVCM97Z
          stance: supports
          locator: CBDB:37907
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DLW2I_WKwwUX97qfP684Io
        subject_person_id: p_xaEF4d8eA8PPQkuQtLF792
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WKzH5wLNza76ve1RhG8X74
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEAm_D19pn6RwmTRUqKwJr
          claim_id: c_DLW2I_WKwwUX97qfP684Io
          source_id: s_ySL3z42oA4dhceJcrPy7a9
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ySL3z42oA4dhceJcrPy7a9
            source_type: api_record
            title: 中国历代人物传记资料库：王繼勳（CBDB 38455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38455&o=json
            external_identifier: CBDB:38455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WKzH5wLNza76ve1RhG8X74
        status: active
        display_name: 王繼勳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王饒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王饒，宋人物。籍贯新平，身份为外戚，曾任節度使。（中国历代人物传记资料库 CBDB 37907） | accepted |
| name.primary | 王饒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WKzH5wLNza76ve1RhG8X74 | 王繼勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼勳（CBDB 38455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38455&o=json)
- [中国历代人物传记资料库：王饒（CBDB 37907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37907&o=json)
