---
schema: wang-person/v1
id: p_FS8BiVQ7A5TRPBTnfjAmZ6
status: active
merged_into: null
display_name: 王彥民
cbdb_id: 204329
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tvk7Rxrhb2VN5oGk77WHgC
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥民（生于1526年），明人物。明清進士進士，籍贯商丘，入仕進士。（中国历代人物传记资料库 CBDB 204329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fHByC_KIN7m80iIwDyXC75
          claim_id: c_tvk7Rxrhb2VN5oGk77WHgC
          source_id: s_4ndJpFZ4CheHznpW7jyNrP
          stance: supports
          locator: CBDB:204329
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4ndJpFZ4CheHznpW7jyNrP
            source_type: api_record
            title: 中国历代人物传记资料库：王彥民（CBDB 204329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204329&o=json
            external_identifier: CBDB:204329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZJtq7yYUs3BJ46wsb9n4NA
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1526-01-01
            latest: 1526-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KuCeP2xUDN6sLrGA3EiLQ5
          claim_id: c_ZJtq7yYUs3BJ46wsb9n4NA
          source_id: s_4ndJpFZ4CheHznpW7jyNrP
          stance: supports
          locator: CBDB:204329
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source:
            id: s_4ndJpFZ4CheHznpW7jyNrP
            source_type: api_record
            title: 中国历代人物传记资料库：王彥民（CBDB 204329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204329&o=json
            external_identifier: CBDB:204329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P8NwZYHiDdq2ADA9CavFn9
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TV9P4vsz8tbGdeRR2ZeVxF
          claim_id: c_P8NwZYHiDdq2ADA9CavFn9
          source_id: s_4ndJpFZ4CheHznpW7jyNrP
          stance: supports
          locator: CBDB:204329
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1526
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f-qx_VcE4u768SpOQhQcMA
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwmEQL0wzOZCRIOV0vbOxr
          claim_id: c_f-qx_VcE4u768SpOQhQcMA
          source_id: s_n2GonCJoTcA9fgYzXuzMG2
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n2GonCJoTcA9fgYzXuzMG2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗周（CBDB 317545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317545&o=json
            external_identifier: CBDB:317545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N5iAhWP4KE2AcDLMVJFVJe
        status: active
        display_name: 王宗周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0IPMFEOC6TZ6cxjQCAxqle
        subject_person_id: p_4mTgcqgV1YrxCPCjedbhut
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buOrtHHxphxdzrKBEjaBPu
          claim_id: c_0IPMFEOC6TZ6cxjQCAxqle
          source_id: s_7sNgje8q9ptKDQ3Ykodn57
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7sNgje8q9ptKDQ3Ykodn57
            source_type: api_record
            title: 中国历代人物传记资料库：王夢祥（CBDB 317543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317543&o=json
            external_identifier: CBDB:317543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4mTgcqgV1YrxCPCjedbhut
        status: active
        display_name: 王夢祥
        merged_into_person_id: null
    - claim:
        id: c_EZhjS5imLpjB7aWj6yZkFf
        subject_person_id: p_jugC94mpVdjoMWSQQHj1Na
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_km9L8h--iTLKFt1MGKQTLf
          claim_id: c_EZhjS5imLpjB7aWj6yZkFf
          source_id: s_horpE6GT2BpJ8N3YdoiBiw
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_horpE6GT2BpJ8N3YdoiBiw
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 317544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317544&o=json
            external_identifier: CBDB:317544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jugC94mpVdjoMWSQQHj1Na
        status: active
        display_name: 王經
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_-shq1Z6BzxxbcqkcB09cVH
        subject_person_id: p_5AQ57q8Z41Z9KKNQtp5g66
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4g7JR7LjsZli79_2AEUDZ
          claim_id: c_-shq1Z6BzxxbcqkcB09cVH
          source_id: s_Txi3--nmH8k7nVfkwhbgUZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Txi3--nmH8k7nVfkwhbgUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慧民（CBDB 317553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json
            external_identifier: CBDB:317553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5AQ57q8Z41Z9KKNQtp5g66
        status: active
        display_name: 王慧民
        merged_into_person_id: null
    - claim:
        id: c_ub9oEg57nVmhR3FWGzzD_G
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OS9zClhFWGj6GRqwQ2AVuc
          claim_id: c_ub9oEg57nVmhR3FWGzzD_G
          source_id: s_7zfdXGZuYe-2F8Irlxd0xA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7zfdXGZuYe-2F8Irlxd0xA
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 317550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json
            external_identifier: CBDB:317550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        status: active
        display_name: 王秀民
        merged_into_person_id: null
    - claim:
        id: c_NVnNqgsNjesmNtdu385-4o
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dGuAVLco7EADQ1XGJAMxiy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b8pjmnL7xY5tEs7Hkw9PoC
          claim_id: c_NVnNqgsNjesmNtdu385-4o
          source_id: s_ntTkxeA0B0pks4yWNhys0O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ntTkxeA0B0pks4yWNhys0O
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 317548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json
            external_identifier: CBDB:317548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dGuAVLco7EADQ1XGJAMxiy
        status: active
        display_name: 王獻民
        merged_into_person_id: null
    - claim:
        id: c_Lw8hF4qGLDgr8U8-V95fWa
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gNzirGbzFJFud81V2K8nsj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Hl32qIylo_hysTX1kn49e
          claim_id: c_Lw8hF4qGLDgr8U8-V95fWa
          source_id: s_cMaPWGZQNcyp0EUcoFbmTH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cMaPWGZQNcyp0EUcoFbmTH
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 317549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317549&o=json
            external_identifier: CBDB:317549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gNzirGbzFJFud81V2K8nsj
        status: active
        display_name: 王俊民
        merged_into_person_id: null
---

# 王彥民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥民（生于1526年），明人物。明清進士進士，籍贯商丘，入仕進士。（中国历代人物传记资料库 CBDB 204329） | accepted |
| birth.date | 1526年 | accepted |
| name.primary | 王彥民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5iAhWP4KE2AcDLMVJFVJe | 王宗周 | accepted |
| ancestors | p_4mTgcqgV1YrxCPCjedbhut | 王夢祥 | accepted |
| ancestors | p_jugC94mpVdjoMWSQQHj1Na | 王經 | accepted |
| other | p_5AQ57q8Z41Z9KKNQtp5g66 | 王慧民 | accepted |
| other | p_Fnv67uFCSFJ5Sm8ddu8RjV | 王秀民 | accepted |
| other | p_dGuAVLco7EADQ1XGJAMxiy | 王獻民 | accepted |
| other | p_gNzirGbzFJFud81V2K8nsj | 王俊民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慧民（CBDB 317553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json)
- [中国历代人物传记资料库：王經（CBDB 317544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317544&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 317549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317549&o=json)
- [中国历代人物传记资料库：王夢祥（CBDB 317543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317543&o=json)
- [中国历代人物传记资料库：王獻民（CBDB 317548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json)
- [中国历代人物传记资料库：王秀民（CBDB 317550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json)
- [中国历代人物传记资料库：王彥民（CBDB 204329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204329&o=json)
- [中国历代人物传记资料库：王宗周（CBDB 317545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317545&o=json)
