---
schema: wang-person/v1
id: p_D3z8LjQkLgGxFGKKZZcbKs
status: active
merged_into: null
display_name: 王繼仁
cbdb_id: 336281
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yzk5ZvychcdKwSKpQjCbRY
        subject_person_id: p_D3z8LjQkLgGxFGKKZZcbKs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼仁，史料所见人物。本项目依据《中国历代人物传记资料库：王繼仁（CBDB 336281）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZyWa2FjddwJNsWkkvxLQNv
          claim_id: c_yzk5ZvychcdKwSKpQjCbRY
          source_id: s_kmiMnRoJdsoDXBHEHK65D1
          stance: supports
          locator: CBDB:336281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kmiMnRoJdsoDXBHEHK65D1
            source_type: api_record
            title: 中国历代人物传记资料库：王繼仁（CBDB 336281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336281&o=json
            external_identifier: CBDB:336281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7FQxqhmUJK19XEYz8rECM
        subject_person_id: p_D3z8LjQkLgGxFGKKZZcbKs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UbhGJ4a7etdiAW1uQXKLQC
          claim_id: c_N7FQxqhmUJK19XEYz8rECM
          source_id: s_kmiMnRoJdsoDXBHEHK65D1
          stance: supports
          locator: CBDB:336281
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KN47_EdhdsszJH58Oz4Ccr
        subject_person_id: p_D3z8LjQkLgGxFGKKZZcbKs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDrcJdx3jbbcWSWKLS6y4r
          claim_id: c_KN47_EdhdsszJH58Oz4Ccr
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tbav4zYN2TCDsypeHCvKiB
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 205635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json
            external_identifier: CBDB:205635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5cJbXaZPVCfH9EZ6651kPP
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼仁，史料所见人物。本项目依据《中国历代人物传记资料库：王繼仁（CBDB 336281）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王繼仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5cJbXaZPVCfH9EZ6651kPP | 王一鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼仁（CBDB 336281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336281&o=json)
- [中国历代人物传记资料库：王一鳳（CBDB 205635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json)
