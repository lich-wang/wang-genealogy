---
schema: wang-person/v1
id: p_5cv9NCtG3iqJGamGiZ5ED9
status: active
merged_into: null
display_name: 王六娘
cbdb_id: 167695
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YhQQVGgJTyuxu9DeNjueaf
        subject_person_id: p_5cv9NCtG3iqJGamGiZ5ED9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六娘，史料所见人物。本项目依据《中国历代人物传记资料库：王六娘（CBDB 167695）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_AZLcPh--Ad64nitwZqPmBB
          claim_id: c_YhQQVGgJTyuxu9DeNjueaf
          source_id: s_RTqVmPSPEVNjWsozSa5FEZ
          stance: supports
          locator: CBDB:167695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RTqVmPSPEVNjWsozSa5FEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王六娘（CBDB 167695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167695&o=json
            external_identifier: CBDB:167695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HAeeZDBFwMbeRQKV2Kqg6e
        subject_person_id: p_5cv9NCtG3iqJGamGiZ5ED9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rZWWteg6Gomq4LJV3KDvg1
          claim_id: c_HAeeZDBFwMbeRQKV2Kqg6e
          source_id: s_RTqVmPSPEVNjWsozSa5FEZ
          stance: supports
          locator: CBDB:167695
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k8KFatK8SNy4gWU7Q7ULWL
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cv9NCtG3iqJGamGiZ5ED9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tt33Ln4VQ5SW10uDzSW20N
          claim_id: c_k8KFatK8SNy4gWU7Q7ULWL
          source_id: s_RTqVmPSPEVNjWsozSa5FEZ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RTqVmPSPEVNjWsozSa5FEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王六娘（CBDB 167695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167695&o=json
            external_identifier: CBDB:167695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王六娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王六娘，史料所见人物。本项目依据《中国历代人物传记资料库：王六娘（CBDB 167695）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王六娘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王六娘（CBDB 167695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167695&o=json)
