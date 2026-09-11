---
schema: wang-person/v1
id: p_mR8y3PTiCrMPbVWSCQfHXh
status: active
merged_into: null
display_name: 王麟生
cbdb_id: 517398
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c5521C66g9M5j3N8ZFUG3R
        subject_person_id: p_mR8y3PTiCrMPbVWSCQfHXh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟生，清人物。中国历代人物传记资料库（CBDB）以人物编号 517398 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TPBxBN07SvJh2U9wCH554x
          claim_id: c_c5521C66g9M5j3N8ZFUG3R
          source_id: s_qzYKvnodXCChRimHb8mGY8
          stance: supports
          locator: CBDB:517398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_qzYKvnodXCChRimHb8mGY8
            source_type: api_record
            title: 中国历代人物传记资料库：王麟生（CBDB 517398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517398&o=json
            external_identifier: CBDB:517398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9s5K7oypK7eEMwdrEHXS5B
        subject_person_id: p_mR8y3PTiCrMPbVWSCQfHXh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ckT2NdyGRpPqNb4NMVB3ih
          claim_id: c_9s5K7oypK7eEMwdrEHXS5B
          source_id: s_qzYKvnodXCChRimHb8mGY8
          stance: supports
          locator: CBDB:517398
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_qzYKvnodXCChRimHb8mGY8
            source_type: api_record
            title: 中国历代人物传记资料库：王麟生（CBDB 517398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517398&o=json
            external_identifier: CBDB:517398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MYn4vHxMjI6aETykkIHyYR
        subject_person_id: p_moE7rJDFp2R9Aac3W4FxPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mR8y3PTiCrMPbVWSCQfHXh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xP4DtbYyOJxnHZuUxzAWEl
          claim_id: c_MYn4vHxMjI6aETykkIHyYR
          source_id: s_NUj526A7RkfPNCRdD3geau
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1863：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUj526A7RkfPNCRdD3geau
            source_type: api_record
            title: 中国历代人物传记资料库：王友亮（CBDB 58603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58603&o=json
            external_identifier: CBDB:58603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_moE7rJDFp2R9Aac3W4FxPZ
        status: active
        display_name: 王友亮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_SgGr5sUfSdp_4_FF0yconb
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mR8y3PTiCrMPbVWSCQfHXh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ZrmemaH4CWknJLi6yAUP1
          claim_id: c_SgGr5sUfSdp_4_FF0yconb
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_szZBgRZFUof6ECVtLRNSze
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 696857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json
            external_identifier: CBDB:696857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王麟生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王麟生，清人物。中国历代人物传记资料库（CBDB）以人物编号 517398 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王麟生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_moE7rJDFp2R9Aac3W4FxPZ | 王友亮 | accepted |
| ancestors | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟生（CBDB 517398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517398&o=json)
- [中国历代人物传记资料库：王文德（CBDB 696857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json)
- [中国历代人物传记资料库：王友亮（CBDB 58603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58603&o=json)
