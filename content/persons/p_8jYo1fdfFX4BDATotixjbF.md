---
schema: wang-person/v1
id: p_8jYo1fdfFX4BDATotixjbF
status: active
merged_into: null
display_name: 王承賓
cbdb_id: 153718
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RxaHaWGJPivizWaJxJVDqb
        subject_person_id: p_8jYo1fdfFX4BDATotixjbF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承賓，史料所见人物。本项目依据《中国历代人物传记资料库：王承賓（CBDB 153718）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__Sl8ZA2lpBas4mV2pWCZbz
          claim_id: c_RxaHaWGJPivizWaJxJVDqb
          source_id: s_E3AWhX54cxP3bUx2F4sXd1
          stance: supports
          locator: CBDB:153718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E3AWhX54cxP3bUx2F4sXd1
            source_type: api_record
            title: 中国历代人物传记资料库：王承賓（CBDB 153718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153718&o=json
            external_identifier: CBDB:153718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i9KRtCRNSxMg6Hk25VLcq8
        subject_person_id: p_8jYo1fdfFX4BDATotixjbF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HdX8w9tS8FX1ay2iimfTMF
          claim_id: c_i9KRtCRNSxMg6Hk25VLcq8
          source_id: s_E3AWhX54cxP3bUx2F4sXd1
          stance: supports
          locator: CBDB:153718
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RJRFE5fmyF8nuuMMzSx9CV
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8jYo1fdfFX4BDATotixjbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HuUJsUZA4OldGJc5TDY3UZ
          claim_id: c_RJRFE5fmyF8nuuMMzSx9CV
          source_id: s_E3AWhX54cxP3bUx2F4sXd1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 104：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E3AWhX54cxP3bUx2F4sXd1
            source_type: api_record
            title: 中国历代人物传记资料库：王承賓（CBDB 153718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153718&o=json
            external_identifier: CBDB:153718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9bZqf3V2npm9dP9beXpthm
        status: active
        display_name: 王貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承賓，史料所见人物。本项目依据《中国历代人物传记资料库：王承賓（CBDB 153718）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王承賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9bZqf3V2npm9dP9beXpthm | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承賓（CBDB 153718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153718&o=json)
