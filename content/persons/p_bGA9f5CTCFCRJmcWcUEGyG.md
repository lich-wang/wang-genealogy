---
schema: wang-person/v1
id: p_bGA9f5CTCFCRJmcWcUEGyG
status: active
merged_into: null
display_name: 王本
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDjxqD7AYwESXa3iGeEyA4
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6uJFHd464nzazQJoFSX8hw
          claim_id: c_tDjxqD7AYwESXa3iGeEyA4
          source_id: s_mjHCQZGMifUakFPrgWxycJ
          stance: supports
          locator: CBDB:260164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260164）
          source: &a1
            id: s_mjHCQZGMifUakFPrgWxycJ
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 260164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260164&o=json
            external_identifier: CBDB:260164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Ed8RNYbKdE9syknZQH23P
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kV-4YS29vT9E6h34ph1llH
          claim_id: c_6Ed8RNYbKdE9syknZQH23P
          source_id: s_mjHCQZGMifUakFPrgWxycJ
          stance: supports
          locator: CBDB:260164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_srH2GhhWzU-eCgH51mjlaB
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8OYgeFdrsqpgHsWvrMlQ4
          claim_id: c_srH2GhhWzU-eCgH51mjlaB
          source_id: s_mjHCQZGMifUakFPrgWxycJ
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y8c9Xt6HZtEueH7Ywuv2af
        status: active
        display_name: 王啟
        merged_into_person_id: null
    - claim:
        id: c_IG3NAMMTGj3aqcVZnGsfZW
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_29ZocSe1Lr722SWiwgAGcj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dVbgrTtTYO3J71eDWD7Gfv
          claim_id: c_IG3NAMMTGj3aqcVZnGsfZW
          source_id: s__XLzl09PSJlVkci3RmjHWw
          stance: supports
          locator: CBDB：兄弟 王啟（126669）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王桓 与 王啟 为同胞（CBDB 记「弟」），王啟 之父／母即 王桓 之父／母。
          source:
            id: s__XLzl09PSJlVkci3RmjHWw
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 260170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json
            external_identifier: CBDB:260170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_29ZocSe1Lr722SWiwgAGcj
        status: active
        display_name: 王桓
        merged_into_person_id: null
    - claim:
        id: c_7VIoTC-gZ5kUHSx4dURDsA
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RlUdrJzGNgh2G98qxP-fyd
          claim_id: c_7VIoTC-gZ5kUHSx4dURDsA
          source_id: s_odhU9vEq_udJGvc3ShiE2u
          stance: supports
          locator: CBDB：兄弟 王啟（126669）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王根 与 王啟 为同胞（CBDB 记「兄」），王啟 之父／母即 王根 之父／母。
          source:
            id: s_odhU9vEq_udJGvc3ShiE2u
            source_type: api_record
            title: 中国历代人物传记资料库：王根（CBDB 260171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json
            external_identifier: CBDB:260171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QWHq18dFGk2nWKe7dM4HTm
        status: active
        display_name: 王根
        merged_into_person_id: null
    - claim:
        id: c_Trc8n0n6bNUZlufdqL1J_o
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QfuWsMtbTaebxWsjV3ST7r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQLvkHeHbdx50cW0Gkeflc
          claim_id: c_Trc8n0n6bNUZlufdqL1J_o
          source_id: s_OaNAAnPKN57n1y5pFB3xLW
          stance: supports
          locator: CBDB：兄弟 王啟（126669）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王校 与 王啟 为同胞（CBDB 记「弟」），王啟 之父／母即 王校 之父／母。
          source:
            id: s_OaNAAnPKN57n1y5pFB3xLW
            source_type: api_record
            title: 中国历代人物传记资料库：王校（CBDB 260169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260169&o=json
            external_identifier: CBDB:260169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QfuWsMtbTaebxWsjV3ST7r
        status: active
        display_name: 王校
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | 王本，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Y8c9Xt6HZtEueH7Ywuv2af | 王啟 | accepted |
| children | p_29ZocSe1Lr722SWiwgAGcj | 王桓 | accepted |
| children | p_QWHq18dFGk2nWKe7dM4HTm | 王根 | accepted |
| children | p_QfuWsMtbTaebxWsjV3ST7r | 王校 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 260164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260164&o=json)
- [中国历代人物传记资料库：王根（CBDB 260171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json)
- [中国历代人物传记资料库：王桓（CBDB 260170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json)
- [中国历代人物传记资料库：王校（CBDB 260169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260169&o=json)
