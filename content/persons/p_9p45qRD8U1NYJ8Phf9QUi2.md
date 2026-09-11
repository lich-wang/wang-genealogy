---
schema: wang-person/v1
id: p_9p45qRD8U1NYJ8Phf9QUi2
status: active
merged_into: null
display_name: 王時熙
cbdb_id: 126654
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gCEcN85ZZsLtz7oKBDyWai
        subject_person_id: p_9p45qRD8U1NYJ8Phf9QUi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時熙，明人物。中国历代人物传记资料库（CBDB）以人物编号 126654 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_KY9g3cx-tHYDdEtKspqeAs
          claim_id: c_gCEcN85ZZsLtz7oKBDyWai
          source_id: s_mx4fqLyL3Eg6QF4dPoMTYc
          stance: supports
          locator: CBDB:126654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_mx4fqLyL3Eg6QF4dPoMTYc
            source_type: api_record
            title: 中国历代人物传记资料库：王時熙（CBDB 126654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126654&o=json
            external_identifier: CBDB:126654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3JWtxdBGyd2M5ejuAwz7qC
        subject_person_id: p_9p45qRD8U1NYJ8Phf9QUi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_38moBfBqR3gZ8SdMSWf5o5
          claim_id: c_3JWtxdBGyd2M5ejuAwz7qC
          source_id: s_mx4fqLyL3Eg6QF4dPoMTYc
          stance: supports
          locator: CBDB:126654
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_mx4fqLyL3Eg6QF4dPoMTYc
            source_type: api_record
            title: 中国历代人物传记资料库：王時熙（CBDB 126654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126654&o=json
            external_identifier: CBDB:126654
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
        id: c_KstbcDcYHAaU4DdQCRqygA
        subject_person_id: p_9p45qRD8U1NYJ8Phf9QUi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_41cPwgbnn5cuUAp7Ze11KG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2g_2J5qXdz9xftArZEeRO-
          claim_id: c_KstbcDcYHAaU4DdQCRqygA
          source_id: s_zrq62YGGayCQXGMmSub9RY
          stance: supports
          locator: 小腆紀傳:六十五卷：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zrq62YGGayCQXGMmSub9RY
            source_type: api_record
            title: 中国历代人物传记资料库：王猷定（CBDB 69402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69402&o=json
            external_identifier: CBDB:69402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_41cPwgbnn5cuUAp7Ze11KG
        status: active
        display_name: 王猷定
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時熙，明人物。中国历代人物传记资料库（CBDB）以人物编号 126654 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王時熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_41cPwgbnn5cuUAp7Ze11KG | 王猷定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時熙（CBDB 126654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126654&o=json)
- [中国历代人物传记资料库：王猷定（CBDB 69402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69402&o=json)
