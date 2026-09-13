---
schema: wang-person/v1
id: p_GaiDYJbZ28sStMCpBn1qBe
status: active
merged_into: null
display_name: 王某徵
cbdb_id: 163961
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dMo3dH4WBbtNrYeYyxSpj5
        subject_person_id: p_GaiDYJbZ28sStMCpBn1qBe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某徵，史料所见人物。本项目依据《中国历代人物传记资料库：王某徵（CBDB 163961）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_2T81PoPIvsPKCFY5m9fRPK
          claim_id: c_dMo3dH4WBbtNrYeYyxSpj5
          source_id: s_VrJmLmH3gW8Bfj3Wwse6M2
          stance: supports
          locator: CBDB:163961
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VrJmLmH3gW8Bfj3Wwse6M2
            source_type: api_record
            title: 中国历代人物传记资料库：王某徵（CBDB 163961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163961&o=json
            external_identifier: CBDB:163961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q9Q7s5HmvRD4iAmFWskTUz
        subject_person_id: p_GaiDYJbZ28sStMCpBn1qBe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ah1ruHcdYV1HWPcjNvFx3p
          claim_id: c_Q9Q7s5HmvRD4iAmFWskTUz
          source_id: s_VrJmLmH3gW8Bfj3Wwse6M2
          stance: supports
          locator: CBDB:163961
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ky4ynq7s-39hY1TcSRtibP
        subject_person_id: p_GaiDYJbZ28sStMCpBn1qBe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ANeppbxTm56LA1X59e1kGK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAnR3FBpLVZMaMYyzqVRaK
          claim_id: c_Ky4ynq7s-39hY1TcSRtibP
          source_id: s_o8Pe63bQXpJ4by7h9DNdh4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan71：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o8Pe63bQXpJ4by7h9DNdh4
            source_type: api_record
            title: 中国历代人物传记资料库：王待徵（CBDB 142900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json
            external_identifier: CBDB:142900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ANeppbxTm56LA1X59e1kGK
        status: active
        display_name: 王待徵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某徵，史料所见人物。本项目依据《中国历代人物传记资料库：王某徵（CBDB 163961）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王某徵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ANeppbxTm56LA1X59e1kGK | 王待徵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王待徵（CBDB 142900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142900&o=json)
- [中国历代人物传记资料库：王某徵（CBDB 163961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163961&o=json)
