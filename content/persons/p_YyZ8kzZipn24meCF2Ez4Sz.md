---
schema: wang-person/v1
id: p_YyZ8kzZipn24meCF2Ez4Sz
status: active
merged_into: null
display_name: 王致和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZBhwxVL3fE8foqKKoBYbdL
        subject_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzD44wwmsLwz7JDDfGGZcg
          claim_id: c_ZBhwxVL3fE8foqKKoBYbdL
          source_id: s_twKfjoBHsu3hbcApX4r5kY
          stance: supports
          locator: CBDB:212072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212072）
          source: &a1
            id: s_twKfjoBHsu3hbcApX4r5kY
            source_type: api_record
            title: 中国历代人物传记资料库：王致和（CBDB 212072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json
            external_identifier: CBDB:212072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2c9NnSWRT1zUpC8An5JWtR
        subject_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王致和，明人物。隆慶五年進士，籍贯忻州，入仕貢生: 恩貢，曾任教諭。（中国历代人物传记资料库 CBDB 212072）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7RwbxuEWaAUk6RwwXI7Oxy
          claim_id: c_2c9NnSWRT1zUpC8An5JWtR
          source_id: s_twKfjoBHsu3hbcApX4r5kY
          stance: supports
          locator: CBDB:212072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dci8iyH_uS0UvstrdPNiG7
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7EmDBXaCiNWQ6dKSXz_3s
          claim_id: c_Dci8iyH_uS0UvstrdPNiG7
          source_id: s_ZeY9oGUDS1dzUXNBGNQMcM
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王致和 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王致和 之父／母。
          source:
            id: s_ZeY9oGUDS1dzUXNBGNQMcM
            source_type: api_record
            title: 中国历代人物传记资料库：王致和（CBDB 212072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json
            external_identifier: CBDB:212072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fhHf3Ju1yjz535vtqX8da8
        status: active
        display_name: 王金
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fDHwxv-HmvLruMDSMR5jOO
        subject_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7zcb6_QwGwMC0vUKeQ5cGm
          claim_id: c_fDHwxv-HmvLruMDSMR5jOO
          source_id: s_ZeY9oGUDS1dzUXNBGNQMcM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126646 王致祥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZeY9oGUDS1dzUXNBGNQMcM
            source_type: api_record
            title: 中国历代人物传记资料库：王致和（CBDB 212072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json
            external_identifier: CBDB:212072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_txmGNUSLN748iJB41SWQzU
        status: active
        display_name: 王致祥
        merged_into_person_id: null
---

# 王致和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致和 | accepted |
| bio.summary | 王致和，明人物。隆慶五年進士，籍贯忻州，入仕貢生: 恩貢，曾任教諭。（中国历代人物传记资料库 CBDB 212072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fhHf3Ju1yjz535vtqX8da8 | 王金 | accepted |
| other | p_txmGNUSLN748iJB41SWQzU | 王致祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王致和（CBDB 212072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json)
