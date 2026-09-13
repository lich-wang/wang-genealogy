---
schema: wang-person/v1
id: p_9nbVx1Fhdv4jLZaXCCiW8z
status: active
merged_into: null
display_name: 王遵誨
cbdb_id: 45706
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FVS59sU14y1abn4tPQ1xHW
        subject_person_id: p_9nbVx1Fhdv4jLZaXCCiW8z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵誨，史料所见人物。本项目依据《中国历代人物传记资料库：王遵誨（CBDB 45706）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zEb3k2RI8PJsD4WIaSMefM
          claim_id: c_FVS59sU14y1abn4tPQ1xHW
          source_id: s_9pPGNUSJq4f265yCfrCcpq
          stance: supports
          locator: CBDB:45706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9pPGNUSJq4f265yCfrCcpq
            source_type: api_record
            title: 中国历代人物传记资料库：王遵誨（CBDB 45706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45706&o=json
            external_identifier: CBDB:45706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZHTX5HAUVcAHKwigDb3nd
        subject_person_id: p_9nbVx1Fhdv4jLZaXCCiW8z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LyBLsWrM4v9VvLdN1uP88U
          claim_id: c_sZHTX5HAUVcAHKwigDb3nd
          source_id: s_9pPGNUSJq4f265yCfrCcpq
          stance: supports
          locator: CBDB:45706
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_woJVql3S_3kDsB42hKzdsd
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9nbVx1Fhdv4jLZaXCCiW8z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ckpkKymxJJ9ZHNFwtRFAQ
          claim_id: c_woJVql3S_3kDsB42hKzdsd
          source_id: s_9pPGNUSJq4f265yCfrCcpq
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9pPGNUSJq4f265yCfrCcpq
            source_type: api_record
            title: 中国历代人物传记资料库：王遵誨（CBDB 45706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45706&o=json
            external_identifier: CBDB:45706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vwcVcqrGAsMahMr49PPDye
        status: active
        display_name: 王繼英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵誨，史料所见人物。本项目依据《中国历代人物传记资料库：王遵誨（CBDB 45706）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王遵誨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vwcVcqrGAsMahMr49PPDye | 王繼英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵誨（CBDB 45706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45706&o=json)
