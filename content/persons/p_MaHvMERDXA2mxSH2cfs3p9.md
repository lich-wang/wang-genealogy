---
schema: wang-person/v1
id: p_MaHvMERDXA2mxSH2cfs3p9
status: active
merged_into: null
display_name: 王義實
cbdb_id: 296431
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eT1tDeBRHEAo1sAvGQut6W
        subject_person_id: p_MaHvMERDXA2mxSH2cfs3p9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義實，史料所见人物。本项目依据《中国历代人物传记资料库：王義實（CBDB 296431）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_9eQIZGrRcYOXp-8l446U40
          claim_id: c_eT1tDeBRHEAo1sAvGQut6W
          source_id: s_hhGtGqkifGCyQAME5wiGXB
          stance: supports
          locator: CBDB:296431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hhGtGqkifGCyQAME5wiGXB
            source_type: api_record
            title: 中国历代人物传记资料库：王義實（CBDB 296431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296431&o=json
            external_identifier: CBDB:296431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_En7AV6WaB8Ac1obyQFMWN9
        subject_person_id: p_MaHvMERDXA2mxSH2cfs3p9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ctwyLJ3eAS3XmjW4cGruqN
          claim_id: c_En7AV6WaB8Ac1obyQFMWN9
          source_id: s_hhGtGqkifGCyQAME5wiGXB
          stance: supports
          locator: CBDB:296431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_F3TMx1RaMTky9hx1EkEbtf
        subject_person_id: p_MaHvMERDXA2mxSH2cfs3p9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Va27aZRgdi5W8FWJiWP4zt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7rucmnocsBN9bAPlBj7UE
          claim_id: c_F3TMx1RaMTky9hx1EkEbtf
          source_id: s_hRCDgLQBmdUDEyE1cofkQA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第五十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hRCDgLQBmdUDEyE1cofkQA
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 198163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json
            external_identifier: CBDB:198163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Va27aZRgdi5W8FWJiWP4zt
        status: active
        display_name: 王琳
        merged_into_person_id: null
  other: []
---

# 王義實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王義實，史料所见人物。本项目依据《中国历代人物传记资料库：王義實（CBDB 296431）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王義實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Va27aZRgdi5W8FWJiWP4zt | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 198163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198163&o=json)
- [中国历代人物传记资料库：王義實（CBDB 296431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296431&o=json)
