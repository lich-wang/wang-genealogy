---
schema: wang-person/v1
id: p_qEEBgq6Bd1DkyaLq8WjEbk
status: active
merged_into: null
display_name: 王維常
cbdb_id: 415247
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HdfDP9bHPtErU414BaGzNm
        subject_person_id: p_qEEBgq6Bd1DkyaLq8WjEbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維常，明人物。曾任典史。（中国历代人物传记资料库 CBDB 415247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_syWspVlxJJ27QCAOl78rv1
          claim_id: c_HdfDP9bHPtErU414BaGzNm
          source_id: s_TLguBiqqyVoMCp3Ntib9tZ
          stance: supports
          locator: CBDB:415247
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TLguBiqqyVoMCp3Ntib9tZ
            source_type: api_record
            title: 中国历代人物传记资料库：王維常（CBDB 415247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415247&o=json
            external_identifier: CBDB:415247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:52.674Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AkAh65EgRfhs5S2wz9qd1i
        subject_person_id: p_qEEBgq6Bd1DkyaLq8WjEbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CmkCVgymuMjHZD31jH5sPZ
          claim_id: c_AkAh65EgRfhs5S2wz9qd1i
          source_id: s_TLguBiqqyVoMCp3Ntib9tZ
          stance: supports
          locator: CBDB:415247
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6101-6200）｜历史性依据：CBDB 朝代 = 明
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

# 王維常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王維常，明人物。曾任典史。（中国历代人物传记资料库 CBDB 415247） | accepted |
| name.primary | 王維常 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維常（CBDB 415247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415247&o=json)
