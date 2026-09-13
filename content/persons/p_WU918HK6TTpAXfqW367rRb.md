---
schema: wang-person/v1
id: p_WU918HK6TTpAXfqW367rRb
status: active
merged_into: null
display_name: 王侊
cbdb_id: 437565
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUNt33vQgCiYv7yroV6p3z
        subject_person_id: p_WU918HK6TTpAXfqW367rRb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侊，宋人物。籍贯金華，曾任將仕郎、北院都監。（中国历代人物传记资料库 CBDB 437565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0zNUIueLcMEmG9LZbQ5UWm
          claim_id: c_UUNt33vQgCiYv7yroV6p3z
          source_id: s_RB86QZ8KLseyowC82CNg3x
          stance: supports
          locator: CBDB:437565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RB86QZ8KLseyowC82CNg3x
            source_type: api_record
            title: 中国历代人物传记资料库：王侊（CBDB 437565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437565&o=json
            external_identifier: CBDB:437565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nPD1JFCtFjqBVaqXKhTA2L
        subject_person_id: p_WU918HK6TTpAXfqW367rRb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6MzxE9Rm1wnxLR3hmHyBZt
          claim_id: c_nPD1JFCtFjqBVaqXKhTA2L
          source_id: s_RB86QZ8KLseyowC82CNg3x
          stance: supports
          locator: CBDB:437565
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_es5wqjHV6g8TqflRXweVuO
        subject_person_id: p_WU918HK6TTpAXfqW367rRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfOLfHltqPp1OPxjG8dd8I
          claim_id: c_es5wqjHV6g8TqflRXweVuO
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: CBDB 双向互证（父 王侊 ⇄ 子 王珹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_t2VA7WS1nJbLWR9WK7ND6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王珹（CBDB 37927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json
            external_identifier: CBDB:37927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sEGDXi7ck4pKNAhddgmbiq
        status: active
        display_name: 王珹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4KIiJeJ8Vh8Pj5aKAkKQVs
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WU918HK6TTpAXfqW367rRb
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PqKaaHDUKXHAh1UvTodUt
          claim_id: c_4KIiJeJ8Vh8Pj5aKAkKQVs
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王侊 ⇄ 高祖;四世祖 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
    - claim:
        id: c_oH4k-jqBIqap9t9-6QgDVW
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WU918HK6TTpAXfqW367rRb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSgFdcFl21mRfjCVb7--Ln
          claim_id: c_oH4k-jqBIqap9t9-6QgDVW
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王侊 ⇄ 曾祖 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
    - claim:
        id: c_igpaPL5fHrfJc4o__Ibbw1
        subject_person_id: p_3qCiu5YYp75Z2KhRimvju5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WU918HK6TTpAXfqW367rRb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vrmVEn1Qa-A7i1K4bUH7sr
          claim_id: c_igpaPL5fHrfJc4o__Ibbw1
          source_id: s_LPrkn5UgY6DTvwHSBFgGQR
          stance: supports
          locator: CBDB 双向互证（孫 王侊 ⇄ 祖父 王渷）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LPrkn5UgY6DTvwHSBFgGQR
            source_type: api_record
            title: 中国历代人物传记资料库：王渷（CBDB 437564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437564&o=json
            external_identifier: CBDB:437564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3qCiu5YYp75Z2KhRimvju5
        status: active
        display_name: 王渷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王侊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王侊，宋人物。籍贯金華，曾任將仕郎、北院都監。（中国历代人物传记资料库 CBDB 437565） | accepted |
| name.primary | 王侊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sEGDXi7ck4pKNAhddgmbiq | 王珹 | accepted |
| ancestors | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |
| ancestors | p_3qCiu5YYp75Z2KhRimvju5 | 王渷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珹（CBDB 37927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json)
- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [中国历代人物传记资料库：王侊（CBDB 437565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437565&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
- [中国历代人物传记资料库：王渷（CBDB 437564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437564&o=json)
