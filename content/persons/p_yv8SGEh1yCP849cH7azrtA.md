---
schema: wang-person/v1
id: p_yv8SGEh1yCP849cH7azrtA
status: active
merged_into: null
display_name: 王斯立
cbdb_id: 210112
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PEYKPqNQxvKtJ32gfcJkNk
        subject_person_id: p_yv8SGEh1yCP849cH7azrtA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斯立，史料所见人物。本项目依据《中国历代人物传记资料库：王斯立（CBDB 210112）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_BB0sssuVRwgUIP_UXdftJX
          claim_id: c_PEYKPqNQxvKtJ32gfcJkNk
          source_id: s_mPpVF1s84oEEQLkxxZzWi5
          stance: supports
          locator: CBDB:210112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mPpVF1s84oEEQLkxxZzWi5
            source_type: api_record
            title: 中国历代人物传记资料库：王斯立（CBDB 210112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210112&o=json
            external_identifier: CBDB:210112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qiwm4MYagrhHHJjw9iQXPe
        subject_person_id: p_yv8SGEh1yCP849cH7azrtA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斯立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8JgBP5Uh8i6Ls2eLBmko6N
          claim_id: c_Qiwm4MYagrhHHJjw9iQXPe
          source_id: s_mPpVF1s84oEEQLkxxZzWi5
          stance: supports
          locator: CBDB:210112
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_KoneCsjjPoA-GN7LNhWjX6
        subject_person_id: p_yv8SGEh1yCP849cH7azrtA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7SdWDzReBAAZ54EET2oaS
          claim_id: c_KoneCsjjPoA-GN7LNhWjX6
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4ni9ypkhqH9bL97APqjeXx
            source_type: api_record
            title: 中国历代人物传记资料库：王民順（CBDB 205877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json
            external_identifier: CBDB:205877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
  other: []
---

# 王斯立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王斯立，史料所见人物。本项目依据《中国历代人物传记资料库：王斯立（CBDB 210112）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王斯立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民順（CBDB 205877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json)
- [中国历代人物传记资料库：王斯立（CBDB 210112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210112&o=json)
