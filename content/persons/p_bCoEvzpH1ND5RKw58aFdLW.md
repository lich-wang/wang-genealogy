---
schema: wang-person/v1
id: p_bCoEvzpH1ND5RKw58aFdLW
status: active
merged_into: null
display_name: 王璲良
cbdb_id: 250850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZaidfEB4dVKwCsqU7bPBdU
        subject_person_id: p_bCoEvzpH1ND5RKw58aFdLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲良，明人物。中国历代人物传记资料库（CBDB）以人物编号 250850 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vyWZSaKts6RaR2FREjgV94
          claim_id: c_ZaidfEB4dVKwCsqU7bPBdU
          source_id: s_ZpcnvHaM42upHz3A3hzkC7
          stance: supports
          locator: CBDB:250850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZpcnvHaM42upHz3A3hzkC7
            source_type: api_record
            title: 中国历代人物传记资料库：王璲良（CBDB 250850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250850&o=json
            external_identifier: CBDB:250850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1g8jpY3NytD5ke5BZq7tGq
        subject_person_id: p_bCoEvzpH1ND5RKw58aFdLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vGkg4My1HuEiWeGYvsteRQ
          claim_id: c_1g8jpY3NytD5ke5BZq7tGq
          source_id: s_ZpcnvHaM42upHz3A3hzkC7
          stance: supports
          locator: CBDB:250850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ZpcnvHaM42upHz3A3hzkC7
            source_type: api_record
            title: 中国历代人物传记资料库：王璲良（CBDB 250850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250850&o=json
            external_identifier: CBDB:250850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_59224fH-oN45zrVD6xBRWO
        subject_person_id: p_bCoEvzpH1ND5RKw58aFdLW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCWXMHUiC6tyK4PRKjtWra
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IE-GdLESSn0pxE3WuAS2Z
          claim_id: c_59224fH-oN45zrVD6xBRWO
          source_id: s_ZpcnvHaM42upHz3A3hzkC7
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCWXMHUiC6tyK4PRKjtWra
        status: active
        display_name: 王欽
        merged_into_person_id: null
  other: []
---

# 王璲良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璲良，明人物。中国历代人物传记资料库（CBDB）以人物编号 250850 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王璲良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NCWXMHUiC6tyK4PRKjtWra | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璲良（CBDB 250850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250850&o=json)
