---
schema: wang-person/v1
id: p_8P5PCH5aTQeZpUfSAM9z5q
status: active
merged_into: null
display_name: 王儼
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PY2XyfQQr1XAwT45QVCYvR
        subject_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3KTLf856uJAL3LbNk559mV
          claim_id: c_PY2XyfQQr1XAwT45QVCYvR
          source_id: s_UJukuLVpsQ9Wde4yX2z7fn
          stance: supports
          locator: CBDB:126889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126889）
          source: &a1
            id: s_UJukuLVpsQ9Wde4yX2z7fn
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126889&o=json
            external_identifier: CBDB:126889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M237NNx28rckVFG2TqGwMZ
        subject_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
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
        - id: cs_LCJwCWKSsHZpVoMXHzc2pQ
          claim_id: c_M237NNx28rckVFG2TqGwMZ
          source_id: s_UJukuLVpsQ9Wde4yX2z7fn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bXkFTYuTFHtUyV4blEix18
        subject_person_id: p_1G549N2d23KvV8NGLNV5ym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHm8F9Me1Zsl9FLjFs7y5Y
          claim_id: c_bXkFTYuTFHtUyV4blEix18
          source_id: s_fHVpEmNtpRDNxz599Hg8re
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fHVpEmNtpRDNxz599Hg8re
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 244025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244025&o=json
            external_identifier: CBDB:244025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1G549N2d23KvV8NGLNV5ym
        status: active
        display_name: 王致中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9IsTPA2mYVNUb5lxJVIAS_
        subject_person_id: p_YhQdL9W3hbyh6iSy4bBDfB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykuxM95igZmZbRb9W_uXW5
          claim_id: c_9IsTPA2mYVNUb5lxJVIAS_
          source_id: s_31f85X6C4bmpHaj1kjLyfC
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_31f85X6C4bmpHaj1kjLyfC
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 244024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244024&o=json
            external_identifier: CBDB:244024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YhQdL9W3hbyh6iSy4bBDfB
        status: active
        display_name: 王琛
        merged_into_person_id: null
    - claim:
        id: c_imQsHD-klt-W9WME7Wd74m
        subject_person_id: p_s2csbXjocsYcsXXrsyC9LW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8P5PCH5aTQeZpUfSAM9z5q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFyYOLlTQUqbao0yIEnv84
          claim_id: c_imQsHD-klt-W9WME7Wd74m
          source_id: s_isAYGiMV7CgqSnZYqQ1W6h
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_isAYGiMV7CgqSnZYqQ1W6h
            source_type: api_record
            title: 中国历代人物传记资料库：王子民（CBDB 244023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244023&o=json
            external_identifier: CBDB:244023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_s2csbXjocsYcsXXrsyC9LW
        status: active
        display_name: 王子民
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1G549N2d23KvV8NGLNV5ym | 王致中 | accepted |
| ancestors | p_YhQdL9W3hbyh6iSy4bBDfB | 王琛 | accepted |
| ancestors | p_s2csbXjocsYcsXXrsyC9LW | 王子民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 244024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244024&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126889&o=json)
- [中国历代人物传记资料库：王致中（CBDB 244025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244025&o=json)
- [中国历代人物传记资料库：王子民（CBDB 244023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244023&o=json)
