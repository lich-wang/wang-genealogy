---
schema: wang-person/v1
id: p_bqruncWVzwaR1YP4ct9bDy
status: active
merged_into: null
display_name: 王像
cbdb_id: 219510
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KtCVUktMCtJi8mAfex47Y9
        subject_person_id: p_bqruncWVzwaR1YP4ct9bDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王像，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 219510）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_StfSHEIEfNFswSqTAhBIxF
          claim_id: c_KtCVUktMCtJi8mAfex47Y9
          source_id: s_13vWpAhMkWELSTUR5oEyvF
          stance: supports
          locator: CBDB:219510
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_13vWpAhMkWELSTUR5oEyvF
            source_type: api_record
            title: 中国历代人物传记资料库：王像（CBDB 219510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219510&o=json
            external_identifier: CBDB:219510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZFZbPTMMp1osmyBk75sM5w
        subject_person_id: p_bqruncWVzwaR1YP4ct9bDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王像
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hf63U1d7xz7QL189jEDNEs
          claim_id: c_ZFZbPTMMp1osmyBk75sM5w
          source_id: s_13vWpAhMkWELSTUR5oEyvF
          stance: supports
          locator: CBDB:219510
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_P8gEfUFA1-6VX3HgJA7evC
        subject_person_id: p_bqruncWVzwaR1YP4ct9bDy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TEYvtaRNz7eTYDE23W5t5H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6hvY3S-Rn_sr-Js-xI3yKV
          claim_id: c_P8gEfUFA1-6VX3HgJA7evC
          source_id: s_13vWpAhMkWELSTUR5oEyvF
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_13vWpAhMkWELSTUR5oEyvF
            source_type: api_record
            title: 中国历代人物传记资料库：王像（CBDB 219510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219510&o=json
            external_identifier: CBDB:219510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TEYvtaRNz7eTYDE23W5t5H
        status: active
        display_name: 王守素
        merged_into_person_id: null
  other: []
---

# 王像

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王像，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 219510） | accepted |
| name.primary | 王像 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TEYvtaRNz7eTYDE23W5t5H | 王守素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王像（CBDB 219510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219510&o=json)
