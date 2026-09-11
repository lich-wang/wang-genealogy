---
schema: wang-person/v1
id: p_W9D533dxNGbrd8JxQH9LEx
status: active
merged_into: null
display_name: 王從長
cbdb_id: 161289
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eqtQN7vm1UpLFtYCAxXf6L
        subject_person_id: p_W9D533dxNGbrd8JxQH9LEx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從長，唐人物。中国历代人物传记资料库（CBDB）以人物编号 161289 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__cw8mEEteuVbJSZ9gVuvhR
          claim_id: c_eqtQN7vm1UpLFtYCAxXf6L
          source_id: s_QZ6V6GgK2BB52BQk2wFZVp
          stance: supports
          locator: CBDB:161289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QZ6V6GgK2BB52BQk2wFZVp
            source_type: api_record
            title: 中国历代人物传记资料库：王從長（CBDB 161289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161289&o=json
            external_identifier: CBDB:161289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NkBQJSeN372PjGhMJTQs2f
        subject_person_id: p_W9D533dxNGbrd8JxQH9LEx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SewbV3xThpzDRY2ANAFGpm
          claim_id: c_NkBQJSeN372PjGhMJTQs2f
          source_id: s_QZ6V6GgK2BB52BQk2wFZVp
          stance: supports
          locator: CBDB:161289
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_QZ6V6GgK2BB52BQk2wFZVp
            source_type: api_record
            title: 中国历代人物传记资料库：王從長（CBDB 161289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161289&o=json
            external_identifier: CBDB:161289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dtEWmMRsC_F1pkuBJ8xIB4
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W9D533dxNGbrd8JxQH9LEx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fUc1AmU9woLdhjTF0kW4MH
          claim_id: c_dtEWmMRsC_F1pkuBJ8xIB4
          source_id: s_QZ6V6GgK2BB52BQk2wFZVp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9QhSck2AYshf4nqhc8rPWy
        status: active
        display_name: 王璦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王從長，唐人物。中国历代人物传记资料库（CBDB）以人物编号 161289 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王從長 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9QhSck2AYshf4nqhc8rPWy | 王璦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從長（CBDB 161289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161289&o=json)
