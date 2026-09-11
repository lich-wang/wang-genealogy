---
schema: wang-person/v1
id: p_QvFi1p7xLJZTbb1KrvtENM
status: active
merged_into: null
display_name: 王元玼
cbdb_id: 152400
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9y6i51Vm1GiQ1SxVjUFw5
        subject_person_id: p_QvFi1p7xLJZTbb1KrvtENM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元玼，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9Ppx9OP62biF-cepARyGeu
          claim_id: c_g9y6i51Vm1GiQ1SxVjUFw5
          source_id: s_gjaoViq2wd9dsvUGPQbzd9
          stance: supports
          locator: CBDB:152400
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_gjaoViq2wd9dsvUGPQbzd9
            source_type: api_record
            title: 中国历代人物传记资料库：王元玼（CBDB 152400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152400&o=json
            external_identifier: CBDB:152400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X3Gom7947rBu9k52SxDSGT
        subject_person_id: p_QvFi1p7xLJZTbb1KrvtENM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元玼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kQywHLPWwEdVPGfenVoouk
          claim_id: c_X3Gom7947rBu9k52SxDSGT
          source_id: s_gjaoViq2wd9dsvUGPQbzd9
          stance: supports
          locator: CBDB:152400
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_gjaoViq2wd9dsvUGPQbzd9
            source_type: api_record
            title: 中国历代人物传记资料库：王元玼（CBDB 152400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152400&o=json
            external_identifier: CBDB:152400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_44xC5CAUjwBCIAwuJmDynS
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QvFi1p7xLJZTbb1KrvtENM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYrb1HVBfeCW9lbSGJFM9x
          claim_id: c_44xC5CAUjwBCIAwuJmDynS
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcviPY7mVXpgS4JqnPVLWr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 140514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json
            external_identifier: CBDB:140514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H5XJ9wsBqaUG7iLGVt5LMg
        status: active
        display_name: 王崇禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元玼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元玼，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152400 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元玼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H5XJ9wsBqaUG7iLGVt5LMg | 王崇禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇禮（CBDB 140514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json)
- [中国历代人物传记资料库：王元玼（CBDB 152400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152400&o=json)
