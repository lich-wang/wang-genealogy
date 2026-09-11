---
schema: wang-person/v1
id: p_1gVKGNfjsEagYK2KHtqxi5
status: active
merged_into: null
display_name: 王綯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6cSmJHJ9CBVsExx5u7AFX
        subject_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NVZMHYTN8iNEjFTnKDvMc
          claim_id: c_U6cSmJHJ9CBVsExx5u7AFX
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
          stance: supports
          locator: CBDB:3980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3980）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oejF2ey3g9KDtQrc8UDBFq
        subject_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeMhWgYcMi26njNCYHnw3A
          claim_id: c_oejF2ey3g9KDtQrc8UDBFq
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
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
        id: c_KEpbLq9L2244eRp43ybHEP
        subject_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1134年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sySaZCvWmdeoQCPaM5F8uH
          claim_id: c_KEpbLq9L2244eRp43ybHEP
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
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
        id: c_Ni6UXsFo8JbrEgsFqqUKja
        subject_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綯（1085年—1134年），宋人物。籍贯廬陵，入仕恩蔭、蔭補，曾任太保、太子太師、資政殿大學士。（中国历代人物传记资料库 CBDB 3980）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WrsEVlduYOFuf2Bf24VOw7
          claim_id: c_Ni6UXsFo8JbrEgsFqqUKja
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
          stance: supports
          locator: CBDB:3980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_e6SDMxbycaZxf6Gn6kq738
        status: active
        display_name: 王審禮
        merged_into_person_id: null
  children:
    - claim:
        id: c_CuSLBtodIMRgjU4X8p2PFE
        subject_person_id: p_1gVKGNfjsEagYK2KHtqxi5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ppNrCoxKm2QPkuS8D33fu9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6gp_4gyqVnrwQdbFXikmw
          claim_id: c_CuSLBtodIMRgjU4X8p2PFE
          source_id: s_LNfZbFixLcBQEbaCQLRd6m
          stance: supports
          locator: PersonKinshipInfo：長子（王炎）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ppNrCoxKm2QPkuS8D33fu9
        status: active
        display_name: 王炎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綯 | accepted |
| birth.date | 1085年 | accepted |
| death.date | 1134年 | accepted |
| bio.summary | 王綯（1085年—1134年），宋人物。籍贯廬陵，入仕恩蔭、蔭補，曾任太保、太子太師、資政殿大學士。（中国历代人物传记资料库 CBDB 3980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e6SDMxbycaZxf6Gn6kq738 | 王審禮 | accepted |
| children | p_ppNrCoxKm2QPkuS8D33fu9 | 王炎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綯（CBDB 3980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3980&o=json)
