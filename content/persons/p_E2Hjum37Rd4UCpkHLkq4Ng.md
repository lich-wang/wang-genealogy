---
schema: wang-person/v1
id: p_E2Hjum37Rd4UCpkHLkq4Ng
status: active
merged_into: null
display_name: 王輪
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e5a8tJxFiSxXAoMVpkJ9iA
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYTXNQzzqK9JShM3eMLh67
          claim_id: c_e5a8tJxFiSxXAoMVpkJ9iA
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
          stance: supports
          locator: CBDB:126803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126803）
          source: &a1
            id: s_sR9K8cQH7nzPMLJgJ9qY6t
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 126803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126803&o=json
            external_identifier: CBDB:126803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QLC4TDcapwmh3LyexFsJVs
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDq4wKzMUL7jK6QRTYMDQJ
          claim_id: c_QLC4TDcapwmh3LyexFsJVs
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
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
        id: c_ZgRBy3YZsTe9fgbFALU3hS
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLW472zoBPpxYrV8L7AaeC
          claim_id: c_ZgRBy3YZsTe9fgbFALU3hS
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
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
        id: c_qdwSfVR8k2QrqdfAE9ye2P
        subject_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輪（1507年—1581年），明人物。明清進士進士，籍贯蒲州，入仕進士，曾任巡撫、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A7IRlneWqweaqBYxF_Exkw
          claim_id: c_qdwSfVR8k2QrqdfAE9ye2P
          source_id: s_sR9K8cQH7nzPMLJgJ9qY6t
          stance: supports
          locator: CBDB:126803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ViosWB_QoEeLhVphSC0ZDw
        subject_person_id: p_AzAGV5VxNGShzF5k2FBWAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLS_vkyiFjB4DMEfI9DkJw
          claim_id: c_ViosWB_QoEeLhVphSC0ZDw
          source_id: s_17nnSc3NsNqxs15rHZyktX
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_17nnSc3NsNqxs15rHZyktX
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 299132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299132&o=json
            external_identifier: CBDB:299132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AzAGV5VxNGShzF5k2FBWAC
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_E1JXK6p69egqkAtYU6Sqb7
        subject_person_id: p_kboGf7WjCnchfGrLDvxYXA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g8fgMBcgYiG3KaRbQR_fJD
          claim_id: c_E1JXK6p69egqkAtYU6Sqb7
          source_id: s_2FS9UAp66MTpUmmXXL6K7s
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2FS9UAp66MTpUmmXXL6K7s
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 299131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299131&o=json
            external_identifier: CBDB:299131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kboGf7WjCnchfGrLDvxYXA
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_TeS48cjujqET8FHTKUJb4L
        subject_person_id: p_PAEtdeQiDbKPvh24LAFMR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pOE-z68S8F-Q5W7Fga8BXW
          claim_id: c_TeS48cjujqET8FHTKUJb4L
          source_id: s_zP2dXLkJsJnB2D6yjgYhFL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zP2dXLkJsJnB2D6yjgYhFL
            source_type: api_record
            title: 中国历代人物传记资料库：王徤（CBDB 299130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299130&o=json
            external_identifier: CBDB:299130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PAEtdeQiDbKPvh24LAFMR5
        status: active
        display_name: 王徤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王輪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輪 | accepted |
| birth.date | 1507年 | accepted |
| death.date | 1581年 | accepted |
| bio.summary | 王輪（1507年—1581年），明人物。明清進士進士，籍贯蒲州，入仕進士，曾任巡撫、巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AzAGV5VxNGShzF5k2FBWAC | 王珪 | accepted |
| ancestors | p_kboGf7WjCnchfGrLDvxYXA | 王寅 | accepted |
| ancestors | p_PAEtdeQiDbKPvh24LAFMR5 | 王徤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 299132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299132&o=json)
- [中国历代人物传记资料库：王徤（CBDB 299130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299130&o=json)
- [中国历代人物传记资料库：王輪（CBDB 126803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126803&o=json)
- [中国历代人物传记资料库：王寅（CBDB 299131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299131&o=json)
