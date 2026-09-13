---
schema: wang-person/v1
id: p_9ky723CbsEe2Ja71DXEc2S
status: active
merged_into: null
display_name: 王良儀
cbdb_id: 270716
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4k96hXTMFguduV4L4D3FsT
        subject_person_id: p_9ky723CbsEe2Ja71DXEc2S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良儀，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 270716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xahXtII5VyV3baPG7RM8IM
          claim_id: c_4k96hXTMFguduV4L4D3FsT
          source_id: s_15zNP2BopDEZT6N8GQj2QL
          stance: supports
          locator: CBDB:270716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_15zNP2BopDEZT6N8GQj2QL
            source_type: api_record
            title: 中国历代人物传记资料库：王良儀（CBDB 270716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270716&o=json
            external_identifier: CBDB:270716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2iC2hb4uT7TiX5jzQ8jsV
        subject_person_id: p_9ky723CbsEe2Ja71DXEc2S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Eyf6esQyPrPBM7KaBHuV82
          claim_id: c_q2iC2hb4uT7TiX5jzQ8jsV
          source_id: s_15zNP2BopDEZT6N8GQj2QL
          stance: supports
          locator: CBDB:270716
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
        id: c_Y24BHheN95OcMF7WxuFDhy
        subject_person_id: p_9ky723CbsEe2Ja71DXEc2S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_He4MQneKrf3FsxiWWRGQhR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tlAstdMJb2Vy8BT6HylZSz
          claim_id: c_Y24BHheN95OcMF7WxuFDhy
          source_id: s_15zNP2BopDEZT6N8GQj2QL
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_15zNP2BopDEZT6N8GQj2QL
            source_type: api_record
            title: 中国历代人物传记资料库：王良儀（CBDB 270716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270716&o=json
            external_identifier: CBDB:270716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_He4MQneKrf3FsxiWWRGQhR
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  other: []
---

# 王良儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良儀，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 270716） | accepted |
| name.primary | 王良儀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_He4MQneKrf3FsxiWWRGQhR | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良儀（CBDB 270716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270716&o=json)
