---
schema: wang-person/v1
id: p_YQ1NPztzy6yb3AG9acPENM
status: active
merged_into: null
display_name: 王鉌
cbdb_id: 39049
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FBx2EHP1QGEQGLCL4TB8iV
        subject_person_id: p_YQ1NPztzy6yb3AG9acPENM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉌，宋人物。中国历代人物传记资料库（CBDB）以人物编号 39049 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_OUgInVXfCQq4RTNC3Ln3yi
          claim_id: c_FBx2EHP1QGEQGLCL4TB8iV
          source_id: s_Qj7CjT2Ct9Dc8dzHA9iJ7z
          stance: supports
          locator: CBDB:39049
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Qj7CjT2Ct9Dc8dzHA9iJ7z
            source_type: api_record
            title: 中国历代人物传记资料库：王鉌（CBDB 39049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39049&o=json
            external_identifier: CBDB:39049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aTa95gUKUs5sDQtA13c9xv
        subject_person_id: p_YQ1NPztzy6yb3AG9acPENM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Tt9jHmMjv4KXBDo74dact5
          claim_id: c_aTa95gUKUs5sDQtA13c9xv
          source_id: s_Qj7CjT2Ct9Dc8dzHA9iJ7z
          stance: supports
          locator: CBDB:39049
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_Qj7CjT2Ct9Dc8dzHA9iJ7z
            source_type: api_record
            title: 中国历代人物传记资料库：王鉌（CBDB 39049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39049&o=json
            external_identifier: CBDB:39049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FS6xOc4KB3ehnTsfJH1SNl
        subject_person_id: p_gNwTGaNMJK1Vu7DHJdjpVk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQ1NPztzy6yb3AG9acPENM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xTWSEUo0Fp8mbZ8aKQ_Mr
          claim_id: c_FS6xOc4KB3ehnTsfJH1SNl
          source_id: s_ZJBpqSHqGdRzB56cnYZxXM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1085;1086：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZJBpqSHqGdRzB56cnYZxXM
            source_type: api_record
            title: 中国历代人物传记资料库：王仁恕（CBDB 39057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39057&o=json
            external_identifier: CBDB:39057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gNwTGaNMJK1Vu7DHJdjpVk
        status: active
        display_name: 王仁恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鉌，宋人物。中国历代人物传记资料库（CBDB）以人物编号 39049 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鉌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gNwTGaNMJK1Vu7DHJdjpVk | 王仁恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉌（CBDB 39049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39049&o=json)
- [中国历代人物传记资料库：王仁恕（CBDB 39057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39057&o=json)
