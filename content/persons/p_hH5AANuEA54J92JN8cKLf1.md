---
schema: wang-person/v1
id: p_hH5AANuEA54J92JN8cKLf1
status: active
merged_into: null
display_name: 王元燮
cbdb_id: 152078
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b1a9rF29hRGRtKRCVAaWpx
        subject_person_id: p_hH5AANuEA54J92JN8cKLf1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元燮，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2J8sEvlhv1-2Q9yF1FWaRg
          claim_id: c_b1a9rF29hRGRtKRCVAaWpx
          source_id: s_sWNWtG1gwBiQLNb2CjzDi4
          stance: supports
          locator: CBDB:152078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_sWNWtG1gwBiQLNb2CjzDi4
            source_type: api_record
            title: 中国历代人物传记资料库：王元燮（CBDB 152078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152078&o=json
            external_identifier: CBDB:152078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4bJimRLRLM6QczfnVvhw8
        subject_person_id: p_hH5AANuEA54J92JN8cKLf1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EACQuHtKoMGnKxfo7knSBM
          claim_id: c_r4bJimRLRLM6QczfnVvhw8
          source_id: s_sWNWtG1gwBiQLNb2CjzDi4
          stance: supports
          locator: CBDB:152078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_sWNWtG1gwBiQLNb2CjzDi4
            source_type: api_record
            title: 中国历代人物传记资料库：王元燮（CBDB 152078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152078&o=json
            external_identifier: CBDB:152078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F6RLyyGk2pLtyk35HwRz7K
        subject_person_id: p_1nj5Vo66whrteQ2mchLsSE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hH5AANuEA54J92JN8cKLf1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8chszBtm1vaRyZlTHp7gT
          claim_id: c_F6RLyyGk2pLtyk35HwRz7K
          source_id: s_LJuHE17UufbNY26bmdjKS5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 266 YP NewEpitaphID=1838：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJuHE17UufbNY26bmdjKS5
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 140628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json
            external_identifier: CBDB:140628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1nj5Vo66whrteQ2mchLsSE
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元燮，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元燮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1nj5Vo66whrteQ2mchLsSE | 王思齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思齊（CBDB 140628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json)
- [中国历代人物传记资料库：王元燮（CBDB 152078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152078&o=json)
