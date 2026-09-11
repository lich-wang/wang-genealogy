---
schema: wang-person/v1
id: p_VRxNxJGJ49fJ6ZdRGqLVAX
status: active
merged_into: null
display_name: 王兆鳳
cbdb_id: 290831
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYnAwXDcDUFBJ5424Lk1cn
        subject_person_id: p_VRxNxJGJ49fJ6ZdRGqLVAX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鳳，明人物。中国历代人物传记资料库（CBDB）以人物编号 290831 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_cv3IvVYKqLJjMBDkbrlUyj
          claim_id: c_BYnAwXDcDUFBJ5424Lk1cn
          source_id: s_vey3PPoMqN2hXHJisK8vz1
          stance: supports
          locator: CBDB:290831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vey3PPoMqN2hXHJisK8vz1
            source_type: api_record
            title: 中国历代人物传记资料库：王兆鳳（CBDB 290831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json
            external_identifier: CBDB:290831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TM5QFK2tRsj97bZ68mc2Pc
        subject_person_id: p_VRxNxJGJ49fJ6ZdRGqLVAX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_szYGisT8pjQ5dJXNBtjvsX
          claim_id: c_TM5QFK2tRsj97bZ68mc2Pc
          source_id: s_vey3PPoMqN2hXHJisK8vz1
          stance: supports
          locator: CBDB:290831
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_vey3PPoMqN2hXHJisK8vz1
            source_type: api_record
            title: 中国历代人物传记资料库：王兆鳳（CBDB 290831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json
            external_identifier: CBDB:290831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4jwhaO2rZG0IzPB0XnJDyo
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VRxNxJGJ49fJ6ZdRGqLVAX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ly1p6r4fGBk43Av3VjX5a
          claim_id: c_4jwhaO2rZG0IzPB0XnJDyo
          source_id: s_vey3PPoMqN2hXHJisK8vz1
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王兆鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兆鳳，明人物。中国历代人物传记资料库（CBDB）以人物编号 290831 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王兆鳳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兆鳳（CBDB 290831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json)
