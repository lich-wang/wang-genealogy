---
schema: wang-person/v1
id: p_HBetaJRtzBcDVZP83F84Xv
status: active
merged_into: null
display_name: 王稷時
cbdb_id: 265190
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPBb7MJMLH7C6Ymiq11x4j
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷時，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265190）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vgxz5tWphdR67iqYC8EkcV
          claim_id: c_gPBb7MJMLH7C6Ymiq11x4j
          source_id: s_RpnrzvCG7r9s79DTnUzPaZ
          stance: supports
          locator: CBDB:265190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RpnrzvCG7r9s79DTnUzPaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王稷時（CBDB 265190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265190&o=json
            external_identifier: CBDB:265190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6dhPZtGDPb74TNh7P63A5
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w2k1zwwCCMLFaGtLx7XiLG
          claim_id: c_f6dhPZtGDPb74TNh7P63A5
          source_id: s_RpnrzvCG7r9s79DTnUzPaZ
          stance: supports
          locator: CBDB:265190
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_J1oCx30o7_wcO0ZPvuqo1U
        subject_person_id: p_HBetaJRtzBcDVZP83F84Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cF1tS83LboioMzgPkBhT2W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6YkpbBiLPcLYgQhxZikE0V
          claim_id: c_J1oCx30o7_wcO0ZPvuqo1U
          source_id: s_ycBjaLSCwSA1EL2RDVdTj2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ycBjaLSCwSA1EL2RDVdTj2
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 200963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json
            external_identifier: CBDB:200963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cF1tS83LboioMzgPkBhT2W
        status: active
        display_name: 王選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稷時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稷時，明人物。弘治六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 265190） | accepted |
| name.primary | 王稷時 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cF1tS83LboioMzgPkBhT2W | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷時（CBDB 265190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265190&o=json)
- [中国历代人物传记资料库：王選（CBDB 200963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200963&o=json)
