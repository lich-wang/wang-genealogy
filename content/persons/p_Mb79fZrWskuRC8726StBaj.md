---
schema: wang-person/v1
id: p_Mb79fZrWskuRC8726StBaj
status: active
merged_into: null
display_name: 王謝
cbdb_id: 118116
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XpJMh4mUFDe2yvQt6QEpHN
        subject_person_id: p_Mb79fZrWskuRC8726StBaj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謝，史料所见人物。本项目依据《中国历代人物传记资料库：王謝（CBDB 118116）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ifzYfTurlSeGw4Ut7HaFjj
          claim_id: c_XpJMh4mUFDe2yvQt6QEpHN
          source_id: s_UZuZZ29v7xFGJZu4ubyWgF
          stance: supports
          locator: CBDB:118116
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UZuZZ29v7xFGJZu4ubyWgF
            source_type: api_record
            title: 中国历代人物传记资料库：王謝（CBDB 118116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118116&o=json
            external_identifier: CBDB:118116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQZ63eXRo6ZwAkaBRZ2xVs
        subject_person_id: p_Mb79fZrWskuRC8726StBaj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_inGa1QJAbuXrCbnF2mAwrL
          claim_id: c_TQZ63eXRo6ZwAkaBRZ2xVs
          source_id: s_UZuZZ29v7xFGJZu4ubyWgF
          stance: supports
          locator: CBDB:118116
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OC7_QedM5KG9ju-2tYukxC
        subject_person_id: p_ZKp8y8TgyzFJLWQwkFwGZQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mb79fZrWskuRC8726StBaj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybYqHPnFv0r2EMVqkSEYVe
          claim_id: c_OC7_QedM5KG9ju-2tYukxC
          source_id: s_UZuZZ29v7xFGJZu4ubyWgF
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1940, HuWenKai #256：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZuZZ29v7xFGJZu4ubyWgF
            source_type: api_record
            title: 中国历代人物传记资料库：王謝（CBDB 118116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118116&o=json
            external_identifier: CBDB:118116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ZKp8y8TgyzFJLWQwkFwGZQ
        status: active
        display_name: 王大楏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YPjOCZAUQTnZaHDPNy4eJ3
        subject_person_id: p_Mb79fZrWskuRC8726StBaj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CsdQ6zrWrQ22LXpcHfkA8A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS6RP3aEWLzM7GPweaYQlv
          claim_id: c_YPjOCZAUQTnZaHDPNy4eJ3
          source_id: s_4RiCCl3gxBNh7ujARffik5
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1940, HuWenKai #256：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4RiCCl3gxBNh7ujARffik5
            source_type: api_record
            title: 中国历代人物传记资料库：邵淵亮（CBDB 118118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118118&o=json
            external_identifier: CBDB:118118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CsdQ6zrWrQ22LXpcHfkA8A
        status: active
        display_name: 邵淵亮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王謝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王謝，史料所见人物。本项目依据《中国历代人物传记资料库：王謝（CBDB 118116）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王謝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZKp8y8TgyzFJLWQwkFwGZQ | 王大楏 | accepted |
| spouses | p_CsdQ6zrWrQ22LXpcHfkA8A | 邵淵亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：邵淵亮（CBDB 118118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118118&o=json)
- [中国历代人物传记资料库：王謝（CBDB 118116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118116&o=json)
