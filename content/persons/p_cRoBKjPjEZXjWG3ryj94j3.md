---
schema: wang-person/v1
id: p_cRoBKjPjEZXjWG3ryj94j3
status: active
merged_into: null
display_name: 王子昂
cbdb_id: 154554
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SYQ3r7zQNzjyGx2Y2Fch1t
        subject_person_id: p_cRoBKjPjEZXjWG3ryj94j3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昂，唐人物。中国历代人物传记资料库（CBDB）以人物编号 154554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CaDUPoFEdH_TW6MqHEx2xp
          claim_id: c_SYQ3r7zQNzjyGx2Y2Fch1t
          source_id: s_Qbs8gJ1XwCY7ERvhtQMeN1
          stance: supports
          locator: CBDB:154554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Qbs8gJ1XwCY7ERvhtQMeN1
            source_type: api_record
            title: 中国历代人物传记资料库：王子昂（CBDB 154554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154554&o=json
            external_identifier: CBDB:154554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7vmRAHezNfQ8ycfgx9KnNz
        subject_person_id: p_cRoBKjPjEZXjWG3ryj94j3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GxwktS2JkdQ31vDJmH1ket
          claim_id: c_7vmRAHezNfQ8ycfgx9KnNz
          source_id: s_Qbs8gJ1XwCY7ERvhtQMeN1
          stance: supports
          locator: CBDB:154554
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Qbs8gJ1XwCY7ERvhtQMeN1
            source_type: api_record
            title: 中国历代人物传记资料库：王子昂（CBDB 154554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154554&o=json
            external_identifier: CBDB:154554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eY__02efDg6cvW9uDK74lF
        subject_person_id: p_W4c4cQK9DHN1AkS9oTwMLe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cRoBKjPjEZXjWG3ryj94j3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Bmli3JDAiH-HSL23GytpV
          claim_id: c_eY__02efDg6cvW9uDK74lF
          source_id: s_JsDWcrdechH2XKS9gMda6E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengwu 8：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JsDWcrdechH2XKS9gMda6E
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 141086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json
            external_identifier: CBDB:141086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W4c4cQK9DHN1AkS9oTwMLe
        status: active
        display_name: 王賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子昂，唐人物。中国历代人物传记资料库（CBDB）以人物编号 154554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W4c4cQK9DHN1AkS9oTwMLe | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 141086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141086&o=json)
- [中国历代人物传记资料库：王子昂（CBDB 154554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154554&o=json)
