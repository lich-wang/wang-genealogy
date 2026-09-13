---
schema: wang-person/v1
id: p_CoUh8uj5CWroLH246QDHok
status: active
merged_into: null
display_name: 王而縉
cbdb_id: 232799
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ALBBwggP5yyQrPGBbeodxw
        subject_person_id: p_CoUh8uj5CWroLH246QDHok
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王而縉，史料所见人物。本项目依据《中国历代人物传记资料库：王而縉（CBDB 232799）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_8RWXoW_5GVqz0rSpZ25tIi
          claim_id: c_ALBBwggP5yyQrPGBbeodxw
          source_id: s_zFRHFG3ZspqhhMqJmnhMop
          stance: supports
          locator: CBDB:232799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zFRHFG3ZspqhhMqJmnhMop
            source_type: api_record
            title: 中国历代人物传记资料库：王而縉（CBDB 232799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232799&o=json
            external_identifier: CBDB:232799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_feNC97cVy5mtXV7A5LobBv
        subject_person_id: p_CoUh8uj5CWroLH246QDHok
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王而縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_REFpCtduQ6VduFAzs4G9Db
          claim_id: c_feNC97cVy5mtXV7A5LobBv
          source_id: s_zFRHFG3ZspqhhMqJmnhMop
          stance: supports
          locator: CBDB:232799
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YZme0_6I4w56b_v4hEB-op
        subject_person_id: p_CoUh8uj5CWroLH246QDHok
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_411eFGuroxg-2Blds9E_W7
          claim_id: c_YZme0_6I4w56b_v4hEB-op
          source_id: s_zFRHFG3ZspqhhMqJmnhMop
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zFRHFG3ZspqhhMqJmnhMop
            source_type: api_record
            title: 中国历代人物传记资料库：王而縉（CBDB 232799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232799&o=json
            external_identifier: CBDB:232799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DvVKW3AUxK5cCLW8rtgfB4
        status: active
        display_name: 王湯孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王而縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王而縉，史料所见人物。本项目依据《中国历代人物传记资料库：王而縉（CBDB 232799）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王而縉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DvVKW3AUxK5cCLW8rtgfB4 | 王湯孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王而縉（CBDB 232799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232799&o=json)
