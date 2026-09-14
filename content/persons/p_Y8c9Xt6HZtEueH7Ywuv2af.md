---
schema: wang-person/v1
id: p_Y8c9Xt6HZtEueH7Ywuv2af
status: active
merged_into: null
display_name: 王啟
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eKj26djLc3aDunZKFtMbbA
        subject_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iAXBpFoGUahVthzVLzvtpb
          claim_id: c_eKj26djLc3aDunZKFtMbbA
          source_id: s_EX6GY56s4NLBFstE9A8ZtM
          stance: supports
          locator: CBDB:126669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126669）
          source: &a1
            id: s_EX6GY56s4NLBFstE9A8ZtM
            source_type: api_record
            title: 中国历代人物传记资料库：王啟（CBDB 126669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126669&o=json
            external_identifier: CBDB:126669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdv3RfEBMPLdFynjpnY7Dd
        subject_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟，明人物。明清進士進士，籍贯黃巖，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 126669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CnJbWfoS066B9umW8_hLWi
          claim_id: c_kdv3RfEBMPLdFynjpnY7Dd
          source_id: s_EX6GY56s4NLBFstE9A8ZtM
          stance: supports
          locator: CBDB:126669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_bGA9f5CTCFCRJmcWcUEGyG
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_z-BT4JUgL0S0e981WP9TuD
        subject_person_id: p_HPbqm6VJ9TFK5Zur8BEF7g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3L7NAaWbKh2lXZ9LIpFKN
          claim_id: c_z-BT4JUgL0S0e981WP9TuD
          source_id: s_36LxzTfHdEz1tdpdFQ5Yj9
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_36LxzTfHdEz1tdpdFQ5Yj9
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 260163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260163&o=json
            external_identifier: CBDB:260163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HPbqm6VJ9TFK5Zur8BEF7g
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_BFgFaxrvXymJwmAJsKP3Y4
        subject_person_id: p_ZJZEU2o6fnLhGTubodr83m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SbyjYJ0pLe1z1CSV_dVHw_
          claim_id: c_BFgFaxrvXymJwmAJsKP3Y4
          source_id: s_XuJm4dnGVC1eqrJ3fu3gFL
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XuJm4dnGVC1eqrJ3fu3gFL
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 260162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260162&o=json
            external_identifier: CBDB:260162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZJZEU2o6fnLhGTubodr83m
        status: active
        display_name: 王璉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_mVSvHbqw1ygOw3M7KCOJjz
        subject_person_id: p_29ZocSe1Lr722SWiwgAGcj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYMC1i9ln372155fxpRrOb
          claim_id: c_mVSvHbqw1ygOw3M7KCOJjz
          source_id: s__XLzl09PSJlVkci3RmjHWw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126669 王啟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_sp2w0-3Yd95DI9cu8BgHq5
        subject_person_id: p_QWHq18dFGk2nWKe7dM4HTm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_poFLtomFA5hIDlwFW77Fmu
          claim_id: c_sp2w0-3Yd95DI9cu8BgHq5
          source_id: s_odhU9vEq_udJGvc3ShiE2u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126669 王啟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Y3Yqv21qnJeG8mhhS7odFX
        subject_person_id: p_QfuWsMtbTaebxWsjV3ST7r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kF0E2r4S07FXwYLgSQzhZR
          claim_id: c_Y3Yqv21qnJeG8mhhS7odFX
          source_id: s_OaNAAnPKN57n1y5pFB3xLW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126669 王啟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王啟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟 | accepted |
| bio.summary | 王啟，明人物。明清進士進士，籍贯黃巖，入仕進士，曾任知縣、縣知縣。（中国历代人物传记资料库 CBDB 126669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGA9f5CTCFCRJmcWcUEGyG | 王本 | accepted |
| ancestors | p_HPbqm6VJ9TFK5Zur8BEF7g | 王欽 | accepted |
| ancestors | p_ZJZEU2o6fnLhGTubodr83m | 王璉 | accepted |
| other | p_29ZocSe1Lr722SWiwgAGcj | 王桓 | accepted |
| other | p_QWHq18dFGk2nWKe7dM4HTm | 王根 | accepted |
| other | p_QfuWsMtbTaebxWsjV3ST7r | 王校 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 260164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260164&o=json)
- [中国历代人物传记资料库：王根（CBDB 260171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260171&o=json)
- [中国历代人物传记资料库：王桓（CBDB 260170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json)
- [中国历代人物传记资料库：王璉（CBDB 260162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260162&o=json)
- [中国历代人物传记资料库：王啟（CBDB 126669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126669&o=json)
- [中国历代人物传记资料库：王欽（CBDB 260163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260163&o=json)
- [中国历代人物传记资料库：王校（CBDB 260169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260169&o=json)
