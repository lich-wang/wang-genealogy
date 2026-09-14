---
schema: wang-person/v1
id: p_BGWgef2Z8E8vPL41NM62UK
status: active
merged_into: null
display_name: 王璇
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1u5S6B3JdkMkxAZqH9Q2y
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sK66b6FZSc2aUSJnKLXsAM
          claim_id: c_m1u5S6B3JdkMkxAZqH9Q2y
          source_id: s_Umd39jp26Ki6HaZcJDWFSZ
          stance: supports
          locator: CBDB:269868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269868）
          source: &a1
            id: s_Umd39jp26Ki6HaZcJDWFSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 269868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json
            external_identifier: CBDB:269868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hM3PAj341w9dK8svKYe2jE
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。弘治十五年進士，籍贯郟縣，曾任教諭。（中国历代人物传记资料库 CBDB 269868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9pHgatiuliCEM5En2rf5AZ
          claim_id: c_hM3PAj341w9dK8svKYe2jE
          source_id: s_Umd39jp26Ki6HaZcJDWFSZ
          stance: supports
          locator: CBDB:269868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_24qkfeESX_xrM-_nldnFnI
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvWjV-1_vAaeC0bmrGc0Qw
          claim_id: c_24qkfeESX_xrM-_nldnFnI
          source_id: s_Umd39jp26Ki6HaZcJDWFSZ
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ec1dckj7YLUcRUGq2Dbkdc
        status: active
        display_name: 王尚絅
        merged_into_person_id: null
    - claim:
        id: c_3Slq1C_mz-n8-bAj9f0wrp
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t86HQlPY-TWuPLrj49W2GS
          claim_id: c_3Slq1C_mz-n8-bAj9f0wrp
          source_id: s_wPhjlsuGgEPcmjoxiOMWyi
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚明 与 王尚絅 为同胞（CBDB 记「兄」），王尚絅 之父／母即 王尚明 之父／母。
          source:
            id: s_wPhjlsuGgEPcmjoxiOMWyi
            source_type: api_record
            title: 中国历代人物传记资料库：王尚明（CBDB 269875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json
            external_identifier: CBDB:269875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JkvWK4EoDBApW4LQtrVXgV
        status: active
        display_name: 王尚明
        merged_into_person_id: null
    - claim:
        id: c_mYrlBP5M9ZrL-89laQSjbS
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stAWkWKRbAZNSrmxIUeH33
          claim_id: c_mYrlBP5M9ZrL-89laQSjbS
          source_id: s_dvAoqSuIw0MPKAK4llL0Vl
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚忠 与 王尚絅 为同胞（CBDB 记「弟」），王尚絅 之父／母即 王尚忠 之父／母。
          source:
            id: s_dvAoqSuIw0MPKAK4llL0Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 269871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json
            external_identifier: CBDB:269871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NwL4A3Z1LNjwm9mt2PVtDW
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
    - claim:
        id: c_DqrxbFw6kByMiscuWJCNCK
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gKHZ5LMG5LcaxdFf9REDd4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEd5aqBua3hOSB227vTEuM
          claim_id: c_DqrxbFw6kByMiscuWJCNCK
          source_id: s_Qm04kJR6NqOwk1VleGhwpO
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚志 与 王尚絅 为同胞（CBDB 记「弟」），王尚絅 之父／母即 王尚志 之父／母。
          source:
            id: s_Qm04kJR6NqOwk1VleGhwpO
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 269874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269874&o=json
            external_identifier: CBDB:269874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gKHZ5LMG5LcaxdFf9REDd4
        status: active
        display_name: 王尚志
        merged_into_person_id: null
    - claim:
        id: c_YuNTRreu_nuCR5qsQj9Jn3
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ouA37acd4aaGEAdDoiFLUw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSrH6zb8Y9JozbXO_sT8Ik
          claim_id: c_YuNTRreu_nuCR5qsQj9Jn3
          source_id: s_4j76C1maB6PljwhBlDCPPE
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚文 与 王尚絅 为同胞（CBDB 记「弟」），王尚絅 之父／母即 王尚文 之父／母。
          source:
            id: s_4j76C1maB6PljwhBlDCPPE
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 269873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269873&o=json
            external_identifier: CBDB:269873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ouA37acd4aaGEAdDoiFLUw
        status: active
        display_name: 王尚文
        merged_into_person_id: null
    - claim:
        id: c_UaJc4bn2_a7IRHzKXPhlD8
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LYoBHT7HDos9W2Y1-mO3W-
          claim_id: c_UaJc4bn2_a7IRHzKXPhlD8
          source_id: s_F96D1dkcvOgPO8rtLQGg73
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚簡 与 王尚絅 为同胞（CBDB 记「兄」），王尚絅 之父／母即 王尚簡 之父／母。
          source:
            id: s_F96D1dkcvOgPO8rtLQGg73
            source_type: api_record
            title: 中国历代人物传记资料库：王尚簡（CBDB 269876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json
            external_identifier: CBDB:269876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zfn3sYKH5Tqqef4kMSEFmQ
        status: active
        display_name: 王尚簡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。弘治十五年進士，籍贯郟縣，曾任教諭。（中国历代人物传记资料库 CBDB 269868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ec1dckj7YLUcRUGq2Dbkdc | 王尚絅 | accepted |
| children | p_JkvWK4EoDBApW4LQtrVXgV | 王尚明 | accepted |
| children | p_NwL4A3Z1LNjwm9mt2PVtDW | 王尚忠 | accepted |
| children | p_gKHZ5LMG5LcaxdFf9REDd4 | 王尚志 | accepted |
| children | p_ouA37acd4aaGEAdDoiFLUw | 王尚文 | accepted |
| children | p_zfn3sYKH5Tqqef4kMSEFmQ | 王尚簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚簡（CBDB 269876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json)
- [中国历代人物传记资料库：王尚明（CBDB 269875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json)
- [中国历代人物传记资料库：王尚文（CBDB 269873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269873&o=json)
- [中国历代人物传记资料库：王尚志（CBDB 269874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269874&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 269871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json)
- [中国历代人物传记资料库：王璇（CBDB 269868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json)
