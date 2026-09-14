---
schema: wang-person/v1
id: p_MV5sBFSTHxBDSg4PfD9WaB
status: active
merged_into: null
display_name: 王紀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLqrLDG73FaYK549W49WRR
        subject_person_id: p_MV5sBFSTHxBDSg4PfD9WaB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cFYUoMzKCiSX5JvAhtZJxx
          claim_id: c_KLqrLDG73FaYK549W49WRR
          source_id: s_w8GiLs8x4b8tDreFt6Gfs4
          stance: supports
          locator: CBDB:275695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275695）
          source: &a1
            id: s_w8GiLs8x4b8tDreFt6Gfs4
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 275695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275695&o=json
            external_identifier: CBDB:275695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bz4HrEJfmoWRpqzvcoGddZ
        subject_person_id: p_MV5sBFSTHxBDSg4PfD9WaB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。弘治十八年進士，籍贯大興，曾任教授。（中国历代人物传记资料库 CBDB 275695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uMYv92ri_H3wnb0DvXBUfc
          claim_id: c_Bz4HrEJfmoWRpqzvcoGddZ
          source_id: s_w8GiLs8x4b8tDreFt6Gfs4
          stance: supports
          locator: CBDB:275695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OiIXM2dVrki1eeGEEmrscU
        subject_person_id: p_MV5sBFSTHxBDSg4PfD9WaB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Td8aSiPoW9PKF48tkv2vXs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQ62ZtptS2l5UbkdAWi7SZ
          claim_id: c_OiIXM2dVrki1eeGEEmrscU
          source_id: s_w8GiLs8x4b8tDreFt6Gfs4
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Td8aSiPoW9PKF48tkv2vXs
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_iNfK-WqXSFzsI642Jj4mxC
        subject_person_id: p_MV5sBFSTHxBDSg4PfD9WaB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V9g86SahhFrPBAKxFxetKo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rGHLFEQZ1e2G-EFQ4JPJ_
          claim_id: c_iNfK-WqXSFzsI642Jj4mxC
          source_id: s_D6PYMwgRDNU9ZT8jlPSw_y
          stance: supports
          locator: CBDB：兄弟 王瑤（201654）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王瑤 为同胞（CBDB 记「兄」），王瑤 之父／母即 王璉 之父／母。
          source:
            id: s_D6PYMwgRDNU9ZT8jlPSw_y
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 275701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275701&o=json
            external_identifier: CBDB:275701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V9g86SahhFrPBAKxFxetKo
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。弘治十八年進士，籍贯大興，曾任教授。（中国历代人物传记资料库 CBDB 275695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Td8aSiPoW9PKF48tkv2vXs | 王瑤 | accepted |
| children | p_V9g86SahhFrPBAKxFxetKo | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 275695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275695&o=json)
- [中国历代人物传记资料库：王璉（CBDB 275701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275701&o=json)
