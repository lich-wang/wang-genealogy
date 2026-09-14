---
schema: wang-person/v1
id: p_tRuYVQrj6CoDxdrV87C339
status: active
merged_into: null
display_name: 王國定
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdAnziGCezTACFSAgtayZJ
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1LXRDjYeDoYY1tuQR9tR28
          claim_id: c_KdAnziGCezTACFSAgtayZJ
          source_id: s_JcYY5RC8Q9nKj77uECwH77
          stance: supports
          locator: CBDB:336571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336571）
          source: &a1
            id: s_JcYY5RC8Q9nKj77uECwH77
            source_type: api_record
            title: 中国历代人物传记资料库：王國定（CBDB 336571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336571&o=json
            external_identifier: CBDB:336571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yr5XqpjP3Jf2Mr6cd1qt8A
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國定，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336571）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I8lNE6wt4_6XT7RlAe_boP
          claim_id: c_yr5XqpjP3Jf2Mr6cd1qt8A
          source_id: s_JcYY5RC8Q9nKj77uECwH77
          stance: supports
          locator: CBDB:336571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ESpwwSc74l2Ta0KbYZkmJt
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENp2zBhPwP2aKEL6iVVfT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3vOt2erKYgk4ZV7AYoVAq
          claim_id: c_ESpwwSc74l2Ta0KbYZkmJt
          source_id: s_JcYY5RC8Q9nKj77uECwH77
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ENp2zBhPwP2aKEL6iVVfT2
        status: active
        display_name: 王琢玉
        merged_into_person_id: null
    - claim:
        id: c_gSh9qamiak_u-dHEKkXRA4
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JSELY6VmM3pJUx3GZbSbNE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QbIujiUXLL0uwruf3OppN
          claim_id: c_gSh9qamiak_u-dHEKkXRA4
          source_id: s__5mrct1nb_iQIpRaMBjkx_
          stance: supports
          locator: CBDB：兄弟 王琢玉（205655）之父／母 王國定
          quotation: null
          interpretation_note: 由兄弟关系推断：王璦玉 与 王琢玉 为同胞（CBDB 记「兄」），王琢玉 之父／母即 王璦玉 之父／母。
          source:
            id: s__5mrct1nb_iQIpRaMBjkx_
            source_type: api_record
            title: 中国历代人物传记资料库：王璦玉（CBDB 336576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json
            external_identifier: CBDB:336576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JSELY6VmM3pJUx3GZbSbNE
        status: active
        display_name: 王璦玉
        merged_into_person_id: null
    - claim:
        id: c_KPe18zmtwTvHgjUNaN6qf5
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L5qMD23M7VLF6QddypfrAf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hC63VpMJ2RsWOX_v9roNdx
          claim_id: c_KPe18zmtwTvHgjUNaN6qf5
          source_id: s_KkIKpxa2ErAC0YxvsC2AfE
          stance: supports
          locator: CBDB：兄弟 王琢玉（205655）之父／母 王國定
          quotation: null
          interpretation_note: 由兄弟关系推断：王旒玉 与 王琢玉 为同胞（CBDB 记「兄」），王琢玉 之父／母即 王旒玉 之父／母。
          source:
            id: s_KkIKpxa2ErAC0YxvsC2AfE
            source_type: api_record
            title: 中国历代人物传记资料库：王旒玉（CBDB 336574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336574&o=json
            external_identifier: CBDB:336574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L5qMD23M7VLF6QddypfrAf
        status: active
        display_name: 王旒玉
        merged_into_person_id: null
    - claim:
        id: c_zx_glRMrcK5VnKYLDLcMcN
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UT7tNWyRxMM8ZHvrF86JdF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qa9XKAMv-qmGWY0gR-uTGG
          claim_id: c_zx_glRMrcK5VnKYLDLcMcN
          source_id: s_HWYuyjvF1Qyw7lBiWeIGVl
          stance: supports
          locator: CBDB：兄弟 王琢玉（205655）之父／母 王國定
          quotation: null
          interpretation_note: 由兄弟关系推断：王執玉 与 王琢玉 为同胞（CBDB 记「兄」），王琢玉 之父／母即 王執玉 之父／母。
          source:
            id: s_HWYuyjvF1Qyw7lBiWeIGVl
            source_type: api_record
            title: 中国历代人物传记资料库：王執玉（CBDB 336575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json
            external_identifier: CBDB:336575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UT7tNWyRxMM8ZHvrF86JdF
        status: active
        display_name: 王執玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國定 | accepted |
| bio.summary | 王國定，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ENp2zBhPwP2aKEL6iVVfT2 | 王琢玉 | accepted |
| children | p_JSELY6VmM3pJUx3GZbSbNE | 王璦玉 | accepted |
| children | p_L5qMD23M7VLF6QddypfrAf | 王旒玉 | accepted |
| children | p_UT7tNWyRxMM8ZHvrF86JdF | 王執玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璦玉（CBDB 336576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json)
- [中国历代人物传记资料库：王國定（CBDB 336571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336571&o=json)
- [中国历代人物传记资料库：王旒玉（CBDB 336574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336574&o=json)
- [中国历代人物传记资料库：王執玉（CBDB 336575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336575&o=json)
