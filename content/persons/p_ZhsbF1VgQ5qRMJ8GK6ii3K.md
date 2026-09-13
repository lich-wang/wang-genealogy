---
schema: wang-person/v1
id: p_ZhsbF1VgQ5qRMJ8GK6ii3K
status: active
merged_into: null
display_name: 王子景
cbdb_id: 150802
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sQxRr18W9SraqaP5vdc7WA
        subject_person_id: p_ZhsbF1VgQ5qRMJ8GK6ii3K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子景，南北朝人物。籍贯中山，曾任州司馬。（中国历代人物传记资料库 CBDB 150802）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VcLGxbIYdW0dEAXt4dh8QJ
          claim_id: c_sQxRr18W9SraqaP5vdc7WA
          source_id: s_WKSR264GhdmdfLY1GzK3Zw
          stance: supports
          locator: CBDB:150802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WKSR264GhdmdfLY1GzK3Zw
            source_type: api_record
            title: 中国历代人物传记资料库：王子景（CBDB 150802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150802&o=json
            external_identifier: CBDB:150802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f15txS2zMDqveMu5Nt6AbT
        subject_person_id: p_ZhsbF1VgQ5qRMJ8GK6ii3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_j7ACmq1s8m58CrRQHwTgJn
          claim_id: c_f15txS2zMDqveMu5Nt6AbT
          source_id: s_WKSR264GhdmdfLY1GzK3Zw
          stance: supports
          locator: CBDB:150802
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 南北朝
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hedMMuYXO7fM5foDUCtyKe
        subject_person_id: p_u7a9BbAMb71iwjCXAx65Ue
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZhsbF1VgQ5qRMJ8GK6ii3K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1DgBU53J6cskVQTzpZpda
          claim_id: c_hedMMuYXO7fM5foDUCtyKe
          source_id: s_KoAj9EJxEAhaJPBAMVBaKy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KoAj9EJxEAhaJPBAMVBaKy
            source_type: api_record
            title: 中国历代人物传记资料库：王忻（CBDB 175898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175898&o=json
            external_identifier: CBDB:175898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u7a9BbAMb71iwjCXAx65Ue
        status: active
        display_name: 王忻
        merged_into_person_id: null
  children:
    - claim:
        id: c_WGkIyQM2mFSRB5ADY_Dh-S
        subject_person_id: p_ZhsbF1VgQ5qRMJ8GK6ii3K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4YBTQCHyro2Kzp6DGJmjw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOLVBUHWXLUPM4cyFkn68g
          claim_id: c_WGkIyQM2mFSRB5ADY_Dh-S
          source_id: s_X6Jpke3yM1Ne1bCyeBf5FA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X6Jpke3yM1Ne1bCyeBf5FA
            source_type: api_record
            title: 中国历代人物传记资料库：王元季（CBDB 150803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150803&o=json
            external_identifier: CBDB:150803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_M4YBTQCHyro2Kzp6DGJmjw
        status: active
        display_name: 王元季
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子景，南北朝人物。籍贯中山，曾任州司馬。（中国历代人物传记资料库 CBDB 150802） | accepted |
| name.primary | 王子景 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u7a9BbAMb71iwjCXAx65Ue | 王忻 | accepted |
| children | p_M4YBTQCHyro2Kzp6DGJmjw | 王元季 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忻（CBDB 175898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175898&o=json)
- [中国历代人物传记资料库：王元季（CBDB 150803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150803&o=json)
- [中国历代人物传记资料库：王子景（CBDB 150802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150802&o=json)
