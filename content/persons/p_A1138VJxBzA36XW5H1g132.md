---
schema: wang-person/v1
id: p_A1138VJxBzA36XW5H1g132
status: active
merged_into: null
display_name: 王與定
cbdb_id: 136385
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RRc31BRDr6i19NPuSeajM
        subject_person_id: p_A1138VJxBzA36XW5H1g132
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與定，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136385 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aSqPo_292G5LtVj6VsU8_2
          claim_id: c_2RRc31BRDr6i19NPuSeajM
          source_id: s_5NHALq2Au71rT3pst7p4PD
          stance: supports
          locator: CBDB:136385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_5NHALq2Au71rT3pst7p4PD
            source_type: api_record
            title: 中国历代人物传记资料库：王與定（CBDB 136385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136385&o=json
            external_identifier: CBDB:136385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3EJTcpEJgaeoGs3qNLAKY
        subject_person_id: p_A1138VJxBzA36XW5H1g132
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_97WzPfC5gJLwXPSvJfwAwA
          claim_id: c_K3EJTcpEJgaeoGs3qNLAKY
          source_id: s_5NHALq2Au71rT3pst7p4PD
          stance: supports
          locator: CBDB:136385
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_5NHALq2Au71rT3pst7p4PD
            source_type: api_record
            title: 中国历代人物传记资料库：王與定（CBDB 136385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136385&o=json
            external_identifier: CBDB:136385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Kzf77WNXFXbBgVdUH1kxrZ
        subject_person_id: p_A1138VJxBzA36XW5H1g132
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56uyEnAkJaHCKdt6ziQAbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hwAYjDsWjzoXyoj7LMMLA3
          claim_id: c_Kzf77WNXFXbBgVdUH1kxrZ
          source_id: s_CZd8TEaokZWVhzuyKovVdC
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CZd8TEaokZWVhzuyKovVdC
            source_type: api_record
            title: 中国历代人物传记资料库：王里（CBDB 12912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json
            external_identifier: CBDB:12912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56uyEnAkJaHCKdt6ziQAbm
        status: active
        display_name: 王里
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LCeJG9RlpuW8NBsi5eGaFT
        subject_person_id: p_kKgEpvLxasvW2i8pMhrp8K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A1138VJxBzA36XW5H1g132
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_paeJWKzYgvCjjHYdQ0ylg2
          claim_id: c_LCeJG9RlpuW8NBsi5eGaFT
          source_id: s_M5AwJ11DD4gg3rQv13t8w8
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M5AwJ11DD4gg3rQv13t8w8
            source_type: api_record
            title: 中国历代人物传记资料库：王贄（CBDB 137840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137840&o=json
            external_identifier: CBDB:137840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kKgEpvLxasvW2i8pMhrp8K
        status: active
        display_name: 王贄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王與定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與定，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136385 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王與定 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_56uyEnAkJaHCKdt6ziQAbm | 王里 | accepted |
| ancestors | p_kKgEpvLxasvW2i8pMhrp8K | 王贄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王里（CBDB 12912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12912&o=json)
- [中国历代人物传记资料库：王與定（CBDB 136385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136385&o=json)
- [中国历代人物传记资料库：王贄（CBDB 137840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137840&o=json)
