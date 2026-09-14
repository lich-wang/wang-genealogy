---
schema: wang-person/v1
id: p_HFBQavfgQLSJXDLPGZSadz
status: active
merged_into: null
display_name: 王鑰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ga2C5ccPfVshLas5APwc4C
        subject_person_id: p_HFBQavfgQLSJXDLPGZSadz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1fgF1sydd2p4pgUVjy4Cwa
          claim_id: c_Ga2C5ccPfVshLas5APwc4C
          source_id: s_Bjd6sD3A8in1TiKx1FvzA7
          stance: supports
          locator: CBDB:290156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290156）
          source: &a1
            id: s_Bjd6sD3A8in1TiKx1FvzA7
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 290156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json
            external_identifier: CBDB:290156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DsmLYMr6KCpDzKPr17WVvY
        subject_person_id: p_HFBQavfgQLSJXDLPGZSadz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。嘉靖八年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 290156）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UHvgJ1XIeoylapowlWihA4
          claim_id: c_DsmLYMr6KCpDzKPr17WVvY
          source_id: s_Bjd6sD3A8in1TiKx1FvzA7
          stance: supports
          locator: CBDB:290156
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vVE1gNCnjIut8VxVWKadhS
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFBQavfgQLSJXDLPGZSadz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4JWC7pTAK-_vzI28Vnd0n
          claim_id: c_vVE1gNCnjIut8VxVWKadhS
          source_id: s_EeqZxOU2h64d1NdyClYYqt
          stance: supports
          locator: CBDB：兄弟 王鎬（126866）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰 与 王鎬 为同胞（CBDB 记「弟」），王鎬 之父／母即 王鑰 之父／母。
          source:
            id: s_EeqZxOU2h64d1NdyClYYqt
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 290156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json
            external_identifier: CBDB:290156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gGs45wBLrz1PrQ7nJg3Ni8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cjCTyT0sm_hoMHajNQDX4m
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HFBQavfgQLSJXDLPGZSadz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGWMsfuBbT8qI2Nh9FB74Z
          claim_id: c_cjCTyT0sm_hoMHajNQDX4m
          source_id: s_EeqZxOU2h64d1NdyClYYqt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EeqZxOU2h64d1NdyClYYqt
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 290156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json
            external_identifier: CBDB:290156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
        merged_into_person_id: null
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。嘉靖八年進士，籍贯灤州。（中国历代人物传记资料库 CBDB 290156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGs45wBLrz1PrQ7nJg3Ni8 | 王璋 | accepted |
| other | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 290156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json)
