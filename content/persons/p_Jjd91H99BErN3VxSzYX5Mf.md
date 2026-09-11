---
schema: wang-person/v1
id: p_Jjd91H99BErN3VxSzYX5Mf
status: active
merged_into: null
display_name: 王序爵
cbdb_id: 118494
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uR7hfmQ96FTQr31iGMh1gc
        subject_person_id: p_Jjd91H99BErN3VxSzYX5Mf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序爵，明人物。中国历代人物传记资料库（CBDB）以人物编号 118494 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X8IP7j4Vp5Hx8u8Pl_MCc0
          claim_id: c_uR7hfmQ96FTQr31iGMh1gc
          source_id: s_AFxQsmm6NUDNJc2sSwPbuf
          stance: supports
          locator: CBDB:118494
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_AFxQsmm6NUDNJc2sSwPbuf
            source_type: api_record
            title: 中国历代人物传记资料库：王序爵（CBDB 118494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118494&o=json
            external_identifier: CBDB:118494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ti1zUpg7xKZwL7dANdjYM4
        subject_person_id: p_Jjd91H99BErN3VxSzYX5Mf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L2neNAVjz2DixMJ55QUNJK
          claim_id: c_ti1zUpg7xKZwL7dANdjYM4
          source_id: s_AFxQsmm6NUDNJc2sSwPbuf
          stance: supports
          locator: CBDB:118494
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_AFxQsmm6NUDNJc2sSwPbuf
            source_type: api_record
            title: 中国历代人物传记资料库：王序爵（CBDB 118494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118494&o=json
            external_identifier: CBDB:118494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gYUxaskRk7hgk3QkrRkkut
        subject_person_id: p_Jjd91H99BErN3VxSzYX5Mf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JemnJzCq6PQX4QT7iLCYw9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jvsL40Y8lMvkmOW-oCuTm2
          claim_id: c_gYUxaskRk7hgk3QkrRkkut
          source_id: s_CRswh0seM7eph4OVBSo6t8
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2597：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CRswh0seM7eph4OVBSo6t8
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王序爵妻)（CBDB 134571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134571&o=json
            external_identifier: CBDB:134571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JemnJzCq6PQX4QT7iLCYw9
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王序爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王序爵，明人物。中国历代人物传记资料库（CBDB）以人物编号 118494 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王序爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JemnJzCq6PQX4QT7iLCYw9 | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王序爵妻)（CBDB 134571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134571&o=json)
- [中国历代人物传记资料库：王序爵（CBDB 118494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118494&o=json)
