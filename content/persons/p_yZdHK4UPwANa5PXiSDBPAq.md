---
schema: wang-person/v1
id: p_yZdHK4UPwANa5PXiSDBPAq
status: active
merged_into: null
display_name: 王銘慎
cbdb_id: 517409
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o3Dj7CRgMrDuyXTbyXLRiE
        subject_person_id: p_yZdHK4UPwANa5PXiSDBPAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘慎，清人物。中国历代人物传记资料库（CBDB）以人物编号 517409 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_YgslI2PxefdDqn0vvVA4hX
          claim_id: c_o3Dj7CRgMrDuyXTbyXLRiE
          source_id: s_8nYhoEh1vCpxcNFdbMq5wV
          stance: supports
          locator: CBDB:517409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8nYhoEh1vCpxcNFdbMq5wV
            source_type: api_record
            title: 中国历代人物传记资料库：王銘慎（CBDB 517409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517409&o=json
            external_identifier: CBDB:517409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_673yPXrTmgJaC16YF9VqS4
        subject_person_id: p_yZdHK4UPwANa5PXiSDBPAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘慎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MyDcYifu5pcVMHbk7yAqnp
          claim_id: c_673yPXrTmgJaC16YF9VqS4
          source_id: s_8nYhoEh1vCpxcNFdbMq5wV
          stance: supports
          locator: CBDB:517409
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_8nYhoEh1vCpxcNFdbMq5wV
            source_type: api_record
            title: 中国历代人物传记资料库：王銘慎（CBDB 517409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517409&o=json
            external_identifier: CBDB:517409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qu9STn0AJaxr4pW0sfo8Hi
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yZdHK4UPwANa5PXiSDBPAq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rhaxjMxkk9CjyLPsS9r9G
          claim_id: c_qu9STn0AJaxr4pW0sfo8Hi
          source_id: s_FU1VmgaFchy2vPp6w3C66B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1870：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FU1VmgaFchy2vPp6w3C66B
            source_type: api_record
            title: 中国历代人物传记资料库：王茂蔭（CBDB 58609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json
            external_identifier: CBDB:58609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yEQbCpPbZgLz7LGDngBr9
        status: active
        display_name: 王茂蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銘慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銘慎，清人物。中国历代人物传记资料库（CBDB）以人物编号 517409 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王銘慎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6yEQbCpPbZgLz7LGDngBr9 | 王茂蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂蔭（CBDB 58609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json)
- [中国历代人物传记资料库：王銘慎（CBDB 517409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517409&o=json)
