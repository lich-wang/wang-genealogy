---
schema: wang-person/v1
id: p_4RbMZf3857ddZU7cBYAPJo
status: active
merged_into: null
display_name: 王德銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XScu3Y89LbB6KXaZ1PgaaL
        subject_person_id: p_4RbMZf3857ddZU7cBYAPJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_umJc8HrQhsHDgGk2fjYxXz
          claim_id: c_XScu3Y89LbB6KXaZ1PgaaL
          source_id: s_n76emErFGqQnxbrJMiMFbg
          stance: supports
          locator: CBDB:259642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259642）
          source: &a1
            id: s_n76emErFGqQnxbrJMiMFbg
            source_type: api_record
            title: 中国历代人物传记资料库：王德銘（CBDB 259642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259642&o=json
            external_identifier: CBDB:259642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4qGF611DNtzK47WUEJBHNR
        subject_person_id: p_4RbMZf3857ddZU7cBYAPJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德銘，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E41Rkcdv0CVN6T1thJAIvL
          claim_id: c_4qGF611DNtzK47WUEJBHNR
          source_id: s_n76emErFGqQnxbrJMiMFbg
          stance: supports
          locator: CBDB:259642
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_oSzYMSljEQHTUm8uG-KVJW
        subject_person_id: p_4RbMZf3857ddZU7cBYAPJo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeuC0BgwKJRrM2_xBM2KQ2
          claim_id: c_oSzYMSljEQHTUm8uG-KVJW
          source_id: s_n76emErFGqQnxbrJMiMFbg
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rd5qTvBTthC6ZnBxJzkeri
        status: active
        display_name: 王用
        merged_into_person_id: null
  other: []
---

# 王德銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德銘 | accepted |
| bio.summary | 王德銘，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rd5qTvBTthC6ZnBxJzkeri | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德銘（CBDB 259642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259642&o=json)
