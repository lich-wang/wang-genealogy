---
schema: wang-person/v1
id: p_tW35FhsN36ynf8W8BnfnQs
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVduWW1LHZV9ofU98KoQgC
        subject_person_id: p_tW35FhsN36ynf8W8BnfnQs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2iHnor14PUknyVJ75yRJV
          claim_id: c_bVduWW1LHZV9ofU98KoQgC
          source_id: s_UKsHMZesJqBWK67YDVgfzB
          stance: supports
          locator: CBDB:462996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462996）
          source: &a1
            id: s_UKsHMZesJqBWK67YDVgfzB
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 462996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462996&o=json
            external_identifier: CBDB:462996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ptH1orkGUK4KByvJLEh4f3
        subject_person_id: p_tW35FhsN36ynf8W8BnfnQs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，史料所见人物。本项目依据《中国历代人物传记资料库：王顯（CBDB 462996）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7fxxqbaR_k-9N5F0OLNxbf
          claim_id: c_ptH1orkGUK4KByvJLEh4f3
          source_id: s_UKsHMZesJqBWK67YDVgfzB
          stance: supports
          locator: CBDB:462996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants: []
  other: []
---

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，史料所见人物。本项目依据《中国历代人物传记资料库：王顯（CBDB 462996）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 462996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462996&o=json)
