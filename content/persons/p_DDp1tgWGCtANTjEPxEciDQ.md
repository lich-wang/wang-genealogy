---
schema: wang-person/v1
id: p_DDp1tgWGCtANTjEPxEciDQ
status: active
merged_into: null
display_name: 王世修
cbdb_id: 1873
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SbMtEcieRhx6fN8bxh3jSa
        subject_person_id: p_DDp1tgWGCtANTjEPxEciDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世修，宋人物。中国历代人物传记资料库（CBDB）以人物编号 1873 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HkeE7CuIS5nlON4g8U3M4q
          claim_id: c_SbMtEcieRhx6fN8bxh3jSa
          source_id: s_GKLbTFs9QqS2Ygi8DRo2Hm
          stance: supports
          locator: CBDB:1873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GKLbTFs9QqS2Ygi8DRo2Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王世修（CBDB 1873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1873&o=json
            external_identifier: CBDB:1873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPq4A89wXVZeTaN6wDFkid
        subject_person_id: p_DDp1tgWGCtANTjEPxEciDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Tym7ZQQEaVjQK3zTZWkPqb
          claim_id: c_jPq4A89wXVZeTaN6wDFkid
          source_id: s_GKLbTFs9QqS2Ygi8DRo2Hm
          stance: supports
          locator: CBDB:1873
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_GKLbTFs9QqS2Ygi8DRo2Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王世修（CBDB 1873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1873&o=json
            external_identifier: CBDB:1873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ztP6aouOG5HgJS9St9TI5e
        subject_person_id: p_DDp1tgWGCtANTjEPxEciDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fXCSnE4sCZL8XGScBHVxKT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uR1GHpCQ7KqWOVA2tBwktm
          claim_id: c_ztP6aouOG5HgJS9St9TI5e
          source_id: s_xpHjc9SLTB85r9T2gyP6VK
          stance: supports
          locator: 紹興十八年同年小錄，270：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xpHjc9SLTB85r9T2gyP6VK
            source_type: api_record
            title: 中国历代人物传记资料库：王東裏（CBDB 97927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97927&o=json
            external_identifier: CBDB:97927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fXCSnE4sCZL8XGScBHVxKT
        status: active
        display_name: 王東裏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世修，宋人物。中国历代人物传记资料库（CBDB）以人物编号 1873 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fXCSnE4sCZL8XGScBHVxKT | 王東裏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東裏（CBDB 97927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97927&o=json)
- [中国历代人物传记资料库：王世修（CBDB 1873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1873&o=json)
