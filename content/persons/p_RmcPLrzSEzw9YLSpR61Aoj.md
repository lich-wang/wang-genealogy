---
schema: wang-person/v1
id: p_RmcPLrzSEzw9YLSpR61Aoj
status: active
merged_into: null
display_name: 王志
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_58hoMNFf6prGhdAtU9xbsz
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kwUHceeHFDprf7buvCeiF1
          claim_id: c_58hoMNFf6prGhdAtU9xbsz
          source_id: s_PTGMdun9M5vLdQniQRKQWG
          stance: supports
          locator: CBDB:207176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207176）
          source: &a1
            id: s_PTGMdun9M5vLdQniQRKQWG
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 207176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207176&o=json
            external_identifier: CBDB:207176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7YCmNih6bt6tKqfWA5ZdaK
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1560年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HEWcKipjY1FnBCJxQtB1wv
          claim_id: c_7YCmNih6bt6tKqfWA5ZdaK
          source_id: s_PTGMdun9M5vLdQniQRKQWG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q2Y3MAxsSosGRexhbxFsxV
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rYxHxCNdaTskK5HLdx6ips
          claim_id: c_q2Y3MAxsSosGRexhbxFsxV
          source_id: s_PTGMdun9M5vLdQniQRKQWG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zhABF7kTAkloR8ZhiYQI3H
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2RVdQXVc5dFpLTBHLLa8fr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rGtIzLlQoaQ0ml1E-DNNFd
          claim_id: c_zhABF7kTAkloR8ZhiYQI3H
          source_id: s_bsQUpoeTL1H4P9c67YG1QW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bsQUpoeTL1H4P9c67YG1QW
            source_type: api_record
            title: 中国历代人物传记资料库：王進第（CBDB 228978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228978&o=json
            external_identifier: CBDB:228978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2RVdQXVc5dFpLTBHLLa8fr
        status: active
        display_name: 王進第
        merged_into_person_id: null
    - claim:
        id: c_Lff6ZWz6KVCZ2RPDOvGdt6
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VtwA47iQeQky7CG25jomj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQa4xPbtqCX77at3F5KRnU
          claim_id: c_Lff6ZWz6KVCZ2RPDOvGdt6
          source_id: s_ukrFC9SbiKhkTtfvaAs7xA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ukrFC9SbiKhkTtfvaAs7xA
            source_type: api_record
            title: 中国历代人物传记资料库：王選第（CBDB 228980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228980&o=json
            external_identifier: CBDB:228980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3VtwA47iQeQky7CG25jomj
        status: active
        display_name: 王選第
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_alw_XEMlo1AfOAc1Ms94eE
        subject_person_id: p_cen6CGnbrNWM2fBn9EwD5L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fv7UIXaBESK0CVuSCUjggs
          claim_id: c_alw_XEMlo1AfOAc1Ms94eE
          source_id: s_E14qDM7qQ84s51kCMHP6Nn
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E14qDM7qQ84s51kCMHP6Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 228972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228972&o=json
            external_identifier: CBDB:228972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cen6CGnbrNWM2fBn9EwD5L
        status: active
        display_name: 王釗
        merged_into_person_id: null
    - claim:
        id: c_Cvr3DlQCmNQBrmgtb9a9NL
        subject_person_id: p_TW5NN4LmxeJdR69nfsD96o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mcQBTkKBhDpFNsGeK8Jc9N
          claim_id: c_Cvr3DlQCmNQBrmgtb9a9NL
          source_id: s_qSYHAoj4LnHGpV3RqwaHNh
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qSYHAoj4LnHGpV3RqwaHNh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 228971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228971&o=json
            external_identifier: CBDB:228971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TW5NN4LmxeJdR69nfsD96o
        status: active
        display_name: 王廷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| birth.date | 1560年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2RVdQXVc5dFpLTBHLLa8fr | 王進第 | accepted |
| children | p_3VtwA47iQeQky7CG25jomj | 王選第 | accepted |
| ancestors | p_cen6CGnbrNWM2fBn9EwD5L | 王釗 | accepted |
| ancestors | p_TW5NN4LmxeJdR69nfsD96o | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進第（CBDB 228978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228978&o=json)
- [中国历代人物传记资料库：王廷（CBDB 228971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228971&o=json)
- [中国历代人物传记资料库：王選第（CBDB 228980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228980&o=json)
- [中国历代人物传记资料库：王釗（CBDB 228972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228972&o=json)
- [中国历代人物传记资料库：王志（CBDB 207176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207176&o=json)
