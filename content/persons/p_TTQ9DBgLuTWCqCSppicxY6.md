---
schema: wang-person/v1
id: p_TTQ9DBgLuTWCqCSppicxY6
status: active
merged_into: null
display_name: 王子謨
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efBX7rus28Jvw2DYqiPLdM
        subject_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q5pg4UedRCmmcjdNQBbfyw
          claim_id: c_efBX7rus28Jvw2DYqiPLdM
          source_id: s_4VjrGJcfpDyV4nvmXcKvy4
          stance: supports
          locator: CBDB:201582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201582）
          source: &a1
            id: s_4VjrGJcfpDyV4nvmXcKvy4
            source_type: api_record
            title: 中国历代人物传记资料库：王子謨（CBDB 201582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201582&o=json
            external_identifier: CBDB:201582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BeVKV4cNX18ZGRVUJAM6MA
        subject_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zQuYDyoDuZXwoTbHbT9aLm
          claim_id: c_BeVKV4cNX18ZGRVUJAM6MA
          source_id: s_4VjrGJcfpDyV4nvmXcKvy4
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
        id: c_9DNG62VtE6X5ECyF6ZEqxG
        subject_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謨（生于1467年），明人物。弘治十八年進士，籍贯淳安，入仕進士。（中国历代人物传记资料库 CBDB 201582）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DIhnSoT9a12qpOmaEZxLdy
          claim_id: c_9DNG62VtE6X5ECyF6ZEqxG
          source_id: s_4VjrGJcfpDyV4nvmXcKvy4
          stance: supports
          locator: CBDB:201582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sqWLWdpV-S0GVnoZzZs5W8
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qv4sd8FRor4ze-oLCh373W
          claim_id: c_sqWLWdpV-S0GVnoZzZs5W8
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iUy6A5khPP9v4spaijJUD3
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 267617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json
            external_identifier: CBDB:267617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aAxnpkCu394RKmhcdBzMvL
        status: active
        display_name: 王本宗
        merged_into_person_id: null
    - claim:
        id: c_jvUx3vMOHUDSrjr12II_Xj
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5kQiZb8czqPtU7kDIPaCIp
          claim_id: c_jvUx3vMOHUDSrjr12II_Xj
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZJr2B182obDDpCUkuEPhP7
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 267618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json
            external_identifier: CBDB:267618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B4er96qGp4uN4mnMQC97RG
        status: active
        display_name: 王志善
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_mOlGasyEVRDfIvIM8Um9BL
        subject_person_id: p_GAScAhQ4S5kNKYEH1hjeS7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJ7_1tcKo-zHmNw9ySfqtp
          claim_id: c_mOlGasyEVRDfIvIM8Um9BL
          source_id: s_nx8ahTg6yMDNPNxFDZVoIz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201582 王子謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nx8ahTg6yMDNPNxFDZVoIz
            source_type: api_record
            title: 中国历代人物传记资料库：王子謹（CBDB 267624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json
            external_identifier: CBDB:267624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GAScAhQ4S5kNKYEH1hjeS7
        status: active
        display_name: 王子謹
        merged_into_person_id: null
    - claim:
        id: c_BXqFavaLJG2IxzX5IR9GTO
        subject_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_evPMtWkxcE9dxjhsarkDVi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pnTF29JVug2wXuQMczpn9
          claim_id: c_BXqFavaLJG2IxzX5IR9GTO
          source_id: s_eeFOXzT4at4_gXX17kW0K-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201582 王子謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eeFOXzT4at4_gXX17kW0K-
            source_type: api_record
            title: 中国历代人物传记资料库：王子訓（CBDB 267623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json
            external_identifier: CBDB:267623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_evPMtWkxcE9dxjhsarkDVi
        status: active
        display_name: 王子訓
        merged_into_person_id: null
---

# 王子謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子謨 | accepted |
| birth.date | 1467年 | accepted |
| bio.summary | 王子謨（生于1467年），明人物。弘治十八年進士，籍贯淳安，入仕進士。（中国历代人物传记资料库 CBDB 201582） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aAxnpkCu394RKmhcdBzMvL | 王本宗 | accepted |
| ancestors | p_B4er96qGp4uN4mnMQC97RG | 王志善 | accepted |
| other | p_GAScAhQ4S5kNKYEH1hjeS7 | 王子謹 | accepted |
| other | p_evPMtWkxcE9dxjhsarkDVi | 王子訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 267617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json)
- [中国历代人物传记资料库：王志善（CBDB 267618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json)
- [中国历代人物传记资料库：王子謹（CBDB 267624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267624&o=json)
- [中国历代人物传记资料库：王子謨（CBDB 201582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201582&o=json)
- [中国历代人物传记资料库：王子訓（CBDB 267623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267623&o=json)
