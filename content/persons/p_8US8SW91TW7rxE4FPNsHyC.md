---
schema: wang-person/v1
id: p_8US8SW91TW7rxE4FPNsHyC
status: active
merged_into: null
display_name: 王松壑
cbdb_id: 55266
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bUQSkKmWKYenr2FSPxtz2f
        subject_person_id: p_8US8SW91TW7rxE4FPNsHyC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松壑，史料所见人物。本项目依据《中国历代人物传记资料库：王松壑（CBDB 55266）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4FWL8JWE2P48TobewisRmb
          claim_id: c_bUQSkKmWKYenr2FSPxtz2f
          source_id: s_prmt9d9zY59y4tSofL5zJ6
          stance: supports
          locator: CBDB:55266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_prmt9d9zY59y4tSofL5zJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王松壑（CBDB 55266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55266&o=json
            external_identifier: CBDB:55266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fsSWVGZPF2Q6yG7nsUAFek
        subject_person_id: p_8US8SW91TW7rxE4FPNsHyC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松壑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_64L5KWqLPYYFQFk5y4zzRG
          claim_id: c_fsSWVGZPF2Q6yG7nsUAFek
          source_id: s_prmt9d9zY59y4tSofL5zJ6
          stance: supports
          locator: CBDB:55266
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_murtpNOxzEyvFJlpqLvn0x
        subject_person_id: p_8US8SW91TW7rxE4FPNsHyC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zfkuWX4q44EzWW4hKNr3Cq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7WfO5io6bpY4X_tmLMmil5
          claim_id: c_murtpNOxzEyvFJlpqLvn0x
          source_id: s_xGUPh4o5YJt3ANc6iE7Nam
          stance: supports
          locator: CBDB 亲属：父（KinPerson 55266）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_xGUPh4o5YJt3ANc6iE7Nam
            source_type: api_record
            title: 中国历代人物传记资料库：王元禮（CBDB 55264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55264&o=json
            external_identifier: CBDB:55264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zfkuWX4q44EzWW4hKNr3Cq
        status: active
        display_name: 王元禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王松壑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松壑，史料所见人物。本项目依据《中国历代人物传记资料库：王松壑（CBDB 55266）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王松壑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zfkuWX4q44EzWW4hKNr3Cq | 王元禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松壑（CBDB 55266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55266&o=json)
- [中国历代人物传记资料库：王元禮（CBDB 55264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55264&o=json)
