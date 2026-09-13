---
schema: wang-person/v1
id: p_z5CxExuyo9Vg314B28Rnen
status: active
merged_into: null
display_name: 王祖昌
cbdb_id: 264713
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s5qvUktAw1BCRft2getkQJ
        subject_person_id: p_z5CxExuyo9Vg314B28Rnen
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖昌，史料所见人物。本项目依据《中国历代人物传记资料库：王祖昌（CBDB 264713）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_W22YSTH8pdOjJEyNVD_LZC
          claim_id: c_s5qvUktAw1BCRft2getkQJ
          source_id: s_FuKTh7xsGKR7QyRLQE4g6E
          stance: supports
          locator: CBDB:264713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FuKTh7xsGKR7QyRLQE4g6E
            source_type: api_record
            title: 中国历代人物传记资料库：王祖昌（CBDB 264713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264713&o=json
            external_identifier: CBDB:264713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3MyEoewDFgtmGZLKd3KSH
        subject_person_id: p_z5CxExuyo9Vg314B28Rnen
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uG6Kw5LPLdyhnbWFs9FEcH
          claim_id: c_i3MyEoewDFgtmGZLKd3KSH
          source_id: s_FuKTh7xsGKR7QyRLQE4g6E
          stance: supports
          locator: CBDB:264713
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_e9eXscy5USIGHOkHgdeYXa
        subject_person_id: p_z5CxExuyo9Vg314B28Rnen
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McyltdoIIq1t6cggAT8WfQ
          claim_id: c_e9eXscy5USIGHOkHgdeYXa
          source_id: s_FuKTh7xsGKR7QyRLQE4g6E
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FuKTh7xsGKR7QyRLQE4g6E
            source_type: api_record
            title: 中国历代人物传记资料库：王祖昌（CBDB 264713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264713&o=json
            external_identifier: CBDB:264713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yt7BTSHcHKsWozExAQWe78
        status: active
        display_name: 王純
        merged_into_person_id: null
  other: []
---

# 王祖昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖昌，史料所见人物。本项目依据《中国历代人物传记资料库：王祖昌（CBDB 264713）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祖昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_yt7BTSHcHKsWozExAQWe78 | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祖昌（CBDB 264713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264713&o=json)
