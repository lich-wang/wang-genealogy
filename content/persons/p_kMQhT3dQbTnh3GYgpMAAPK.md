---
schema: wang-person/v1
id: p_kMQhT3dQbTnh3GYgpMAAPK
status: active
merged_into: null
display_name: 王保民
cbdb_id: 241172
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_meJdYrVZ15Hn4HPvNBPpYR
        subject_person_id: p_kMQhT3dQbTnh3GYgpMAAPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保民，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_d7El53OylLBIQDe1UqAFvy
          claim_id: c_meJdYrVZ15Hn4HPvNBPpYR
          source_id: s_NB6KqpJLf13vEuhMh5tFv9
          stance: supports
          locator: CBDB:241172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NB6KqpJLf13vEuhMh5tFv9
            source_type: api_record
            title: 中国历代人物传记资料库：王保民（CBDB 241172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241172&o=json
            external_identifier: CBDB:241172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_51zxkh97orM2mMyESMALLf
        subject_person_id: p_kMQhT3dQbTnh3GYgpMAAPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jjoQcauPRqKWKpLxFGGfT3
          claim_id: c_51zxkh97orM2mMyESMALLf
          source_id: s_NB6KqpJLf13vEuhMh5tFv9
          stance: supports
          locator: CBDB:241172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_lcCeMVBgveUNZzDX9eJaHT
        subject_person_id: p_kMQhT3dQbTnh3GYgpMAAPK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTSJeaAhv-aLqxJTQF2Xo1
          claim_id: c_lcCeMVBgveUNZzDX9eJaHT
          source_id: s_WNKpdkk3yi4awpd41NnU58
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WNKpdkk3yi4awpd41NnU58
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 208155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json
            external_identifier: CBDB:208155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
  other: []
---

# 王保民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保民，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241172） | accepted |
| name.primary | 王保民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保民（CBDB 241172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241172&o=json)
- [中国历代人物传记资料库：王玭（CBDB 208155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208155&o=json)
