---
schema: wang-person/v1
id: p_NMWVKSGm6E2DsVJoSMaM6W
status: active
merged_into: null
display_name: 王汝平
cbdb_id: 16687
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VCiRshgsBDqjUtPFG5f6gk
        subject_person_id: p_NMWVKSGm6E2DsVJoSMaM6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝平，宋人物。中国历代人物传记资料库（CBDB）以人物编号 16687 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lssdolqb_CMtlcqnu_vRoY
          claim_id: c_VCiRshgsBDqjUtPFG5f6gk
          source_id: s_PxEAR1VX6PFDXki4rD7dJn
          stance: supports
          locator: CBDB:16687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_PxEAR1VX6PFDXki4rD7dJn
            source_type: api_record
            title: 中国历代人物传记资料库：王汝平（CBDB 16687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16687&o=json
            external_identifier: CBDB:16687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mhbGpn3ndHU3ErgrZ4GwhP
        subject_person_id: p_NMWVKSGm6E2DsVJoSMaM6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d6dvK3HboYt7vRjavUnAqG
          claim_id: c_mhbGpn3ndHU3ErgrZ4GwhP
          source_id: s_PxEAR1VX6PFDXki4rD7dJn
          stance: supports
          locator: CBDB:16687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_PxEAR1VX6PFDXki4rD7dJn
            source_type: api_record
            title: 中国历代人物传记资料库：王汝平（CBDB 16687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16687&o=json
            external_identifier: CBDB:16687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0pQ3QvmITuv7UEMSjX8fra
        subject_person_id: p_NMWVKSGm6E2DsVJoSMaM6W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HJ3wsmqgAjiXeZYuaSpD4x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TxlBEcfIVh2TtsMSHz33m2
          claim_id: c_0pQ3QvmITuv7UEMSjX8fra
          source_id: s_q8JRCYseg3wBsdEsA2hBBi
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1079;1080：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q8JRCYseg3wBsdEsA2hBBi
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 16689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16689&o=json
            external_identifier: CBDB:16689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HJ3wsmqgAjiXeZYuaSpD4x
        status: active
        display_name: 王愈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝平，宋人物。中国历代人物传记资料库（CBDB）以人物编号 16687 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王汝平 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HJ3wsmqgAjiXeZYuaSpD4x | 王愈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝平（CBDB 16687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16687&o=json)
- [中国历代人物传记资料库：王愈（CBDB 16689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16689&o=json)
