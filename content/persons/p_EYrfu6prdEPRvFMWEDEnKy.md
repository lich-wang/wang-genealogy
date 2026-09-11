---
schema: wang-person/v1
id: p_EYrfu6prdEPRvFMWEDEnKy
status: active
merged_into: null
display_name: 王朗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLCHEdV5Ds8eucU5HrEF4m
        subject_person_id: p_EYrfu6prdEPRvFMWEDEnKy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7geQp77TFxWk4e2b5hQ19k
          claim_id: c_WLCHEdV5Ds8eucU5HrEF4m
          source_id: s_A7M1WnEfVBk5R5fbsCbuZs
          stance: supports
          locator: CBDB:120455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120455）
          source: &a1
            id: s_A7M1WnEfVBk5R5fbsCbuZs
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 120455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120455&o=json
            external_identifier: CBDB:120455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EV1wCdA5pxV6kXKMhvcAep
        subject_person_id: p_EYrfu6prdEPRvFMWEDEnKy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗，史料所见人物。本项目依据《中国历代人物传记资料库：王朗（CBDB 120455）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fluoAub1BeFQ_Wjz2GZqIm
          claim_id: c_EV1wCdA5pxV6kXKMhvcAep
          source_id: s_A7M1WnEfVBk5R5fbsCbuZs
          stance: supports
          locator: CBDB:120455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZaUTgLbmmhuyiVtDvI-dk-
        subject_person_id: p_FE6i55GXzPWLVER3EtdHfo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EYrfu6prdEPRvFMWEDEnKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvNSshqeoPRv1p8A5HqjA7
          claim_id: c_ZaUTgLbmmhuyiVtDvI-dk-
          source_id: s_A7M1WnEfVBk5R5fbsCbuZs
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3548, HuWenKai #86：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FE6i55GXzPWLVER3EtdHfo
        status: active
        display_name: 王彥泓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_oyy6MOJ5mdsOs_-VKgnuPi
        subject_person_id: p_EYrfu6prdEPRvFMWEDEnKy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_v92Lfnh6nmhnJTbDdio6r9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjqPY3DbzmM3y8YciAytn0
          claim_id: c_oyy6MOJ5mdsOs_-VKgnuPi
          source_id: s__sa0XOoyKIX1I0_rRzNIVh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3548, HuWenKai #86：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__sa0XOoyKIX1I0_rRzNIVh
            source_type: api_record
            title: 中国历代人物传记资料库：秦德澄（CBDB 120464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120464&o=json
            external_identifier: CBDB:120464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v92Lfnh6nmhnJTbDdio6r9
        status: active
        display_name: 秦德澄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 | accepted |
| bio.summary | 王朗，史料所见人物。本项目依据《中国历代人物传记资料库：王朗（CBDB 120455）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FE6i55GXzPWLVER3EtdHfo | 王彥泓 | accepted |
| spouses | p_v92Lfnh6nmhnJTbDdio6r9 | 秦德澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：秦德澄（CBDB 120464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120464&o=json)
- [中国历代人物传记资料库：王朗（CBDB 120455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120455&o=json)
