---
schema: wang-person/v1
id: p_8BhDkYz5US9wEM96y15Fhk
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLT7EQGFuhQdEy3q32Jd6x
        subject_person_id: p_8BhDkYz5US9wEM96y15Fhk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HLyQj7Eguq5H8nNarVdBvP
          claim_id: c_QLT7EQGFuhQdEy3q32Jd6x
          source_id: s_7jAnQmrJbpCGM55X2kLXrv
          stance: supports
          locator: CBDB:277200
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277200）
          source: &a1
            id: s_7jAnQmrJbpCGM55X2kLXrv
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 277200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json
            external_identifier: CBDB:277200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2h6L4HPgBeWGisRqPQyuSN
        subject_person_id: p_8BhDkYz5US9wEM96y15Fhk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。正德六年進士，籍贯當塗，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 277200）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8YyOjK82RsPPHsZZ4P-rf_
          claim_id: c_2h6L4HPgBeWGisRqPQyuSN
          source_id: s_7jAnQmrJbpCGM55X2kLXrv
          stance: supports
          locator: CBDB:277200
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hFCgiUYRdKaAF8ip2Xtn0n
        subject_person_id: p_DDiCpk3Tkb1KzEtaueBUHR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BhDkYz5US9wEM96y15Fhk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tt-nVGLVLMOz5IHp1NFi_v
          claim_id: c_hFCgiUYRdKaAF8ip2Xtn0n
          source_id: s_kMbKC-6uOuHyERDuJ68FUl
          stance: supports
          locator: CBDB：兄弟 王瑋（201725）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王瑋 为同胞（CBDB 记「弟」），王瑋 之父／母即 王瑄 之父／母。
          source:
            id: s_kMbKC-6uOuHyERDuJ68FUl
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 277200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json
            external_identifier: CBDB:277200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DDiCpk3Tkb1KzEtaueBUHR
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bQ6jo-47Amd2YFWTe8YcRp
        subject_person_id: p_8BhDkYz5US9wEM96y15Fhk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VFJ011pbJAHG5Or-EM7-1E
          claim_id: c_bQ6jo-47Amd2YFWTe8YcRp
          source_id: s_kMbKC-6uOuHyERDuJ68FUl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201725 王瑋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kMbKC-6uOuHyERDuJ68FUl
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 277200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json
            external_identifier: CBDB:277200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dC2kXoLn9HGUMNL9QippS6
        status: active
        display_name: 王瑋
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。正德六年進士，籍贯當塗，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 277200） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DDiCpk3Tkb1KzEtaueBUHR | 王良 | accepted |
| other | p_dC2kXoLn9HGUMNL9QippS6 | 王瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 277200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277200&o=json)
