---
schema: wang-person/v1
id: p_VsHER7rTMHVjNkm5jP4JHH
status: active
merged_into: null
display_name: 王服義
cbdb_id: 295251
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZPKAPDPhtRDak3YAG1LB7
        subject_person_id: p_VsHER7rTMHVjNkm5jP4JHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王服義，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 295251）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S_soY_wf-NQJL-hESD2eYc
          claim_id: c_PZPKAPDPhtRDak3YAG1LB7
          source_id: s_L7gw7vhLPWQLk5zD5Vdhdr
          stance: supports
          locator: CBDB:295251
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L7gw7vhLPWQLk5zD5Vdhdr
            source_type: api_record
            title: 中国历代人物传记资料库：王服義（CBDB 295251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295251&o=json
            external_identifier: CBDB:295251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BmcuUuNw5C3xs4Ca2w4CB
        subject_person_id: p_VsHER7rTMHVjNkm5jP4JHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王服義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RCWWnFoApM6CNqQo4DL6Zx
          claim_id: c_4BmcuUuNw5C3xs4Ca2w4CB
          source_id: s_L7gw7vhLPWQLk5zD5Vdhdr
          stance: supports
          locator: CBDB:295251
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__eYIwNGW24Z6OsUnXqby2N
        subject_person_id: p_VsHER7rTMHVjNkm5jP4JHH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJXpWUii4wf9JUN1ih3IvA
          claim_id: c__eYIwNGW24Z6OsUnXqby2N
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wFAosYYDj6D1VR7Gxa42bv
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 198620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json
            external_identifier: CBDB:198620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7XvdYNGwLHctu4cLzYQ7kr
        status: active
        display_name: 王冕
        merged_into_person_id: null
  other: []
---

# 王服義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王服義，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 295251） | accepted |
| name.primary | 王服義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7XvdYNGwLHctu4cLzYQ7kr | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王服義（CBDB 295251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295251&o=json)
- [中国历代人物传记资料库：王冕（CBDB 198620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json)
