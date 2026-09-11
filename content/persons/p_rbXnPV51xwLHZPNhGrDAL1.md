---
schema: wang-person/v1
id: p_rbXnPV51xwLHZPNhGrDAL1
status: active
merged_into: null
display_name: 王世京
cbdb_id: 119758
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t2dsnKyhnrSCY3LCRuBkB3
        subject_person_id: p_rbXnPV51xwLHZPNhGrDAL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世京，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119758 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7EJ6SUd1zqN2t-R-X33UVE
          claim_id: c_t2dsnKyhnrSCY3LCRuBkB3
          source_id: s_g79pWQbwh5s5sw6FvH65MU
          stance: supports
          locator: CBDB:119758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g79pWQbwh5s5sw6FvH65MU
            source_type: api_record
            title: 中国历代人物传记资料库：王世京（CBDB 119758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119758&o=json
            external_identifier: CBDB:119758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KR5deYgS6DjdQV1c2DW5CN
        subject_person_id: p_rbXnPV51xwLHZPNhGrDAL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TrqaKND3UEYnJ9Qk1QE9LD
          claim_id: c_KR5deYgS6DjdQV1c2DW5CN
          source_id: s_g79pWQbwh5s5sw6FvH65MU
          stance: supports
          locator: CBDB:119758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_g79pWQbwh5s5sw6FvH65MU
            source_type: api_record
            title: 中国历代人物传记资料库：王世京（CBDB 119758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119758&o=json
            external_identifier: CBDB:119758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T5ew_rwM5BNCFjG5d22nv2
        subject_person_id: p_nTzZCoYHVAfzF7pEPWo4DQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbXnPV51xwLHZPNhGrDAL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TfW7dC0_Zd6hb6xwbkl1Jc
          claim_id: c_T5ew_rwM5BNCFjG5d22nv2
          source_id: s_g79pWQbwh5s5sw6FvH65MU
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nTzZCoYHVAfzF7pEPWo4DQ
        status: active
        display_name: 王承衎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世京，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119758 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世京 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nTzZCoYHVAfzF7pEPWo4DQ | 王承衎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世京（CBDB 119758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119758&o=json)
