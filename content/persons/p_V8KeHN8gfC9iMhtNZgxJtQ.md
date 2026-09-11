---
schema: wang-person/v1
id: p_V8KeHN8gfC9iMhtNZgxJtQ
status: active
merged_into: null
display_name: 王裕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u7v9HhvsZNss8c5cQ8QS3q
        subject_person_id: p_V8KeHN8gfC9iMhtNZgxJtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AERzMLRAQRC97eFHkB8Bp5
          claim_id: c_u7v9HhvsZNss8c5cQ8QS3q
          source_id: s_EvuV6rLGsAYNNgHjfEsCKx
          stance: supports
          locator: CBDB:253209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253209）
          source: &a1
            id: s_EvuV6rLGsAYNNgHjfEsCKx
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 253209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253209&o=json
            external_identifier: CBDB:253209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_obfFvQJ9tTYsMecEYbovhF
        subject_person_id: p_V8KeHN8gfC9iMhtNZgxJtQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕，明人物。成化十四年進士，籍贯秦州衛，曾任教授。（中国历代人物传记资料库 CBDB 253209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mHsZT5fp3ke6ApkysGMihP
          claim_id: c_obfFvQJ9tTYsMecEYbovhF
          source_id: s_EvuV6rLGsAYNNgHjfEsCKx
          stance: supports
          locator: CBDB:253209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0uchbk2oyMjm0bG8fIQiQu
        subject_person_id: p_V8KeHN8gfC9iMhtNZgxJtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgI6gmTsVWLPbLzb7GdoE3
          claim_id: c_0uchbk2oyMjm0bG8fIQiQu
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DeNL8vWuD2G72jS8kGaaJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 200053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json
            external_identifier: CBDB:200053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C2E2SSj6sXsm1th4M87rCJ
        status: active
        display_name: 王存禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | 王裕，明人物。成化十四年進士，籍贯秦州衛，曾任教授。（中国历代人物传记资料库 CBDB 253209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C2E2SSj6sXsm1th4M87rCJ | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 200053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json)
- [中国历代人物传记资料库：王裕（CBDB 253209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253209&o=json)
