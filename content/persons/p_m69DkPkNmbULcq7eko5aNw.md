---
schema: wang-person/v1
id: p_m69DkPkNmbULcq7eko5aNw
status: active
merged_into: null
display_name: 王居
cbdb_id: 312136
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Ya8Sk2pUMF9eogGT1hooC
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居，史料所见人物。本项目依据《中国历代人物传记资料库：王居（CBDB 312136）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_cqLjAqD1-tHwZot0AV4b4l
          claim_id: c_7Ya8Sk2pUMF9eogGT1hooC
          source_id: s_UJAoeaY3HmhmD9gApV75WN
          stance: supports
          locator: CBDB:312136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UJAoeaY3HmhmD9gApV75WN
            source_type: api_record
            title: 中国历代人物传记资料库：王居（CBDB 312136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312136&o=json
            external_identifier: CBDB:312136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKszNu9jc1QUVxwBgsXMEw
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZvsPEh7srWSdFoj75hQZWs
          claim_id: c_rKszNu9jc1QUVxwBgsXMEw
          source_id: s_UJAoeaY3HmhmD9gApV75WN
          stance: supports
          locator: CBDB:312136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FJzoXPBVYebSlfJ2RjRL6a
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oaNDfLCNACocvS6e5dX6tR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYUETNrQkaWAq2iO-4jbmd
          claim_id: c_FJzoXPBVYebSlfJ2RjRL6a
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nr2qY755GTwgwauW1Hdu83
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 126744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json
            external_identifier: CBDB:126744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oaNDfLCNACocvS6e5dX6tR
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Tbuy1GCMEq0aui6NCGTwE-
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5N0ytlK39ubKOWY3nqlvpN
          claim_id: c_Tbuy1GCMEq0aui6NCGTwE-
          source_id: s_UJAoeaY3HmhmD9gApV75WN
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJAoeaY3HmhmD9gApV75WN
            source_type: api_record
            title: 中国历代人物传记资料库：王居（CBDB 312136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312136&o=json
            external_identifier: CBDB:312136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1FCXxHhqD3wzUFWARQDXSE
        status: active
        display_name: 王道行
        merged_into_person_id: null
  other: []
---

# 王居

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王居，史料所见人物。本项目依据《中国历代人物传记资料库：王居（CBDB 312136）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王居 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oaNDfLCNACocvS6e5dX6tR | 王鼎 | accepted |
| descendants | p_1FCXxHhqD3wzUFWARQDXSE | 王道行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 126744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json)
- [中国历代人物传记资料库：王居（CBDB 312136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312136&o=json)
