---
schema: wang-person/v1
id: p_gVNWQ2fsh1sB6kRPqwK7Rn
status: active
merged_into: null
display_name: 王儉
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUZJHxYRxBkZsoz1UY4Sck
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdbFYda5LJXR2AAGLm5n4A
          claim_id: c_QUZJHxYRxBkZsoz1UY4Sck
          source_id: s_K4kByPRt3BdmribnvmzKo4
          stance: supports
          locator: CBDB:207835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207835）
          source: &a1
            id: s_K4kByPRt3BdmribnvmzKo4
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 207835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207835&o=json
            external_identifier: CBDB:207835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4Bp3BQqA7YoBpFFyewV8v5
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1411年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHYFzdhBvkNpKUwNoYBPdU
          claim_id: c_4Bp3BQqA7YoBpFFyewV8v5
          source_id: s_K4kByPRt3BdmribnvmzKo4
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
        id: c_1b24v2yhvCtzhgnym4GMBs
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉（生于1411年），明人物。明清進士進士，籍贯銅梁，入仕進士，曾任左僉都御史。（中国历代人物传记资料库 CBDB 207835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A0c1VM7zVsMMP38G-tXDfv
          claim_id: c_1b24v2yhvCtzhgnym4GMBs
          source_id: s_K4kByPRt3BdmribnvmzKo4
          stance: supports
          locator: CBDB:207835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJPsioIIWHmSmanfz5X2qf
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nK0ltOWpCX8GdGIEglacgT
          claim_id: c_zJPsioIIWHmSmanfz5X2qf
          source_id: s_uP29PrTEmYii49WH6cPBB1
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uP29PrTEmYii49WH6cPBB1
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 236828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json
            external_identifier: CBDB:236828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tJYqTsbpAy0gIARNTvsV88
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LX473TkhjNhdVPDnDKAqb
          claim_id: c_tJYqTsbpAy0gIARNTvsV88
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3QYpbUb1KA1PLDW4B4gFnk
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 236827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json
            external_identifier: CBDB:236827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jgukCQ6yXT1KHa2JP2QrQF
        status: active
        display_name: 王勝宗
        merged_into_person_id: null
    - claim:
        id: c_93YjcdRvpvGXHfNeIC8qPX
        subject_person_id: p_Y2o5YKECbkD2nr7fLsSjxi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTUQz-mwZOsfjrd8ZiDRvE
          claim_id: c_93YjcdRvpvGXHfNeIC8qPX
          source_id: s_N5Dpuj1GVLjs8addUr7yKa
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N5Dpuj1GVLjs8addUr7yKa
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 236826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236826&o=json
            external_identifier: CBDB:236826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y2o5YKECbkD2nr7fLsSjxi
        status: active
        display_name: 王政
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_m3sqs8vR54qKPT7T_KvObD
        subject_person_id: p_2e1xDrBQLLaowuNAJfVekM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fd0Dfq-FgmOAeYnjN6YHw9
          claim_id: c_m3sqs8vR54qKPT7T_KvObD
          source_id: s_rH46g1QQ7YVcDcyZX-S70T
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rH46g1QQ7YVcDcyZX-S70T
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 236835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json
            external_identifier: CBDB:236835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2e1xDrBQLLaowuNAJfVekM
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_qhmZJ3fnhbqILq9D9O7ASp
        subject_person_id: p_HNgP9tS8ifQnN38gR5s4MN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WNBkLcFvQcRpS9NMylfURE
          claim_id: c_qhmZJ3fnhbqILq9D9O7ASp
          source_id: s_B47ama7cQh-wvF7fp4SzwP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B47ama7cQh-wvF7fp4SzwP
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 236836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236836&o=json
            external_identifier: CBDB:236836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNgP9tS8ifQnN38gR5s4MN
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_gnL9YXmgPRD5zGvODy7aQ5
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcLkJOmPdRI255fP78cVCm
          claim_id: c_gnL9YXmgPRD5zGvODy7aQ5
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rIDOS-_zr7GtRGTrOIw75Z
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jfA2e6jVhosQvNeWUANYcD
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_naD7P1UP8ne_kSixbvmZPv
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kKyKSR6858R5mGvRyVf9db
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NJqZO7L9GUEJaV3h2yfaz
          claim_id: c_naD7P1UP8ne_kSixbvmZPv
          source_id: s_0MzUOYmYANbmPjZFmiWcpk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0MzUOYmYANbmPjZFmiWcpk
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 236832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json
            external_identifier: CBDB:236832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kKyKSR6858R5mGvRyVf9db
        status: active
        display_name: 王綱
        merged_into_person_id: null
    - claim:
        id: c_K1fDL7qMEHvMLAbL1aJ43P
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y247M5EhFwCATM6FAX40jo
          claim_id: c_K1fDL7qMEHvMLAbL1aJ43P
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v9DfxNZ6f9Fw8mA3cUh-CU
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qAa8JxZp1vN3kNe16HV7Ny
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_w737SNUmP-5AdosdPNX9yR
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rfDScpjpktkzFSX1X2TGw7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Es9i77R79cIUNd07fc3T1g
          claim_id: c_w737SNUmP-5AdosdPNX9yR
          source_id: s_z-sSBPydWxELvDGPwMRRFI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z-sSBPydWxELvDGPwMRRFI
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 236838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json
            external_identifier: CBDB:236838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfDScpjpktkzFSX1X2TGw7
        status: active
        display_name: 王脩
        merged_into_person_id: null
    - claim:
        id: c_7feFjgBR5TcNwIUR0SPmXV
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tE7YPkWSJ8ET97rrVnMNzz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11pMgPbZjGXyKYiL5aRJcw
          claim_id: c_7feFjgBR5TcNwIUR0SPmXV
          source_id: s_9lc8FMjBo1Xg454IDqZ18k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9lc8FMjBo1Xg454IDqZ18k
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 236833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236833&o=json
            external_identifier: CBDB:236833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tE7YPkWSJ8ET97rrVnMNzz
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| birth.date | 1411年 | accepted |
| bio.summary | 王儉（生于1411年），明人物。明清進士進士，籍贯銅梁，入仕進士，曾任左僉都御史。（中国历代人物传记资料库 CBDB 207835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| ancestors | p_jgukCQ6yXT1KHa2JP2QrQF | 王勝宗 | accepted |
| ancestors | p_Y2o5YKECbkD2nr7fLsSjxi | 王政 | accepted |
| other | p_2e1xDrBQLLaowuNAJfVekM | 王侃 | accepted |
| other | p_HNgP9tS8ifQnN38gR5s4MN | 王偉 | accepted |
| other | p_jfA2e6jVhosQvNeWUANYcD | 王儒 | accepted |
| other | p_kKyKSR6858R5mGvRyVf9db | 王綱 | accepted |
| other | p_qAa8JxZp1vN3kNe16HV7Ny | 王佑 | accepted |
| other | p_rfDScpjpktkzFSX1X2TGw7 | 王脩 | accepted |
| other | p_tE7YPkWSJ8ET97rrVnMNzz | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 236832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json)
- [中国历代人物传记资料库：王儉（CBDB 207835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207835&o=json)
- [中国历代人物传记资料库：王侃（CBDB 236835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236835&o=json)
- [中国历代人物传记资料库：王儒（CBDB 236837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json)
- [中国历代人物传记资料库：王勝宗（CBDB 236827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json)
- [中国历代人物传记资料库：王偉（CBDB 236836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236836&o=json)
- [中国历代人物传记资料库：王脩（CBDB 236838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json)
- [中国历代人物传记资料库：王佑（CBDB 236834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json)
- [中国历代人物传记资料库：王政（CBDB 236826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236826&o=json)
- [中国历代人物传记资料库：王仲亨（CBDB 236828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236828&o=json)
- [中国历代人物传记资料库：王佐（CBDB 236833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236833&o=json)
