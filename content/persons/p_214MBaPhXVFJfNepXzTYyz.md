---
schema: wang-person/v1
id: p_214MBaPhXVFJfNepXzTYyz
status: active
merged_into: null
display_name: 王庸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yBqpzAju1VYRs5TUGCgJEg
        subject_person_id: p_214MBaPhXVFJfNepXzTYyz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PReeHJmQEPSgsV9BtjPPM3
          claim_id: c_yBqpzAju1VYRs5TUGCgJEg
          source_id: s_mUbQPCz3fqEDbQuJT5Gv4x
          stance: supports
          locator: CBDB:280913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280913）
          source: &a1
            id: s_mUbQPCz3fqEDbQuJT5Gv4x
            source_type: api_record
            title: 中国历代人物传记资料库：王庸（CBDB 280913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280913&o=json
            external_identifier: CBDB:280913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3qjLb3j54Sz1ib6x1tZT2i
        subject_person_id: p_214MBaPhXVFJfNepXzTYyz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280913）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rfbUS4fkzcRZDzt9nwe6eK
          claim_id: c_3qjLb3j54Sz1ib6x1tZT2i
          source_id: s_mUbQPCz3fqEDbQuJT5Gv4x
          stance: supports
          locator: CBDB:280913
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
        id: c_b-cQjUiexm9STfzGbR58DN
        subject_person_id: p_214MBaPhXVFJfNepXzTYyz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x-LGoqe-mI57g61gtk5TRD
          claim_id: c_b-cQjUiexm9STfzGbR58DN
          source_id: s_mUbQPCz3fqEDbQuJT5Gv4x
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
  other: []
---

# 王庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庸 | accepted |
| bio.summary | 王庸，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280913） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庸（CBDB 280913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280913&o=json)
