---
schema: wang-person/v1
id: p_WgNmx4b4KuLP378oSihf2n
status: active
merged_into: null
display_name: 王堅叔
cbdb_id: 136561
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v2b9WQ9uaGM6xCtYb6yB3u
        subject_person_id: p_WgNmx4b4KuLP378oSihf2n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅叔，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136561 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_gIUsEXvXCZWuzYCHtbVVbf
          claim_id: c_v2b9WQ9uaGM6xCtYb6yB3u
          source_id: s_TebnoKKaCVGdi43Hh2fwHe
          stance: supports
          locator: CBDB:136561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TebnoKKaCVGdi43Hh2fwHe
            source_type: api_record
            title: 中国历代人物传记资料库：王堅叔（CBDB 136561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136561&o=json
            external_identifier: CBDB:136561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5qC7HSU68pVQNU2zSj6gLH
        subject_person_id: p_WgNmx4b4KuLP378oSihf2n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅叔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z9HFeeiKvWHkBf5Gwe69a6
          claim_id: c_5qC7HSU68pVQNU2zSj6gLH
          source_id: s_TebnoKKaCVGdi43Hh2fwHe
          stance: supports
          locator: CBDB:136561
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_TebnoKKaCVGdi43Hh2fwHe
            source_type: api_record
            title: 中国历代人物传记资料库：王堅叔（CBDB 136561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136561&o=json
            external_identifier: CBDB:136561
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
        id: c_k5MJeOYBoHXNybmqGWK_J5
        subject_person_id: p_WgNmx4b4KuLP378oSihf2n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kcQYXAtAdx71RQEhXoKNPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2OrPN-t_yhl_aUUyDdtdj
          claim_id: c_k5MJeOYBoHXNybmqGWK_J5
          source_id: s_QU6wNA5nA6pBKS62D28qrg
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QU6wNA5nA6pBKS62D28qrg
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 38015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json
            external_identifier: CBDB:38015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kcQYXAtAdx71RQEhXoKNPK
        status: active
        display_name: 王剛中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堅叔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堅叔，宋人物。中国历代人物传记资料库（CBDB）以人物编号 136561 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王堅叔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kcQYXAtAdx71RQEhXoKNPK | 王剛中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 38015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json)
- [中国历代人物传记资料库：王堅叔（CBDB 136561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136561&o=json)
