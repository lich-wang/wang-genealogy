---
schema: wang-person/v1
id: p_QGnCAWtNEYZLe2KyDMMQFy
status: active
merged_into: null
display_name: 王金達
cbdb_id: 515672
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JHC4JV7g6kUDuFhVXshLXz
        subject_person_id: p_QGnCAWtNEYZLe2KyDMMQFy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金達，清人物。中国历代人物传记资料库（CBDB）以人物编号 515672 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_bydHfQQuCrCsPjb_KwtsBO
          claim_id: c_JHC4JV7g6kUDuFhVXshLXz
          source_id: s_z2R8E4kvRpvkWPesjPKQ5B
          stance: supports
          locator: CBDB:515672
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_z2R8E4kvRpvkWPesjPKQ5B
            source_type: api_record
            title: 中国历代人物传记资料库：王金達（CBDB 515672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515672&o=json
            external_identifier: CBDB:515672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rscayTy4wZvs4n3cQhp1i
        subject_person_id: p_QGnCAWtNEYZLe2KyDMMQFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y25P6XfccJq4Pj44nSmrN1
          claim_id: c_1rscayTy4wZvs4n3cQhp1i
          source_id: s_z2R8E4kvRpvkWPesjPKQ5B
          stance: supports
          locator: CBDB:515672
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_z2R8E4kvRpvkWPesjPKQ5B
            source_type: api_record
            title: 中国历代人物传记资料库：王金達（CBDB 515672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515672&o=json
            external_identifier: CBDB:515672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7_l3l8Gcdk4h-udDcBdQW9
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QGnCAWtNEYZLe2KyDMMQFy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tlg_0go4SC7JeFagIV-fA4
          claim_id: c_7_l3l8Gcdk4h-udDcBdQW9
          source_id: s_z2R8E4kvRpvkWPesjPKQ5B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5MbQaN6sLNicuc7FmMieJd
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王金達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王金達，清人物。中国历代人物传记资料库（CBDB）以人物编号 515672 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王金達 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5MbQaN6sLNicuc7FmMieJd | 王文錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金達（CBDB 515672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515672&o=json)
