---
schema: wang-person/v1
id: p_e6SDMxbycaZxf6Gn6kq738
status: active
merged_into: null
display_name: 王審禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kzpFA7G5zG5zsEW9Gjnhn
        subject_person_id: p_e6SDMxbycaZxf6Gn6kq738
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GmZjEvwAkQ833dQv315pno
          claim_id: c_3kzpFA7G5zG5zsEW9Gjnhn
          source_id: s_fa2GTrgEcWmnT634HeQFSe
          stance: supports
          locator: CBDB:12128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12128）
          source: &a1
            id: s_fa2GTrgEcWmnT634HeQFSe
            source_type: api_record
            title: 中国历代人物传记资料库：王審禮（CBDB 12128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12128&o=json
            external_identifier: CBDB:12128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8H1LS5cFLaEi5KKJCs7iQX
        subject_person_id: p_e6SDMxbycaZxf6Gn6kq738
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮，宋人物。籍贯安陽，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1CHm874F3NBngWQtc6ib37
          claim_id: c_8H1LS5cFLaEi5KKJCs7iQX
          source_id: s_fa2GTrgEcWmnT634HeQFSe
          stance: supports
          locator: CBDB:12128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aSN1nyONTAjMRUEk88e0A3
        subject_person_id: p_2uCHcfYqGuUAgEGtf9J4Ma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6SDMxbycaZxf6Gn6kq738
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8XeDiufTEZjZrAAKgSntUG
          claim_id: c_aSN1nyONTAjMRUEk88e0A3
          source_id: s_fa2GTrgEcWmnT634HeQFSe
          stance: supports
          locator: CBDB 双向互证（父 王東珣 ⇄ 子 王審禮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_2uCHcfYqGuUAgEGtf9J4Ma
        status: active
        display_name: 王東珣
        merged_into_person_id: null
  children:
    - claim:
        id: c_mCLIU2d23-mFOxiXwyoMrh
        subject_person_id: p_e6SDMxbycaZxf6Gn6kq738
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_suk7AgvaUI844xAmp8RrHr
          claim_id: c_mCLIU2d23-mFOxiXwyoMrh
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
          stance: supports
          locator: PersonKinshipInfo：父（王審禮）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LNfZbFixLcBQEbaCQLRd6m
            source_type: api_record
            title: 中国历代人物传记资料库：王綯（CBDB 3980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3980&o=json
            external_identifier: CBDB:3980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1gVKGNfjsEagYK2KHtqxi5
        status: active
        display_name: 王綯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王審禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審禮 | accepted |
| bio.summary | 王審禮，宋人物。籍贯安陽，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2uCHcfYqGuUAgEGtf9J4Ma | 王東珣 | accepted |
| children | p_1gVKGNfjsEagYK2KHtqxi5 | 王綯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王審禮（CBDB 12128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12128&o=json)
- [中国历代人物传记资料库：王綯（CBDB 3980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3980&o=json)
