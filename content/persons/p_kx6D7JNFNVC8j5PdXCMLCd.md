---
schema: wang-person/v1
id: p_kx6D7JNFNVC8j5PdXCMLCd
status: active
merged_into: null
display_name: 王弼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gw9SvWHyBTd3HDizMTtf5W
        subject_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1MRb6hxxGraYG5YAAZtNaB
          claim_id: c_Gw9SvWHyBTd3HDizMTtf5W
          source_id: s_3phdPNKmrDAh7KYaMJKPBH
          stance: supports
          locator: CBDB:199262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199262）
          source: &a1
            id: s_3phdPNKmrDAh7KYaMJKPBH
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 199262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199262&o=json
            external_identifier: CBDB:199262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vt7FJQCFVcUXC4npGu5Y16
        subject_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBPk3gzujs1H8E8DN3i53b
          claim_id: c_Vt7FJQCFVcUXC4npGu5Y16
          source_id: s_3phdPNKmrDAh7KYaMJKPBH
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
        id: c_uEyZFPDc21jsLgbc6JQBt9
        subject_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
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
        - id: cs_UJWvoXK3fr37zF9rUNx6w4
          claim_id: c_uEyZFPDc21jsLgbc6JQBt9
          source_id: s_3phdPNKmrDAh7KYaMJKPBH
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
        id: c_ITpnk7XzQLvfEaUy4Hl2bp
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEu5WJZptgnwB1kf4-RSWe
          claim_id: c_ITpnk7XzQLvfEaUy4Hl2bp
          source_id: s_L29J7ZWCs5BAKX3wb886B7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L29J7ZWCs5BAKX3wb886B7
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 242449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json
            external_identifier: CBDB:242449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8cA72YUN4szByBjQ7DU6Qa
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_uR-fUVU_MsgNd8Gmy-v7QH
        subject_person_id: p_Sh9tmU8kPs8o5qDVmK1jM2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziOvm0E8RDq9_zGrTfInjb
          claim_id: c_uR-fUVU_MsgNd8Gmy-v7QH
          source_id: s_k7s9tgZo5bK9Vyvhdct1JT
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百三十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k7s9tgZo5bK9Vyvhdct1JT
            source_type: api_record
            title: 中国历代人物传记资料库：王先（CBDB 242447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242447&o=json
            external_identifier: CBDB:242447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Sh9tmU8kPs8o5qDVmK1jM2
        status: active
        display_name: 王先
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| birth.date | 1439年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8cA72YUN4szByBjQ7DU6Qa | 王義 | accepted |
| ancestors | p_Sh9tmU8kPs8o5qDVmK1jM2 | 王先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 199262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199262&o=json)
- [中国历代人物传记资料库：王先（CBDB 242447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242447&o=json)
- [中国历代人物传记资料库：王義（CBDB 242449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242449&o=json)
