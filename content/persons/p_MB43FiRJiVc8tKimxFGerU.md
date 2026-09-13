---
schema: wang-person/v1
id: p_MB43FiRJiVc8tKimxFGerU
status: active
merged_into: null
display_name: 王鏡涵
cbdb_id: 526846
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P7wUc9kLzbwMCqN4x17dkc
        subject_person_id: p_MB43FiRJiVc8tKimxFGerU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡涵，史料所见人物。本项目依据《中国历代人物传记资料库：王鏡涵（CBDB 526846）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PTYuMBtV5C9wPBaO6okWIx
          claim_id: c_P7wUc9kLzbwMCqN4x17dkc
          source_id: s_Vs4Bmy8Py7AwHLQU1X7QLx
          stance: supports
          locator: CBDB:526846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Vs4Bmy8Py7AwHLQU1X7QLx
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡涵（CBDB 526846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526846&o=json
            external_identifier: CBDB:526846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gMPG62R54gHrsLF2jvTBvN
        subject_person_id: p_MB43FiRJiVc8tKimxFGerU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡涵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yf3bbugcvC79Crrg2FfPZa
          claim_id: c_gMPG62R54gHrsLF2jvTBvN
          source_id: s_Vs4Bmy8Py7AwHLQU1X7QLx
          stance: supports
          locator: CBDB:526846
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mT5LLYApl6g5iBqkHmZYaE
        subject_person_id: p_2y1eP1nsjw8ciu9GjNsB8J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MB43FiRJiVc8tKimxFGerU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5KkY9CZ8LnRX6HouKflS9
          claim_id: c_mT5LLYApl6g5iBqkHmZYaE
          source_id: s_Vs4Bmy8Py7AwHLQU1X7QLx
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13031：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vs4Bmy8Py7AwHLQU1X7QLx
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡涵（CBDB 526846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526846&o=json
            external_identifier: CBDB:526846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2y1eP1nsjw8ciu9GjNsB8J
        status: active
        display_name: 王恩綬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鏡涵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鏡涵，史料所见人物。本项目依据《中国历代人物传记资料库：王鏡涵（CBDB 526846）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鏡涵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_2y1eP1nsjw8ciu9GjNsB8J | 王恩綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏡涵（CBDB 526846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526846&o=json)
