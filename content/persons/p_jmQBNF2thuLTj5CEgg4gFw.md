---
schema: wang-person/v1
id: p_jmQBNF2thuLTj5CEgg4gFw
status: active
merged_into: null
display_name: 王宗載
cbdb_id: 205060
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PjtcSY9dM7DmA6ZAE88Z9Q
        subject_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗載（生于1536年），明人物。明清進士進士，籍贯京山，入仕進士，曾任僉都御史、知縣、左都御史。（中国历代人物传记资料库 CBDB 205060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CVfLtS9agIE-d07NAJrzGv
          claim_id: c_PjtcSY9dM7DmA6ZAE88Z9Q
          source_id: s_ByuZWvZgcdWpmdoD3XyGEN
          stance: supports
          locator: CBDB:205060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ByuZWvZgcdWpmdoD3XyGEN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗載（CBDB 205060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205060&o=json
            external_identifier: CBDB:205060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aUN7yq7VMPFdhsBgsHX4wY
        subject_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1536-01-01
            latest: 1536-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_81RBDQ5zYvvLFAkUSK6FEv
          claim_id: c_aUN7yq7VMPFdhsBgsHX4wY
          source_id: s_ByuZWvZgcdWpmdoD3XyGEN
          stance: supports
          locator: CBDB:205060
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source:
            id: s_ByuZWvZgcdWpmdoD3XyGEN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗載（CBDB 205060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205060&o=json
            external_identifier: CBDB:205060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AeVCJNxHfaAFkM98fbMj7S
        subject_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RdFKfkSs5mgkADKg3sGMX5
          claim_id: c_AeVCJNxHfaAFkM98fbMj7S
          source_id: s_ByuZWvZgcdWpmdoD3XyGEN
          stance: supports
          locator: CBDB:205060
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1536
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z3jPlKRTMtGLw-KIj72a3r
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0Kj6li0EgP9quHYvhW5kX
          claim_id: c_z3jPlKRTMtGLw-KIj72a3r
          source_id: s_cMnNa2PZHz5zfAfcQ4NsVj
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cMnNa2PZHz5zfAfcQ4NsVj
            source_type: api_record
            title: 中国历代人物传记资料库：王宋（CBDB 327776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327776&o=json
            external_identifier: CBDB:327776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fHWLZSGPRrVehEZSh8KThr
        status: active
        display_name: 王宋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_na7ZRHEaBnY-_OS2_QvKNu
        subject_person_id: p_ye61hDgNCR4CMA9GFi1cdB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1LpAvowtDF5mbgiCotaFl
          claim_id: c_na7ZRHEaBnY-_OS2_QvKNu
          source_id: s_rRfXVPJiCg16iy4L1MzbPB
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rRfXVPJiCg16iy4L1MzbPB
            source_type: api_record
            title: 中国历代人物传记资料库：王希旦（CBDB 327772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327772&o=json
            external_identifier: CBDB:327772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ye61hDgNCR4CMA9GFi1cdB
        status: active
        display_name: 王希旦
        merged_into_person_id: null
    - claim:
        id: c_9n9vMkp-lTVlffFPa7hOA9
        subject_person_id: p_ysj9zCMvPkKZNwe25QEque
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3EBS2K6Hzf1gDCygfC7XB
          claim_id: c_9n9vMkp-lTVlffFPa7hOA9
          source_id: s_gg3t4hjmB7YtPg7AXqVdZm
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gg3t4hjmB7YtPg7AXqVdZm
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 327773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327773&o=json
            external_identifier: CBDB:327773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ysj9zCMvPkKZNwe25QEque
        status: active
        display_name: 王大有
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗載（生于1536年），明人物。明清進士進士，籍贯京山，入仕進士，曾任僉都御史、知縣、左都御史。（中国历代人物传记资料库 CBDB 205060） | accepted |
| birth.date | 1536年 | accepted |
| name.primary | 王宗載 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fHWLZSGPRrVehEZSh8KThr | 王宋 | accepted |
| ancestors | p_ye61hDgNCR4CMA9GFi1cdB | 王希旦 | accepted |
| ancestors | p_ysj9zCMvPkKZNwe25QEque | 王大有 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 327773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327773&o=json)
- [中国历代人物传记资料库：王宋（CBDB 327776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327776&o=json)
- [中国历代人物传记资料库：王希旦（CBDB 327772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327772&o=json)
- [中国历代人物传记资料库：王宗載（CBDB 205060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205060&o=json)
