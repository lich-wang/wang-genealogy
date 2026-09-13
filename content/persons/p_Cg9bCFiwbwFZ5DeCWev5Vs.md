---
schema: wang-person/v1
id: p_Cg9bCFiwbwFZ5DeCWev5Vs
status: active
merged_into: null
display_name: 王企孫
cbdb_id: 324336
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6L8GTpPq7nYia34EprRZhr
        subject_person_id: p_Cg9bCFiwbwFZ5DeCWev5Vs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企孫，史料所见人物。本项目依据《中国历代人物传记资料库：王企孫（CBDB 324336）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TUw9EQFeHax1YBaXeWuNoO
          claim_id: c_6L8GTpPq7nYia34EprRZhr
          source_id: s_rKoh5L8nub14GGEWFvvGCw
          stance: supports
          locator: CBDB:324336
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rKoh5L8nub14GGEWFvvGCw
            source_type: api_record
            title: 中国历代人物传记资料库：王企孫（CBDB 324336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324336&o=json
            external_identifier: CBDB:324336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_u6PTbZK66JipjVK9qCn7fZ
        subject_person_id: p_Cg9bCFiwbwFZ5DeCWev5Vs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王企孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QNhgRo9t8NMFgLUz1CN75w
          claim_id: c_u6PTbZK66JipjVK9qCn7fZ
          source_id: s_rKoh5L8nub14GGEWFvvGCw
          stance: supports
          locator: CBDB:324336
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_p5eF1i0-aFPGSEa-2NUTWk
        subject_person_id: p_Cg9bCFiwbwFZ5DeCWev5Vs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SVNZL8P3EB13LuNV5sxppY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QeZe-xDDnOKCXlHQGFr1F
          claim_id: c_p5eF1i0-aFPGSEa-2NUTWk
          source_id: s_rKoh5L8nub14GGEWFvvGCw
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rKoh5L8nub14GGEWFvvGCw
            source_type: api_record
            title: 中国历代人物传记资料库：王企孫（CBDB 324336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324336&o=json
            external_identifier: CBDB:324336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_SVNZL8P3EB13LuNV5sxppY
        status: active
        display_name: 王天爵
        merged_into_person_id: null
  other: []
---

# 王企孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王企孫，史料所见人物。本项目依据《中国历代人物传记资料库：王企孫（CBDB 324336）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王企孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SVNZL8P3EB13LuNV5sxppY | 王天爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王企孫（CBDB 324336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324336&o=json)
