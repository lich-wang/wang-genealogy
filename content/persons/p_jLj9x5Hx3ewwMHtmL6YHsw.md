---
schema: wang-person/v1
id: p_jLj9x5Hx3ewwMHtmL6YHsw
status: active
merged_into: null
display_name: 王見三
cbdb_id: 521769
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CqM9XKMidBE2yxuBtB4gCF
        subject_person_id: p_jLj9x5Hx3ewwMHtmL6YHsw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見三，史料所见人物。本项目依据《中国历代人物传记资料库：王見三（CBDB 521769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_GJY39e5W5I5Mw3M1Kcw0qy
          claim_id: c_CqM9XKMidBE2yxuBtB4gCF
          source_id: s_vQAmS5oWkX1nw6LCUXw5sA
          stance: supports
          locator: CBDB:521769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vQAmS5oWkX1nw6LCUXw5sA
            source_type: api_record
            title: 中国历代人物传记资料库：王見三（CBDB 521769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521769&o=json
            external_identifier: CBDB:521769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pDXCwqr4mZ13MWb3Z75Q9U
        subject_person_id: p_jLj9x5Hx3ewwMHtmL6YHsw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YKfHsBGfLfEdVjZgKQXFef
          claim_id: c_pDXCwqr4mZ13MWb3Z75Q9U
          source_id: s_vQAmS5oWkX1nw6LCUXw5sA
          stance: supports
          locator: CBDB:521769
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DVxwapXnBaD3Vl3UvzhelX
        subject_person_id: p_xNxqWv9Hmn4hXrvNdwjCoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLj9x5Hx3ewwMHtmL6YHsw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XC81G-tig-RIEKNttfBZ-7
          claim_id: c_DVxwapXnBaD3Vl3UvzhelX
          source_id: s_FvitfWSLd4NM6p1mWGEoTJ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8721：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FvitfWSLd4NM6p1mWGEoTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王有齡（CBDB 65298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65298&o=json
            external_identifier: CBDB:65298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xNxqWv9Hmn4hXrvNdwjCoG
        status: active
        display_name: 王有齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王見三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王見三，史料所见人物。本项目依据《中国历代人物传记资料库：王見三（CBDB 521769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王見三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xNxqWv9Hmn4hXrvNdwjCoG | 王有齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王見三（CBDB 521769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521769&o=json)
- [中国历代人物传记资料库：王有齡（CBDB 65298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65298&o=json)
