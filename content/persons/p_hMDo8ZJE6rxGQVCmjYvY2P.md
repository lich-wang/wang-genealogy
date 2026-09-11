---
schema: wang-person/v1
id: p_hMDo8ZJE6rxGQVCmjYvY2P
status: active
merged_into: null
display_name: 王瑤湘
cbdb_id: 55872
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JwikwtXxLQNJoHVaSQXxQK
        subject_person_id: p_hMDo8ZJE6rxGQVCmjYvY2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤湘，清人物。中国历代人物传记资料库（CBDB）以人物编号 55872 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_apCP6JGyjyqBp_9vQwfrEn
          claim_id: c_JwikwtXxLQNJoHVaSQXxQK
          source_id: s_xg66BHmdb6BD5u5uLB9Zfs
          stance: supports
          locator: CBDB:55872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xg66BHmdb6BD5u5uLB9Zfs
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤湘（CBDB 55872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55872&o=json
            external_identifier: CBDB:55872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5XtrasFEMYcb1Xv3QKQRSR
        subject_person_id: p_hMDo8ZJE6rxGQVCmjYvY2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CZmaX2BZ5jx8LG2x2ZBMeF
          claim_id: c_5XtrasFEMYcb1Xv3QKQRSR
          source_id: s_xg66BHmdb6BD5u5uLB9Zfs
          stance: supports
          locator: CBDB:55872
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_xg66BHmdb6BD5u5uLB9Zfs
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤湘（CBDB 55872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55872&o=json
            external_identifier: CBDB:55872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__9a50MLvJZCAboLP62BLsg
        subject_person_id: p_ZC2N1VEG8kbjb8AKsLuiLm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hMDo8ZJE6rxGQVCmjYvY2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCum6h2YpzxKePvW_h43xg
          claim_id: c__9a50MLvJZCAboLP62BLsg
          source_id: s_xg66BHmdb6BD5u5uLB9Zfs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #636, HuWenKai #245：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZC2N1VEG8kbjb8AKsLuiLm
        status: active
        display_name: 王阜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑤湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑤湘，清人物。中国历代人物传记资料库（CBDB）以人物编号 55872 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王瑤湘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZC2N1VEG8kbjb8AKsLuiLm | 王阜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤湘（CBDB 55872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55872&o=json)
