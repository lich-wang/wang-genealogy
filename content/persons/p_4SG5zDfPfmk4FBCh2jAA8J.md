---
schema: wang-person/v1
id: p_4SG5zDfPfmk4FBCh2jAA8J
status: active
merged_into: null
display_name: 王儔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2gHFTkhi4VmBwMyUCS2qi
        subject_person_id: p_4SG5zDfPfmk4FBCh2jAA8J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9NpDQZdMwuFCcu5GKgWQ8c
          claim_id: c_j2gHFTkhi4VmBwMyUCS2qi
          source_id: s_4x6CQZPrG4FtjyWhXQdq4i
          stance: supports
          locator: CBDB:322378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322378）
          source: &a1
            id: s_4x6CQZPrG4FtjyWhXQdq4i
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 322378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json
            external_identifier: CBDB:322378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVAtW3QMeWk4tJphQurTMu
        subject_person_id: p_4SG5zDfPfmk4FBCh2jAA8J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hSXBggCKyNAwJlMlNZveZL
          claim_id: c_AVAtW3QMeWk4tJphQurTMu
          source_id: s_4x6CQZPrG4FtjyWhXQdq4i
          stance: supports
          locator: CBDB:322378
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
  descendants: []
  other: []
---

# 王儔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儔 | accepted |
| bio.summary | 王儔，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儔（CBDB 322378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322378&o=json)
